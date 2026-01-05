import { Metadata } from 'next';
import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle, CheckCircle, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security & Compliance | Zertain - Enterprise Hyperautomation',
  description: 'Enterprise-grade security: SOC 2 Type II, ISO 27001, GDPR, HIPAA compliance. End-to-end encryption, access controls, and audit logging.',
};

const certifications = [
  { name: 'SOC 2 Type II', description: 'Annual audit for security, availability, and confidentiality' },
  { name: 'ISO 27001', description: 'Information security management certification' },
  { name: 'GDPR', description: 'European data protection compliance' },
  { name: 'HIPAA', description: 'Healthcare data protection standards' },
  { name: 'PCI DSS', description: 'Payment card industry data security' },
  { name: 'CCPA', description: 'California consumer privacy compliance' },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data encrypted at rest (AES-256) and in transit (TLS 1.3). Customer-managed encryption keys available.',
  },
  {
    icon: Eye,
    title: 'Access Control & IAM',
    description: 'Role-based access control (RBAC), SSO/SAML integration, and multi-factor authentication for all users.',
  },
  {
    icon: FileCheck,
    title: 'Audit Logging',
    description: 'Complete audit trail of all actions, API calls, and data access. Exportable logs for compliance reporting.',
  },
  {
    icon: Server,
    title: 'Data Residency',
    description: 'Choose your data location with regional deployments in US, EU, APAC. No cross-border data transfer without consent.',
  },
  {
    icon: Shield,
    title: 'Network Security',
    description: 'Private VPC deployment, IP whitelisting, VPN connectivity, and DDoS protection for all traffic.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: '24/7 security monitoring with &lt;1 hour response SLA. Dedicated security team with defined escalation paths.',
  },
];

const securityPractices = [
  'Penetration testing by third-party security firms quarterly',
  'Vulnerability scanning and patching within 24 hours for critical issues',
  'Background checks for all employees with data access',
  'Security awareness training for all staff annually',
  'Secure development lifecycle (SDLC) with code reviews',
  'Business continuity and disaster recovery testing annually',
  'Data backup with 99.999% durability and point-in-time recovery',
  'Vendor risk management program for all third parties',
];

export default function SecurityPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Security & Compliance
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise Security.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Zero Compromise.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Zertain is built with security at its core. We meet the strictest compliance
              requirements so you can automate with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Request Security Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                <Download className="mr-2 h-5 w-5" />
                Download Security Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compliance Certifications</h2>
            <p className="text-gray-400">Independently audited and certified for enterprise requirements</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{cert.name}</h3>
                <p className="text-gray-400 text-xs">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Architecture
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Defense-in-depth security with multiple layers of protection for your data and automations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Security Best Practices
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Our security program follows industry best practices and is continuously
                improved based on threat intelligence and audit findings.
              </p>

              <div className="space-y-4">
                {securityPractices.map((practice, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{practice}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Security SLAs</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <span className="text-gray-300">Platform Uptime</span>
                  <span className="text-cyan-400 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <span className="text-gray-300">Security Incident Response</span>
                  <span className="text-cyan-400 font-semibold">&lt;1 hour</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <span className="text-gray-300">Critical Vulnerability Patching</span>
                  <span className="text-cyan-400 font-semibold">&lt;24 hours</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                  <span className="text-gray-300">Data Backup Frequency</span>
                  <span className="text-cyan-400 font-semibold">Continuous</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Recovery Point Objective (RPO)</span>
                  <span className="text-cyan-400 font-semibold">&lt;1 hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need More Details?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Request access to our security documentation, penetration test reports, and SOC 2 attestation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            Request Security Documentation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
