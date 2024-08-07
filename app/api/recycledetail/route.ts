import { connectMongoDB } from "@/lib/mongodb"
import RecycleDetail from "@/models/recycledetail";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();

        const url = new URL(req.url);
        const title = url.searchParams.get('title');

        if (!title) {
            return NextResponse.json({ message: "Title parameter is required" }, { status: 400 });
        }

        const recycledetail = await RecycleDetail.find({ type: title });

        return NextResponse.json({ recycledetail }, { status: 200 });
    } catch (error) {
        console.error("Error fetching recycle detail data:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching recycle detail data" },
            { status: 500 }
        );
    }
}