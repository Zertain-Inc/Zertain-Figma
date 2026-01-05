'use client';

import { Compass, Cog, Brain, Code, Bot, GraduationCap } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Strategic Guidance',
    description:
      'We collaborate with you to understand your business goals and craft a tailored hyperautomation strategy that delivers the outcomes you need',
    icon: Compass,
    color: 'text-blue-600',
  },
  {
    id: 2,
    title: 'Process Automation',
    description:
      'We help organizations automate repetitive tasks, minimize errors, and free employees to focus on high-value work.',
    icon: Cog,
    color: 'text-purple-600',
  },
  {
    id: 3,
    title: 'Decision Automation',
    description:
      'We leverage advanced technologies such as AI and machine learning to automate decision-making processes, improving accuracy and efficiency.',
    icon: Brain,
    color: 'text-pink-600',
  },
  {
    id: 4,
    title: 'Low-Code/No-Code',
    description:
      'We provide low-code/no-code solutions to simplify automation, accelerate workflows, and speed up hyperautomation success',
    icon: Code,
    color: 'text-cyan-600',
  },
  {
    id: 5,
    title: 'Workbot',
    description:
      'Zertain uses Workbots to streamline processes, cut costs, and drive digital transformation.',
    icon: Bot,
    color: 'text-indigo-600',
  },
  {
    id: 6,
    title: 'Training and Adoption',
    description:
      'We provide training and support to ensure smooth adoption of hyperautomation and maximize its benefits',
    icon: GraduationCap,
    color: 'text-emerald-600',
  },
];

export default function Features() {
  return (
    <section className="bg-white w-full py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - single title, matching Figma */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal text-black">
            Empowering organizations through
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-black/80 text-lg max-w-3xl mx-auto mb-12">
          We help organizations achieve their goals through hyperautomation with
          end-to-end services—from strategy to support. Whether optimizing a
          single process or transforming the entire enterprise, our expertise
          ensures success.
        </p>

        {/* Services Grid Container - single cyan gradient */}
        <div
          className="rounded-[40px] p-8 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(97deg, rgba(40,214,253,0.26) 0%, rgba(40,214,253,0.1) 100%)'
          }}
        >
          {/* Services Grid - tighter gap */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <article key={service.id} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-4">
                  <service.icon className={`w-14 h-14 ${service.color}`} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h4 className="text-lg font-medium text-black mb-3">
                  {service.title}
                </h4>

                {/* Description - updated text opacity */}
                <p className="text-black/80 text-base leading-relaxed max-w-[295px]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}