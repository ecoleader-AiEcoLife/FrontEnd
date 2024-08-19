import { connectMongoDB } from "@/lib/mongodb";
import Recycle from "@/models/recycle";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();
        
        // URL에서 'type' 파라미터를 가져와 디코딩합니다.
        const url = new URL(req.url);
        const typeParam = url.searchParams.get("type");
        const type = typeParam ? decodeURIComponent(typeParam).trim() : null;

        if (type) {
            // MongoDB에서 정확히 'type' 값이 '종이류'인 데이터를 찾습니다.
            const recycle2 = await Recycle.find({ title: type});
            console.log("리사이클링2: ", recycle2);
            return NextResponse.json(recycle2, { status: 200 });
        }

        const recycle = await Recycle.find({});

        return NextResponse.json(recycle, { status: 200 });
    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching recycle data", error },
            { status: 500 }
        );
    }
}
