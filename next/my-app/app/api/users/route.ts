import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { pathname, searchParams, host } = req.nextUrl;
  return NextResponse.json({ name: 'Heng', pathname, searchParams, host });
}
