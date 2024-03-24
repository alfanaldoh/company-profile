import Navbar from "@/components/Navbar"
import Footer from "../components/footer/page"

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="md:grid md:grid-rows-8 md:h-[206vh] md:w-full bg-[#E7EB5D]">
        <div className="border-black border-b-2 md:row-span-3 p-4 md:p-0">
          <h1 className="md:text-2xl md:pt-3 md:pl-10 text-xl font-semibold md:font-normal ">Our why</h1>
          <p className="md:px-10 md:text-5xl md:pt-64 md:text-justify text-lg pt-16">
          The importance of having morality is paramount because it forms the basis of healthy and harmonious social relationships within society. Here are some reasons why we should have morality:
          </p>
        </div>
        <div>
          <h1 className="md:px-10 md:text-4xl md:pt-16 md:font-light text-justify p-4 md:p-0">
          1.Social Harmony: Morality helps create a social environment that is harmonious by promoting mutual respect, empathy, and cooperation among individuals.
          </h1>
        </div>
        <div className="md:grid md:grid-rows-1">
          <h1 className="md:px-10 md:text-4xl md:pt-10 md:font-light text-justify p-4 md:p-0">
          2.Meaningful Living: Morality provides guidance on proper behavior, helping us lead a meaningful and purposeful life by maintaining personal integrity and considering the interests of others.
          </h1>
        </div>
        <div className="md:grid  md:grid-rows-1">
          <h1 className="md:px-10 md:text-4xl md:pt-10 md:font-light text-justify p-4 md:p-0">
          3.Social Order: Morality sets standards of behavior that can help maintain social order and stability in society by avoiding harmful behaviors and adhering to agreed-upon norms.
          </h1>
        </div>
        <div className="md:grid  md:grid-rows-1">
          <h1 className="md:px-10 md:text-4xl md:pt-10 md:font-light text-justify p-4 md:p-0">
          4.Trust and Relationships: Having strong morals builds trust in interpersonal relationships, both in personal and professional spheres. Individuals respected morally are more likely to be trusted and valued by others.
          </h1>
        </div>
        <div className="md:grid  md:grid-rows-1">
          <h1 className="md:px-10 md:text-4xl md:pt-10 md:font-light text-justify p-4 md:p-0">
          5.Self-Development: Morality aids in positive self-development by encouraging us to reflect on the values and principles we hold dear, thereby strengthening personal character and integrity.
          </h1>
        </div>
    
      </div>
      <Footer/>
    </>
  )
}

export default page