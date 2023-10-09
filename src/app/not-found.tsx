import Link from "next/link"

import { InternalTemplate } from "../ui/templates"
import { getDefaultProps } from "./actions"

const NotFoundPage = () => (
  <InternalTemplate {...getDefaultProps()}>
    <div className="text-center">
      <h2>Not Found</h2>
      <p>Sorry 😔 we couldn&apos;t find what you were looking for.</p>
      <Link className="text-blue-500 underline" href="/">
        Return Home
      </Link>
    </div>
  </InternalTemplate>
)

export default NotFoundPage
