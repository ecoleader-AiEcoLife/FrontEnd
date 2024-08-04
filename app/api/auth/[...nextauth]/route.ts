import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { SessionStrategy } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

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
                        return null
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password)
                    if(!passwordsMatch){
                        return null
                    }

                    return user

                }catch(error){
                    console.log("Error: ", error)
                }
            }
        })
    ],

    session:{
        strategy: "jwt" as SessionStrategy
    },

    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/"
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}