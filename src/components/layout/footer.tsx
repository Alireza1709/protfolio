import React from "react";
import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../ui/logo";

const Footer = () => {
  return (
    <section className="w-full bg-black pt-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
            <div className='flex justify-between items-center w-full max-md:flex-col max-md:justify-center max-md:gap-y-5'>
                <h2 className='text-c5 text-5xl max-xl:text-4xl max-md:text-3xl'>Lets Connect <span className='text-c1'>there</span></h2>
                <Link href={'/contact'} className=" group  h-14 px-8 max-md:h-12 max-md:text-sm max-md:px-6 rounded-2xl flex items-center gap-2 border-c1 border-1 hover:bg-c1 text-white font-normal transition-all duration-300 hover:scale-105 ">
                    Hire Me
                    <ArrowUpRight size={20} className=" transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 max-md:w-4"/>
                </Link>
            </div>

          <div className="h-0.5 rounded-full w-full bg-[#475467] my-20 max-md:my-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full pb-12 max-lg:gap-12">
            {/* LEFT */}
            <div className="flex flex-col">
              <Link href="/" className="">
                <Logo/>
              </Link>

              <p className="text-[#98A2B3] text-base leading-7 max-w-md mt-5 max-md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
              </p>

              <div className="flex items-center gap-3 mt-8">
                <Link href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-[#475467] flex items-center justify-center text-white hover:bg-c1 hover:border-c1 transition-all duration-300">
                  <FaLinkedinIn size={17} />
                </Link>

                <Link href="#" aria-label="GitHub" className="w-10 h-10 rounded-full border border-[#475467] flex items-center justify-center text-white hover:bg-c1 hover:border-c1 transition-all duration-300">
                  <FaGithub size={18} />
                </Link>

                <Link href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#475467] flex items-center justify-center text-white hover:bg-c1 hover:border-c1 transition-all duration-300">
                  <FaInstagram size={18} />
                </Link>

                <Link href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-[#475467] flex items-center justify-center text-white hover:bg-c1 hover:border-c1 transition-all duration-300">
                  <FaYoutube size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1 max-md:gap-10">
              {/* NAVIGATION */}
              <div className="flex flex-col">
                <h3 className="text-c1 text-lg font-medium">Navigation</h3>

                <div className="flex flex-col gap-4 mt-6">
                  <Link href="/" className="text-[#98A2B3] hover:text-c1 transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-[#98A2B3] hover:text-c1 transition-colors">
                    About
                  </Link>
                  <Link href="/works" className="text-[#98A2B3] hover:text-c1 transition-colors">
                    Works
                  </Link>
                  <Link href="/blog" className="text-[#98A2B3] hover:text-c1 transition-colors">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-[#98A2B3] hover:text-c1 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

              {/* CONTACT */}
              <div className="flex flex-col">
                <h3 className="text-c1 text-lg font-medium">Contact</h3>

                <div className="flex flex-col gap-4 mt-6">
                  <a href="tel:+989000000000" className="text-[#98A2B3] hover:text-c1 transition-colors">
                    +98 900 000 0000
                  </a>

                  <a href="mailto:hello@example.com" className="text-[#98A2B3] hover:text-c1 transition-colors break-all">
                    hello@example.com
                  </a>

                  <p className="text-[#98A2B3] leading-6">
                    Iran, Tehran
                  </p>
                </div>
              </div>

              {/* NEWSLETTER */}
              <div className="flex flex-col">
                <h3 className="text-c1 text-[16px] font-medium">
                  Get the latest information
                </h3>

                <div className="relative w-full mt-6 h-14 rounded-xl overflow-hidden border border-[#475467]">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-full bg-transparent text-c4 bg-white placeholder:text-[#98A2B3] outline-none px-4 pr-14 text-sm"
                  />

                  <button
                    aria-label="Send email"
                    type="submit"
                    className="absolute top-0 right-0 h-full w-11 bg-c1 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Send size={19} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-0.5 rounded-full w-full bg-[#475467]"></div>

          <div className="w-full flex items-center justify-between py-6 text-sm text-[#98A2B3] max-md:flex-col max-md:gap-3">
            <p>Copyright© 2023 Fawziuiux. All Rights Reserved.</p>
            <p>User Terms & Conditions | Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

