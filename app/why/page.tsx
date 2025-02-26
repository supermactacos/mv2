"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Why() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="flex flex-col">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            <div className="pt-10 md:pt-20">
              <h1 className="text-4xl md:text-8xl font-avantgarde-bold mb-8 md:mb-16 text-[#212e21]">
                Why?
              </h1>

              {/* Intro Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start mb-20">
                <div className="w-full aspect-[16/11] mb-6 md:mb-0">
                  <Image
                    src="/1.avif"
                    alt="Technology Solutions"
                    width={2000}
                    height={1500}
                    className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    priority
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                  We've helped hundreds of enterprises navigate sophisticated technology decisions with particular expertise in sectors like social media, gaming, and broadcasting. This specialized experience enables Sokorro to deliver transformative results for mission-critical infrastructure needs.

                  </p>
                </div>
              </div>

              {/* Three Pillars Section */}
              <div className="space-y-20 md:space-y-32">
                {/* Knowledgeable Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-avantgarde-bold text-[#212e21]">
                      Knowledgeable
                    </h2>
                    <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Our multi-disciplined team delivers deep insights and strong industry relationships in the dynamic and rapidly evolving IT marketplace. We stay abreast of emerging technologies, services and vendors within our partner ecosystem to ensure clients can always access the most performant solutions available.
                    </p>
                  </div>
                  <div className="w-full aspect-[16/11]">
                    <Image
                      src="/2.avif"
                      alt="Knowledge and Expertise"
                      width={2000}
                      height={1500}
                      className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Objective Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
                  <div className="w-full aspect-[16/11] md:order-2">
                    <Image
                      src="/3.avif"
                      alt="Objective Analysis"
                      width={2000}
                      height={1500}
                      className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="space-y-6 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-avantgarde-bold text-[#212e21]">
                      Objective
                    </h2>
                    <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    While IT providers may use similar technologies, the customer experience varies dramatically. From commercial terms to provisioning timeframes and quality of support, multiple factors impact your success. Our vendor-neutral analysis provides clear insights into capabilities and limitations, ensuring we recommend partners who consistently deliver.
                    </p>
                  </div>
                </div>

                {/* Convenient Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start pb-10">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-avantgarde-bold text-[#212e21]">
                      Convenient
                    </h2>
                    <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    We eliminate the time-consuming process of researching technologies, engaging multiple vendors for bids and qualifying and benchmarking proposals. As your advocate, we orchestrate the entire journey from evaluation and procurement to ongoing support. Best of all? Our service is provided at no cost to you.
                    </p>
                  </div>
                  <div className="w-full aspect-[16/11] ">
                    <Image
                      src="/4.avif"
                      alt="Convenient Solutions"
                      width={2000}
                      height={1500}
                      className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}