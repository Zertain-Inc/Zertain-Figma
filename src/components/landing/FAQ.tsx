'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does hyperautomation help businesses achieve better outcomes?',
    answer:
      'Hyperautomation combines multiple technologies like AI, ML, RPA, and low-code platforms to automate complex business processes end-to-end, resulting in increased efficiency, reduced costs, and improved accuracy.',
  },
  {
    question: "What is your experience in delivering hyperautomation projects for clients?",
    answer:
      'We have successfully delivered 100+ hyperautomation projects across various industries including healthcare, manufacturing, finance, and retail, helping businesses achieve significant ROI.',
  },
  {
    question: 'What makes us a leader in hyperautomation?',
    answer:
      'Our deep expertise in multiple automation technologies, certified professionals, proven methodologies, and strategic partnerships with leading platforms make us industry leaders.',
  },
  {
    question: 'What is hyperautomation?',
    answer:
      'Hyperautomation is an approach that combines technologies like RPA, AI, ML, and process mining to automate as many business processes as possible, going beyond simple task automation.',
  },
  {
    question: 'What is the difference between automation and hyperautomation?',
    answer:
      'While automation focuses on automating individual tasks, hyperautomation takes a holistic approach to automate entire workflows using a combination of advanced technologies.',
  },
  {
    question: "What is your process for monitoring and maintaining hyperautomation solutions?",
    answer:
      'We provide 24/7 monitoring, proactive maintenance, regular performance reviews, and continuous optimization to ensure your automation solutions run smoothly.',
  },
  {
    question: 'What are the benefits of hyperautomation?',
    answer:
      'Key benefits include reduced operational costs, improved accuracy, faster processing times, enhanced compliance, better customer experience, and scalability.',
  },
  {
    question: 'What services do you offer for hyperautomation?',
    answer:
      'We offer strategy consulting, process assessment, solution design, implementation, integration, training, and ongoing managed services for hyperautomation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[28px] font-normal text-black mb-3">
            Frequently Asked Question&apos;s
          </h2>
          <p className="text-black/60 text-base max-w-3xl mx-auto">
            Blending business insight and technology to deliver excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-[20px] overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-medium text-black pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-sm text-black/60 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
