import {
  Lightbulb,
  Cpu,
  BarChart3,
  GitBranch,
  FileSearch,
  Settings2,
  Users2,
  Shield,
  Scale,
} from 'lucide-react';

const aiFeatures = [
  {
    icon: Lightbulb,
    title: 'AI Strategy & Transformation Consulting',
    description:
      'Turn AI from an idea into a practical, ROI-driven strategy aligned with your business goals.',
    iconColor: 'text-cyan-500',
    borderColor: 'border-cyan-400/50',
  },
  {
    icon: Cpu,
    title: 'Intelligent Process Automation',
    description:
      'Automate complex workflows with machine learning and AI to streamline operations across departments.',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-400/50',
  },
  {
    icon: BarChart3,
    title: 'Predictive & Prescriptive Analytics',
    description:
      'Transform data into real-time insights that forecast outcomes and optimize decision-making.',
    iconColor: 'text-fuchsia-500',
    borderColor: 'border-fuchsia-400/50',
  },
  {
    icon: GitBranch,
    title: 'AI Integration with Existing Systems',
    description:
      'Embed AI into your ERP, CRM, or SaaS tools without costly replacements or disruptions.',
    iconColor: 'text-cyan-500',
    borderColor: 'border-cyan-400/50',
  },
  {
    icon: FileSearch,
    title: 'Intelligent Document & Data Processing',
    description:
      'Use OCR and NLP to read, extract, and validate data from emails, invoices, and documents.',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-400/50',
  },
  {
    icon: Settings2,
    title: 'Custom AI Solution Development',
    description:
      'Technical AI models built for your workflows, challenges, and goals.',
    iconColor: 'text-fuchsia-500',
    borderColor: 'border-fuchsia-400/50',
  },
  {
    icon: Users2,
    title: 'Human + AI Collaboration Framework',
    description:
      'Design workflows that let humans and AI co-create efficiently without replacing human creativity.',
    iconColor: 'text-cyan-500',
    borderColor: 'border-cyan-400/50',
  },
  {
    icon: Shield,
    title: 'Zero-Risk AI Implementation Program',
    description:
      'Experience results, measure impact through pilot AI programs before full deployment.',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-400/50',
  },
  {
    icon: Scale,
    title: 'AI Governance & Ethics Advisory',
    description:
      'Ensure responsible AI deployment with frameworks that align with ethical standards.',
    iconColor: 'text-fuchsia-500',
    borderColor: 'border-fuchsia-400/50',
  },
];

export default function AIInnovation() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-fuchsia-50/30">
      {/* Background gradient effects matching Zertain logo colors (cyan → blue → magenta) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[28px] font-semibold text-gray-900 mb-3">
            AI Innovation at Zertain
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Empowering businesses with intelligent automation, data-driven decisions, and next-gen AI integration.
          </p>
        </div>

        {/* Big container box with blur background */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl shadow-cyan-500/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-5 md:p-6 hover:bg-white/80 hover:shadow-lg hover:shadow-fuchsia-500/10 transition-all duration-300"
              >
                <div className={`w-11 h-11 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-fuchsia-500/20 rounded-xl border ${feature.borderColor} flex items-center justify-center mb-3`}>
                  <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
