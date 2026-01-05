import { Metadata } from 'next';
import { FileText, Video, BookOpen, Calculator, Newspaper, Headphones, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | Zertain - Enterprise Hyperautomation',
  description: 'Explore Zertain resources: documentation, whitepapers, webinars, case studies, and automation guides for enterprise teams.',
};

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Technical documentation, API references, and integration guides.',
    link: '#',
    cta: 'View Docs',
  },
  {
    icon: FileText,
    title: 'Whitepapers',
    description: 'In-depth research on hyperautomation trends and best practices.',
    link: '#',
    cta: 'Download',
  },
  {
    icon: Video,
    title: 'Webinars',
    description: 'On-demand sessions with automation experts and customer panels.',
    link: '#',
    cta: 'Watch Now',
  },
  {
    icon: Calculator,
    title: 'ROI Calculator',
    description: 'Calculate your potential savings with hyperautomation.',
    link: '#',
    cta: 'Calculate ROI',
  },
];

const featuredResources = [
  {
    type: 'Whitepaper',
    title: 'The Executive Guide to Hyperautomation',
    description: 'A comprehensive guide for C-suite leaders on implementing enterprise-wide automation strategies.',
    readTime: '15 min read',
  },
  {
    type: 'Case Study',
    title: 'How a Fortune 500 Bank Achieved 340% ROI',
    description: 'Learn how one of the largest banks automated compliance processes and reduced costs by 60%.',
    readTime: '8 min read',
  },
  {
    type: 'Webinar',
    title: 'AI-Powered Document Processing Deep Dive',
    description: 'Technical session on implementing intelligent document processing at scale.',
    readTime: '45 min watch',
  },
  {
    type: 'Guide',
    title: 'RPA vs iPaaS: Choosing the Right Tool',
    description: 'A practical framework for selecting the right automation technology for your use case.',
    readTime: '10 min read',
  },
  {
    type: 'Report',
    title: '2024 State of Enterprise Automation',
    description: 'Industry research on automation trends, challenges, and opportunities across sectors.',
    readTime: '20 min read',
  },
  {
    type: 'Tutorial',
    title: 'Building Your First Integration in 10 Minutes',
    description: 'Step-by-step guide to creating a data sync between Salesforce and your ERP.',
    readTime: '10 min read',
  },
];

const blogPosts = [
  {
    date: 'Dec 15, 2024',
    title: '5 Signs Your Organization Needs Hyperautomation',
    excerpt: 'Recognizing the indicators that your current automation approach is no longer sufficient.',
  },
  {
    date: 'Dec 10, 2024',
    title: 'The Hidden Costs of Manual Processes',
    excerpt: 'How to quantify the true cost of manual work beyond just labor hours.',
  },
  {
    date: 'Dec 5, 2024',
    title: 'Building an Automation Center of Excellence',
    excerpt: 'Best practices for establishing and scaling an automation CoE in your organization.',
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Learn. Build.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Automate.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Everything you need to succeed with hyperautomation—from getting started guides
              to advanced best practices and industry research.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                <Link
                  href={category.link}
                  className="inline-flex items-center text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                >
                  {category.cta}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Resources</h2>
              <p className="text-gray-400">Curated content for enterprise automation leaders</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-xs text-gray-500">{resource.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                >
                  {resource.type === 'Webinar' ? 'Watch Now' : 'Read More'}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Newspaper className="h-6 w-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Latest from the Blog</h2>
              </div>

              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-colors group"
                  >
                    <span className="text-xs text-gray-500 mb-2 block">{post.date}</span>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{post.excerpt}</p>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center text-cyan-400 font-medium mt-6 hover:text-cyan-300 transition-colors"
              >
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <Headphones className="h-10 w-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Subscribe to Updates
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Get the latest automation insights, product updates, and best practices delivered to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Connect with our team to discuss your automation journey and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
              <Download className="mr-2 h-5 w-5" />
              Download Resource Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
