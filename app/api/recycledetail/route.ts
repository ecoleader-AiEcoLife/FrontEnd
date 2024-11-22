import { connectMongoDB } from "@/lib/mongodb"
import RecycleDetail from "@/models/recycledetail";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();

        // URL에서 'type' 파라미터를 가져와 디코딩
        const url = new URL(req.url);
        const typeParam = url.searchParams.get("type");
        const type = typeParam ? decodeURIComponent(typeParam).trim() : null;

        if(type){
            const recycledetail2 = await RecycleDetail.find({ type: type});
            return NextResponse.json(recycledetail2, { status: 200 });
        }

        const recycledetail = await RecycleDetail.find({});
        return NextResponse.json(recycledetail, { status: 200 });

    } catch (error) {
        console.error("Error fetching recycle detail data:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching recycle detail data" },
            { status: 500 }
        );
    }
}