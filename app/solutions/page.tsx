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
              Enterprise Data Center & Colocation Solutions
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
                  The data center industry is experiencing unprecedented growth, driven by cloud computing demands and GPU-intensive workloads. This surge has created significant capacity constraints and pricing pressures, making strategic colocation decisions more critical than ever.
                  </p>
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                  Our deep institutional knowledge enables us to rapidly identify optimal providers and facilities for your needs, securing the best contract terms and pricing while ensuring scalability for your future growth.
                  </p>
                </div>

                {/* Expertise List */}
                <div className="mt-12">
                  <h4 className="text-xl font-avantgarde-bold text-[#212e21] mb-6">Our Technical Expertise Includes:</h4>
                  <ul className="list-disc pl-6 space-y-4 text-[#212e21]">
                    <li>Strategic site selection and risk analysis for mission-critical operations</li>
                    <li>Custom operating procedures and compliance framework development</li>
                    <li>Infrastructure planning and capacity optimization</li>
                    <li>Technical specification development and validation</li>
                    <li>Comprehensive commissioning and deployment oversight</li>
                    <li>Strategic staffing and operational training programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cloud Section */}
            <div className="py-10 md:py-20 w-full">
              <div className="max-w-5xl space-y-8">
                <h3 className="text-3xl font-avantgarde-bold text-[#212e21] mb-6">Strategic Cloud Advisory</h3>
                <Image
                  src="/5.avif"
                  alt="Cloud Computing Services"
                  width={1200}
                  height={300}
                  className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-[400px] object-cover"
                />
                <div className="space-y-6">
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                  In today's hybrid IT landscape, enterprise cloud solutions deliver critical infrastructure and services that drive business transformation. Strategic cloud adoption enables organizations to scale efficiently, enhance performance, and optimize costs while maintaining operational flexibility.
                  </p>
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                  We understand that cloud decisions are complex and intertwined with your overall infrastructure strategy. Our expertise helps identify which cloud services complement your existing operations, ensuring any cloud adoption aligns with your business objectives and infrastructure requirements. We provide independent guidance on when and where cloud solutions make sense for your organization, always considering your existing investments and operational needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Network Section */}
            <div className="py-10 md:py-20 w-full">
              <div className="max-w-5xl space-y-8">
                <h3 className="text-3xl font-avantgarde-bold text-[#212e21] mb-6">Network Infrastructure Solutions</h3>
                <Image
                  src="/tester.jpg"
                  alt="Network Infrastructure"
                  width={1200}
                  height={600}
                  className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full"
                />
                <div className="space-y-6">
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                  The telecommunications landscape continues to evolve rapidly, with new technologies and providers emerging constantly. While network services have become more commoditized and cost-effective, navigating provider options and securing optimal solutions has grown increasingly complex.
                  
                  </p>
                  <p className="text-base md:text-lg font-avantgarde-bk text-[#212e21]">
                  As your independent advisor, we simplify network infrastructure procurement by managing vendor evaluation and the entire sales process. Our global expertise spans IP transit, private line, Ethernet, SD-WAN, and cloud connectivity solutions - ensuring you get the right services at the right price.
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