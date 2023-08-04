import React from "react"
import Link from "next/link"
import slugify from "slugify"

import "./nav.css"

import { INavLink } from "../../../types"

export interface NavProps {
  links: INavLink[]
}

const Nav: React.FC<NavProps> = (props) => {
  const { links } = props

  return (
    <nav className="flex justify-between content-center items-center h-full pt-6 md:pt-0">
      {links.map((link) => (
        <Link
          key={slugify(link.label)}
          href={link.url}
          className="flex h-full justify-center items-center content-center relative uppercase nav-item"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
