import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
}; // props.children egy React beépített hivatkozás, ami mindent egybefoglal, ami a header közé kerül

export default MainHeader;
