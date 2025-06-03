import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, attendance } = body;

    // Here you would typically save the RSVP to a database
    // For now, we'll just log it and return a success response
    console.log("RSVP received:", { name, email, attendance });

    return NextResponse.json(
      { message: "RSVP received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing RSVP:", error);
    return NextResponse.json(
      { message: "Error processing RSVP" },
      { status: 500 }
    );
  }
}
