import { NextResponse } from 'next/server';
 
export async function POST(request) {
    const { userId, prompt, tag } = await request.json();

  const res = await fetch("https://react-http-b8ea6-default-rtdb.firebaseio.com/promptopia.json", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, prompt, tag }),
  });
 
  const data = await res.json();
 
  return NextResponse.json(data);
}
