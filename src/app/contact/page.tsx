import Navbar from '@/components/Navbar'
import Footer from '../components/footer/page'

const Contact = () => {
  return (
   <>
   <Navbar/>
   <div className="md:grid md:grid-rows-10 md:h-[120vh] md:w-full flex flex-col bg-[#E7EB5D]">
        <div className="border-black border-b-2 md:row-span-4 p-4">
          <h1 className="md:text-2xl text-xl font-medium md:pt-5 md:pl-10">Contact us</h1>
          <p className="md:pl-10 md:text-6xl md:pt-24 md:pr-72 pt-2">
          Get in touch for a chat, and get answers to any questions you might have.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:row-span-6 md:p-10 p-4">
            <div>
                <a href="" className='md:text-5xl text-xl font-semibold md:font-semibold'>hello@moral.tech</a>
                <p className='md:text-2xl md:pt-8'>Book a meeting</p>
            </div>
            <div>
                <h1 className='md:text-5xl md:font-semibold text-xl font-semibold pt-4'>Moral +</h1>
                <p className='md:text-2xl md:pt-5'>Org. nr. 911</p>

                <h3 className='md:text-4xl md:font-medium md:pt-12 text-xl font-semibold pt-4'>Yogyakarta Office</h3>
                <p className='md:text-xl md:pt-5'>Blok D nr. 3 Pogung Baru</p>
                <p className='md:text-xl'>Yogyakarta</p>

                <h3 className='md:text-4xl md:font-medium md:pt-12 text-xl font-semibold pt-4'>Jakarta Office</h3>
                <p className='md:text-xl md:pt-5'>Jakarta Selatan Firza's House</p>
                <p className='md:text-xl'>Jakarta</p>
            </div>
        </div>
      </div>
      <Footer/>
   </>
  )
}

export default Contact