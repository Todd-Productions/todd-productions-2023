import { NextResponse } from "next/server"

import websites from "../../../data/web/marketing-websites.json"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")
  try {
    const site = websites.samples.find((obj) => obj.slug === slug)
    return NextResponse.json(site)
  } catch (error: any) {
    return NextResponse.json({ error: "No website found" }, { status: 404 })
  }
}
