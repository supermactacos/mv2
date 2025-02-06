"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import Link from 'next/link';
import TypingAnimation from "@/components/ui/typing-animation";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="flex flex-col">
        <Navbar />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            <div className="pt-6 md:pt-20">
              <h1 className="mb-2 md:mb-4 max-w-4xl pr-40 md:pr-60">
                <span className="hidden md:block -ml-[1%]">
                  <GradualSpacing
                    className="text-4xl md:text-9xl font-avantgarde-bold text-[#212e21] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-center"
                    text="Sokorro..."
                  />
                </span>
                <span className="md:hidden text-4xl font-avantgarde-bold text-[#212e21] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-center">
                  Sokorro...
                </span>
              </h1>
              <h2 className="text-3xl md:text-7xl font-avantgarde-bold leading-tight mb-6 md:mb-16 max-w-4xl text-[#212e21]">
                Your Data Center Advisory and Infrastructure Partner.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
                <div className="w-full aspect-[16/11] mb-6 md:mb-0">
                  <Image
                    src="/castle.jpg"
                    alt="Lighthouse on rocky coast"
                    width={2000}
                    height={1500}
                    className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    priority
                  />
                </div>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Our highly-experienced team of data center and network experts. We connect buyers of IT infrastructure with the best providers and solutions.
                  </p>
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                  We demystify the technology services market, empowering faster and better decision-making. By managing the complexities of infrastructure procurement, we help companies maximize their IT investments while minimizing headaches.
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                  Our proven process transforms complex IT decisions into streamlined, successful outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-8 md:py-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-20 text-[#212e21]">
                Solving complex IT challenges, together.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
                <div className="space-y-4 md:space-y-6 mb-6 md:mb-0">
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Our team is dedicated to helping you navigate the complex and dynamic market landscape ensuring you find the ideal solutions tailored to your specific needs.
                  </p>
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Sokorro shoulders the burden of sales engagement managing the vendor selection and quoting process guiding you to the optimal contract terms and pricing.
                  </p>
                </div>
                <div className="w-full aspect-[16/11]">
                  <Image
                    src="/rock1.png"
                    alt="Rock climbing scene"
                    width={2000}
                    height={1500}
                    className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
