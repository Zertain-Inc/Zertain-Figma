import { Metadata } from 'next';
import { Building2, Heart, Factory, ShoppingCart, Landmark, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries | Zertain - Enterprise Hyperautomation',
  description: 'Industry-specific hyperautomation solutions for financial services, healthcare, manufacturing, retail, government, and professional services.',
};

const industries = [
  {
    icon: Building2,
    title: 'Financial Services',
    description: 'Automate compliance, accelerate loan processing, and enhance customer experiences while maintaining regulatory standards.',
    stats: { metric: '70%', label: 'Faster Loan Processing' },
    useCases: [
      'KYC/AML Automation',
      'Loan Origination',
      'Claims Processing',
      'Regulatory Reporting',
      'Fraud Detection',
      'Account Reconciliation',
    ],
  },
  {
    icon: Heart,
    title: 'Healthcare & Life Sciences',
    description: 'Streamline patient care workflows, ensure HIPAA compliance, and accelerate clinical operations with intelligent automation.',
    stats: { metric: '50%', label: 'Reduction in Admin Time' },
    useCases: [
      'Patient Scheduling',
      'Claims Management',
      'Clinical Trial Data',
      'Prior Authorization',
      'Medical Records Processing',
      'Billing & Coding',
    ],
  },
  {
    icon: Factory,
    title: 'Manufacturing & Supply Chain',
    description: 'Optimize production workflows, automate quality control, and build resilient supply chains with end-to-end visibility.',
    stats: { metric: '40%', label: 'Inventory Cost Reduction' },
    useCases: [
      'Order Management',
      'Inventory Optimization',
      'Quality Assurance',
      'Supplier Onboarding',
      'Production Scheduling',
      'Logistics Coordination',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    description: 'Deliver seamless customer experiences, automate fulfillment, and optimize pricing with real-time data integration.',
    stats: { metric: '35%', label: 'Increase in Order Accuracy' },
    useCases: [
      'Order Fulfillment',
      'Returns Processing',
      'Inventory Sync',
      'Customer Service Automation',
      'Dynamic Pricing',
      'Vendor Management',
    ],
  },
  {
    icon: Landmark,
    title: 'Government & Public Sector',
    description: 'Modernize citizen services, ensure compliance, and improve operational efficiency with secure automation solutions.',
    stats: { metric: '60%', label: 'Faster Case Processing' },
    useCases: [
      'Permit Processing',
      'Benefits Administration',
      'Case Management',
      'Document Digitization',
      'Compliance Monitoring',
      'Citizen Services',
    ],
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Automate client onboarding, streamline project delivery, and enhance resource utilization across your practice.',
    stats: { metric: '45%', label: 'Improvement in Utilization' },
    useCases: [
      'Client Onboarding',
      'Time & Billing',
      'Contract Management',
      'Resource Planning',
      'Compliance Tracking',
      'Project Reporting',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Industries
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industry Expertise.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Proven Results.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              We understand the unique challenges of your industry and deliver automation
              solutions tailored to your specific regulatory and operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <industry.icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h2 className="text-xl font-bold text-white mb-3">{industry.title}</h2>
                <p className="text-gray-400 mb-6">{industry.description}</p>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 mb-6">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {industry.stats.metric}
                  </div>
                  <div className="text-sm text-gray-400">{industry.stats.label}</div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">Key Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.useCases.slice(0, 4).map((useCase, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted Across Industries</h2>
            <p className="text-gray-400">Enterprise clients rely on Zertain for mission-critical automation</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                500+
              </div>
              <p className="text-gray-400">Enterprise Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                6
              </div>
              <p className="text-gray-400">Industries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                340%
              </div>
              <p className="text-gray-400">Average ROI</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                60%
              </div>
              <p className="text-gray-400">Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Discuss Your Industry Needs
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Connect with our industry specialists to explore tailored automation solutions for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            Talk to an Expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
