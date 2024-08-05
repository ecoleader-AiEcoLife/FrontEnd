import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { Session, SessionStrategy } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { JWT } from "next-auth/jwt";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials: {  
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const {email, password} = credentials

                try{
                    await connectMongoDB()
                    const user = await User.findOne({email})

                    if(!user){
                        throw new Error("No user found");
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password)
                    if(!passwordsMatch){
                        throw new Error("Incorrect password");

                    }

                    return user

                }catch(error){
                    console.log("Error: ", error)
                    return null;
                }
            }
        })
    ],


    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: any }) {
          if (user) {
            token.name = user.name;
            token.email = user.email;
          }
          return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
          if (token && session.user) {
            session.user.name = token.name as string;
            session.user.email = token.email as string;
          }
          return session;
        }
      },
    
      secret: process.env.NEXTAUTH_SECRET,
      pages: {
        signIn: "/login"
      }
}

const handler = NextAuth(authOptions)
export const GET = handler;
export const POST = handler;