"use client"

import React, { ReactNode } from "react"
import { usePathname } from "next/navigation"

import { ISocialLinks, INavLink } from "@/types"

import { getSocialLinks } from "../../molecules/Header/Header"

import { Footer, AlertSection } from "../../molecules"
import MainHeader from "../MainHeader/MainHeader"

import Breadcrumbs, { ICrumb } from "../../molecules/Breadcrumbs/Breadcrumbs"

export interface MainLayoutProps extends ISocialLinks {
  children?: ReactNode
  crumbs?: ICrumb[]
  headerLinks: INavLink[]
  footerLinks: INavLink[]
}

/**
 *
 * @const {React.FC<MainLayoutProps>} MainLayout
 *
 */
const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children, crumbs, headerLinks, footerLinks } = props
  const path = usePathname()

  return (
    <div>
      <MainHeader links={headerLinks} {...getSocialLinks(props)} />
      {path !== "/" && <AlertSection />}
      {crumbs && <Breadcrumbs crumbs={crumbs} />}
      <main className="bg-white">{children}</main>
      <Footer links={footerLinks} />
    </div>
  )
}

export default MainLayout
