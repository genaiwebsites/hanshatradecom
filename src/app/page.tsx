import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <RevealObserver />
      <Header />
      <main id="top">
        <Hero />
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
