"use client"

import { ServiceTemplate } from "../../ui/templates"
import { navLinks, footerLinks } from "../../../siteMeta"

const VideoPage = () => (
  <ServiceTemplate
    bannerImg="https://source.unsplash.com/random"
    topCTAData={{
      title: "FROM CONCEPT TO COMPLETION",
      description: (
        <div>
          <p>In 1905, Einstein got it right. We’ve just modernized it.</p>
          <p>
            At Todd Productions Inc., e=mc2 means electronic media content for
            clients. We help businesses and organizations promote their products
            and services by developing content for electronic media (Internet,
            Social Media, TV). That includes video production, web design / web
            development, web hosting, and many more services.
          </p>
          <p>
            Based in Northwest Ohio since 1999, Todd Productions Inc. serves
            clients in the business, education, health care, and broadcast
            fields. Let us help you get your business noticed!
          </p>
        </div>
      ),
      button: {
        link: "/",
        label: "connect with us",
      },
    }}
    contentBlocks={[
      {
        imageSrc: "https://source.unsplash.com/random",
        imageAlt: "",
        title: "VIDEO PRODUCTION",
        subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
        textContent:
          "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
        buttonLink: "/",
        buttonLabel: "see video types",
      },
      {
        imageSrc: "https://source.unsplash.com/random",
        imageAlt: "",
        title: "VIDEO PRODUCTION",
        subTitle: "SALES, COMMERICAL, MUSIC, AND MORE",
        textContent:
          "Videos are an excellent way to convey just the right message to your audience, and we make it easy! From script development to filming to audio recording and post-production editing, we’ll work closely with your staff to ensure that the end product exceeds your goals.",
        buttonLink: "/",
        buttonLabel: "see video types",
        imgleft: true,
      },
    ]}
    headerLinks={navLinks}
    footerLinks={footerLinks}
  />
)

export default VideoPage
