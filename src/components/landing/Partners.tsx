'use client';

import Image from 'next/image';

// All partner logos from /public/logos/ (sizes respected correctly)
const partnerLogos = [
  { src: '/logos/creatio.png', alt: 'Creatio', width: 280, height: 96 },
  { src: '/logos/caspio.png', alt: 'Caspio', width: 260, height: 96 },
  { src: '/logos/workato.png', alt: 'Workato', width: 280, height: 96 },
  { src: '/logos/aws.png', alt: 'AWS', width: 180, height: 96 },
  { src: '/logos/coredna.png', alt: 'CoreDNA', width: 260, height: 96 },
  { src: '/logos/microsoft.png', alt: 'Microsoft Partner', width: 150, height: 41 },
  { src: '/logos/telstra.png', alt: 'Telstra', width: 240, height: 96 },
  { src: '/logos/snowflake.png', alt: 'Snowflake', width: 280, height: 96 },
  { src: '/logos/bmc.png', alt: 'BMC', width: 200, height: 96 },
  { src: '/logos/gulanga.png', alt: 'Gulanga', width: 240, height: 96 },
  { src: '/logos/odoo_logo.png', alt: 'Odoo', width: 140, height: 54 },
];

export default function Partners() {
  return (
    <section className="py-6 bg-white overflow-hidden" aria-label="Our Partners">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-4">
        <p className="text-center text-sm font-semibold text-slate-600 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div
          className="flex"
          style={{
            width: 'fit-content',
            animation: 'partner-scroll 35s linear infinite',
          }}
        >
          {/* First set */}
          {partnerLogos.map((logo, index) => (
            <div key={`first-${index}`} className="shrink-0 flex items-center justify-center px-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-auto object-contain opacity-100 hover:opacity-100 transition-opacity"
                priority
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {partnerLogos.map((logo, index) => (
            <div key={`second-${index}`} className="shrink-0 flex items-center justify-center px-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-auto object-contain opacity-100 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Screen reader */}
      <div className="sr-only">
        <h2>Our Partners</h2>
        <ul>
          {partnerLogos.map((logo, i) => (
            <li key={i}>{logo.alt}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
