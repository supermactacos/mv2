import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <nav className="flex justify-between items-center py-6 w-full">
          <div className="text-[#212e21]">
            <Image
              src="/sk-logo.png"
              alt="Sokorro Logo"
              width={100}
              height={100}

            />
          </div>
          <div className="flex gap-8">
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
        </nav>

        <div className="pt-20 w-full">
          <h1 className="text-8xl font-avantgarde-bold mb-4 text-[#212e21] max-w-3xl">
            Sokorro...
          </h1>
          <h2 className="text-6xl font-avantgarde-bold leading-tight mb-16 max-w-3xl text-[#212e21]">
            Your Data Center Advisory and IT Infrastructure Partner.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl">
            <Image
              src="/castle.jpg"
              alt="Lighthouse on rocky coast"
              width={800}
              height={600}
              className="rounded-sm  shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
            />
            <div className="space-y-6">
              <p className="text-lg font-avantgarde-bk text-[#212e21]">
                Sokorro is a highly-experienced team of data center and network experts. We connect buyers of IT infrastructure with the best providers and solutions.
              </p>
              <p className="text-lg font-avantgarde-bk text-[#212e21]">
                Sokorro demystifies the market for technology services empowering faster and better decision making. We'd love to show you how we help companies maximize the potential of their IT delivering optimized outcomes and minimizing headaches along the way.
              </p>
              <p className="text-lg font-avantgarde-bk text-[#212e21]">
                At Sokorro, we simplify IT infrastructure procurement into a streamlined and enjoyable experience.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20 w-full">
          <h2 className="text-4xl font-bold mb-20 text-[#212e21] max-w-3xl">
            Solving complex IT challenges, together.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl">
            <div className="space-y-6">
              <p className="text-lg font-avantgarde-bk text-[#212e21]">
                Our team is dedicated to helping you navigate the complex and dynamic market landscape ensuring you find the ideal solutions tailored to your specific needs.
              </p>
              <p className="text-lg font-avantgarde-bk text-[#212e21]">
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

