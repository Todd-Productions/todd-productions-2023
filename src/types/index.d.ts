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

export interface IButton {
  label: string
  link: UrlType
}
