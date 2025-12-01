import { NextResponse } from "next/server";

export function middleware(req) {
  const userAgent = req.headers.get("user-agent") || "";

  if (userAgent.includes("Googlebot") || userAgent.includes("bingbot")) {
    return new NextResponse("Blocked", {
      status: 403,
    });
  }

  return NextResponse.next();
}
