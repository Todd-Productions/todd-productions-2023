import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cn from "classnames"
import React from "react"

import "./social.css"

import { ISocialLinks } from "@/types"

export interface SocialProps extends ISocialLinks {
  whiteHover?: boolean
  echo?: boolean
  whiteColor?: boolean
  fill?: boolean
}

interface ISocial {
  url: string | undefined
  title: string
  icon: IconDefinition
}

const Social: React.FC<SocialProps> = (props) => {
  const {
    facebook,
    linkedin,
    instagram,
    twitter,
    youtube,
    echo,
    whiteHover,
    whiteColor,
    fill,
  } = props

  const links: ISocial[] = [
    {
      url: facebook,
      title: "Todd Productions' Facebook",
      icon: faFacebook,
    },
    {
      url: linkedin,
      title: "Todd Productions' LinkedIn",
      icon: faLinkedin,
    },
    {
      url: instagram,
      title: "Todd Production's Instagram",
      icon: faInstagram,
    },
    {
      url: twitter,
      title: "Todd Production's Twitter",
      icon: faXTwitter,
    },
    {
      url: youtube,
      title: "Todd Production's YouTube",
      icon: faYoutube,
    },
  ]

  return (
    <div className="flex justify-start content-center items-center h-full social">
      {links
        .filter((v) => !!v.url)
        .map((link) => (
          <a
            aria-label={link.title}
            key={link.url}
            href={link.url}
            title={link.title}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex content-center items-center justify-center text-lg text-grey-500 border border-solid border-grey-500 transition-all ease-in-out relative rounded-full p-2 mr-2 social-icon relative box-border",
              {
                "white-hover": whiteHover,
                "echo-hover": echo,
                "color-white": whiteColor,
                "bg-white": fill,
              }
            )}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
    </div>
  )
}

export default Social
