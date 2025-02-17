"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Row 1: Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Company Details */}
          <div>
            <h2 className="text-xl font-bold">AAS Infotech Pvt Ltd</h2>
            <p className="mt-2 text-gray-400">
              <strong>CORPORATE OFFICE</strong>
              <br />
              Plot No. 52, Bapuji Nagar, Unit-1 Main Street, <br />
              Forest Park, Bhubaneswar, Khordha, Odisha, India 751009
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Icons */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-6 h-6 hover:text-blue-500" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-6 h-6 hover:text-blue-400" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-6 h-6 hover:text-pink-500" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-6 h-6 hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} AAS Infotech Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
