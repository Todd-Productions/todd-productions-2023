import { InternalTemplate } from "../ui/templates"
import { getDefaultProps } from "./actions"

const NotFoundPage = () => (
  <InternalTemplate {...getDefaultProps()}>
    <div className="text-center">
      <h2>Not Found</h2>
      <p>Sorry 😔 we couldn&apos;t find what you were looking for.</p>
      <a style={{ textDecoration: "underline" }} href="/">
        Return Home
      </a>
    </div>
  </InternalTemplate>
)

export default NotFoundPage
