import React from "react";
import BrandsLogo from "./BrandsLogo";

function Brands() {
  return (
    <div className="container py-14">
      <div className="flex flex-wrap justify-center lg:justify-between gap-6">
        <BrandsLogo source="/brand/1.png" val={0.2} />
        <BrandsLogo source="/brand/2.png" val={0.4} />
        <BrandsLogo source="/brand/3.png" val={0.6} />
        <BrandsLogo source="/brand/4.png" val={0.8} />
        <BrandsLogo source="/brand/5.png" val={1.0} />
      </div>
    </div>
  );
}

export default Brands;
