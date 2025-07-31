import React from "react";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { Palette, Laptop, ClipboardList, Cog } from "lucide-react";
export default function Footer() {
  return (
    <>
      {/* end of of note 4 */}
      <footer className="bg-[#16274e]  rounded-3xl p-8 md:p-12 mb-20 text-slate-800 relative overflow-hidden mt-[4rem] shadow-2xl">
        <div className="absolute inset-0 bg-[#16274e]/80 backdrop-blur-md rounded-3xl"></div>
        <div className="relative z-10">
          <div className="text-center mb-12 mt-4 bg-[#16274e] rounded-2xl py-8 px-4 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Backed by Roots and Squares Consulting LTD
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              <strong className="text-blue-200">
                We don’t just build tools — we build startups.
              </strong>
              <br />
              <span className="text-blue-100">
                Helping African and Global founders and startups turn bold ideas
                into profitable products.
              </span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:shadow-blue-300 transition-all duration-300 shadow-xl border border-blue-300/30">
                <Laptop className="h-10 w-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-blue-700">
                Web & Mobile Apps
              </h3>
              <p className="text-white leading-relaxed">
                Fast, scalable websites and mobile apps for African startups.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:shadow-pink-200 transition-all duration-300 shadow-xl border border-pink-300/30">
                <ClipboardList className="h-10 w-10 text-pink-700 drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-pink-700">
                Product Strategy
              </h3>
              <p className="text-white leading-relaxed">
                Investor-ready pitch decks, PRDs, and business plans.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:shadow-purple-200 transition-all duration-300 shadow-xl border border-purple-300/30">
                <Palette className="h-10 w-10 text-purple-700 drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-purple-700">
                Brand Identity & Logos
              </h3>
              <p className="text-white leading-relaxed">
                Standout brand identity tailored for your market.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:shadow-orange-200 transition-all duration-300 shadow-xl border border-orange-300/30">
                <LayoutGrid className="h-10 w-10 text-orange-700 drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-orange-700">
                UI/UX & Product Design
              </h3>
              <p className="text-white leading-relaxed">
                Simple, stunning user experiences that convert.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:shadow-green-200 transition-all duration-300 shadow-xl border border-green-300/30">
                <Cog className="h-10 w-10 text-green-700 drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-green-700">
                Tech Consulting
              </h3>
              <p className="text-white leading-relaxed">
                Smart tech planning to grow and digitize your business.
              </p>
            </div>
          </div>
          <hr className="border border-blue-300 border-opacity-70 mt-12 mb-4" />

          <nav className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-x-8 sm:gap-x-16  gap-y-4 text-sm text-white">
              <li>
                <a
                  href="https://rootsnsquares.com/#contact"
                  className="text-white hover:text-blue-200 font-semibold transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://rootsnsquares.com/"
                  className="text-white hover:text-blue-200 font-semibold transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-blue-200 font-semibold transition-colors duration-200"
                >
                  Tools
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.rootsnsquares.com/"
                  className="text-white hover:text-blue-200 font-semibold transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      <p className="text-center text-white text-sm my-8">
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://rootsnsquares.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-200 hover:underline font-semibold transition-colors duration-200"
        >
          Roots & Squares Consulting
        </a>
        . All rights reserved.
      </p>
    </>
  );
}
