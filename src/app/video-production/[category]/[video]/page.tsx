"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { getDefaultProps } from "../../../actions"
import { ExampleTemplate, BasicTemplate } from "../../../../ui/templates"

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

const ExampleVideoPage = ({ params }: { params: { category: string } }) => {
  const { category } = params

  const pathname = usePathname()
  const pathSegments = pathname.split("/")

  const [data, setData] = useState<IRawPageInfo>()
  const crumbs: ICrumb[] = [
    {
      label: "Video Services",
      url: "/video-production/",
    },
    {
      label: pathSegments[2],
      url: `/video-production/${pathSegments[2]}/`,
    },
    {
      label: data?.title ?? "Promo Video",
    },
  ]

  useEffect(() => {
    fetch(`/api/video?category=${category}&path=${pathname}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [category, pathname])

  // Avoid "loading" render
  if (!data) return null

  return (
    <ExampleTemplate
      title={data.title}
      description={data.description}
      button={{
        label: "View Website",
        link: data?.url ? data.url : "",
      }}
      videoLink={data.videoLink}
      {...getDefaultProps()}
      crumbs={crumbs}
    />
  )
}

export default ExampleVideoPage
