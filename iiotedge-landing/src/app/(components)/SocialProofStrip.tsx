"use client";

import React, { useEffect, useRef } from 'react';
import { Award, Shield, CheckCircle2, Star } from 'lucide-react';

interface Client {
  name: string;
  industry: string;
}

interface Certification {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel: string;
}

interface StatCardProps {
  value: string;
  label: string;
}

interface ClientLogoProps {
  name: string;
  industry: string;
}

interface CertBadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel: string;
}

const SocialProofStrip = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate content for seamless loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the content for infinite scroll
    const scrollContent = scrollContainer.querySelector('.scroll-content');
    if (scrollContent) {
      const clone = scrollContent.cloneNode(true);
      scrollContainer.appendChild(clone);
    }
  }, []);

  // Client/Partner logos - Replace with actual client logos
  const clients: Client[] = [
    { name: 'Tech Industries', industry: 'Manufacturing' },
    { name: 'Energy Solutions Co', industry: 'Energy' },
    { name: 'Smart Factory Ltd', industry: 'Automation' },
    { name: 'Global Logistics', industry: 'Logistics' },
    { name: 'EV Charge Network', industry: 'EV Infrastructure' },
    { name: 'Industrial Systems', industry: 'Industry 4.0' },
  ];

  // Certifications and trust indicators
  const certifications: Certification[] = [
    { icon: Shield, label: 'ISO 27001', sublabel: 'Certified' },
    { icon: Award, label: 'Industry 4.0', sublabel: 'Ready' },
    { icon: CheckCircle2, label: 'CE Marked', sublabel: 'Compliant' },
    { icon: Star, label: 'AWS Partner', sublabel: 'Verified' },
  ];

  const ClientLogo = ({ name, industry }: ClientLogoProps) => (
    <div className="group flex-shrink-0 px-8 py-6 transition-all duration-300">
      <div className="relative">
        {/* Placeholder logo box - replace with actual logo images */}
        <div className="w-40 h-20 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center overflow-hidden group-hover:border-blue-500/50 transition-all duration-300 group-hover:bg-slate-800/80">
          {/* This would be your <img src="logo.svg" /> */}
          <div className="text-center">
            <div className="text-slate-400 group-hover:text-blue-400 font-bold text-sm mb-1 transition-colors">
              {name}
            </div>
            <div className="text-xs text-slate-600 group-hover:text-slate-500 transition-colors">
              {industry}
            </div>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-lg transition-all duration-300 blur-xl" />
      </div>
    </div>
  );

  const CertBadge = ({ icon: Icon, label, sublabel }: CertBadgeProps) => (
    <div className="group flex-shrink-0 px-6 py-6">
      <div className="flex items-center space-x-3 bg-slate-800/30 border border-slate-700/50 rounded-xl px-4 py-3 group-hover:border-blue-500/50 transition-all duration-300 group-hover:bg-slate-800/50 min-w-[180px]">
        <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
            {label}
          </div>
          <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
            {sublabel}
          </div>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ value, label }: StatCardProps) => (
    <div className="flex-shrink-0 px-6 py-6">
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl px-6 py-4 min-w-[160px]">
        <div className="text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-sm text-slate-400">{label}</div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-slate-950 py-12 overflow-hidden border-y border-slate-800/50">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Top Section: Trust Text */}
      <div className="text-center mb-8 relative z-20">
        <div className="inline-flex items-center space-x-2 text-sm text-slate-400 mb-2">
          <Shield className="w-4 h-4 text-blue-400" />
          <span>Trusted by Leading Industrial Organizations</span>
        </div>
      </div>

      {/* Client Logos Row */}
      <div 
        ref={scrollRef}
        className="flex overflow-hidden mb-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="scroll-content flex animate-scroll">
          {clients.map((client, index) => (
            <ClientLogo key={index} {...client} />
          ))}
        </div>
      </div>

      {/* Certifications & Stats Row */}
      <div 
        className="flex overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex animate-scroll-reverse">
          {certifications.map((cert, index) => (
            <CertBadge key={index} {...cert} />
          ))}
          <StatCard value="50+" label="Active Clients" />
          <StatCard value="99.95%" label="Uptime SLA" />
          <StatCard value="24/7" label="Support" />
          {/* Duplicate for seamless loop */}
          {certifications.map((cert, index) => (
            <CertBadge key={`dup-${index}`} {...cert} />
          ))}
          <StatCard value="50+" label="Active Clients" />
          <StatCard value="99.95%" label="Uptime SLA" />
          <StatCard value="24/7" label="Support" />
        </div>
      </div>

      {/* Bottom subtle text */}
      <div className="text-center mt-8 text-xs text-slate-600">
        Powering industrial operations across Manufacturing, Energy, Logistics, and Smart Infrastructure
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 35s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }

        /* Ensure smooth scrolling without gaps */
        .scroll-content {
          display: flex;
          flex-shrink: 0;
        }

        /* Smooth scrolling performance */
        .animate-scroll,
        .animate-scroll-reverse {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default SocialProofStrip;


