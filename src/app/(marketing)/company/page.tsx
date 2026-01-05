import { Metadata } from 'next';
import { Target, Eye, Users, Award, Handshake, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Company | Zertain - Enterprise Hyperautomation',
  description: 'Learn about Zertain: our mission, leadership team, company values, and partnership ecosystem powering enterprise automation.',
};

const leadership = [
  {
    name: 'Executive Leadership',
    members: [
      { name: 'CEO', role: 'Chief Executive Officer', description: 'Driving vision and strategy' },
      { name: 'CTO', role: 'Chief Technology Officer', description: 'Leading platform innovation' },
      { name: 'COO', role: 'Chief Operating Officer', description: 'Scaling global operations' },
      { name: 'CFO', role: 'Chief Financial Officer', description: 'Financial strategy and growth' },
    ],
  },
];

const values = [
  {
    icon: Target,
    title: 'Customer Obsession',
    description: 'Every decision starts with the customer. We measure success by the outcomes we deliver.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We set the highest standards for our platform, our service, and ourselves.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as one team with our customers, partners, and each other to achieve shared goals.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We communicate openly, share knowledge freely, and build trust through honesty.',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Zertain established to solve enterprise integration challenges' },
  { year: '2019', title: 'First Enterprise Client', description: 'Fortune 500 bank becomes anchor customer' },
  { year: '2020', title: 'Platform Launch', description: 'Full hyperautomation platform released' },
  { year: '2021', title: 'Series A', description: '$25M funding to accelerate growth' },
  { year: '2022', title: '100 Clients', description: 'Crossed 100 enterprise customer milestone' },
  { year: '2023', title: 'Global Expansion', description: 'Opened offices in EU and APAC' },
  { year: '2024', title: '500+ Clients', description: 'Serving 500+ enterprises globally' },
];

const partners = [
  { name: 'AWS', type: 'Cloud Partner' },
  { name: 'Microsoft', type: 'Technology Partner' },
  { name: 'Salesforce', type: 'Integration Partner' },
  { name: 'Workato', type: 'Platform Partner' },
  { name: 'Snowflake', type: 'Data Partner' },
  { name: 'ServiceNow', type: 'Integration Partner' },
];

export default function CompanyPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              About Zertain
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Enterprises to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Achieve More
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              We believe automation should be accessible, powerful, and transformative.
              Zertain exists to help enterprises unlock their full potential through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg">
                To democratize hyperautomation and enable every enterprise to operate at the
                speed of innovation, freeing human potential for work that truly matters.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg">
                A world where every organization has the tools to automate intelligently,
                integrate seamlessly, and transform continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-400 text-lg">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 inline-block">
                      <span className="text-cyan-400 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-white font-semibold mt-1">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-cyan-400 rounded-full z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg">Experienced leaders driving our mission forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership[0].members.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Handshake className="h-8 w-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white">Partner Ecosystem</h2>
            </div>
            <p className="text-gray-400 text-lg">
              We collaborate with industry leaders to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-colors"
              >
                <h3 className="text-white font-semibold mb-1">{partner.name}</h3>
                <p className="text-gray-400 text-xs">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We&apos;re always looking for talented people who share our passion for automation and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Our Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
