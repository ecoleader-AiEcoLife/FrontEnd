import { connectMongoDB } from "@/lib/mongodb"
import Recycle from "@/models/recycle";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();
        
        const recycles = await Recycle.find({}).select('id title imgUrl -_id');

        return NextResponse.json({ recycles }, { status: 200 });
    } catch (error) {
        console.error("Error fetching recycles:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching recycles" },
            { status: 500 }
        );
    }
}