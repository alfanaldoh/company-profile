import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <div className="md:grid md:grid-rows-6 md:h-[130vh] bg-[#E7EB5D]">
      <div className="md:row-span-2 md:grid md:grid-cols-2 p-4">
        <div>
          <h1 className="md:text-5xl md:font-medium md:pl-10 md:pt-12 text-xl font-semibold">
            Company
          </h1>
          <Image src="/logo.png" alt="logo" width={250} height={250} className="md:pt-3"/>
        </div>
        <div>
          <p className="md:text-xl md:pt-10 md:px-10">
            Established in Yogyakarta in 2024, Moral + was founded as a movement to change morals to make Indonesia Emas in 2045. In earlier 2024, the company received backing from growth fund
            Close the door.
          </p>
        </div>
      </div>
      <div className="md:row-span-4 md:flex md:justify-center md:items-center">
        <Image src="/oowi.jpg" alt="" width={800} height={800} className="rounded-md"/>
      </div>
    </div>
  );
};

export default Company;
