import React from "react"
import { HomeTemplate } from "../ui/templates"
import homeData from "../data/home.json"

import { getDefaultProps, getTopCTA, getSplitContent } from "./actions"

const HomePage = () => (
  <HomeTemplate
    topCTAData={getTopCTA(homeData)}
    splitContent={getSplitContent(homeData.splitContent)}
    {...getDefaultProps()}
  />
)

export default HomePage
