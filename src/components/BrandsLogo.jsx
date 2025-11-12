import React from "react";
import PropTypes from "prop-types";
function BrandsLogo({ source }) {
  return <img src={source} alt="logo" className="w-[120px] " />;
}

export default BrandsLogo;

BrandsLogo.propTypes = {
  source: PropTypes.string.isRequired,
};
