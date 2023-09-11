"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { getDefaultProps } from "../../../actions"
import { BasicTemplate } from "../../../../ui/templates"

import { ICrumb } from "../../../../ui/molecules/Breadcrumbs/Breadcrumbs"
import { IPageInfo } from "../../../../ui/molecules/PageInfoSection/PageInfoSection"

const ExmapleSitePage = () => {
  const pathname = usePathname()
  const [data, setData] = useState<IPageInfo>()
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
      videoLink={data.videoLink}
      // bannerImg={data.largeImg}
      data={data}
      button={{
        link: "https://hsfranchising.com/",
        label: "View Site",
      }}
      {...getDefaultProps()}
    />
  )
}

export default ExmapleSitePage
