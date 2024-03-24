import Navbar from "@/components/Navbar";
import Footer from "../components/footer/page";
import Company from "./component/Company";
import OurTeams from "./component/OurTeams";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="md:grid md:grid-rows-2 md:h-[92vh] md:w-full bg-[#E7EB5D]">
        <div className="border-black border-b-2 p-4">
          <h1 className="md:text-2xl text-xl font-semibold md:pt-3 md:pl-10">About us</h1>
          <p className="md:pl-10 md:text-5xl md:pt-48 pt-3">
            Moral life make our life happier and peace.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:border-black md:border-b-2 p-4">
          <h1 className="md:pl-10 md:text-5xl md:pt-10 md:pr-10 md:font-medium">
            Peace never happen before people and government have a reason to
            take part in it.
          </h1>
          <p className="md:pt-10 md:px-10 md:text-xl">
            Moral + was founded with the goal of solving this. Our
            services collects data that can be used to motivate and incentivise
            people and companies to reduce waste, improve moral value, and take
            part in the environment.
          </p>
        </div>
      </div>
      <Company/>
      <OurTeams/>
      <Footer/>
    </>
  );
};

export default page;
