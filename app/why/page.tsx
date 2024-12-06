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
                    Over the years Sokorro has helped hundreds of companies evaluate and compare technologies from our vendor ecosystem. We love solving problems, no matter the size, but have been lucky to work with prominent companies in the social media, gaming and broadcast industries. Thanks to this unique body of experience, Sokorro can guide you to the right solution, every time.
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
                      Sokorro is a team of seasoned IT professionals with decades of experience sourcing and implementing complex technology solutions. We understand the market for IT services is vast and characterized by constant change but it's our native habitat. We stay abreast of emerging technologies and service providers to ensure that our clients can leverage the latest and greatest. Sokorro has the market intelligence, experience and relationships to guide you to the right solution, every time.
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
                      While many IT providers rely upon the same underlying technologies the customer experience can be wildly different from one to the next. Commercial terms, provisioning timeframes and support are just a few of the variables that can affect your satisfaction. Sokorro knows the ins and outs of each vendor in our portfolio and provides unbiased insight into their differentiators. By clearly understanding your business needs our goal is to recommend vendors that not only deliver but become your trusted partner.
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
                      No more wasting time researching technologies and sitting through meetings with multiple vendors. Sokorro provides a single interface to thousands of IT infrastructure products and services enabling faster and better decision making. We create efficiencies in the diligence and procurement process by acting as your advocate, managing the sales process and leveraging our expertise to quickly guide you to the winner. Best of all we don't charge customers for our service.
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