import React from "react"
import { getDefaultProps } from "../../../actions"
import { BasicTemplate } from "../../../../ui/templates"
import { ICrumb } from "../../../../ui/molecules/Breadcrumbs/Breadcrumbs"

const ExmapleSitePage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "WHO ARE WE",
    },
  ]

  if (true) {
    return (
      <BasicTemplate
        crumbs={crumbs}
        title="HEALTHSOURCE"
        description="some description"
        videoLink="https://source.unsplash.com/random"
        button={{
          link: "https://hsfranchising.com/",
          label: "View Site",
        }}
        {...getDefaultProps()}
      />
    )
  }
  return <h1>nothing here...</h1>
}

export default ExmapleSitePage
