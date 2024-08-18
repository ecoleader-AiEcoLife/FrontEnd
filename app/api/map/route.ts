import { connectMongoDB } from "@/lib/mongodb"
import Map from "@/models/map";
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();

        const map = await Map.find({})

        return NextResponse.json(map, { status: 200 });
    } catch (error) {
        console.error("Error fetching recycle detail data:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching recycle detail data" },
            { status: 500 }
        );
    }
}

