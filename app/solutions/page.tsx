"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="flex flex-col">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            {/* Header Section */}
            <div className="pt-10 md:pt-20 w-full">
              <h1 className="text-3xl md:text-6xl font-avantgarde-bold leading-tight mb-8 md:mb-16 max-w-3xl text-[#212e21]">
                Comprehensive IT Infrastructure Solutions
              </h1>
            </div>
          
            {/* Colocation Section */}
            <div className="py-10 md:py-20 w-full">
              <div className="max-w-5xl space-y-8">
                <h3 className="text-3xl font-avantgarde-bold text-[#212e21] mb-6">Colocation</h3>
                <Image
                  src="/lake.jpg"
                  alt="Data Center Infrastructure"
                  width={1200}
                  height={600}
                  className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full"
                />
                <div className="space-y-6">
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    The data center industry has experienced unprecedented growth in recent years driven by the insatiable demand of cloud companies and high-density, GPU workloads. These trends have fueled capacity shortages and rising prices making it more difficult for many companies to source the right colocation space or guarantee they have the ability to expand in time.
                  </p>
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    Thanks to our unique institutional knowledge, Sokorro can quickly identify the providers and facilities that support your needs and then guide you to the optimal contract terms and pricing.
                  </p>
                </div>

                {/* Expertise List */}
                <div className="mt-12">
                  <h4 className="text-xl font-avantgarde-bold text-[#212e21] mb-6">Our Technical Expertise Includes:</h4>
                  <ul className="list-disc pl-6 space-y-4 text-[#212e21]">
                    <li>Strategic risk analysis of mission critical operations</li>
                    <li>Developing audit compliant processes and procedures</li>
                    <li>Operational expertise for site selection and infrastructure</li>
                    <li>Executing Level 5 IST commissioning protocols</li>
                    <li>Developing site specific staffing and technical training plans</li>
                    <li>Creating customer specific operating procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cloud Section */}
            <div className="py-10 md:py-20 w-full">
              <div className="max-w-5xl space-y-8">
                <h3 className="text-3xl font-avantgarde-bold text-[#212e21] mb-6">Cloud</h3>
                <Image
                  src="/5.avif"
                  alt="Cloud Computing Services"
                  width={1200}
                  height={300}
                  className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-[400px] object-cover"
                />
                <div className="space-y-6">
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    Cloud computing today encompasses a broad array of IT infrastructure services and software available on demand, over the Internet. Organizations of any size and across industries are leveraging the cloud to increase efficiency, improve performance and reduce costs.
                  </p>
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    Sokorro can help your company understand the market for these services and identify which components of your business are best suited to live in the cloud. Our capabilities include Infrastructure as a Service, Disaster Recovery as a Service, Desktop as a Service, Unified Communications as a Service and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Network Section */}
            <div className="py-10 md:py-20 w-full">
              <div className="max-w-5xl space-y-8">
                <h3 className="text-3xl font-avantgarde-bold text-[#212e21] mb-6">Network</h3>
                <Image
                  src="/tester.jpg"
                  alt="Network Infrastructure"
                  width={1200}
                  height={600}
                  className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full"
                />
                <div className="space-y-6">
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    Despite all the technological and regulatory change in the telecommunications industry procuring network connectivity is still a frustrating experience. Sure, increased commoditization of network services has driven down pricing but it's also led to consolidation and an inconsistent and confusing customer experience.
                  </p>
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                    As your trusted advisor Sokorro simplifies procurement of network services and takes on vendor diligence and the sales process. Our reach is global with services including IP transit, private line and Ethernet, SD-WAN and cloud connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}