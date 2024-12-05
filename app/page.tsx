"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#ebfc72]">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#ebfc72] z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-4 text-[#212e21]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {["About", "Why", "Solutions", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#212e21] text-2xl hover:opacity-75 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-4 md:py-8">
        <nav className="flex justify-between items-center py-6 w-full">
          <div className="text-[#212e21]">
            <Image
              src="/sk-logo.png"
              alt="Sokorro Logo"
              width={80}
              height={80}
              className="w-[60px] md:w-[100px]"
            />
          </div>
          <div className="hidden md:flex gap-8">
            {["About", "Why", "Solutions", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#212e21] hover:opacity-75 transition-opacity"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden text-[#212e21]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        <div className="pt-10 md:pt-20 w-full">
          <h1 className="text-4xl md:text-8xl font-avantgarde-bold mb-4 text-[#212e21] max-w-3xl">
            Sokorro...
          </h1>
          <h2 className="text-3xl md:text-6xl font-avantgarde-bold leading-tight mb-8 md:mb-16 max-w-3xl text-[#212e21]">
            Your Data Center Advisory and IT Infrastructure Partner.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start max-w-5xl">
            <Image
              src="/castle.jpg"
              alt="Lighthouse on rocky coast"
              width={800}
              height={600}
              className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-auto"
            />
            <div className="space-y-6">
              <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                Sokorro is a highly-experienced team of data center and network experts. We connect buyers of IT infrastructure with the best providers and solutions.
              </p>
              <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                Sokorro demystifies the market for technology services empowering faster and better decision making. We'd love to show you how we help companies maximize the potential of their IT delivering optimized outcomes and minimizing headaches along the way.
              </p>
              <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                At Sokorro, we simplify IT infrastructure procurement into a streamlined and enjoyable experience.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 md:py-20 w-full">
          <h2 className="text-4xl font-bold mb-20 text-[#212e21] max-w-3xl">
            Solving complex IT challenges, together.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl">
            <div className="space-y-6">
              <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                Our team is dedicated to helping you navigate the complex and dynamic market landscape ensuring you find the ideal solutions tailored to your specific needs.
              </p>
              <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                Sokorro shoulders the burden of sales engagement managing the vendor selection and quoting process guiding you to the optimal contract terms and pricing.
              </p>
            </div>
            <Image
              src="/rock1.png"
              alt="Rock climbing scene"
              width={800}
              height={600}
              className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

