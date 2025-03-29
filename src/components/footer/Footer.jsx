"use client";

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {

  const pathname = usePathname();
  return (
    <footer className={`bg-[#00566b] text-white py-12 ${pathname === "/" || pathname === "/home" || pathname === "/about" || pathname === "/contact" || pathname === "/products-page" || pathname === "/products-desc" ? "block" : "hidden"}`}>
      {/* Footer Container */}
      <div className="w-5/6  m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src="./images/logo-W.png" alt="Logo" />
            <p className="text-sm ">Aladdin for everyone order regular and become a prime customer.</p>

            {/* Social Media Icons */}
            <div className="flex space-x-2 pt-2">
              <Link href="#" className="bg-white/90 text-[#00566b] p-2 rounded-md hover:bg-white transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-white/90 text-[#00566b] p-2 rounded-md hover:bg-white transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="bg-white/90 text-[#00566b] p-2 rounded-md hover:bg-white transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-white/90 text-[#00566b] p-2 rounded-md hover:bg-white transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="bg-white/90 text-[#00566b] p-2 rounded-md hover:bg-white transition-colors">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Culture
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Getting started
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Server status
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Report a bug
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Chat support
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Downloads</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  iOS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Android
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Mac
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Windows
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Chrome
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Copyright */}
        <div className="text-sm text-white/80 flex justify-center items-center">
          <p>
            Copyright © 2025 Aladdin Templates | All Rights Reserved |
            <Link href="#" className="hover:underline ml-1">
              Terms and Conditions
            </Link>{" "}
            |
            <Link href="#" className="hover:underline ml-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

