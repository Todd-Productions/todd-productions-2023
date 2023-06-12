import React from "react"
import Image from "next/image"

import { Wrapper } from "../../atoms"
import Social from "../Social/Social"

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <Wrapper>
        <div className="lg:grid content-center items-center gap-4 h-full relative grid-cols-[1fr_1fr_1fr]">
          <div className="flex justify-center items-center">
            Video Production, Web Design, Graphic Designs - What Do You Need?
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/logo-footer.jpg"
              height={73}
              width={118}
              alt="Todd Productions"
              className="transition-all ease-in-out hover:scale-110"
            />
            <Social
              facebook="/"
              twitter="/"
              youtube="/"
              instagram="/"
              linkedin="/"
              echo
              whiteHover
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>
              Phone:
              <br /> 419-290-0794
            </p>
            <p>
              Email:
              <br /> contact@toddprod.com
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
