import React from "react";
import slugify from "slugify";
import Link from "next/link";

export interface ICrumb {
  label: string;
  url: string;
}

export interface BreadcrumbsProps {
  crumbs: ICrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { crumbs } = props;

  return (
    <div>
      {crumbs.map((crumb) => (
        <Link key={slugify(crumb.label)} href={crumb.url}>
          {crumb.label}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
