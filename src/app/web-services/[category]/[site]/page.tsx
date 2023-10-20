"use client"

import React, { useEffect, useState } from "react"
// import Link from "next/link"
import { usePathname } from "next/navigation"

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
        if (!data.error) {
          setData(data)
        }
        setLoading(false)
      })
  }, [])

  if (!data || loading)
    return (
      <InternalTemplate {...getDefaultProps()}>
        <div className="text-center">
          <h1>Loading...</h1>
          {/* <p>Sorry 😔 we couldn&apos;t find what you were looking for.</p>
          <Link className="text-blue-500 underline" href="/">
            Return Home
          </Link> */}
        </div>
      </InternalTemplate>
    )

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
