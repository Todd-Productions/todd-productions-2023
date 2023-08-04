import { forwardRef } from "react"
import slugify from "slugify"
import Link from "next/link"

// @types
import { INavLink } from "../../../types"

export interface DrawerProps {
  links: INavLink[]
  isOpen: boolean
  onClose: () => void
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { links, isOpen, onClose } = props

  return isOpen ? (
    <div className="drawer" ref={ref}>
      <div>
        <div>
          <button type="button" onClick={() => onClose()}>
            X
          </button>
        </div>
        <div>
          {links.map((item) => (
            <div key={slugify(item.url as string)}>
              <Link href={item.url}>{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null
})

export default Drawer
