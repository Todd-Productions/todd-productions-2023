import React from "react";

import Header from "../../molecules/Header/Header";

export interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default MainHeader;
