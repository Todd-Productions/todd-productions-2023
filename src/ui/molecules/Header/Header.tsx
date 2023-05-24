import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Wrapper } from "../../atoms";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const {} = props;

  return (
    <header className="bg-white w-full box-border text-grey-600 py-6">
      <Wrapper>
        <div className="md:grid content-center items-center gap-4 h-full relative grid-cols-[1fr_118px_1fr]">
          <div>Social</div>
          <div>
            <Link href="/" title="Todd Production's Home Page">
              <Image
                src="/images/logo.svg"
                height={73}
                width={118}
                alt="Todd Productions"
                className="transition-all ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          <div>Nav</div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
