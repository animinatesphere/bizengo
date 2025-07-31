import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useState } from "react";

export default function Navbar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 w-full bg-white bg-opacity-95 backdrop-blur-md shadow-sm px-8 py-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Link href="/" className="focus:outline-none">
              <Image
                src="/images/Bizengo_logo.png"
                alt="logo"
                width={100}
                height={100}
                className="mx-auto md:mx-0 cursor-pointer"
              />
            </Link>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex flex-wrap gap-2 items-center justify-end">
            <Button
              variant="outline"
              asChild
              className="border-none bg-transparent"
            >
              <Link href="/about">About</Link>
            </Button>
            {isLoggedIn ? (
              <Button
                asChild
                className="bg-gradient-to-r from-[#16274e] to-[#362b5b] hover:from-[#141d31] hover:to-[#3f316c] text-white"
              >
                <Link href="/about">About</Link>
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  asChild
                  className="hover:bg-gray-50 transition-colors duration-300"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
                <Button
                  asChild
                  className="bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors duration-300"
                >
                  <Link href="/get">Tools</Link>
                </Button>
                <Button
                  asChild
                  className="bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors duration-300"
                >
                  <Link href="/blog">Blog</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#16274e] hover:bg-[#141d31] text-white"
                >
                  <Link href="/auth/signup">Signup</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#16274e] hover:bg-[#141d31] text-white"
                >
                  <Link href="/auth/login">Login</Link>
                </Button>
              </>
            )}
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-[#99895e] border-[#99895e] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 bg-white rounded-lg shadow-lg p-4 z-50">
            <Button
              variant="outline"
              asChild
              className="border-none bg-transparent w-full justify-start"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="#">About</Link>
            </Button>
            {isLoggedIn ? (
              <Button
                asChild
                className="bg-[#16274e] hover:bg-[#141d31] text-white w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/about">About</Link>
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  asChild
                  className="hover:bg-gray-50 transition-colors duration-300 w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/contact">Contact</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#16274e] hover:bg-[#141d31] text-white w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/get">Tools</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#16274e] hover:bg-[#141d31] text-white w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/blog">Blog</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/auth/signup">Signup</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/auth/login">Login</Link>
                </Button>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
