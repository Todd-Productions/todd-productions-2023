import { ReactNode } from "react"

import { Footer } from "../../molecules"
import MainHeader from "../MainHeader/MainHeader"

import Breadcrumbs, { ICrumb } from "../../molecules/Breadcrumbs/Breadcrumbs"

export interface MainLayoutProps {
  children?: ReactNode
  crumbs: ICrumb[]
}

/**
 *
 * @const {React.FC<MainLayoutProps>} MainLayout
 *
 */
const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children, crumbs } = props

  return (
    <div>
      <MainHeader />
      {crumbs && <Breadcrumbs crumbs={crumbs} />}
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  )
}

MainLayout.defaultProps = {}

export default MainLayout
