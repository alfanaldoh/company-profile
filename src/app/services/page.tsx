import Navbar from '@/components/Navbar'
import Footer from '../components/footer/page'

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="md:grid md:grid-rows-4 md:h-[150vh] md:w-full bg-[#E7EB5D]">
        <div className="border-black border-b-2 p-4 md:p-0">
          <h1 className="md:text-2xl md:pt-3 md:pl-10 text-xl">Our Services</h1>
          <p className="md:pl-10 md:text-5xl md:pt-40 pt-10 text-2xl">
            Moral life make our life happier and peace.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:border-black md:border-b-2 p-4 md:p-0">
          <h1 className="md:pl-10 md:text-5xl md:pt-10 md:pr-10 md:font-medium text-2xl font-medium">
            Mentoring.
          </h1>
          <p className="md:pt-10 md:px-10 md:text-xl pt-4">
            Moral + mentoring services serve to make a lot of mentor to spread morality in a school, college and citizen.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:border-black md:border-b-2 p-4 md:p-0">
          <h1 className="md:pl-10 md:text-5xl md:pt-10 md:pr-10 md:font-medium text-2xl font-medium">
            Mediation
          </h1>
          <p className="md:pt-10 md:px-10 md:text-xl pt-4">
            Moral + mediation services serve a psicholog to mediation or taking care of bullying victim or mental health issue.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 p-4 md:p-0">
          <h1 className="md:pl-10 md:text-5xl md:pt-10 md:pr-10 md:font-medium text-2xl font-medium">
            Seminar Morality.
          </h1>
          <p className="md:pt-10 md:px-10 md:text-xl pt-4">
            Moral + seminar morality services serve a seminar in a campus, school, village and big stage (National TV). We need to spread morality to our element in life.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Services