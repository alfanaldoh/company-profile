import Image from "next/image";
import React from "react";

const Hero1 = () => {
  return (
    <div className="md:h-[100vh] bg-[#E7EB5D] w-full md:px-10 px-2 flex md:pt-10 pt-28 md:pb-5">
      <div className="flex md:gap-24 flex-wrap md:pl-9 px-4">
        <div className="md:w-[350px] md:h-[240px] mb-4">
          <div className="md:w-[350px] md:h-[225px] bg-black bg-opacity-15 rounded-md flex items-center justify-center">
            <Image
              src="/lovex.png"
              width={200}
              height={200}
              alt="peace"
              className="rounded-md items-center"
            />
          </div>
          <h1 className="font-semibold pt-1 pb-1">Create sustained positive change</h1>
          <p className="text-sm text-justify ">
          With every choice we make to act with integrity and kindness, we lay the groundwork for positive moral change within ourselves and around us. Let us be agents of change promoting moral values to create a better world.
          </p>
        </div>
        <div className="md:w-[350px] md:h-[240px] mb-4">
          <div className="md:w-[350px] md:h-[225px] bg-black bg-opacity-15 rounded-md flex items-center justify-center">
            <Image
              src="/plus.png"
              width={200}
              height={200}
              alt="peace"
              className="rounded-md items-center"
            />
          </div>
          <h1 className="font-semibold pt-1 pb-1">Target actions and improvements</h1>
          <p className="text-sm text-justify ">
          Let us embark on actions that not only uplift our own moral standing but also contribute to the collective improvement of ethical standards. Through consistent efforts towards moral betterment, we shape a brighter future for all.
          </p>
        </div>
        <div className="md:w-[350px] md:h-[240px] mb-4">
          <div className="md:w-[350px] md:h-[225px] bg-black bg-opacity-15 rounded-md flex items-center justify-center">
            <Image
              src="/everywhere.png"
              width={200}
              height={200}
              alt="peace"
              className="rounded-md items-center"
            />
          </div>
          <h1 className="font-semibold pt-1 pb-1">Get started wherever you are</h1>
          <p className="text-sm text-justify ">
             Keep respect to each other, wherever you are. Dont be racist, toxic and bully. 
          </p>
        </div>
        <div className="md:w-[350px] md:h-[240px] mb-4">
          <div className="md:w-[350px] md:h-[225px] bg-black bg-opacity-15 rounded-md flex items-center justify-center">
            <Image
              src="/personal.png"
              width={200}
              height={200}
              alt="peace"
              className="rounded-md items-center"
            />
          </div >
          <h1 className="font-semibold pt-1 pb-1">Break down data</h1>
          <p className="text-sm text-justify ">Stop worrying about systems that refuse to speak together, letting our flexible data ease sustainability reporting and data flows.</p>
        </div>
        <div className="md:w-[350px] md:h-[240px] mb-4">
          <div className="md:w-[350px] md:h-[225px] bg-black bg-opacity-15 rounded-md flex items-center justify-center">
            <Image
              src="/oke.png"
              width={200}
              height={200}
              alt="peace"
              className="rounded-md items-center"
            />
          </div>
          <h1 className="font-semibold pt-1 pb-1">Go from immoral to moral</h1>
          <p className="text-sm text-justify ">Empower users to take part in the circular economy by finding the moral of our environment.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
