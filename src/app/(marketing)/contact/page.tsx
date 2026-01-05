import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Zertain - Enterprise Hyperautomation',
  description: 'Get in touch with Zertain. Schedule a demo, request a consultation, or reach our support team for enterprise automation solutions.',
};

const contactMethods = [
  {
    icon: Calendar,
    title: 'Schedule a Demo',
    description: 'See Zertain in action with a personalized demo tailored to your use cases.',
    cta: 'Book Demo',
    link: '#demo',
  },
  {
    icon: MessageSquare,
    title: 'Sales Inquiry',
    description: 'Connect with our sales team to discuss pricing, deployment, and enterprise plans.',
    cta: 'Contact Sales',
    link: '#sales',
  },
  {
    icon: Mail,
    title: 'Support',
    description: 'Existing customers can reach our 24/7 support team for technical assistance.',
    cta: 'Get Support',
    link: '#support',
  },
];

const offices = [
  {
    city: 'Sydney',
    country: 'Australia',
    address: 'Level 10, 123 Business Street',
    timezone: 'AEST (UTC+10)',
    type: 'Headquarters',
  },
  {
    city: 'San Francisco',
    country: 'USA',
    address: '456 Market Street, Suite 800',
    timezone: 'PST (UTC-8)',
    type: 'Americas',
  },
  {
    city: 'London',
    country: 'UK',
    address: '789 Tech Lane, Floor 5',
    timezone: 'GMT (UTC+0)',
    type: 'EMEA',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Automation Journey
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re ready for a demo, have questions about our platform,
              or need support, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-gray-400 mb-6">{method.description}</p>
                <Link
                  href={method.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  {method.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="demo" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Request a Demo</h2>
              <p className="text-gray-400 text-lg mb-8">
                Fill out the form and our team will reach out within 24 hours to schedule
                your personalized demo.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Quick Response</h3>
                    <p className="text-gray-400 text-sm">We respond within 24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Personalized Demo</h3>
                    <p className="text-gray-400 text-sm">Tailored to your specific use cases</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Expert Consultation</h3>
                    <p className="text-gray-400 text-sm">Speak directly with automation experts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                    placeholder="CTO, VP of Operations, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What are you looking to automate?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Request Demo
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Offices</h2>
            <p className="text-gray-400">Global presence to support your automation needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {office.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {office.city}, {office.country}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{office.address}</p>
                <p className="text-gray-500 text-sm">{office.timezone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Prefer Direct Contact?</h2>
              <p className="text-gray-400">Reach us through these channels</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:hello@zertain.com" className="text-white hover:text-cyan-400 transition-colors">
                    hello@zertain.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+1800123456" className="text-white hover:text-cyan-400 transition-colors">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
