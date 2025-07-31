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
import Navbar2 from "./navbar/Navbar2";
import Footer from "./footer/Footer";

const testimonials = [
  {
    name: "Aisha Mohammed",
    title: "Owner, Aisha's Fabrics",
    quote:
      "Business Bright Tools transformed how I manage my inventory and invoices. The smart invoice generator is a game-changer for my fabric business. Highly recommended!",
    image: "AM",
  },
  {
    name: "Emeka Obi",
    title: "CEO, Emeka's Electronics",
    quote:
      "The Intelligent Credit Tracker is a lifesaver! I can now predict payment patterns and send timely reminders, drastically reducing my bad debts. Fantastic support too.",
    image: "EO",
  },
  {
    name: "Funke Alabi",
    title: "Founder, Funke's Foodstuffs",
    quote:
      "Finding the best deals on bulk foodstuffs used to be a nightmare. With the Enhanced Product Finder, I save hours and always get the best prices. It's truly brilliant.",
    image: "FA",
  },
  {
    name: "Chinedu Eze",
    title: "Manager, Chinedu's Logistics",
    quote:
      "The Smart Bulk Calculator helped me optimize my pricing strategy, leading to a significant increase in profit margins. The AI insights are incredibly accurate.",
    image: "CE",
  },
  {
    name: "Grace Ojo",
    title: "Entrepreneur, Graceful Styles",
    quote:
      "As a fashion entrepreneur, staying on top of invoices and credits is crucial. This platform makes it so easy and efficient. The mobile design is a plus!",
    image: "GO",
  },
  {
    name: "David Idowu",
    title: "Trader, David's Provisions",
    quote:
      "The ability to generate professional invoices and track credits all in one place has streamlined my entire operation. This is exactly what Nigerian businesses need.",
    image: "DI",
  },
];

const faqs = [
  {
    question: "Who are these tools designed for?",
    answer:
      "Our business tools are built for African entrepreneurs, small business owners, freelancers, and startup founders who want simple, reliable solutions to manage sales, inventory, and customers — whether you're selling online, in a store, or offering services.",
  },
  {
    question: "Is it really free to use?",
    answer:
      "Yes, you can use all the tools for free. You don’t need to pay to generate invoices, track customers, or calculate pricing. However, signing up gives you access to powerful features like saved data, branded documents, and full dashboard control — at no cost.",
  },
  {
    question: "Why should I create an account?",
    answer:
      "By signing up, you unlock: Branded invoices, receipts, and inventory reports with your business name and logo; Save your sales records, customer lists, and stock; Download anytime from your dashboard; Stay updated as we roll out more features tailored for African SMEs. It’s free and only takes a few seconds.",
  },
  {
    question: "Can I create branded receipts and invoices?",
    answer:
      "Yes! Once signed in, you can create professional, branded invoices and receipts that include your logo, business name, and contact information — giving your customers a trusted, polished experience.",
  },
  {
    question: "Can I share documents via WhatsApp or email?",
    answer:
      "Absolutely. You can send invoices and receipts instantly via WhatsApp or email, making it easy to get paid faster and stay professional — no matter where you are.",
  },
  {
    question: "Is there a tool to manage customers who owe me?",
    answer:
      "Yes. The Credit Tracker helps you monitor who owes you, how much they owe, and their payment history — reducing the risk of lost income and helping you follow up easily.",
  },
  {
    question: "How can I manage stock or inventory?",
    answer:
      "The Inventory Manager allows you to: Add and update products; Track what’s selling; Get alerts when stock is low. Sign in to save your full inventory and access your product catalog anytime.",
  },
  {
    question: "Will my business data be secure?",
    answer:
      "Yes. All your business information — invoices, inventory, and customer records — is stored securely and accessible only to you when logged in. We follow best practices in digital data protection.",
  },
  {
    question: "Do I need to download an app?",
    answer:
      "No app is needed. Just visit bizengo.com on any phone or computer to access all tools — optimized for mobile, tablet, and desktop.",
  },
  {
    question: "Can I use this from my phone?",
    answer:
      "Yes. All our tools are built to work perfectly on mobile — giving African business owners the freedom to work from anywhere.",
  },
  {
    question: "Who built these tools?",
    answer:
      "These tools are built by Roots and Squares Consulting LTD — a leading tech, design, and innovation company based in Nigeria and serving businesses across Africa. We’ve helped startups build platforms like: KREDIBET (sports & fintech); Riggle Africa (real estate); EncycloAMTs (eLearning + aviation tech). We're not just building tools — we’re building Africa’s digital future.",
  },
  {
    question: "Can Roots and Squares help me build my own platform or product?",
    answer:
      "Yes. If you're starting a new business or want to scale what you have, we offer expert services to help you build from idea to reality: Web & Mobile App Development; Product Documents (Pitch Decks, PRDs, Strategy); Branding & Logos; UI/UX & Product Design; IT & Tech Strategy Consulting. Talk to Us — let’s bring your idea to life.",
  },
];

