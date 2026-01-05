'use client';

import { ArrowRight, Play, Shield, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f2744] to-[#1a0a2e] overflow-hidden">
      {/* Enhanced Background with Grid and Mesh */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Primary gradient orbs */}
        <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-[5%] w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

        {/* Accent gradient overlay */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/30 via-purple-900/10 to-transparent" />

        {/* Radial gradient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-glow opacity-40" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content - Text & CTAs */}
          <div className="text-center lg:text-left space-y-8">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-cyan-400 text-sm font-medium tracking-wide">
                Enterprise Hyperautomation Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Automate at Scale.{' '}
              <span className="block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  Accelerate Growth.
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300/90 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Unify iPaaS, RPA, ETL, and AI-powered workflows into one intelligent platform.
              Reduce operational costs by up to 60% while scaling enterprise automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {/* Primary CTA */}
              <Link
                href="/demo"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-base shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#platform"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-medium text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Play className="w-4 h-4 text-cyan-400" />
                <span>Watch Overview</span>
              </Link>
            </div>

          </div>

          {/* Right Content - Visual/Stats Dashboard */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

            {/* Main Visual Container */}
            <div className="relative w-full max-w-lg">

              {/* Glowing backdrop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-600/40 via-blue-600/30 to-cyan-500/40 rounded-full blur-[80px]" />

              {/* Dashboard Preview Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-2xl shadow-purple-900/20">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden">

                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="text-xs text-gray-500 font-medium">Zertain Dashboard</div>
                    <div className="w-16" />
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-5 space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-800/60 rounded-lg p-3 border border-white/5">
                        <div className="text-xs text-gray-400 mb-1">Automations</div>
                        <div className="text-xl font-bold text-white">2,847</div>
                        <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" />
                          +12.5%
                        </div>
                      </div>
                      <div className="bg-slate-800/60 rounded-lg p-3 border border-white/5">
                        <div className="text-xs text-gray-400 mb-1">Time Saved</div>
                        <div className="text-xl font-bold text-white">847h</div>
                        <div className="text-xs text-cyan-400 flex items-center gap-1 mt-1">
                          <Zap className="w-3 h-3" />
                          This month
                        </div>
                      </div>
                      <div className="bg-slate-800/60 rounded-lg p-3 border border-white/5">
                        <div className="text-xs text-gray-400 mb-1">ROI</div>
                        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">340%</div>
                        <div className="text-xs text-purple-400 flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" />
                          Annual
                        </div>
                      </div>
                    </div>

                    {/* Workflow Visual */}
                    <div className="bg-slate-800/40 rounded-lg p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-gray-400 font-medium">Active Workflows</span>
                        <span className="text-xs text-cyan-400">Live</span>
                      </div>
                      {/* Animated workflow nodes */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          </div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50" />
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                          </div>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50" />
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-white">124</div>
                          <div className="text-[10px] text-gray-500">Running</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm px-4 py-2.5 rounded-full border border-slate-600/50 shadow-lg animate-float">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">SOC 2 Certified</span>
              </div>

              {/* Floating Stat - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 rounded-xl shadow-lg shadow-purple-500/25 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold">60%</div>
                <div className="text-xs text-white/80">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">500+</div>
              <div className="text-sm text-gray-400">Enterprise Clients</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">10M+</div>
              <div className="text-sm text-gray-400">Automations Run</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">24/7</div>
              <div className="text-sm text-gray-400">Enterprise Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}