import Navbar from "@/components/Navbar";
import Footer from "./components/footer/page";
import Hero from "./components/hero/page";
import Hero1 from "./components/hero1/page";
import Hero2 from "./components/hero2/page";
import Testimoni from "./components/testimoni/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Hero1/>
      <Hero2/>
      <Testimoni/>
      <Footer/>
    </div>
  );
}
