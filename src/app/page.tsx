import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Company from "@/components/Company";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Leadership from "@/components/Leadership";
import Quality from "@/components/Quality";
import Logistics from "@/components/Logistics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Company />
        <Products />
        <Process />
        <Leadership />
        <Quality />
        <Logistics />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
