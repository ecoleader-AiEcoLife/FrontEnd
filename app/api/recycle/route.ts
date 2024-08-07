import { connectMongoDB } from "@/lib/mongodb"
import Recycle from "@/models/recycle";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();

        const url = new URL(req.url);
        const title = url.searchParams.get('title');

        let recycleData;
        if (title) {
            recycleData = await Recycle.findOne({ 
                title: { $regex: new RegExp(title, 'i') } 
            });
        } else {
            recycleData = await Recycle.find({});
        }

        if (!recycleData) {
            console.log("No recycle data found");
            return NextResponse.json({ message: "Recycle data not found" }, { status: 404 });
        }

        return NextResponse.json({ recycle: recycleData }, { status: 200 });
    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching recycle data", error },
            { status: 500 }
        );
    }
}