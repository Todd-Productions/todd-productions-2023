import { forwardRef } from "react"
import slugify from "slugify"
import Link from "next/link"

import "./drawer.css"

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
    <div className="drawer fixed md:hidden z-10" ref={ref}>
      <div className="grid grid-rows-[1fr_2fr]">
        <div>
          <button
            type="button"
            className="float-right mr-10 mt-10 text-black text-2xl font-semibold bg-white rounded-full h-12 w-12"
            onClick={() => onClose()}
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-center justify-between text-center uppercase text-white text-4xl h-full">
          {links.map((item) => (
            <div className="mb-8" key={slugify(item.url as string)}>
              <Link href={item.url}>{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null
})

export default Drawer
