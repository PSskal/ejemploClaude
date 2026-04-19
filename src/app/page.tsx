import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Locations from "@/components/Locations";
import Sustainability from "@/components/Sustainability";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Locations />
        <Sustainability />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
