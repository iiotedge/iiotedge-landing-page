"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Wifi, Network, Cloud, Shield, Zap, 
  Gauge, Activity, Lock, CheckCircle, ArrowRight,
  Radio, Signal, Globe, Layers
} from 'lucide-react';

interface Stat {
  label: string;
  value: string;
}

interface Pillar {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  color: 'blue' | 'purple' | 'cyan';
  title: string;
  tagline: string;
  features: string[];
  stats: Stat[];
  image: string;
}

interface PillarCardProps {
  pillar: Pillar;
  index: number;
  isActive: boolean;
  isVisible: boolean;
  onTabChange: (index: number) => void;
}

interface DetailViewProps {
  pillar: Pillar;
}

interface StackVisualizationProps {
  pillarId: string;
  color: string;
}

interface VisualizationProps {
  color: string;
}

interface ColorClasses {
  bg: string;
  border: string;
  activeBorder: string;
  text: string;
  iconBg: string;
  glow: string;
}

const CompleteStackSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  const pillars: Pillar[] = [
    {
      id: 'edge',
      icon: Cpu,
      color: 'blue',
      title: 'Edge Intelligence',
      tagline: 'Process at the Source',
      features: [
        'Smart gateways & controllers',
        'AI-powered edge computing',
        'Real-time decision making',
        'Industrial-grade hardware'
      ],
      stats: [
        { label: 'Response Time', value: '<10ms' },
        { label: 'Data Processing', value: '99.9%' },
        { label: 'Uptime', value: '99.95%' }
      ],
      image: '3D gateway device render'
    },
    {
      id: '5g',
      icon: Radio,
      color: 'purple',
      title: '5G Network Solutions',
      tagline: 'Ultra-Fast Connectivity',
      features: [
        'Private 5G network deployment',
        'Ultra-low latency (<1ms)',
        'Massive device connectivity (1M+ devices/km²)',
        'Industrial-grade reliability (99.999% uptime)',
        'Seamless infrastructure integration',
        'Edge-to-cloud synchronization'
      ],
      stats: [
        { label: 'Latency', value: '<1ms' },
        { label: 'Devices/km²', value: '1M+' },
        { label: 'Reliability', value: '99.999%' }
      ],
      image: '5G tower visualization'
    },
    {
      id: 'protocols',
      icon: Network,
      color: 'cyan',
      title: 'Protocol Integration',
      tagline: 'Universal Compatibility',
      features: [
        'OPC-UA, Modbus, MQTT native support',
        '342+ device types supported',
        'Plug-and-play compatibility',
        'Legacy system bridging'
      ],
      stats: [
        { label: 'Protocols', value: '20+' },
        { label: 'Devices', value: '342+' },
        { label: 'Integration', value: '< 1 day' }
      ],
      image: 'Protocol badges network'
    },
    {
      id: 'cloud',
      icon: Cloud,
      color: 'blue',
      title: 'Cloud & AI Platform',
      tagline: 'Intelligence at Scale',
      features: [
        'Secure cloud infrastructure (AWS/Azure/GCP)',
        'Predictive analytics & ML models',
        'Real-time dashboards',
        'Enterprise integrations (ERP, MES, SCADA)'
      ],
      stats: [
        { label: 'ML Accuracy', value: '94%+' },
        { label: 'Data Points', value: '12K+' },
        { label: 'Predictions', value: 'Real-time' }
      ],
      image: 'Dashboard mockup'
    }
  ];

  const PillarCard = ({ pillar, index, isActive, isVisible, onTabChange }: PillarCardProps) => {
    const Icon = pillar.icon;
    const colorClasses: Record<string, ColorClasses> = {
      blue: {
        bg: 'from-blue-500/10 to-blue-600/5',
        border: 'border-blue-500/30',
        activeBorder: 'border-blue-500',
        text: 'text-blue-400',
        iconBg: 'bg-blue-500/10',
        glow: 'shadow-blue-500/50'
      },
      purple: {
        bg: 'from-purple-500/10 to-purple-600/5',
        border: 'border-purple-500/30',
        activeBorder: 'border-purple-500',
        text: 'text-purple-400',
        iconBg: 'bg-purple-500/10',
        glow: 'shadow-purple-500/50'
      },
      cyan: {
        bg: 'from-cyan-500/10 to-cyan-600/5',
        border: 'border-cyan-500/30',
        activeBorder: 'border-cyan-500',
        text: 'text-cyan-400',
        iconBg: 'bg-cyan-500/10',
        glow: 'shadow-cyan-500/50'
      }
    };

    const colors = colorClasses[pillar.color];

    return (
      <div
        onClick={() => onTabChange(index)}
        className={`group relative cursor-pointer transition-all duration-500 ease-out ${
          isActive ? 'scale-105' : 'hover:scale-102'
        }`}
        style={{
          animation: isVisible ? `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` : 'none'
        }}
      >
        <div className={`relative p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 ease-out ${
          isActive 
            ? `bg-gradient-to-br ${colors.bg} ${colors.activeBorder} shadow-xl ${colors.glow}` 
            : `bg-slate-900/30 ${colors.border} hover:${colors.activeBorder}`
        }`}>
          {/* Number badge */}
          <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            isActive ? colors.iconBg : 'bg-slate-800'
          } ${isActive ? colors.text : 'text-slate-500'} border-2 ${
            isActive ? colors.activeBorder : 'border-slate-700'
          }`}>
            {index + 1}
          </div>

          {/* Icon */}
          <div className={`inline-flex p-3 rounded-xl mb-4 ${colors.iconBg} ${
            isActive ? 'ring-2 ' + colors.activeBorder : ''
          }`}>
            <Icon className={`w-8 h-8 ${colors.text}`} />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
          <p className={`text-sm mb-4 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
            {pillar.tagline}
          </p>

          {/* Active indicator */}
          {isActive && (
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} rounded-b-2xl`} />
          )}
        </div>
      </div>
    );
  };

  const DetailView = ({ pillar }: DetailViewProps) => {
    const Icon = pillar.icon;
    const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
      blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
      purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
      cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' }
    };
    const colors = colorClasses[pillar.color];

    return (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Features */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`p-3 rounded-xl ${colors.bg}`}>
              <Icon className={`w-8 h-8 ${colors.text}`} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">{pillar.title}</h3>
              <p className="text-slate-400">{pillar.tagline}</p>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-3">
            {pillar.features.map((feature, i) => (
              <div 
                key={i}
                className="flex items-start space-x-3 group"
                style={{
                  animation: `fadeInLeft 0.4s ease-out ${i * 0.1}s both`
                }}
              >
                <div className={`mt-1 p-1 rounded-full ${colors.bg}`}>
                  <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 ease-out">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
            {pillar.stats.map((stat, i) => (
              <div 
                key={i}
                className={`p-4 rounded-lg ${colors.bg} border ${colors.border}`}
                style={{
                  animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both`
                }}
              >
                <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className={`group flex items-center space-x-2 px-6 py-3 ${colors.bg} border ${colors.border} rounded-lg font-semibold ${colors.text} hover:bg-opacity-80 transition-all duration-300 ease-out`}>
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
          </button>
        </div>

        {/* Right: Visual */}
        <div className="relative">
          <StackVisualization pillarId={pillar.id} color={pillar.color} />
        </div>
      </div>
    );
  };

  const StackVisualization = ({ pillarId, color }: StackVisualizationProps) => {
    const visualizations: Record<string, React.ReactNode> = {
      edge: <EdgeVisualization color={color} />,
      '5g': <FiveGVisualization color={color} />,
      protocols: <ProtocolVisualization color={color} />,
      cloud: <CloudVisualization color={color} />
    };

    return (
      <div className="relative w-full h-96 bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
        {visualizations[pillarId]}
      </div>
    );
  };

  const EdgeVisualization = ({ color }: VisualizationProps) => (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Gateway device mockup */}
      <div className="relative">
        {/* Main device */}
        <div className="w-64 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 animate-float">
          {/* LED indicators */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
          
          {/* Ports */}
          <div className="absolute bottom-4 left-4 flex space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-4 h-3 bg-slate-700 rounded-sm border border-slate-600" />
            ))}
          </div>

          {/* Logo/Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Cpu className="w-12 h-12 text-blue-400 opacity-30" />
          </div>
        </div>

        {/* Data streams */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-12 bg-gradient-to-t from-blue-400 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              bottom: '100%',
              animation: `dataStream 2s ease-in-out ${i * 0.3}s infinite`
            }}
          />
        ))}
      </div>

      {/* Floating metrics */}
      <div className="absolute top-8 right-8 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 rounded-lg px-4 py-2 animate-fadeIn">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-blue-400" />
          <div>
            <div className="text-xs text-slate-400">Processing</div>
            <div className="text-sm font-bold text-white">12.4K ops/sec</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-lg px-4 py-2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center space-x-2">
          <Gauge className="w-4 h-4 text-green-400" />
          <div>
            <div className="text-xs text-slate-400">Latency</div>
            <div className="text-sm font-bold text-white">8ms avg</div>
          </div>
        </div>
      </div>
    </div>
  );

  const FiveGVisualization = ({ color }: VisualizationProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Central 5G tower */}
      <div className="relative z-10">
        <div className="w-32 h-48 bg-gradient-to-b from-purple-600/20 to-purple-900/20 rounded-t-full border-2 border-purple-500/30 relative animate-float">
          {/* Tower segments */}
          <div className="absolute inset-x-4 top-8 h-px bg-purple-500/30" />
          <div className="absolute inset-x-6 top-16 h-px bg-purple-500/30" />
          <div className="absolute inset-x-8 top-24 h-px bg-purple-500/30" />
          
          {/* 5G Icon */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <Radio className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        {/* Signal waves */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-purple-500/20 rounded-full"
            style={{
              animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) ${i * 0.6}s infinite`,
              transform: `translate(-50%, -50%) scale(${1 + i * 0.5})`
            }}
          />
        ))}
      </div>

      {/* Connected devices around tower */}
      {[
        { icon: Cpu, label: 'Edge', pos: 'top-4 left-4', delay: '0s' },
        { icon: Globe, label: 'Cloud', pos: 'top-4 right-4', delay: '0.2s' },
        { icon: Layers, label: 'Devices', pos: 'bottom-4 left-4', delay: '0.4s' },
        { icon: Shield, label: 'Secure', pos: 'bottom-4 right-4', delay: '0.6s' }
      ].map((item, i) => {
        const ItemIcon = item.icon;
        return (
          <div
            key={i}
            className={`absolute ${item.pos} bg-purple-500/10 backdrop-blur-md border border-purple-500/30 rounded-lg p-3 animate-fadeIn`}
            style={{ animationDelay: item.delay }}
          >
            <ItemIcon className="w-6 h-6 text-purple-400 mb-1" />
            <div className="text-xs text-slate-400">{item.label}</div>
          </div>
        );
      })}

      {/* Stats overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
        <div className="bg-purple-500/10 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-2">
          <div className="text-xl font-bold text-purple-400">&lt;1ms</div>
          <div className="text-xs text-slate-400">Latency</div>
        </div>
        <div className="bg-purple-500/10 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-2">
          <div className="text-xl font-bold text-purple-400">1M+</div>
          <div className="text-xs text-slate-400">Devices</div>
        </div>
      </div>
    </div>
  );

  const ProtocolVisualization = ({ color }: VisualizationProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Central hub */}
      <div className="relative z-10">
        <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-full border-2 border-cyan-500/30 flex items-center justify-center animate-float">
          <Network className="w-12 h-12 text-cyan-400" />
        </div>

        {/* Pulse rings */}
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      {/* Protocol badges in circle */}
      {[
        { label: 'OPC-UA', angle: 0, color: 'blue' },
        { label: 'MQTT', angle: 90, color: 'green' },
        { label: 'Modbus', angle: 180, color: 'orange' },
        { label: 'BACnet', angle: 270, color: 'purple' }
      ].map((protocol, i) => {
        const angle = (protocol.angle * Math.PI) / 180;
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 rounded-lg px-4 py-3 animate-fadeIn"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            <div className="text-sm font-bold text-cyan-400 text-center">
              {protocol.label}
            </div>
            {/* Connection line to center */}
            <svg className="absolute top-1/2 left-1/2 w-32 h-32 -z-10" style={{ transform: 'translate(-50%, -50%)' }}>
              <line
                x1="50%"
                y1="50%"
                x2={`calc(50% - ${x}px)`}
                y2={`calc(50% - ${y}px)`}
                stroke="rgba(0, 217, 255, 0.2)"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      })}

      {/* Stats */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 rounded-lg px-6 py-3">
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400">342+</div>
          <div className="text-xs text-slate-400">Device Types Supported</div>
        </div>
      </div>
    </div>
  );

  const CloudVisualization = ({ color }: VisualizationProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Cloud layers */}
      <div className="relative">
        <div className="w-48 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-full border border-blue-500/30 flex items-center justify-center animate-float">
          <Cloud className="w-16 h-16 text-blue-400" />
        </div>

        {/* Dashboard preview */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 bg-slate-900/80 backdrop-blur-md border border-blue-500/30 rounded-lg p-4 shadow-2xl">
          {/* Mini chart */}
          <div className="flex items-end space-x-1 h-16 mb-2">
            {[40, 60, 45, 70, 55, 80, 65, 75].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                style={{
                  height: `${height}%`,
                  animation: `growHeight 0.6s ease-out ${i * 0.1}s both`
                }}
              />
            ))}
          </div>
          <div className="text-xs text-slate-400">Real-time Analytics</div>
        </div>
      </div>

      {/* Cloud providers */}
      <div className="absolute top-8 left-8 right-8 flex justify-between">
        {['AWS', 'Azure', 'GCP'].map((provider, i) => (
          <div
            key={i}
            className="bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-lg px-3 py-2 text-xs font-semibold text-blue-400 animate-fadeIn"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {provider}
          </div>
        ))}
      </div>

      {/* Data streams */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          style={{
            left: `${20 + i * 15}%`,
            top: '30%',
            animation: `dataStream 2s ease-in-out ${i * 0.3}s infinite`
          }}
        />
      ))}
    </div>
  );

  return (
    <div ref={sectionRef} className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none' }}
          >
            <Layers className="w-4 h-4" />
            <span>Complete Stack</span>
          </div>
          
          <h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none' }}
          >
            End-to-End Industrial IoT
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>
          
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none' }}
          >
            From edge devices to cloud intelligence, we provide everything you need 
            to build, scale, and optimize your industrial operations.
          </p>
        </div>

        {/* Pillar Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={index}
              isActive={activeTab === index}
              isVisible={isVisible}
              onTabChange={setActiveTab}
            />
          ))}
        </div>

        {/* Detail View */}
        <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 lg:p-12">
          <DetailView pillar={pillars[activeTab]} />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Ready to transform your industrial operations with our complete stack?
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
            <span className="flex items-center space-x-2">
              <span>Schedule a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes dataStream {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-100%); }
        }

        @keyframes growHeight {
          from { height: 0; }
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

export default CompleteStackSection;


