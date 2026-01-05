import Link from 'next/link';

const caseStudies = [
  {
    title: 'Sports & Entertainment',
    description:
      'A national sports league engaged our team to build a modern, cloud-native, API-powered data technology stack, enabling a "one-stop global" and unified digital experience.',
  },
  {
    title: 'Manufacturing Company',
    description:
      'A manufacturing company who is a leader in Welded Liquid Cooled Cold Plates and Smart Thermal...',
  },
  {
    title: 'Revamping Care Services with Intuit',
    description:
      'The NDIS-aged care provider had been using a complex legacy system which was hindering their employees\' productivity and digital transformation. They went...',
  },
  {
    title: 'Streamlining HR with Automation',
    description:
      'The NDIS-aged care provider faced significant challenges in managing its complex HR touchpoint process, extending internal days to some instances...',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[28px] font-normal text-black mb-3">Case Studies</h2>
          <p className="text-black/60 text-base">
            Explore our latest projects and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] p-6 flex flex-col"
            >
              {/* Title */}
              <h4 className="text-base font-medium text-black mb-2">{study.title}</h4>

              {/* Description */}
              <p className="text-black/60 text-sm leading-relaxed mb-4 flex-grow">{study.description}</p>

              {/* Learn more button */}
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-cyan-500 text-white text-sm font-medium px-4 py-2 rounded-full mt-auto w-fit"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
