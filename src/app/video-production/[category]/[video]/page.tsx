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

const ExampleVideoPage = ({
  params,
}: {
  params: { category: string; video: string }
}) => {
  const { category, video } = params

  const pathname = usePathname()

  const [data, setData] = useState<IRawPageInfo>()
  const crumbs: ICrumb[] = [
    {
      label: "Video Services",
      url: "/video-production/",
    },
    {
      label: category.split("-").join(" "),
      url: `/video-production/${category}/`,
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
