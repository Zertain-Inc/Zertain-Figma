import { Metadata } from 'next';
import { Workflow, Brain, Database, Users, FileText, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions | Zertain - Enterprise Hyperautomation',
  description: 'Explore Zertain automation solutions: process automation, decision automation, workflow orchestration, and AI-powered intelligence.',
};

const solutions = [
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and complex business processes across departments with intelligent workflow orchestration.',
    benefits: [
      'Reduce manual processing time by 80%',
      'Eliminate human errors in data entry',
      'Scale operations without adding headcount',
      '24/7 automated task execution',
    ],
    useCases: ['Invoice Processing', 'Employee Onboarding', 'Order Management', 'Report Generation'],
  },
  {
    icon: Brain,
    title: 'Decision Automation',
    description: 'Leverage AI and rule engines to automate complex business decisions with full auditability.',
    benefits: [
      'Consistent decision-making across the org',
      'Real-time decisioning at scale',
      'Complete audit trail for compliance',
      'Continuous learning and optimization',
    ],
    useCases: ['Credit Approvals', 'Risk Assessment', 'Pricing Optimization', 'Fraud Detection'],
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Unify data across systems with real-time and batch integration capabilities for a single source of truth.',
    benefits: [
      'Connect 500+ enterprise applications',
      'Real-time data synchronization',
      'Data quality and governance built-in',
      'Reduce data silos across departments',
    ],
    useCases: ['CRM-ERP Sync', 'Data Warehousing', 'Master Data Management', 'API Management'],
  },
  {
    icon: Users,
    title: 'Workforce Automation',
    description: 'Augment your workforce with digital workers that handle routine tasks alongside human employees.',
    benefits: [
      'Free employees for high-value work',
      'Reduce operational costs by 60%',
      'Improve employee satisfaction',
      'Rapid scaling during peak periods',
    ],
    useCases: ['Customer Service', 'HR Operations', 'IT Service Desk', 'Finance & Accounting'],
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'Extract, classify, and process documents automatically using AI-powered document understanding.',
    benefits: [
      '95%+ extraction accuracy',
      'Process any document format',
      'Reduce document handling time by 90%',
      'Intelligent routing and classification',
    ],
    useCases: ['Contract Analysis', 'Invoice Processing', 'Claims Processing', 'Form Extraction'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Gain real-time visibility into operations with actionable insights and predictive analytics.',
    benefits: [
      'Real-time operational dashboards',
      'Predictive process optimization',
      'Anomaly detection and alerting',
      'ROI tracking and reporting',
    ],
    useCases: ['Operations Monitoring', 'Performance Analytics', 'Capacity Planning', 'Cost Optimization'],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Automation Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Every Challenge
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Purpose-built solutions that address your most pressing operational challenges,
              from process automation to AI-powered decision making.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                      <solution.icon className="h-7 w-7 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{solution.title}</h2>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">{solution.description}</p>

                  <div className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className={`bg-slate-800/50 border border-slate-700 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-lg font-semibold text-white mb-4">Common Use Cases</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {solution.useCases.map((useCase, i) => (
                      <div
                        key={i}
                        className="bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-gray-300 text-sm"
                      >
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Solution Fits?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Our automation experts will assess your needs and recommend the right solution mix for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            Get a Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
