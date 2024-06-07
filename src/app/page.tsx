import "@/css/bootstrap.min.css";
import "@/css/unicons.css";
import "@/css/owl.carousel.min.css";
import "@/css/owl.theme.default.min.css";

import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import About from "@/components/about";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <About />

      <Project />

      <Features />

      <Contact />

      <Footer />
    </>
  );
}
