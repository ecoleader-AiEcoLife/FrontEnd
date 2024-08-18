import { connectMongoDB } from "@/lib/mongodb"
import Board from "@/models/board";
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();

        const board = await Board.find({})

        return NextResponse.json(board, { status: 200 });
    } catch (error) {
        console.error("Error fetching recycle detail data:", error);
        return NextResponse.json(
            { message: "An error occurred while fetching recycle detail data" },
            { status: 500 }
        );
    }
}

export async function POST(req:NextRequest){
    try{
    const {id,title,body,date} = await req.json()
    console.log('출력:', id,title,body,date)

    await connectMongoDB();
    await Board.create({id, title, body, date});


    return NextResponse.json({message:"Board registered."}, {status:201})
    } catch(error){
        return NextResponse.json({message:"An error occured while Post for Board."}, {status:500})
    }
}