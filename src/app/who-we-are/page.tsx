import { BasicTemplate } from "../../ui/templates"

import data from "../../data/who-are-we.json"

import { getDefaultProps } from "../actions"

import { ICrumb } from "../../ui/molecules/Breadcrumbs/Breadcrumbs"

const WhoAreWePage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "WHO ARE WE",
    },
  ]

  return (
    <BasicTemplate
      crumbs={crumbs}
      title={data.title}
      description={data.description}
      videoLink={data.videoLink}
      button={data.button}
      {...getDefaultProps()}
    />
  )
}

export default WhoAreWePage
