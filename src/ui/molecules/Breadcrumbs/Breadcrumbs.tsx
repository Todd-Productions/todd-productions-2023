import React from "react"
import slugify from "slugify"
import Link from "next/link"

import { UrlType } from "@/types"

import { Wrapper } from "../../atoms"

export interface ICrumb {
  label: string
  url?: UrlType
}

export interface BreadcrumbsProps {
  crumbs: ICrumb[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { crumbs } = props

  return (
    <div className="text-xl text-grey-700 bg-grey-100 p-3 text-center box-border w-full">
      <Wrapper>
        {crumbs.map((crumb, ix) => (
          <React.Fragment key={slugify(crumb.label)}>
            {crumb.url ? (
              <Link
                href={crumb.url}
                className="uppercase inline-block p-3 no-underline hover:underline"
              >
                {crumb.label}
              </Link>
            ) : (
              <div className="inline-block px-2">{crumb.label}</div>
            )}
            {ix !== crumbs.length - 1 && "/"}
          </React.Fragment>
        ))}
      </Wrapper>
    </div>
  )
}

export default Breadcrumbs
