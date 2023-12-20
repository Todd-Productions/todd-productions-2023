import React from "react"
import Image from "next/image"
import Link from "next/link"
import slugify from "slugify"

import Social from "../Social/Social"
import { Wrapper } from "../../atoms"
import { INavLink } from "../../../types"
import { socialLinks } from "../../../../siteMeta"

export interface FooterProps {
  links: INavLink[]
}

const Footer: React.FC<FooterProps> = (props) => {
  const { links } = props
  return (
    <footer>
      <Wrapper>
        <div className="pt-8 pb-12 mt-4 lg:grid content-center items-center gap-4 h-full grid-cols-[1fr_1fr_1fr] text-white">
          <div className="hidden lg:block h-full">
            <div>Video Production, Web Design, Graphic Designs</div>
            <div>- What Do You Need?</div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Link href="/">
              <Image
                src="/images/logo-footer.jpg"
                height={73}
                width={118}
                alt="Todd Productions"
                className="hover:scale-105 transition-all"
              />
            </Link>
            <ul className="mt-4 md:mb-6 mb-8 text-center capitalized">
              {links.map((link) => (
                <li key={slugify(link.label)}>
                  <Link
                    href={link.url}
                    className="my-3 py-3 md:py-2 text-xl md:text-base md:my-0 mx-0 md:mx-2 block hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Social
              facebook={socialLinks.facebook}
              youtube={socialLinks.youtube}
              instagram={socialLinks.instagram}
              linkedin={socialLinks.linkedin}
              whiteHover
              whiteColor
            />
          </div>

          <div className="mt-8 lg:mt-0 text-center h-full">
            <div>
              <div className="mb-4">
                <p className="font-black">Phone:</p>
                <a className="hover:underline" href="tel: 419-290-0794">
                  419-290-0794
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
