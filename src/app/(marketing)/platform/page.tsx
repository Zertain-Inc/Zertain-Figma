import { Metadata } from 'next';
import { Layers, Zap, Database, Cpu, Shield, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform | Zertain - Enterprise Hyperautomation',
  description: 'Discover the Zertain hyperautomation platform: unified iPaaS, RPA, ETL, and AI capabilities built for enterprise scale.',
};

const platformCapabilities = [
  {
    icon: Layers,
    title: 'Unified Integration Hub',
    description: 'Connect 500+ enterprise applications with pre-built connectors. REST, SOAP, GraphQL, and custom API support.',
  },
  {
    icon: Zap,
    title: 'Intelligent Process Automation',
    description: 'Combine RPA bots with workflow orchestration for end-to-end process automation across departments.',
  },
  {
    icon: Database,
    title: 'Data Pipeline Engine',
    description: 'ETL/ELT capabilities for real-time and batch data synchronization with enterprise data governance.',
  },
  {
    icon: Cpu,
    title: 'AI/ML Integration Layer',
    description: 'Embed machine learning models into workflows. Pre-built AI services for document processing, NLP, and predictions.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. End-to-end encryption, role-based access control, and audit logging.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Monitoring',
    description: 'Real-time dashboards, performance metrics, and predictive insights for automation health.',
  },
];

const architectureFeatures = [
  { label: 'Cloud-Native', description: 'Kubernetes-based microservices architecture' },
  { label: 'Multi-Tenant', description: 'Secure isolation with shared infrastructure efficiency' },
  { label: 'API-First', description: 'Every capability accessible via REST APIs' },
  { label: 'Event-Driven', description: 'Real-time triggers and webhooks support' },
];

export default function PlatformPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Enterprise Platform
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              One Platform.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Infinite Possibilities.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Zertain unifies iPaaS, RPA, ETL, and AI into a single hyperautomation platform
              designed for enterprise scale, security, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cloud-native architecture designed to handle millions of automations with enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {architectureFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2">{feature.label}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Platform Capabilities
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to automate, integrate, and transform your enterprise operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Stats */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                500+
              </div>
              <p className="text-gray-400">Pre-built Connectors</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                10M+
              </div>
              <p className="text-gray-400">Monthly Automations</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                99.9%
              </div>
              <p className="text-gray-400">Uptime SLA</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                &lt;50ms
              </div>
              <p className="text-gray-400">Average Latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Schedule a personalized demo to see how Zertain can accelerate your automation journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
