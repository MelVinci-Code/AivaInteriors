import React from "react";
function Newsletter() {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <h1 className="text-3xl font-bold  font-serif text-center">
        Suscribe to our Newsletter
      </h1>
      <p className="max-w-[300px] mx-auto text-gray-500 text-sm text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed liberto
        doloremque ab eum!
      </p>
      <div className="flex justify-center !mt-10 text-base sm:text-xl">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        <button className="text-white bg-black px-6 py-4 uppercase ">
          Suscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
