import Image from "next/image";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/services/Services";
import Works from "../components/sections/works/works";
import About from "../components/sections/about";
import Profile from "../components/sections/portfolio/portfolio";
import Testimonials from "../components/sections/testimonials/testimonials";
import Contact from "../components/sections/contact/contact";
import Blogs from "../components/sections/blogs/blogs";

export default function Home() {
  return (
    <div className="">
      <main>
        <div className="relative">
          <section className="relative z-10">
            <Hero />
          </section>
          <section className="relative z-20 -mt-60 ">
            <Services />
          </section>
        </div>
        <Works/>
        <About/>
        <Profile/>
        <Testimonials/>
        <Contact/>
        <Blogs/>
      </main>
    </div>
  );
}
