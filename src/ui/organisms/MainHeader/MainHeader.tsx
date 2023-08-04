import React, { useState, useRef } from "react"

import { INavLink, ISocialLinks } from "@/types"
import { Drawer } from "../../molecules"
import Header, { getSocialLinks } from "../../molecules/Header/Header"

import useOnClickOutside from "../../../../hooks/useOnClickOutside"

export interface MainHeaderProps extends ISocialLinks {
  links: INavLink[]
}

const MainHeader: React.FC<MainHeaderProps> = (props) => {
  const { links } = props
  const [isOpen, setOpenState] = useState(false)
  const drawerRef = useRef(null)

  const toggleOpen = () => {
    setOpenState((o) => !o)
  }

  const handleOutsideClick = () => {
    if (isOpen) setOpenState(false)
  }

  useOnClickOutside(drawerRef, handleOutsideClick)

  return (
    <div>
      <Drawer
        ref={drawerRef}
        isOpen={isOpen}
        links={links}
        onClose={() => setOpenState(false)}
      />
      <Header
        links={links}
        isOpen={isOpen}
        onHamburgerClick={toggleOpen}
        {...getSocialLinks(props)}
      />
    </div>
  )
}

export default MainHeader
