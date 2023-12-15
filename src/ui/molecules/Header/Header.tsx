import Image from "next/image"
import Link from "next/link"
import React from "react"

import { INavLink, ISocialLinks } from "@/types"

import { Hamburger, Wrapper } from "../../atoms"
import Nav from "../Nav/Nav"
import Social from "../Social/Social"

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
        <div className="grid md:inline xl:grid content-center items-center gap-4 h-full relative grid-cols-[1fr_118px_1fr]">
          <div className="md:hidden">
            <Hamburger on={isOpen} onClick={onHamburgerClick} />
          </div>
          <div className="flex md:mb-8 xl:mb-0 justify-between xl:justify-start items-center">
            <div className="hidden md:block">
              <Social {...getSocialLinks(props)} echo />
            </div>

            <div className="text-center lg:py-0 block xl:hidden">
              <Link
                href="."
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

            <a
              href="mailto:contact@toddprod.com"
              className="hidden md:block transition-all hover:border-b-4 border-blue-500 text-sm ml-4 text-blue-500"
            >
              CONTACT@TODDPROD.COM
            </a>
          </div>
          <div className="text-center lg:py-0 hidden xl:block">
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
