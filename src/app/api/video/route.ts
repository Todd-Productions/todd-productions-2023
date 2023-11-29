import { NextResponse } from "next/server"

import commercial from "../../../data/video/commercial.json"
import drone from "../../../data/video/drone.json"
import music from "../../../data/video/music-video-production.json"
import product from "../../../data/video/product.json"
import sales from "../../../data/video/promotional-sales.json"
import training from "../../../data/video/training.json"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const cat = searchParams.get("category")
  const path = searchParams.get("path")
  try {
    let site

    switch (cat) {
      case "commercial":
        site = commercial.samples.find((obj) => obj.slug === path)
        return NextResponse.json(site)
      case "drone":
        site = drone.samples.find((obj) => obj.slug === path)
        return NextResponse.json(site)
      case "music-video-production":
        site = music.samples.find((obj) => obj.slug === path)
        return NextResponse.json(site)
      case "product":
        site = product.samples.find((obj) => obj.slug === path)
        return NextResponse.json(site)
      case "promotional-sales":
        site = sales.samples.find((obj) => obj.slug === path)
        return NextResponse.json(site)
      case "training":
        site = training.samples.find((obj) => obj.slug === path)
        return NextResponse.json(site)
      default:
        throw new Error("Invalid category")
    }
  } catch (error) {
    return NextResponse.json("There has been an error.")
  }
}
