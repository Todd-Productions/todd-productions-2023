import React from "react"
import { Metadata } from "next"

import { getCanonicalLink, capitalizeWords } from "../../../../../utils/common"
import { getDefaultProps } from "../../../actions"
import { ExampleTemplate } from "../../../../ui/templates"

import { ICrumb } from "../../../../ui/molecules/Breadcrumbs/Breadcrumbs"
import getSampleData from "../../../../../utils/getSampleData"

export interface IRawPageInfo {
  title: string
  img: string
  largeImg: string
  url: string
  slug: string
  description: string
  videoLink: string
}

type Props = {
  params: { category: string; video: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, video } = params
  const data: IRawPageInfo = await getSampleData(
    "video",
    category,
    `/video-production/${category}/${video}`
  )
  return {
    title: capitalizeWords(data.title),
    description: `${data.description} Maumee Ohio | Todd Productions Inc.`,
    alternates: {
      canonical: getCanonicalLink(`video-production/${category}/${video}`),
    },
  }
}

const ExampleVideoPage = async ({
  params,
}: {
  params: { category: string; video: string }
}) => {
  const { category, video } = params

  const data: IRawPageInfo = await getSampleData(
    "video",
    category,
    `/video-production/${category}/${video}`
  )

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
