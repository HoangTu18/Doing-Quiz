import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
const Language = ({}) => {
  return (
    <>
      <NavDropdown
        title="Tiếng Việt"
        id="basic-nav-dropdown2"
        className="languages"
      >
        <NavDropdown.Item>English</NavDropdown.Item>
        <NavDropdown.Item>Tiếng Việt</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Language;
