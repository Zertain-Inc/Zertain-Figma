import {
  Gauge,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Smile,
  Scale,
  Server,
} from 'lucide-react';

const metrics = [
  {
    icon: Gauge,
    title: 'Process Efficiency',
    description: 'Track efficiency, cost savings, and user satisfaction to measure impact.',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-500',
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Reduce operational expenses and cut down manual labor. Maximize ROI with smarter, automated processes.',
    iconColor: 'text-green-500',
    borderColor: 'border-green-500',
  },
  {
    icon: TrendingUp,
    title: 'Productivity',
    description: 'Empower employees to focus on high-value tasks.',
    iconColor: 'text-purple-500',
    borderColor: 'border-purple-500',
  },
  {
    icon: AlertTriangle,
    title: 'Error Reduction',
    description: 'Quickly expand operations while maintaining efficiency.',
    iconColor: 'text-orange-500',
    borderColor: 'border-orange-500',
  },
  {
    icon: Smile,
    title: 'Customer Satisfaction',
    description: 'Deliver faster, more accurate service.',
    iconColor: 'text-pink-500',
    borderColor: 'border-pink-500',
  },
  {
    icon: Scale,
    title: 'Scalability',
    description: 'Easily expand operations with efficiency.',
    iconColor: 'text-indigo-500',
    borderColor: 'border-indigo-500',
  },
  {
    icon: Server,
    title: 'Managed platform services',
    description: 'Stay aligned with regulations and policies.',
    iconColor: 'text-cyan-500',
    borderColor: 'border-cyan-500',
  },
];

export default function Metrics() {
  return (
    <section
      id="metrics"
      className="py-16 lg:py-20"
      style={{ background: 'linear-gradient(90deg, rgba(238,234,255,1) 0%, rgba(255,240,250,1) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[28px] font-normal text-black mb-3">
            Key Metrics for Hyper-Automation Success
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto text-base">
            Track efficiency, cost savings, and user satisfaction to measure impact.
          </p>
        </div>

        {/* Top row - 4 items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metrics.slice(0, 4).map((metric, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-[20px] p-6"
            >
              <div
                className={`w-10 h-10 bg-white rounded-xl border-2 ${metric.borderColor} flex items-center justify-center mb-4`}
              >
                <metric.icon className={`w-5 h-5 ${metric.iconColor}`} />
              </div>
              <h4 className="text-base font-medium text-black mb-2">{metric.title}</h4>
              <p className="text-black/60 text-sm leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 items (single column on mobile, consistent with top row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.slice(4).map((metric, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-[20px] p-6"
            >
              <div
                className={`w-10 h-10 bg-white rounded-xl border-2 ${metric.borderColor} flex items-center justify-center mb-4`}
              >
                <metric.icon className={`w-5 h-5 ${metric.iconColor}`} />
              </div>
              <h4 className="text-base font-medium text-black mb-2">{metric.title}</h4>
              <p className="text-black/60 text-sm leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
