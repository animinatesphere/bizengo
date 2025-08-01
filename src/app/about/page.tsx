"use client";
import { Card } from "@/components/ui/card";
import { ClipboardList, FileText } from "lucide-react";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
 
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#16274e] flex flex-col w-full">
      <Navbar2 />
      <div className="flex-1 flex items-start justify-start px-0 py-12 mt-16 relative overflow-hidden w-full">
        <div className="w-full relative z-10">
          <div className="relative mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight pl-4">
              ABOUT
            </h1>
            {/* Blue accent shape as background, behind the card */}
            <div className="absolute top-0 right-0 w-40 h-32 z-[-1] pointer-events-none hidden sm:block">
              <div className="absolute w-40 h-32 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-full opacity-80"></div>
              <div className="absolute w-28 h-20 top-8 left-8 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full opacity-60"></div>
            </div>
          </div>
          <Card className="bg-white rounded-tr-[10rem] z-0 shadow-xl p-7 md:p-10 w-full mx-auto flex flex-col items-center justify-center text-left sm:text-center sm:mt-[1rem]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center sm:text-center px-2 sm:px-0 break-words">
              Built for Africa's Boldest Businesses
            </h2>
            <p className="max-w-[500px] text-gray-700 text-[12px] mb-4 text-base md:text-lg text-center sm:text-center">
              Bizengo is a smart business suite tailored to empower{" "}
               SMEs and freelancers across Africa
              with worldale tools  to simplify
              operations, finance, inventory, and 
              planning.
            </p>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-center sm:text-center">
              Run Smarter. Grow Faster. Stay in Control.
            </h3>
            <p className=" max-w-[300px] text-gray-700 mb-6 text-base md:text-lg text-center sm:text-center">
              From sales to research. Bizengo is locally inspired,{" "}
              
              globally built — world help you thrive on your terms
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 w-full max-w-2xl mx-auto justify-center text-left sm:text-center">
              <div className="bg-[#f6f8fa] rounded-xl p-4 sm:p-6 shadow group flex flex-col items-center text-center w-full md:w-fit">
                <div className="flex items-center justify-center w-fit p-1 rounded-full mb-3 bg-amber-600 ">
                  <FileText className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 text-center sm:text-center">
                  For Small Businesses
                </h4>
                <ul className="list-none space-y-2 text-gray-700 text-xs md:text-sm text-left sm:text-center">
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Track
                    sales, inventory, and suppliers with ease
                  </li>
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Automate
                    bulk order calculations and restocking
                  </li>
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Access
                    smart reports to guide every decision
                  </li>
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Manage
                    debtors, pricing, and trends in one place
                  </li>
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Research
                    tools to understand market dimands
                  </li>
                </ul>
              </div>
              <div className="bg-[#f6f8fa] rounded-xl p-4 sm:p-6 shadow group flex flex-col items-center text-center w-full md:w-fit">
                <div className="flex items-center justify-center w-fit p-1 rounded-full bg-amber-600 mb-3 ">
                  <ClipboardList className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 text-left sm:text-center">
                  For Freelancers on the Move
                </h4>
                <ul className="list-none space-y-2 text-gray-700 text-xs md:text-sm text-left sm:text-center">
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Send
                    instant invoices and receipts in minutes
                  </li>
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Monitor
                    cash flow, expenses, and project
                  </li>
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Manage
                    inventory for many products or services easily
                  </li>
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Track
                    creditors and get payment alerts on time
                  </li>
                  <li className="flex items-center gap-2 justify-start sm:justify-center">
                    <span className="text-blue-600 font-bold">✓</span>Calculate
                    bulk orders and offer client discounts
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 w-full flex flex-col items-center">
              <p className="text-white font-semibold mb-1 text-center px-4 py-2 rounded-lg bg-amber-600 w-fit">
                Powered by Roots and Squares Consulting
              </p>
              <h4 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
                One Tool. Unlimited Growth.
              </h4>
            </div>
  {/* note3 */}
        <div className="flex items-center justify-center mt-12">
          <p className="text-center text-[16px] sm:text-[18px] md:text-[23px] lg:text-[33px] font-bold ">
            Ready to grow your business the smarter way?
          </p>
        </div>

        {/* end of note3 */}

        {/* note4 */}
        <div className="flex items-center justify-center gap-3 mt-8 mb-4">
          <Link href="/contact">
            <Button
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              size="lg"
            >
              <span>Get Started</span>
            </Button>
          </Link>

          <Link href="/about">
            <Button
              asChild
              className="bg-[#16274e] hover:bg-[#141d31] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              size="lg"
            >
              <span>Learn More</span>
            </Button>
          </Link>
        </div>
          </Card>
  
        </div>
      </div>
  
      <Footer />
    </div>
  );
}