const Index = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const faqsToDisplay = showAllFaqs ? faqs : faqs.slice(0, 5);

  useEffect(() => {
    const email = sessionStorage.getItem("RSEmail");

    if (email) {
      setIsLoggedIn(true);
    }
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f1ece5] overflow-x-hidden">
      <div className="container mx-auto px-4 pt-12">
        {/* navbar section */}
        <Navbar2 />

        {/* hero section */}
        {/* <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center gap-8 md:gap-0 lg:gap-0 px-2 md:px-0 lg:px-0">
          <div className="text-center mb-8 md:mb-0 max-w-full md:max-w-[500px] lg:max-w-[600px] mx-auto md:mx-0 lg:mx-0 flex-1">
            <div className="inline-flex items-center gap-2 bg-[#99895e] text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Essential Business Management Tools
            </div>
            <h1 className="relative text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#16274e] to-[#362b5b] bg-clip-text text-transparent mb-3 animate-fade-in">
              Powering Smarter African Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
              Smart, simple tools designed to help you run your business better,
              faster, and more professionally — proudly built by Roots and
              Squares Consulting LTD for Africa’s next generation of business
              leaders.
            </p>

            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <Link href="/get">
                <div className="bg-[#99895e] hover:bg-[#cfc5aa] text-white px-8 py-2 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center rounded-md">
                  Get Started
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
                  className="text-[#99895e] hover:bg-blue-50"
                >
                  <a href="/auth/signup">Create Free Account →</a>
                </Button>
              </div>
            )}
          </div>
          <div className="w-full flex justify-center items-center flex-1 mb-8 md:mb-0">
            <Image
              src="https://www.aimtechnologies.co/wp-content/uploads/2023/12/Data-Analysis-of-Social-Media.png"
              alt="shop"
              width={500}
              height={500}
              className="object-cover rounded-xl shadow-lg w-full max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-auto animate-fade-in"
              priority
            />
          </div>
        </div> */}

        <div className="absolute inset-0 opacity-10 z-[-1]">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-amber-300 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-orange-300 rotate-12"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 border-2 border-amber-400 -rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-orange-400 rotate-45"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full mt-[6rem]  lg:p-[1rem]">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Powering
              <br />
              Smarter
              <br />
              African
              <br />
              Businesses
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Track sales, Plan inventory.
              <br />
              Manage growth — all in
              <br />
              one place.
            </p>
            <Link href="/get">
              <Button
                asChild
                className="bg-amber-600 hover:bg-[#16274e] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                size="lg"
              >
                <span>Get Started</span>
              </Button>
            </Link>
          </div>

          {/* Right side - Dashboard mockup */}
          <div className="flex-1 flex justify-center lg:justify-end w-full mt-[3rem]">
            <div className="relative w-full flex justify-center">
              {/* Tablet frame */}
              <div
                className="bg-slate-800 p-3 sm:p-4 md:p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg animate-float"
                style={{ minWidth: "0" }}
              >
                <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                  {/* Dashboard content */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 h-full">
                    {/* Pie Chart */}
                    <div className="flex items-center justify-center">
                      <div className="relative w-14 h-14 sm:w-20 sm:h-20">
                        <div
                          className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-8 border-slate-800"
                          style={{
                            background: `conic-gradient(from 0deg, #1e293b 0deg 120deg, #94a3b8 120deg 240deg, #f59e0b 240deg 360deg)`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="flex items-end justify-center gap-0.5 sm:gap-1 relative">
                      <div className="w-2 bg-amber-400 h-5 sm:w-3 sm:h-8 rounded-t"></div>
                      <div className="w-2 bg-amber-500 h-8 sm:w-3 sm:h-12 rounded-t"></div>
                      <div className="w-2 bg-amber-400 h-4 sm:w-3 sm:h-6 rounded-t"></div>
                      <div className="w-2 bg-amber-500 h-6 sm:w-3 sm:h-10 rounded-t"></div>
                      <div className="w-2 bg-amber-600 h-10 sm:w-3 sm:h-16 rounded-t"></div>
                      <div className="w-1 h-2 bg-amber-300 rounded-full absolute top-1 right-4 sm:w-2 sm:h-3 sm:top-2 sm:right-8">
                        <div className="w-0.5 h-0.5 bg-amber-600 rounded-full ml-0.5 mt-0.5"></div>
                      </div>
                    </div>

                    {/* Store Icon */}
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-8 sm:w-16 sm:h-12 bg-amber-500 rounded-t-lg relative">
                        <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-amber-600 rounded-t-lg"></div>
                        <div className="absolute bottom-0 left-1 right-1 h-5 sm:left-2 sm:right-2 sm:h-8 bg-amber-400 rounded"></div>
                        <div className="absolute bottom-1 left-2 right-2 h-2 sm:bottom-2 sm:left-4 sm:right-4 sm:h-4 bg-white rounded"></div>
                      </div>
                    </div>

                    {/* Checkmark and smaller pie chart */}
                    <div className="flex items-center justify-between">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded flex items-center justify-center">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-slate-800"
                        style={{
                          background: `conic-gradient(from 0deg, #1e293b 0deg 180deg, #94a3b8 180deg 360deg)`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of hero section */}

        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 w-full mx-auto mt-[5rem]">
          {/* Smart Inventory Tracking Card */}
          <div className="bg-[#f1ece5] rounded-lg shadow-sm border border-amber-600/20 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-100 p-6 text-center transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.12 2 2 3.12 2 4.5v15C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.12 20.88 2 19.5 2zM20 19.5c0 .28-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v15z" />
                <circle cx="12" cy="8" r="1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Smart Inventory <br /> Tracking
            </h3>
            <p className="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
              Know what's in stock, <br /> what's low, and <br /> when to
              restock.
            </p>
          </div>

          {/* Sales & Payment Insights Card */}
          <div className="bg-[#f1ece5] rounded-lg shadow-sm border border-amber-600/20 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-100 p-6 text-center transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
              </svg>
            </div>
            <h3 className="text-xl  font-semibold text-gray-900 mb-2">
              Sales & Payment <br /> Insights
            </h3>
            <p className="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
              Real-time reports <br /> to boost profitability.
            </p>
          </div>

          {/* Business Planning Tools Card */}
          <div className="bg-[#f1ece5] rounded-lg shadow-sm border border-amber-600/20 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-100 p-6 text-center transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                <path d="M8,12V14H16V12H8M8,16V18H13V16H8Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Business Planning <br /> Tools
            </h3>
            <p className="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
              Forecast growth <br /> and simplify daily <br /> operations.
            </p>
          </div>
        </div>
        {/* end of cards */}
        {/* note 1 */}
        {/* <div className="flex items-center justify-center bg-amber-600 w-[100%] h-[50px]">
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-bold ">
            Built by <span className="text-black">Root and Squares</span>{" "}
          </p>
        </div> */}
        {/* end of note 1 */}

        {/* note 2 */}
        {/* <div className="flex items-center justify-center mt-4">
          <p className="text-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold  ">
            Bizengo helped me cut losses and grow sales in 3 months." <br />
            -Ade,Retail Owner In Lagos
          </p>
        </div> */}
        {/* note 2 */}

        <div className="bg-transparent rounded-3xl p-8 md:p-12 mt-[4rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Perfect for Nigerian Businesses & Consumers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Mobile-First Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized for smartphone use, perfect for on-the-go business
                management and shopping across Nigeria.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Naira-Friendly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built specifically for Nigerian currency, business practices,
                and local market dynamics.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Professional Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Generate professional documents and insights that make your
                business look established and trustworthy.
              </p>
            </div>
          </div>
        </div>

        <div className="relative py-16 bg-[#16274e]  rounded-3xl p-8 md:p-12 mt-[4rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-3xl"></div>
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Our Users Say
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mt-4">
              Hear from Nigerian entrepreneurs who are thriving with Business
              Bright Tools.
            </p>
          </div>

          <div className="relative overflow-hidden w-full z-10">
            <div className="flex flex-col items-center gap-6 sm:hidden">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Card
                  key={`mobile-testimonial-${index}`}
                  className="w-full max-w-sm border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-xl"
                >
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl ring-2 ring-amber-600">
                      <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform duration-300 ring-2 ring-amber-600">
                        {testimonial.image}
                      </div>
                    </div>
                    <p className="text-lg italic text-gray-700 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="hidden sm:flex animate-marquee gap-8 w-max pb-4">
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <Card
                  key={`desktop-testimonial-${index}`}
                  className="flex-shrink-0 w-[300px] md:w-[320px] lg:w-[350px] p-4 border-none shadow-lg bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-xl"
                >
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl ring-2 ring-blue-300">
                      <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform duration-300 ring-2 ring-amber-600">
                        {testimonial.image}
                      </div>
                    </div>
                    <p className="text-lg italic text-gray-700 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-transparent rounded-3xl p-8 md:p-12 mt-[4rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {faqsToDisplay.map((faq, index) => (
              <AccordionItem key={`faq-${index}`} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex justify-end mt-8">
              <Button
                variant="ghost"
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              >
                {showAllFaqs ? "See Less FAQS" : "See More FAQs →"}
              </Button>
            </div>
          </div>
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
          <Link href="/get">
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
        <Footer />
      </div>
    </div>
  );
};

export default Index;
