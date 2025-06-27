import { db } from "@/utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const email = req.nextUrl.searchParams.get("email");

    if(email){
        const docref = await getDocs(query(collection(db, "PENDAFTARAN"), where("email", "==", email)));
      const data = docref.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));


      return NextResponse.json({
        message: "success",
        error: "false",
        data: data,
      });
    }

    const docref = await getDocs(collection(db, "PENDAFTARAN"));
    const data = docref.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(
      {
        message: "Data retrieved successfully",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error processing request",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
};
