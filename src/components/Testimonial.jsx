import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <div className=" py-14">
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <h1 className="text-3xl font-bold font-serif ">
          Words from our customers
        </h1>
        <p className="text-gray-500 text-sm  max-w-[350px] mx-auto">
          Bring your dream home to life with one-on-one design help and hand
          picked products
        </p>
      </div>
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            name="John Doe"
            designation="Designer"
            img="https://i.pravatar.cc/300?img-1"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            possimus perspiciatis amet qui! Error, velit assumenda.
          </TestimonialCard>
          <TestimonialCard
            name="Alex"
            designation="Developer"
            img="https://i.pravatar.cc/300?img-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            possimus perspiciatis amet qui! Error, velit assumenda.
          </TestimonialCard>
          <TestimonialCard
            name="George"
            designation="Manager"
            img="https://i.pravatar.cc/300?img-3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            possimus perspiciatis amet qui! Error, velit assumenda.
          </TestimonialCard>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
