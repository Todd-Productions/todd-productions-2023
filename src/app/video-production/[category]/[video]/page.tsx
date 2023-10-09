"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { getDefaultProps } from "../../../actions"
import { ExampleTemplate } from "../../../../ui/templates"

import { ICrumb } from "../../../../ui/molecules/Breadcrumbs/Breadcrumbs"

export interface IRawPageInfo {
  title: string
  img: string
  largeImg: string
  url: string
  slug: string
  description: string
  videoLink: string
}

const ExampleVideoPage = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split("/")

  const [data, setData] = useState<IRawPageInfo>()
  const [loading, setLoading] = useState(true)
  const crumbs: ICrumb[] = [
    {
      label: "Video Services",
      url: "/video-services/",
    },
    {
      label: "marketing services",
      url: "/web-services/marketing-websites/",
    },
    {
      label: data?.title ?? "Website",
    },
  ]

  useEffect(() => {
    fetch(`/api/video?category=${pathSegments[2]}&path=${pathname}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <ExampleTemplate
      title={data.title}
      description={data.description}
      button={{ label: "View Website", link: data.url }}
      videoLink={data.videoLink}
      {...getDefaultProps()}
      crumbs={crumbs}
    />
  )
}

export default ExampleVideoPage
