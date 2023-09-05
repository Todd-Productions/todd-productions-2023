import { NextResponse } from "next/server"

import websites from "../../../data/web/marketing-websites.json"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")
    const site = websites.samples.find((obj) => obj.slug === slug)
    return NextResponse.json(site)
  } catch (error) {
    return NextResponse.json("There has been an error.")
  }
}
