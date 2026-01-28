"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Our Solutions" },
    { href: "/projects", label: "Projects" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ],
  solutions: [
    { href: "/solutions#cfe", label: "24x7 Carbon Free Energy" },
    { href: "/solutions#hydrogen", label: "Hydrogen Solution" },
    { href: "/solutions#dispatchable", label: "Dispatchable Green Energy" },
    { href: "/solutions#transformation", label: "Green Transformation" },
  ],
  regions: [
    { href: "/projects#japan", label: "Japan" },
    { href: "/projects#taiwan", label: "Taiwan" },
    { href: "/projects#singapore", label: "Singapore" },
    { href: "/projects#india", label: "India" },
    { href: "/projects#usa", label: "United States" },
  ],
};

const offices = [
  {
    country: "UK",
    address: "Suite 5, 7th Floor, 50 Broadway, London, SW1H 0DB",
  },
  {
    country: "Japan",
    address: "Cross Office Mita 5F, 5-29-20 Shiba, Minato-ku, Tokyo",
  },
  {
    country: "Taiwan",
    address: "14F, No. 206, Section 1, Keelung Rd, Xinyi District, Taipei",
  },
  {
    country: "Singapore",
    address: "1 Yishun Industrial Street 1, A'Posh Biz Hub",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cool-graphite to-[#021428] text-white">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                {/* Hydrogen Symbol */}
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 rounded-full border-2 border-white/30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-energetic-blue" />
                  <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-energetic-blue" />
                </div>
                <span className="text-3xl font-bold tracking-wide">HOKU</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Tomorrow&apos;s Power, Today&apos;s Reality. Leading the transition to a
              sustainable energy future through green hydrogen and clean fuel
              solutions.
            </p>
            <div className="flex gap-4">
              {["linkedin", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-energetic-blue transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social === "linkedin" && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                    {social === "twitter" && (
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    )}
                    {social === "youtube" && (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-energetic-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-energetic-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Regions</h4>
            <ul className="space-y-3">
              {footerLinks.regions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-energetic-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h4 className="text-lg font-semibold mb-8">Global Offices</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.country} className="group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-energetic-blue" />
                  <span className="font-semibold">{office.country}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Hoku Energy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <div className="absolute inset-0 rounded-full border-[40px] border-white" />
      </div>
    </footer>
  );
}
