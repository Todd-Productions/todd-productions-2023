import React from "react";

export interface SectionHeadingProps {
  children?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { children } = props;

  return (
    <h2 className="text-blue-500 font-black text-4xl mb-2 relative uppercase">
      {children}
    </h2>
  );
};

export default SectionHeading;
