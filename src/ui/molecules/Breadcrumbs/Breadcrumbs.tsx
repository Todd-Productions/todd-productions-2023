import React from "react"
import slugify from "slugify"
import Link from "next/link"

import { UrlType } from "@/types"

import { Wrapper } from "../../atoms"

export interface ICrumb {
  label: string
  url: UrlType
}

export interface BreadcrumbsProps {
  crumbs: ICrumb[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { crumbs } = props

  return (
    <div className="text-grey-500 text-2xl bg-grey-100 p-4 text-center box-border w-full">
      <Wrapper>
        {crumbs.map((crumb, ix) => (
          <React.Fragment key={slugify(crumb.label)}>
            <Link
              href={crumb.url}
              className="uppercase text-grey-500 text-2xl inline-block px-2 no-underline hover:underline"
            >
              {crumb.label}
            </Link>
            {ix !== crumbs.length - 1 && "/"}
          </React.Fragment>
        ))}
      </Wrapper>
    </div>
  )
}

export default Breadcrumbs
