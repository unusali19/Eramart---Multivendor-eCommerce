import { NextResponse } from "next/server";

export const ok = (data, message = "Success") =>
  NextResponse.json({ success: true, message, data });

export const fail = (message = "Error", status = 400) =>
  NextResponse.json({ success: false, message }, { status });