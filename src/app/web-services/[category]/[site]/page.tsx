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
}

const ExamplePage = () => {
  const pathname = usePathname()
  const [data, setData] = useState<IRawPageInfo>()
  const [loading, setLoading] = useState(true)

  const crumbs: ICrumb[] = [
    {
      label: "Web Services",
      url: "/web-services/",
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
    fetch(`/api/website?slug=${pathname}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  // todo - use boolean to display in template
  if (loading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

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
