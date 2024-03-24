import { Button } from "@/components/ui/button";
import { barlow, varela } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:h-[92vh] bg-[#E7EB5D] md:px-10 md:pt-10 md:pb-5 flex flex-col pt-10 w-full">
      <div className="pr-5 space-y-10">
        <h1
          className={`md:text-5xl text-xl text-balance pl-7 leading-tight ${barlow.className}`}
        >
          "Begin by understanding ethical values and acting in accordance with
          goodness and justice in every interaction and decision, thus making
          yourself and those around you more moral."
        </h1>
        <div className="pl-7 pt-5">
          <p className="md:text-2xl text-sm text-balance pb-5">
            Our service is highly beneficial to society, aiding individuals in
            cultivating a courteous and respectful community, thereby fostering
            a safe and peaceful living environment for all.
          </p>
          <Link href="/contact">
            <Button>Get in touch</Button>
          </Link>
        </div>
      </div>
      <div className="md:relative md:bg-black md:rounded-md md:bg-opacity-50 flex flex-col items-center justify-center gap-2 pt-5">
        <Image
          src="/Tawuran.webp"
          alt="tawuran"
          width={300}
          height={370}
          className="md:absolute left-5 top-5 rounded-md opacity-80"
        />
        <Image
          src="/digorok.jpg"
          alt="digorok"
          width={300}
          height={370}
          className="md:absolute right-5 top-5 rounded-md opacity-80"
        />
        <Image
          src="/pelecehan.jpeg"
          alt="pelecehan"
          width={300}
          height={370}
          className="md:absolute left-5 top-56 rounded-md opacity-80"
        />
        <Image
          src="/hamill.jpg"
          alt="hamil"
          width={300}
          height={350}
          className="md:absolute right-5 top-56 rounded-md opacity-80"
        />
        <Image
          src="/open.webp"
          alt="openbo"
          width={300}
          height={350}
          className="md:absolute left-5 bottom-5 rounded-md opacity-80"
        />
        <Image
          src="/mabuk.jpg"
          alt="mabuk"
          width={300}
          height={350}
          className="md:absolute right-5 bottom-5 rounded-md opacity-80"
        />
      </div>
    </div>
  );
};

export default Hero;
