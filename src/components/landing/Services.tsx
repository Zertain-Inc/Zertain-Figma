'use client';

import { Link2, Code2, Layers, ArrowUpCircle, ClipboardCheck, CloudUpload } from 'lucide-react';

const leftColumnServices = [
  {
    id: 1,
    icon: Link2,
    title: 'Managed iPaaS',
    description:
      'Seamlessly connect applications and data with cloud-based integration, handled end-to-end by our experts.',
  },
  {
    id: 2,
    icon: Code2,
    title: 'Low-Code/No-Code Development',
    description:
      'Quickly create custom applications without coding complexity, accelerating innovation and reducing costs.',
  },
  {
    id: 3,
    icon: Layers,
    title: 'Full-Stack Managed Services',
    description:
      'Real-time monitoring, data validation, analytics, and proactive support to keep your operations running smoothly.',
  },
];

const rightColumnServices = [
  {
    id: 1,
    icon: ArrowUpCircle,
    title: 'Application Modernization',
    description:
      'Upgrade legacy applications to modern platforms for better performance and functionality.',
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: 'Assessment & Planning',
    description:
      'Evaluate your IT operations and create tailored strategies to improve scalability and cut costs.',
  },
  {
    id: 3,
    icon: CloudUpload,
    title: 'Cloud Migration',
    description:
      'Move apps and data to the cloud securely with minimal disruption and maximum efficiency.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#eeeaff] w-full py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-[28px] font-normal text-black">
            Our Services
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-black/80 text-lg max-w-2xl mx-auto mb-12">
          Streamline operations, integrate systems, and automate workflows to
          boost efficiency, productivity, and profitability.
        </p>

        {/* Two Column Services */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card - Managed Platform Services (Cyan) */}
          <div
            className="rounded-3xl p-6 md:p-8 lg:p-10"
            style={{ backgroundColor: 'rgba(40, 214, 253, 0.35)' }}
          >
            {/* Card Header */}
            <h3 className="text-lg font-medium text-black text-center mb-3">
              Managed platform services
            </h3>
            <p className="text-black/80 text-base text-center mb-8 max-w-md mx-auto">
              Integrate systems, automate workflows, and build custom apps to boost
              efficiency and reduce costs.
            </p>

            {/* Services List */}
            <div className="space-y-10">
              {leftColumnServices.map((service) => (
                <div key={service.id} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <service.icon className="w-14 h-14 text-blue-600" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-medium text-black mb-2">
                      {service.title}
                    </h4>
                    <p className="text-black/80 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Cloud & DevOps Services (Pink) */}
          <div
            className="rounded-3xl p-6 md:p-8 lg:p-10"
            style={{ backgroundColor: 'rgba(255, 54, 218, 0.22)' }}
          >
            {/* Card Header */}
            <h3 className="text-lg font-medium text-black text-center mb-3">
              Cloud & DevOps Services
            </h3>
            <p className="text-black/80 text-base text-center mb-8 max-w-md mx-auto">
              Zertain&apos;s Cloud & DevOps optimize operations, reduce costs,
              and enhance scalability.
            </p>

            {/* Services List */}
            <div className="space-y-10">
              {rightColumnServices.map((service) => (
                <div key={service.id} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <service.icon className="w-14 h-14 text-purple-600" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-medium text-black mb-2">
                      {service.title}
                    </h4>
                    <p className="text-black/80 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}