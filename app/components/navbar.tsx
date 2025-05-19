"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-8xl mx-auto px-6 py-3 flex justify-between items-center text-[#4D5557]">
        {/* Logo */}
        <Link href="/" className="text-2xl font-cursive font-bold">
          Logo
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-1xl font-medium">
          <Link href="/" className="hover:underline">
            Home Page
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/products" className="hover:underline">
            Products
          </Link>

          {/* Dropdown */}
          <div className="relative z-100" ref={dropdownRef}>
            <button
              className="flex items-center hover:underline"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              Offerings <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-[#f6cf92] border border-black shadow-lg">
                <Link
                  href="/courses"
                  className="block px-4 py-2 hover:bg-[#4A1A11] hover:text-white"
                >
                  Raiki Courses
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#4A1A11] hover:text-white"
                >
                  Astrology Insights
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#4A1A11] hover:text-white"
                >
                  Yoga Practices
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#4A1A11] hover:text-white"
                >
                  Tarot Readings
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Link href="/admin">
            <button className="px-4 py-2 border border-black rounded">
              Admin
            </button>
          </Link>
          <button className="px-4 py-2 bg-black text-white rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
