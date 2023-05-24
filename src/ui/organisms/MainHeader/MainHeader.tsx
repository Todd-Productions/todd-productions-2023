import React from "react"

import { INavLink, ISocialLinks } from "@/types"

import Header, { getSocialLinks } from "../../molecules/Header/Header"

export interface MainHeaderProps extends ISocialLinks {
  links: INavLink[]
}

const MainHeader: React.FC<MainHeaderProps> = (props) => {
  const { links } = props

  return (
    <div>
      <Header links={links} {...getSocialLinks(props)} />
    </div>
  )
}

export default MainHeader
