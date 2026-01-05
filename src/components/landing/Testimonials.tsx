'use client';

import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Zertain reduced our invoice processing time by 73% and eliminated manual data entry errors completely. The ROI was visible within the first quarter.',
    name: 'Michael Chen',
    title: 'Chief Operating Officer',
    company: 'Nexus Financial Services',
    avatar: 'MC',
  },
  {
    quote:
      'We automated 12 critical workflows across 4 departments in under 90 days. Our operations team now focuses on strategic initiatives instead of repetitive tasks.',
    name: 'Sarah Williams',
    title: 'VP of Digital Transformation',
    company: 'Atlas Manufacturing Group',
    avatar: 'SW',
  },
  {
    quote:
      'The integration capabilities exceeded our expectations. We connected our legacy ERP with 8 cloud applications without any custom development.',
    name: 'David Rodriguez',
    title: 'Chief Technology Officer',
    company: 'Horizon Healthcare Systems',
    avatar: 'DR',
  },
  {
    quote:
      'Compliance reporting that used to take 2 weeks is now automated and delivered in real-time. Our audit preparation time dropped by 85%.',
    name: 'Jennifer Park',
    title: 'Director of Compliance',
    company: 'Sterling Insurance Corp',
    avatar: 'JP',
  },
  {
    quote:
      'Zertain gave us complete visibility into our supply chain operations. We reduced inventory costs by 40% through intelligent automation.',
    name: 'Robert Thompson',
    title: 'Supply Chain Director',
    company: 'GlobalTech Industries',
    avatar: 'RT',
  },
  {
    quote:
      'The platform scaled effortlessly as we grew from 500 to 5,000 automations monthly. Zero downtime, consistent performance.',
    name: 'Amanda Foster',
    title: 'Head of IT Operations',
    company: 'Velocity Logistics',
    avatar: 'AF',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const timerRef = useRef<number | null>(null);

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-rotation effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;
    }

    if (isPaused) return;

    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    prevSlide();
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const handleNext = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    nextSlide();
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const handleDotClick = (index: number) => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    setCurrentIndex(index);
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset > 60) {
      prevSlide();
    } else if (dragOffset < -60) {
      nextSlide();
    }

    setDragOffset(0);
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setDragOffset(e.touches[0].clientX - startX);
  };

  const handleTouchEnd = () => {
    if (dragOffset > 60) {
      prevSlide();
    } else if (dragOffset < -60) {
      nextSlide();
    }

    setDragOffset(0);
    setIsPaused(false);
  };

  // Calculate position for each card relative to center
  const getCardTransform = (index: number) => {
    const diff = index - currentIndex;

    // Handle wrapping for infinite loop
    let normalizedDiff = diff;
    if (diff > totalSlides / 2) normalizedDiff = diff - totalSlides;
    if (diff < -totalSlides / 2) normalizedDiff = diff + totalSlides;

    // Only render cards within visible range (-1, 0, 1)
    if (Math.abs(normalizedDiff) > 1) return null;

    const baseTranslateX = normalizedDiff * 105; // percentage offset
    const scale = normalizedDiff === 0 ? 1 : 0.88;
    const opacity = normalizedDiff === 0 ? 1 : 0.65;
    const zIndex = normalizedDiff === 0 ? 30 : 10;
    const rotateY = normalizedDiff * -3; // subtle 3D rotation

    return {
      translateX: baseTranslateX,
      scale,
      opacity,
      zIndex,
      rotateY,
      isCenter: normalizedDiff === 0,
    };
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            See how organizations achieve measurable results with Zertain&apos;s hyperautomation platform.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative h-[320px] md:h-[300px] max-w-6xl mx-auto"
          style={{ perspective: '1200px' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) setIsPaused(false);
          }}
        >
          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-11 md:h-11 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-11 md:h-11 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div
            className="relative h-full w-full cursor-grab active:cursor-grabbing select-none px-12 md:px-14 overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => {
              const transform = getCardTransform(index);
              if (!transform) return null;

              const dragX = transform.isCenter && isDragging ? dragOffset : 0;

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-[75%] md:w-[45%] lg:w-[38%]"
                  style={{
                    transform: `
                      translateX(calc(-50% + ${transform.translateX}%))
                      translateY(-50%)
                      translateX(${dragX}px)
                      scale(${transform.scale})
                      rotateY(${transform.rotateY}deg)
                    `,
                    opacity: transform.opacity,
                    zIndex: transform.zIndex,
                    transition: isDragging ? 'none' : 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                    transformOrigin: 'center center',
                  }}
                >
                  {/* Card with visible background */}
                  <div
                    className={`
                      bg-slate-50 rounded-2xl p-5 md:p-6
                      border border-gray-200/80
                      shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1),0_8px_32px_-8px_rgba(0,0,0,0.08)]
                      ${transform.isCenter ? 'shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15),0_16px_48px_-12px_rgba(0,0,0,0.1)]' : ''}
                    `}
                    style={{
                      transition: 'box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {/* Quote Icon */}
                    <Quote className="w-7 h-7 text-cyan-500/40 mb-3" />

                    {/* Quote */}
                    <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 rounded-full flex items-center justify-center shrink-0 shadow-md">
                        <span className="text-white font-semibold text-xs">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-600">{testimonial.title}</p>
                        <p className="text-xs text-cyan-600 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              500+
            </p>
            <p className="text-sm text-gray-600 mt-1">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              60%
            </p>
            <p className="text-sm text-gray-600 mt-1">Avg Cost Reduction</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              340%
            </p>
            <p className="text-sm text-gray-600 mt-1">Average ROI</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              99.9%
            </p>
            <p className="text-sm text-gray-600 mt-1">Uptime SLA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
