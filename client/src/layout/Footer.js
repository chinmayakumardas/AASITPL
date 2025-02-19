"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-2 py-8 min-h-[50vh] flex justify-around">
      <div className="container mx-auto px-4 flex flex-col justify-around">
        {/* Row 1: Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Address and Contact Details */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">AAS Information Technology</h2>
            <p className="mt-2 ">
              <strong>CORPORATE OFFICE</strong>
              <br />
              Plot No. 52, Bapuji Nagar, Unit-1 Main Street, <br />
              Forest Park, Bhubaneswar, Khordha, Odisha, India 751009
            </p>
            <p className="mt-2">
              <strong>Contact Us:</strong>
              <br />
              Email: info@aasit.com
              <br />
              Mobile: +91 12345 67890
            </p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0575992117087!2d85.82251607469429!3d20.25644581385726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a70011040d15%3A0xe41a86c1b6d241fd!2sAAS%20International%20Private%20limited!5e0!3m2!1sen!2sin!4v1739928219180!5m2!1sen!2sin" 
                width="300" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
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
                <Link href="/career" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-gray-300">
                  Case studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/web-development" className="hover:text-gray-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/mobile-apps" className="hover:text-gray-300">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/cloud-services" className="hover:text-gray-300">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="hover:text-gray-300">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
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
        <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm flex justify-between">
          <div>Copyright© {new Date().getFullYear()} AAS Information Technology.</div>
          <div className="flex gap-2">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
            <a href="/cookies" className="hover:underline">Cookies</a> | 
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
