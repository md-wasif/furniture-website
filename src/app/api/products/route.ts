import { NextResponse } from "next/server";
import sofasData from "@/data/sofasData";

export async function GET(request: Request, context: any) {
    return NextResponse.json({sofa :sofasData});
}