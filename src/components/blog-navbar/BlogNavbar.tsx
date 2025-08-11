// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function BlogNavbar(): JSX.Element {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const toggleMenu = (): void => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* navbar container */}
//       <div className="fixed left-0 right-0 top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg px-5 py-3 mb-8">
//         <div className="flex items-center justify-between w-full">
//           <div className="flex items-center gap-5">
//             {/* logo */}
//             <div className="flex items-center gap-2">
//               <Link href="/" className="focus:outline-none">
//                 <Image
//                   src="/images/Bizengo_logo.png"
//                   alt="logo"
//                   width={120}
//                   height={120}
//                   className="mx-auto md:mx-0 cursor-pointer"
//                 />
//               </Link>
//             </div>
//             {/* end of logo */}

//             {/* desktop links */}
//             <ul className="hidden lg:flex items-center gap-5">
//               <li>
//                 <a
//                   href="#"
//                   className="text-[14px] lg:text-[16px] xl:text-[18px] hover:text-[#F7941F] transition-colors duration-200"
//                 >
//                   Solution
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-[14px] lg:text-[16px] xl:text-[18px] hover:text-[#F7941F] transition-colors duration-200"
//                 >
//                   Shipping
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-[14px] lg:text-[16px] xl:text-[18px] hover:text-[#F7941F] transition-colors duration-200"
//                 >
//                   Resources
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-[14px] lg:text-[16px] xl:text-[18px] hover:text-[#F7941F] transition-colors duration-200"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//             {/* end of desktop links */}
//           </div>

//           {/* desktop login buttons */}
//           <div className="hidden lg:flex items-center gap-4">
//             <a href="/auth/login">
//               <button className="text-[14px] lg:text-[16px] xl:text-[18px] hover:text-[#F7941F] transition-colors duration-200">
//                 Login
//               </button>
//             </a>
//             <a href="/auth/signup">
//               <button className="text-[14px] lg:text-[16px] xl:text-[18px] text-[#FFFFFF] bg-[#F7941F] px-[15px] py-[10px] font-sans rounded-[7px] hover:bg-black transition-colors duration-200">
//                 Signup
//               </button>
//             </a>
//           </div>
//           {/* end of desktop login buttons */}

//           {/* mobile hamburger button */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${
//                 isMenuOpen ? "rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-200 ${
//                 isMenuOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${
//                 isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//           {/* end of mobile hamburger button */}
//         </div>

//         {/* mobile dropdown menu */}
//         <div
//           className={`lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg transition-all duration-300 ${
//             isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//         >
//           <div className="px-5 py-4 space-y-4">
//             {/* mobile navigation links */}
//             <ul className="space-y-3">
//               <li>
//                 <a
//                   href="#"
//                   className="block text-[16px] hover:text-[#F7941F] transition-colors duration-200 py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Solution
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block text-[16px] hover:text-[#F7941F] transition-colors duration-200 py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Shipping
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block text-[16px] hover:text-[#F7941F] transition-colors duration-200 py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Resources
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block text-[16px] hover:text-[#F7941F] transition-colors duration-200 py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>

//             {/* mobile login buttons */}
//             <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
//               <a href="/auth/login" onClick={() => setIsMenuOpen(false)}>
//                 <button className="w-full text-left text-[16px] hover:text-[#F7941F] transition-colors duration-200 py-2">
//                   Login
//                 </button>
//               </a>
//               <a href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
//                 <button className="w-full text-[16px] text-[#FFFFFF] bg-[#F7941F] px-4 py-3 font-sans rounded-[7px] hover:bg-black transition-colors duration-200">
//                   Signup
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* end of mobile dropdown menu */}
//       </div>
//     </>
//   );
// }
