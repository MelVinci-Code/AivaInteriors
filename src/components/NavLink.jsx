import React from "react";
import PropTypes from "prop-types";
function NavLink({ children }) {
  return (
    <li>
      <a href="#" className="mx-4 text-sm font-semibold">
        {children}
      </a>
    </li>
  );
}

export default NavLink;

NavLink.propTypes = {
  children: PropTypes.node,
};
