"use client"

import { SEOTemplate } from "../../../ui/templates"

import data from "../../../data/web/seo.json"
import { getTopCTA, getDefaultProps } from "../../actions"

const SEOPage = () => (
  <SEOTemplate
    seoTitle={data.seoTitle}
    seoDescription={data.seoDescription}
    seoPackages={data.seoPackages}
    topCTAData={getTopCTA(data.pageInfoData)}
    {...getDefaultProps()}
  />
)

export default SEOPage
