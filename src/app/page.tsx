import React from "react"
import { INavLink } from "../types"
import { HomeTemplate } from "../ui/templates"
import homeData from "../data/home.json"
import { navLinks, footerLinks } from "../../siteMeta"

import { getDefaultProps, getTopCTA, getSplitContent } from "./actions"

export interface IDefault {
  headerLinks: INavLink[]
  footerLinks: INavLink[]
}

const HomePage = () => (
  <HomeTemplate
    topCTAData={getTopCTA(homeData)}
    splitContent={getSplitContent(homeData.splitContent)}
    headerLinks={navLinks}
    footerLinks={footerLinks}
    {...getDefaultProps()}
  />
)

export default HomePage
