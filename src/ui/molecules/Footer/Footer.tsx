import React from "react"
import Image from "next/image"
import Link from "next/link"
import slugify from "slugify"

import { Wrapper } from "../../atoms"
import Social from "../Social/Social"
import { INavLink } from "@/types"

export interface FooterProps {
  links: INavLink[]
}

const Footer: React.FC<FooterProps> = (props) => {
  const { links } = props
  return (
    <footer>
      <Wrapper>
        <div className="mt-4 lg:grid content-center items-center gap-4 h-full relative grid-cols-[1fr_1fr_1fr]">
          <div className="hidden lg:block flex justify-start items-start h-full">
            Video Production, Web Design, Graphic Designs - What Do You Need?
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/logo-footer.jpg"
              height={73}
              width={118}
              alt="Todd Productions"
              className=""
            />

            <div className="mt-4 md:mb-20 mb-4 flex flex-col justify-center items-center relative capitalized">
              {links.map((link) => (
                <Link
                  key={slugify(link.label)}
                  href={link.url}
                  className="my-1 md:my-0 mx-0 md:mx-2 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Social
              facebook="/"
              twitter="/"
              youtube="/"
              instagram="/"
              linkedin="/"
              whiteHover
            />
          </div>
          <div className="mt-6 md:mt-0 text-center flex flex-col justify-start items-center h-full">
            <div>
              <div className="mb-4">
                <p>Phone:</p>
                <p>419-290-0794</p>
              </div>
              <div className="mb-4">
                <p>Email:</p>
                <p>contact@toddprod.com</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
