"use client"

import { ServiceTemplate } from "../../ui/templates"
import data from "../../data/other.json"

import { getTopCTA, getSplitContent, getDefaultProps } from "../actions"

const OtherPage = () => (
  <ServiceTemplate
    topCTAData={getTopCTA(data)}
    splitContent={getSplitContent(data.splitContent)}
    {...getDefaultProps()}
  />
)

export default OtherPage
