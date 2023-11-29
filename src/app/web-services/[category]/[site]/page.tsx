"use client"

import React, { useEffect, useState } from "react"
// import Link from "next/link"
import { usePathname } from "next/navigation"

import path from "path"
import { getDefaultProps } from "../../../actions"
import { ExampleTemplate, InternalTemplate } from "../../../../ui/templates"
// import NotFoundPage from "../../../not-found"

import { ICrumb } from "../../../../ui/molecules/Breadcrumbs/Breadcrumbs"

export interface IRawPageInfo {
  title: string
  img: string
  largeImg: string
  url: string
  slug: string
  description: string
}

const ExamplePage = () => {
  const pathname = usePathname()
  const [data, setData] = useState<IRawPageInfo>()

  const crumbs: ICrumb[] = [
    {
      label: "Web Services",
      url: "/web-services/",
    },
    {
      label: "Marketing Services",
      url: "/web-services/marketing-websites/",
    },
    {
      label: data?.title ?? "Website",
    },
  ]

  useEffect(() => {
    fetch(`/api/website?slug=${pathname}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setData(data)
        }
      })
  }, [])

  // Avoid "loading" render
  if (!data) return null

  return (
    <ExampleTemplate
      title={data.title}
      description={data.description}
      button={{ label: "View Website", link: data.url }}
      siteImg={data.largeImg}
      {...getDefaultProps()}
      crumbs={crumbs}
    />
  )
}

export default ExamplePage
