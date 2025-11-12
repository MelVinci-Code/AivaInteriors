import React from "react";
import BrandsLogo from "./BrandsLogo";

function Brands() {
  return (
    <div className="container py-14">
      <div className="flex flex-wrap justify-center lg:justify-between gap-6">
        <BrandsLogo source="/brand/1.png" />
        <BrandsLogo source="/brand/2.png" />
        <BrandsLogo source="/brand/3.png" />
        <BrandsLogo source="/brand/4.png" />
        <BrandsLogo source="/brand/5.png" />
      </div>
    </div>
  );
}

export default Brands;
