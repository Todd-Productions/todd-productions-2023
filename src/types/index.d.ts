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

export interface ISEOMeta {
  seoTitle: string | null
  seoDescription: string | null
}

// SEO Page
export interface IPricingCard {
  type: string
  price: string
  priceFrequency: string
  highlights: string[]
}

export interface IButton {
  label: string
  link: UrlType
}

export interface ISampleCard {
  title: string
  img: string | UrlObject
  largeImg: string | UrlObject
  description?: string
  url: string
}
