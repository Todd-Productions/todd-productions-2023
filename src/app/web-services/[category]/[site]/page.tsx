"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { getDefaultProps } from "../../../actions"
import { BasicTemplate } from "../../../../ui/templates"

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
      label: "WHO ARE WE",
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
  if (!data) return <p>No profile data</p>

  return (
    <BasicTemplate
      crumbs={crumbs}
      title={data.title}
      description={data.description}
      bannerImg={data.largeImg}
      videoLink="asdf"
      button={{
        link: data.url,
        label: "View Site",
      }}
      {...getDefaultProps()}
    />
  )
}

export default ExamplePage
