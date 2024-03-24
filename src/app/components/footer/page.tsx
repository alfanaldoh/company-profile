import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:h-[100vh] bg-[#E7EB5D] border-black border-t-2 w-full md:grid md:grid-rows-2 flex flex-col">
      <div className="border-black border-b-2">
        <h1 className="md:text-2xl text-xl font-semibold text-center md:pt-7 pt-4">Supported by</h1>
        <div className="flex md:gap-5 gap-10 md:pt-20 pt-10 justify-center md:flex-nowrap flex-wrap p-5">
          <Image src="/halodoc3588.jpg" alt="halodoc" width={125} height={125}/>
          <Image src="/lsmr.png" alt="lsm" width={125} height={125} />
          <Image src="/kemenkes.png" alt="kemenkes" width={125} height={125} />
          <Image src="/polri.png" alt="polri" width={125} height={125} />
          <Image src="/tni.png" alt="tni" width={125} height={125} />
          <Image src="/kemensos.jpg" alt="kemensos" width={125} height={125} />
          <Image src="/hamr.png" alt="ham" width={125} height={125} />
          <Image src="/anak.svg" alt="anak" width={125} height={125} />
          <Image src="/closethedoor.jpg" alt="closethedoor" width={125} height={125} />

        </div>
      </div>
      <div className="md:relative">
        <div className="flex justify-around px-10 pt-24 max-md:hidden">
            <div>
                <h1 className="text-2xl font-semibold">Services</h1>
                <p className="text-lg font-light">Mentoring</p>
                <p className="text-lg font-light">Mediation</p>
                <p className="text-lg font-light">Seminar Morality</p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">Company</h1>
                <p className="text-lg font-light">Moral +</p>
                <p className="text-lg font-light">About us</p>
                <p className="text-lg font-light">Contact</p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">Follow us</h1>
                <p className="text-lg font-light">Instagram</p>
                <p className="text-lg font-light">X Twitter</p>
                <p className="text-lg font-light">Facebook</p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">Moral +</h1>
                <p className="text-lg font-light">hello@moral.tech</p>
                <p className="text-lg font-light">📞 911</p>
            </div>
        </div>
        <div className="md:absolute inset-x-0 bottom-0 py-5 px-10 flex items-center justify-between">
          <Link href="/">
            <h1 className="md:text-5xl text-xl font-bold bottom-0">Moral +</h1>
          </Link>
          <p className="">Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
