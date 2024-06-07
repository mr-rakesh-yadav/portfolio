import dbConnect from "@/database/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  dbConnect();
  const ress = await request.json();
  console.log("sojoiaodns", ress);
  return NextResponse.json(
    {
      messagae: "** NextResponse **",
    },
    { status: 300 }
  );
};
