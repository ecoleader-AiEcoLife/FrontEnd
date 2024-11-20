import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "../lib/mongodb";
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import { User } from '@/models/user';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID || "",
      clientSecret: process.env.AUTH_GITHUB_SECRET || "",
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing credentials");
          }

          await connectMongoDB()
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("Invalid email");
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password as string,  
            user.password
          );

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name
          }
        } catch (error) {
           console.error('Auth error:', error);
           throw new Error("Login Error");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
});