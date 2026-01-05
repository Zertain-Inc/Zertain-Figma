import { Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Pavan Kumar Yajamanr',
    role: 'Founder & CEO',
    description:
      'Pavan is a results-driven leader with 16+ years of global experience in business development, digital transformation, and corporate leadership.',
    image: '/team/pavan.jpg',
  },
  {
    name: 'Cameron Pisad',
    role: 'Head of Automation',
    description:
      'Cameron is a tech evangelist with 20+ years of global experience driving innovative teams and businesses.',
    image: '/team/cameron.jpg',
  },
  {
    name: 'Anirudh Rameeh',
    role: 'Director of Sales',
    description:
      'Anirudh is a client success leader with 10+ years experience handling COOs and improving fissed.',
    image: '/team/anirudh.jpg',
  },
  {
    name: 'Bharath Phalak',
    role: 'Enterprise Architect',
    description:
      'Bharath is an architect with 15+ years experience in apps, integrations, and known expertise in cloud security.',
    image: '/team/bharath.jpg',
  },
  {
    name: 'Santhosh Usha',
    role: 'Enterprise Architect',
    description:
      'Santhosh is an Enterprise Architect with 8+ years expertise in cloud, low-code, and scalable solutions across industries.',
    image: '/team/santhosh.jpg',
  },
  {
    name: 'Zachary Gent',
    role: 'Technical Account Manager',
    description:
      'Zachary is a Technical Account Manager who drives client success personas with delivery excellence and inspiring teams.',
    image: '/team/zachary.jpg',
  },
];

export default function Leadership() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[28px] font-normal text-black mb-3">
            Leadership That Inspires
          </h2>
          <p className="text-black/60 text-base max-w-3xl mx-auto">
            Blending business insight and technology to deliver excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-amber-600">
                    {leader.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-medium text-black">{leader.name}</h4>
                      <p className="text-sm text-amber-500 font-medium">{leader.role}</p>
                    </div>
                    <button className="text-blue-500">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-black/60 text-sm leading-relaxed mt-4">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
