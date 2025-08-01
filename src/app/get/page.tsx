"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Receipt,
  Users,
  Calculator,
  FileText,
  Smartphone,
  DollarSign,
  Search,
  Sparkles,
  TrendingUp,
  Shield,
  Laptop,
  ClipboardList,
  Palette,
  LayoutGrid,
  Cog,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar2 from "../navbar/Navbar2";
import Footer from "../footer/Footer";
export default function page() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="container mx-auto px-4 pt-12">
        <Navbar2 />
        <div className="text-center mb-16 mt-20">
          <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            Essential Business Management Tools
          </div>
          <h1 className="relative text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#16274e] to-[#362b5b] bg-clip-text text-transparent mb-3 animate-fade-in">
            Business Tools for African SMEs & Freelancers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            Smart, simple tools designed to help you run your business better,
            faster, and more professionally — proudly built by Roots and Squares
            Consulting LTD for Africa’s next generation of business leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#tools" scroll={true} passHref>
              <div className="bg-amber-600 hover:bg-[#362b5b] text-white px-8 py-2 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center rounded-md">
                Start Using Tools
                <Sparkles className="ml-2 h-5 w-5" />
              </div>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 hover:bg-gray-50 transition-all duration-300"
              onClick={() => router.push("/find-products")}
              disabled
            >
              <div className="flex flex-col items-center justify-center gap-0">
                <span className="text-lg font-semibold">Find Products</span>
                <span className="text-xs text-gray-800 font-normal">
                  Coming Soon
                </span>
              </div>
            </Button>
          </div>

          {!isLoggedIn && (
            <div className="mt-6" id="tools">
              <p className="text-sm text-gray-500 mb-3">
                Sign up to save your data and access your dashboard
              </p>
              <Button
                variant="ghost"
                asChild
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              >
                <a href="/auth/signup">Create Free Account →</a>
              </Button>
            </div>
          )}
        </div>

        <div className="text-center mb-10 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
            Everything You Need to Run Your Business Smarter
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 w-full">
          <Card
            className="group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border border-blue-300/40 hover:shadow-2xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer w-full flex flex-col min-h-[340px] sm:min-h-[360px] md:min-h-[380px] backdrop-blur-md"
            onClick={() => router.push("/invoice-generator")}
          >
            <div className="flex bg-[#16274e] text-white p-0 rounded-t-2xl group-hover:from-blue-700 group-hover:to-blue-500 transition-colors duration-300 flex-1">
              <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold mb-3 text-white drop-shadow-md">
                    Invoice & Receipt Generator
                  </CardTitle>
                  <CardDescription className="text-white leading-relaxed text-sm sm:text-base opacity-90">
                    Send branded invoices, track payments, and keep your records
                    organized.
                  </CardDescription>

                  <ul className="space-y-2 text-xs sm:text-sm text-white mt-6">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Create and share invoices via WhatsApp or email
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Generate receipts in seconds
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Save all transactions securely
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-[40%] sm:w-[45%] relative overflow-hidden flex-shrink-0 bg-[#16274e] flex items-center justify-center transition-colors duration-300 border-l-2 border-[#16274e]">
                <Receipt className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white opacity-90 drop-shadow-xl" />
              </div>
            </div>

            <div className="p-3 sm:p-4 text-center rounded-b-2xl border-t border-blue-200 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
              <Button
                className="w-full bg-amber-600  hover:bg-[#16274e] transition-colors duration-300 text-white py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-xl shadow-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/invoice-generator");
                }}
              >
                Create Invoice
              </Button>
            </div>
          </Card>

          <Card
            className="group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border border-blue-300/40 hover:shadow-2xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer w-full flex flex-col min-h-[340px] sm:min-h-[360px] md:min-h-[380px] backdrop-blur-md"
            onClick={() => router.push("/credit-tracker")}
          >
            <div className="flex bg-[#16274e] text-white p-0 rounded-t-2xl group-hover:from-blue-700 group-hover:to-blue-500 transition-colors duration-300 flex-1">
              <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold mb-3 text-white drop-shadow-md">
                    Inventory & Bulk Calculator
                  </CardTitle>
                  <CardDescription className="text-white leading-relaxed text-sm sm:text-base opacity-90">
                    Track your stock and set smart prices for bulk or resale.
                  </CardDescription>

                  <ul className="space-y-2 text-xs sm:text-sm text-white mt-6">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Monitor what’s in stock and update as you sell
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Calculate bulk prices with cost, markup, and profit
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Save inventory and pricing data with an account
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-[40%] sm:w-[45%] sm:hidden relative overflow-hidden flex-shrink-0 bg-[#16274e] flex items-center justify-center transition-colors duration-300 border-l-2 border-[#16274e]">
                <Users className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white opacity-90 drop-shadow-xl" />
              </div>
            </div>

            <div className="p-3 sm:p-4 text-center rounded-b-2xl border-t border-blue-200 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
              <Button
                className="w-full bg-amber-600  hover:bg-[#16274e] transition-colors duration-300 text-white py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-xl shadow-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/calculator-inventory");
                }}
              >
                Calculate Pricing
              </Button>
            </div>
          </Card>

          <Card
            className="group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 border border-blue-300/40 hover:shadow-2xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer w-full flex flex-col min-h-[340px] sm:min-h-[360px] md:min-h-[380px] backdrop-blur-md"
            onClick={() => router.push("/calculator-inventory")}
          >
            <div className="flex bg-[#16274e] text-white p-0 rounded-t-2xl group-hover:from-blue-700 group-hover:to-blue-500 transition-colors duration-300 flex-1">
              <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold mb-3 text-white drop-shadow-md">
                    Customer & Credit Tracker
                  </CardTitle>
                  <CardDescription className="text-white leading-relaxed text-sm sm:text-base opacity-90">
                    Know who owes you, what they bought, and when they’ll pay.
                  </CardDescription>

                  <ul className="space-y-2 text-xs sm:text-sm text-white mt-6">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Track credits, debtors, and payment history
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      View long-term customer behavior
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      Store customer records with a free account
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-[40%] sm:w-[45%] relative overflow-hidden flex-shrink-0 bg-[#16274e] flex items-center justify-center transition-colors duration-300 border-l-2 border-[#16274e]">
                <Calculator className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white opacity-90 drop-shadow-xl" />
              </div>
            </div>

            <div className="p-3 sm:p-4 text-center rounded-b-2xl border-t border-blue-200 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
              <Button
                className="w-full bg-amber-600  hover:bg-[#16274e] transition-colors duration-300 text-white py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-xl shadow-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/credit-tracker");
                }}
              >
                Track Credits
              </Button>
            </div>
          </Card>
        </div>
        {/* note3 */}
        <div className="flex items-center justify-center mt-7">
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
              className="bg-amber-600 hover:bg-[#16274e] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
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
        <Footer />
      </div>
    </>
  );
}
