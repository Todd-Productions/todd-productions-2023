import React from "react"
import Image from "next/image"
import Link from "next/link"

import { INavLink, ISocialLinks } from "@/types"

import { Wrapper, Hamburger } from "../../atoms"
import Social from "../Social/Social"
import Nav from "../Nav/Nav"

export interface HeaderProps extends ISocialLinks {
  links: INavLink[]
  isOpen: boolean
  onHamburgerClick?: () => void
}

export const getSocialLinks = (props: ISocialLinks): ISocialLinks => ({
  facebook: props.facebook,
  youtube: props.youtube,
  linkedin: props.linkedin,
  instagram: props.instagram,
  twitter: props.twitter,
})

const Header: React.FC<HeaderProps> = (props) => {
  const { links, isOpen, onHamburgerClick } = props

  return (
    <header className="bg-white w-full box-border text-grey-600 py-6">
      <Wrapper>
        <div className="grid md:inline lg:grid content-center items-center gap-4 h-full relative grid-cols-[1fr_118px_1fr]">
          <div className="md:hidden">
            <Hamburger on={isOpen} onClick={onHamburgerClick} />
          </div>
          <div className="hidden md:flex justify-start lg:justify-center">
            <Social {...getSocialLinks(props)} echo />
          </div>
          <div className="text-center lg:py-0">
            <Link
              href="/"
              title="Todd Production's Home Page"
              className="inline-block"
            >
              <Image
                src="/images/logo.svg"
                height={73}
                width={118}
                alt="Todd Productions"
                className="transition-all ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <div className="px-4 h-full hidden md:block">
            <Nav links={links} />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
