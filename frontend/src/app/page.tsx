import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facts from "@/components/Facts";
import Rooms from "@/components/Rooms";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="container-fluid p-0">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Facts />
      <Rooms />
      <Features />
      <Services />
      <Contact />
      <Blog />
      <Footer />
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  );
}
