import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://react-http-b8ea6-default-rtdb.firebaseio.com/promptopia.json",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
