'use client';

export default function MissionVision() {
  return (
    <section className="bg-[#edeaff] w-full py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Mission & Vision */}
          <div>
            {/* Title */}
            <div className="mb-4">
              <h2 className="text-2xl md:text-[28px] font-normal text-black">
                Our Mission <span className="text-3xl md:text-4xl">&</span> Vision
              </h2>
            </div>

            {/* Description */}
            <p className="text-black/70 text-base mb-8 max-w-md leading-relaxed">
              At Zertain, we harness hyperautomation and low-code platforms to
              streamline processes, cut costs, and boost customer satisfaction—keeping
              businesses ahead in the digital era.
            </p>

            {/* Mission Card */}
            <div
              className="rounded-3xl p-6 md:p-8 mb-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(115deg, rgba(89,113,234,1) 2%, rgba(40,214,253,1) 100%)'
              }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-12 sm:pr-20">
                  <h3 className="text-2xl font-medium text-black mb-4">Mission</h3>
                  <p className="text-black/70 text-base leading-relaxed">
                    Our mission is to empower organizations through hyperautomation—driving
                    efficiency, accuracy, and cost savings. We are committed to delivering
                    meaningful outcomes, not just technology.
                  </p>
                </div>
                {/* Mission Icon */}
                <div className="absolute top-4 right-4 w-20 h-20 md:w-24 md:h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="rgba(255,255,255,0.2)" />
                    <path d="M50 25 L55 45 L75 50 L55 55 L50 75 L45 55 L25 50 L45 45 Z" fill="white" />
                    <circle cx="50" cy="50" r="8" fill="#6366f1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="rounded-3xl p-6 md:p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(115deg, rgba(89,113,234,1) 2%, rgba(40,214,253,1) 100%)'
              }}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-12 sm:pr-20">
                  <h3 className="text-2xl font-medium text-black mb-4">Vision</h3>
                  <p className="text-black/70 text-base leading-relaxed">
                    At Zertain, our vision is to lead the way in hyperautomation services,
                    helping organizations optimize processes, boost efficiency, and drive
                    growth. We strive to revolutionize business operations with innovative,
                    end-to-end automation solutions that deliver measurable impact.
                  </p>
                </div>
                {/* Vision Icon */}
                <div className="absolute top-4 right-4 w-20 h-20 md:w-24 md:h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="rgba(255,255,255,0.2)" />
                    <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="white" strokeWidth="3" />
                    <circle cx="50" cy="50" r="12" fill="white" />
                    <circle cx="50" cy="50" r="6" fill="#6366f1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - The Journey & 5 Ways */}
          <div>
            {/* The Journey Title */}
            <h2 className="text-2xl md:text-3xl font-light text-black mb-6 text-right">The Journey</h2>

            {/* Journey Illustration */}
            <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-50 rounded-3xl p-6 mb-8 relative overflow-hidden min-h-[280px]">
              {/* Journey path SVG */}
              <svg viewBox="0 0 500 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                {/* Curved dotted path */}
                <path
                  d="M 50 180 Q 150 50, 250 120 Q 350 190, 450 80"
                  stroke="#a855f7"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,8"
                  opacity="0.5"
                />

                {/* Node 1 - Certified */}
                <g transform="translate(50, 160)">
                  <circle r="30" fill="url(#blueGradient)" />
                  <text y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Certified</text>
                </g>

                {/* Node 2 - Expert */}
                <g transform="translate(250, 100)">
                  <circle r="30" fill="url(#purpleGradient)" />
                  <text y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Expert</text>
                </g>

                {/* Node 3 - Customer Success */}
                <g transform="translate(450, 60)">
                  <circle r="35" fill="url(#orangeGradient)" />
                  <text y="-5" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Customer</text>
                  <text y="10" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Success</text>
                </g>

                {/* Decorative elements */}
                <circle cx="150" cy="80" r="8" fill="#fbbf24" opacity="0.6" />
                <circle cx="350" cy="150" r="6" fill="#22d3ee" opacity="0.6" />
                <circle cx="400" cy="180" r="4" fill="#ec4899" opacity="0.6" />

                {/* Gradients */}
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* 5 Ways Section */}
            <div>
              <h3 className="font-light text-black mb-4">
                <span className="text-lg">5 Ways Low-Code Solutions </span>
                <span className="text-xl font-medium">Accelerate Your Business Growth</span>
              </h3>

              {/* 5 Ways Illustration Card */}
              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-6 relative overflow-hidden min-h-[300px] sm:min-h-[300px]">
                <div className="flex flex-col sm:flex-row items-center justify-between h-full gap-4">
                  {/* Left side - Text */}
                  <div className="w-full sm:w-1/2 relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                        <span className="text-white font-bold text-lg sm:text-xl">Z</span>
                      </div>
                      <h4 className="text-white text-lg sm:text-xl font-bold mb-2">Zertain</h4>
                      <p className="text-white/80 text-xs sm:text-sm">
                        5 ways that <span className="text-cyan-300 font-medium">low code SaaS platforms</span> can help you achieve your business goals!
                      </p>
                    </div>
                  </div>

                  {/* Right side - Person illustration */}
                  <div className="w-full sm:w-1/2 flex justify-center">
                    <svg viewBox="0 0 200 250" className="w-32 h-40 sm:w-48 sm:h-60">
                      {/* Person */}
                      <g transform="translate(50, 20)">
                        {/* Hair */}
                        <ellipse cx="50" cy="30" rx="35" ry="30" fill="#c2410c" />

                        {/* Face */}
                        <ellipse cx="50" cy="40" rx="28" ry="28" fill="#fed7aa" />

                        {/* Hair bangs */}
                        <path d="M22 35 Q30 15 50 18 Q70 15 78 35" fill="#c2410c" />

                        {/* Eyes */}
                        <circle cx="40" cy="38" r="3" fill="#333" />
                        <circle cx="60" cy="38" r="3" fill="#333" />

                        {/* Smile */}
                        <path d="M42 50 Q50 56 58 50" stroke="#92400e" strokeWidth="2" fill="none" />

                        {/* Body/Shirt */}
                        <path d="M25 70 Q20 90 18 130 L82 130 Q80 90 75 70 Q65 62 50 62 Q35 62 25 70" fill="#7c3aed" />

                        {/* Arms */}
                        <path d="M22 80 Q5 100 15 130" stroke="#fed7aa" strokeWidth="12" fill="none" strokeLinecap="round" />
                        <path d="M78 80 Q95 100 85 130" stroke="#fed7aa" strokeWidth="12" fill="none" strokeLinecap="round" />

                        {/* Laptop */}
                        <rect x="10" y="125" width="80" height="50" rx="4" fill="#1e293b" />
                        <rect x="15" y="130" width="70" height="35" rx="2" fill="#38bdf8" />

                        {/* Screen content */}
                        <rect x="20" y="138" width="35" height="3" fill="white" opacity="0.8" />
                        <rect x="20" y="145" width="50" height="3" fill="white" opacity="0.6" />
                        <rect x="20" y="152" width="25" height="3" fill="white" opacity="0.4" />

                        {/* Laptop base */}
                        <rect x="5" y="175" width="90" height="6" rx="2" fill="#374151" />

                        {/* Desk */}
                        <rect x="0" y="180" width="100" height="8" rx="2" fill="#fdba74" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-white/20 rounded-full" />
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-cyan-400/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative ellipse on the right */}
      <div
        className="absolute top-1/2 -right-20 w-40 h-[400px] rounded-full opacity-40 -translate-y-1/2"
        style={{
          background: 'linear-gradient(180deg, #c084fc 0%, #f472b6 100%)'
        }}
      />
    </section>
  );
}