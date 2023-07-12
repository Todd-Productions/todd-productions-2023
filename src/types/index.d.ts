import { UrlObject } from "url"

export type UrlType = UrlObject | string

export interface INavLink {
  label: string
  url: UrlType
}

export interface ISocialLinks {
  facebook?: string
  youtube?: string
  linkedin?: string
  instagram?: string
  twitter?: string
}

// SEO Page
export interface IPricingCard {
  type: "PROFESSIONAL" | "ADVANCED" | "STANDARD"
  price: string
  priceFrequency: string
  highlights: string[]
}

export interface IButton {
  label: string
  link: UrlType
}
