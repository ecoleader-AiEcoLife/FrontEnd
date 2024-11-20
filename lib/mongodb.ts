import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB is already connected");
      return;
    }

    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL is not defined in the environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

// runtime 설정 추가
export const config = {
  matcher: [
    '/board/:path*',
    '/map/:path*',
    '/chatbot/:path*'
  ],
  runtime: 'nodejs'  // 여기에 추가
}