"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Radio, Zap, Shield, TrendingUp, Network, Cpu, 
  Factory, Truck, Lightbulb, Video, Brain, Gauge,
  ArrowRight, CheckCircle, AlertCircle, Activity,
  Wifi, Signal, Globe, Lock, Users, Clock
} from 'lucide-react';

interface UseCase {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
  requirement: string;
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
}

interface ComparisonData {
  latency: number;
  bandwidth: number;
  reliability: number;
  devices: number;
  color: 'orange' | 'yellow' | 'purple';
}

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
  isActive: boolean;
  isVisible: boolean;
  onSelect: (index: number) => void;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
}

const FiveGShowcaseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [comparisonView, setComparisonView] = useState<'4g' | 'wifi' | '5g'>('5g');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const useCases: UseCase[] = [
    {
      id: 'agv',
      icon: Truck,
      title: 'AGV/AMR Fleet Management',
      description: 'Real-time coordination of autonomous vehicles',
      benefits: ['Zero collision risk', 'Dynamic path planning', 'Fleet-wide optimization'],
      requirement: '<10ms latency required'
    },
    {
      id: 'remote',
      icon: Activity,
      title: 'Remote Equipment Control',
      description: 'Operate critical machinery from anywhere',
      benefits: ['Real-time haptic feedback', 'Secure connections', 'Multi-site management'],
      requirement: '<5ms latency required'
    },
    {
      id: 'ar',
      icon: Video,
      title: 'AR/VR Training & Maintenance',
      description: 'Immersive training and remote assistance',
      benefits: ['High-definition streaming', 'No lag experience', 'Expert collaboration'],
      requirement: 'High bandwidth + low latency'
    },
    {
      id: 'analytics',
      icon: Brain,
      title: 'High-Definition Video Analytics',
      description: 'AI-powered visual inspection at scale',
      benefits: ['Real-time defect detection', '4K/8K quality', 'Edge AI processing'],
      requirement: '100+ Mbps per camera'
    },
    {
      id: 'digital-twin',
      icon: Globe,
      title: 'Digital Twin Synchronization',
      description: 'Real-time virtual replica of operations',
      benefits: ['Live simulation', 'Predictive modeling', 'What-if scenarios'],
      requirement: 'Continuous bi-directional sync'
    }
  ];

  const features: Feature[] = [
    {
      icon: Radio,
      title: 'Private 5G Networks',
      description: 'Dedicated spectrum for your facility',
      details: [
        'No interference from public networks',
        'Complete control over QoS',
        'Enhanced security & compliance',
        'Priority traffic management'
      ]
    },
    {
      icon: Zap,
      title: 'Edge Computing + 5G',
      description: 'Process data at the edge with 5G speed',
      details: [
        'Sub-millisecond response times',
        'Reduced bandwidth costs (90% less cloud traffic)',
        'AI inference at industrial scale',
        'Local data sovereignty'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Military-grade encryption & isolation',
      details: [
        'End-to-end encryption',
        'Network slicing for isolation',
        'Zero-trust architecture',
        'Compliance ready (ISO, NIST)'
      ]
    }
  ];

  const comparisonData: Record<string, ComparisonData> = {
    '4g': { latency: 50, bandwidth: 50, reliability: 99.9, devices: 100000, color: 'orange' },
    'wifi': { latency: 30, bandwidth: 70, reliability: 95.0, devices: 50000, color: 'yellow' },
    '5g': { latency: 1, bandwidth: 1000, reliability: 99.999, devices: 1000000, color: 'purple' }
  };

  const CoverageVisualization = () => {
    const [activeZones, setActiveZones] = useState<number[]>([]);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveZones(prev => {
          const newZone = Math.floor(Math.random() * 6);
          return prev.includes(newZone) ? prev : [...prev, newZone];
        });
      }, 500);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-96 bg-slate-900/50 rounded-2xl border border-purple-500/30 overflow-hidden">
        {/* Factory floor plan */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 p-8 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-slate-700 rounded-lg" />
            ))}
          </div>
        </div>

        {/* 5G Tower */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            {/* Tower */}
            <div className="w-16 h-24 bg-gradient-to-b from-purple-600/30 to-purple-900/30 rounded-t-full border-2 border-purple-500/50 backdrop-blur-sm">
              <Radio className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 text-purple-400" />
            </div>

            {/* Signal rings */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-500/30"
                style={{
                  width: `${(i + 1) * 80}px`,
                  height: `${(i + 1) * 80}px`,
                  animation: `ping 3s cubic-bezier(0, 0, 0.2, 1) ${i * 0.4}s infinite`
                }}
              />
            ))}
          </div>
        </div>

        {/* Coverage zones */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4 p-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`rounded-lg border-2 transition-all duration-500 ${
                activeZones.includes(i)
                  ? 'bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/30'
                  : 'bg-purple-500/5 border-purple-500/10'
              }`}
            >
              {activeZones.includes(i) && (
                <div className="w-full h-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats overlay */}
        <div className="absolute top-4 right-4 space-y-2">
          <div className="bg-purple-500/10 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-2">
            <div className="text-xs text-purple-300">Coverage</div>
            <div className="text-xl font-bold text-white">100%</div>
          </div>
          <div className="bg-purple-500/10 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-2">
            <div className="text-xs text-purple-300">Active Devices</div>
            <div className="text-xl font-bold text-white">{activeZones.length * 50}+</div>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-3">
          <div className="text-xs text-purple-300 mb-2">Network Status</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-xs text-slate-300">5G Private Network Active</span>
          </div>
        </div>
      </div>
    );
  };

  const ComparisonChart = () => {
    const current = comparisonData[comparisonView];
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      orange: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500' }
    };
    const colors = colorMap[current.color];

    return (
      <div className="space-y-6">
        {/* Network selector */}
        <div className="flex justify-center space-x-4">
          {(Object.keys(comparisonData) as Array<'4g' | 'wifi' | '5g'>).map((tech) => (
            <button
              key={tech}
              onClick={() => setComparisonView(tech)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                comparisonView === tech
                  ? `${colorMap[comparisonData[tech].color].bg} text-white`
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {tech.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Clock className={`w-5 h-5 ${colors.text}`} />
              <span className="text-sm text-slate-400">Latency</span>
            </div>
            <div className={`text-3xl font-bold ${colors.text}`}>
              {current.latency === 1 ? '<1ms' : `${current.latency}ms`}
            </div>
            <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${colors.bg} transition-all duration-1000`}
                style={{ width: `${100 - current.latency}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Activity className={`w-5 h-5 ${colors.text}`} />
              <span className="text-sm text-slate-400">Bandwidth</span>
            </div>
            <div className={`text-3xl font-bold ${colors.text}`}>
              {current.bandwidth === 1000 ? '1+ Gbps' : `${current.bandwidth} Mbps`}
            </div>
            <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${colors.bg} transition-all duration-1000`}
                style={{ width: `${(current.bandwidth / 1000) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Shield className={`w-5 h-5 ${colors.text}`} />
              <span className="text-sm text-slate-400">Reliability</span>
            </div>
            <div className={`text-3xl font-bold ${colors.text}`}>
              {current.reliability}%
            </div>
            <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${colors.bg} transition-all duration-1000`}
                style={{ width: `${current.reliability}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Users className={`w-5 h-5 ${colors.text}`} />
              <span className="text-sm text-slate-400">Devices/km²</span>
            </div>
            <div className={`text-3xl font-bold ${colors.text}`}>
              {current.devices === 1000000 ? '1M+' : `${(current.devices / 1000).toFixed(0)}K`}
            </div>
            <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${colors.bg} transition-all duration-1000`}
                style={{ width: `${(current.devices / 1000000) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className={`bg-gradient-to-r ${current.color === 'orange' ? 'from-orange-500/10' : current.color === 'yellow' ? 'from-yellow-500/10' : 'from-purple-500/10'} to-transparent border ${colors.border}/30 rounded-xl p-6`}>
          <div className="flex items-start space-x-4">
            <AlertCircle className={`${colors.text} w-6 h-6 flex-shrink-0 mt-1`} />
            <div>
              <div className="font-semibold text-white mb-2">
                {comparisonView === '5g' 
                  ? '5G delivers the performance industrial operations demand'
                  : comparisonView === '4g'
                  ? '4G struggles with latency-sensitive applications'
                  : 'WiFi lacks the reliability for mission-critical tasks'}
              </div>
              <p className="text-sm text-slate-400">
                {comparisonView === '5g'
                  ? 'With <1ms latency and 99.999% reliability, private 5G enables real-time control, massive IoT deployments, and AI-powered operations at scale.'
                  : comparisonView === '4g'
                  ? '50ms latency is too slow for AGV coordination, remote control, and real-time video analytics. Mission-critical applications require 5G.'
                  : 'WiFi interference and limited range make it unsuitable for factory-wide deployments. 5G provides consistent coverage and performance.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const UseCaseCard = ({ useCase, index, isActive, isVisible, onSelect }: UseCaseCardProps) => {
    const Icon = useCase.icon;
    return (
      <div
        onClick={() => onSelect(index)}
        className={`group cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
          isActive
            ? 'bg-purple-500/10 border-purple-500 shadow-lg shadow-purple-500/20'
            : 'bg-slate-900/30 border-slate-700 hover:border-purple-500/50'
        }`}
        style={{
          animation: isVisible ? `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` : 'none'
        }}
      >
        <div className={`p-3 rounded-lg inline-flex mb-4 ${
          isActive ? 'bg-purple-500/20' : 'bg-slate-800'
        }`}>
          <Icon className={`w-6 h-6 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
        </div>
        
        <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
        <p className="text-sm text-slate-400 mb-4">{useCase.description}</p>
        
        {isActive && (
          <div className="space-y-2 animate-fadeIn">
            {useCase.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{benefit}</span>
              </div>
            ))}
            <div className="pt-3 mt-3 border-t border-slate-700">
              <div className="flex items-center space-x-2">
                <Gauge className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-purple-300 font-semibold">
                  {useCase.requirement}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const FeatureCard = ({ feature, index, isVisible }: FeatureCardProps) => {
    const Icon = feature.icon;
    return (
      <div
        className="group bg-slate-900/30 border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
        style={{
          animation: isVisible ? `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s both` : 'none'
        }}
      >
        <div className="flex items-start space-x-4 mb-6">
          <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
            <Icon className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.description}</p>
          </div>
        </div>

        <div className="space-y-3">
          {feature.details.map((detail, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
              <span className="text-sm text-slate-300">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950 py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-400 mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none' }}
          >
            <Radio className="w-4 h-4" />
            <span>5G Network Solutions</span>
          </div>
          
          <h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none' }}
          >
            5G-Powered Industrial
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none' }}
          >
            Ultra-reliable, low-latency connectivity for mission-critical operations. 
            Private 5G networks designed for industrial scale.
          </p>
        </div>

        {/* Key Stats Row */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.8s both' : 'none' }}
        >
          {[
            { label: 'Latency', value: '<1ms', icon: Zap },
            { label: 'Reliability', value: '99.999%', icon: Shield },
            { label: 'Devices/km²', value: '1M+', icon: Network },
            { label: 'Bandwidth', value: '1+ Gbps', icon: Activity }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-xl p-6 text-center">
                <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Network Visualization */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Private 5G Network Coverage
          </h3>
          <CoverageVisualization />
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Why Choose Private 5G?
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-16 bg-slate-900/30 border border-slate-800 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            5G vs 4G vs WiFi - The Numbers Don't Lie
          </h3>
          <ComparisonChart />
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-3 text-center">
            Industrial Use Cases Powered by 5G
          </h3>
          <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
            From autonomous vehicles to digital twins, 5G enables applications 
            that were impossible with previous wireless technologies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                useCase={useCase}
                index={index}
                isActive={activeUseCase === index}
                isVisible={isVisible}
                onSelect={setActiveUseCase}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Deploy Private 5G?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our experts will assess your facility, design your network architecture, 
            and deliver a turnkey 5G solution in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
              <span className="flex items-center justify-center space-x-2">
                <span>Download 5G Whitepaper</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-purple-500/30 text-white rounded-lg font-semibold transition-all hover:scale-105">
              Schedule 5G Assessment
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes ping {
          75%, 100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FiveGShowcaseSection;


