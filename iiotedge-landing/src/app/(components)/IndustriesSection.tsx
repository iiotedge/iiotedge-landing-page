"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Factory, Zap, Truck, Building2, Droplets, Wind,
  ArrowRight, CheckCircle, TrendingUp, Shield, 
  Battery, Gauge, Thermometer, Activity, Eye,
  Users, Clock, DollarSign, BarChart3
} from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Industry {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  color: 'blue' | 'yellow' | 'green' | 'purple' | 'orange' | 'cyan';
  description: string;
  useCases: string[];
  metrics: Metric[];
  technologies: string[];
  image: string;
}

interface IndustryCardProps {
  industry: Industry;
  index: number;
  isActive: boolean;
  isVisible: boolean;
  onHover: (index: number) => void;
}

interface DetailViewProps {
  industry: Industry;
}

interface ColorClasses {
  bg: string;
  border: string;
  activeBorder: string;
  text: string;
  iconBg: string;
  glow: string;
}

const IndustriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
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

  const industries: Industry[] = [
    {
      id: 'manufacturing',
      icon: Factory,
      title: 'Smart Manufacturing',
      tagline: 'Industry 4.0 Ready',
      color: 'blue',
      description: 'Transform your factory floor with real-time monitoring, predictive maintenance, and AI-powered quality control.',
      useCases: [
        'Production line optimization',
        'Quality control automation',
        'Predictive maintenance',
        'Energy management',
        'OEE tracking'
      ],
      metrics: [
        { label: 'Uptime Increase', value: '23%', icon: TrendingUp },
        { label: 'Defect Reduction', value: '45%', icon: Eye },
        { label: 'Cost Savings', value: '$2.4M', icon: DollarSign }
      ],
      technologies: ['OPC-UA', 'MQTT', '5G', 'Edge AI'],
      image: 'Manufacturing facility'
    },
    {
      id: 'energy',
      icon: Zap,
      title: 'Energy & Utilities',
      tagline: 'Smart Grid Management',
      color: 'yellow',
      description: 'Optimize energy distribution, integrate renewables, and monitor critical infrastructure in real-time.',
      useCases: [
        'Smart grid management',
        'Renewable integration',
        'Asset monitoring',
        'Load balancing',
        'Outage prediction'
      ],
      metrics: [
        { label: 'Grid Efficiency', value: '+18%', icon: Activity },
        { label: 'Downtime Reduced', value: '67%', icon: Clock },
        { label: 'Energy Saved', value: '340 MWh', icon: Zap }
      ],
      technologies: ['Modbus', 'DNP3', '5G', 'Predictive Analytics'],
      image: 'Solar farm'
    },
    {
      id: 'ev',
      icon: Battery,
      title: 'EV Charging Infrastructure',
      tagline: 'Network Management',
      color: 'green',
      description: 'Manage charging networks at scale with intelligent load balancing, payment integration, and predictive maintenance.',
      useCases: [
        'Network management',
        'Load balancing',
        'Payment integration',
        'Predictive maintenance',
        'Usage analytics'
      ],
      metrics: [
        { label: 'Uptime', value: '99.8%', icon: CheckCircle },
        { label: 'Stations Managed', value: '5,000+', icon: Battery },
        { label: 'Revenue Growth', value: '+156%', icon: TrendingUp }
      ],
      technologies: ['OCPP', 'MQTT', '5G', 'Cloud Analytics'],
      image: 'EV charging station'
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics & Warehousing',
      tagline: 'Automated Operations',
      color: 'purple',
      description: 'Coordinate AGV fleets, automate inventory, and optimize warehouse operations with real-time tracking.',
      useCases: [
        'AGV/AMR fleet coordination',
        'Inventory automation',
        'Asset tracking',
        'Temperature monitoring',
        'Route optimization'
      ],
      metrics: [
        { label: 'Efficiency Gain', value: '+42%', icon: Gauge },
        { label: 'Errors Reduced', value: '89%', icon: CheckCircle },
        { label: 'Throughput', value: '+35%', icon: TrendingUp }
      ],
      technologies: ['5G', 'Edge Computing', 'Computer Vision', 'RFID'],
      image: 'Warehouse with AGVs'
    },
    {
      id: 'oil-gas',
      icon: Droplets,
      title: 'Oil & Gas',
      tagline: 'Remote Operations',
      color: 'orange',
      description: 'Monitor pipelines, wells, and refineries remotely with industrial-grade reliability and security.',
      useCases: [
        'Remote monitoring',
        'Pipeline management',
        'Safety systems',
        'Leak detection',
        'Compliance tracking'
      ],
      metrics: [
        { label: 'Safety Incidents', value: '-78%', icon: Shield },
        { label: 'Remote Sites', value: '2,000+', icon: Droplets },
        { label: 'Response Time', value: '<5min', icon: Clock }
      ],
      technologies: ['Modbus', 'Satellite + 5G', 'Edge Analytics', 'IoT Sensors'],
      image: 'Oil pipeline'
    },
    {
      id: 'building',
      icon: Building2,
      title: 'Building Automation',
      tagline: 'Smart Infrastructure',
      color: 'cyan',
      description: 'Optimize HVAC, lighting, and security systems for energy efficiency and occupant comfort.',
      useCases: [
        'HVAC optimization',
        'Energy management',
        'Occupancy sensing',
        'Security integration',
        'Predictive maintenance'
      ],
      metrics: [
        { label: 'Energy Saved', value: '32%', icon: Zap },
        { label: 'Comfort Score', value: '94/100', icon: Thermometer },
        { label: 'ROI Period', value: '18 mo', icon: DollarSign }
      ],
      technologies: ['BACnet', 'Modbus', 'MQTT', 'Cloud Analytics'],
      image: 'Smart building'
    }
  ];

  const IndustryCard = ({ industry, index, isActive, isVisible, onHover }: IndustryCardProps) => {
    const Icon = industry.icon;
    const colorClasses: Record<string, ColorClasses> = {
      blue: { 
        bg: 'from-blue-500/10 to-blue-600/5', 
        border: 'border-blue-500/30', 
        activeBorder: 'border-blue-500',
        text: 'text-blue-400',
        iconBg: 'bg-blue-500/10',
        glow: 'shadow-blue-500/50'
      },
      yellow: { 
        bg: 'from-yellow-500/10 to-yellow-600/5', 
        border: 'border-yellow-500/30', 
        activeBorder: 'border-yellow-500',
        text: 'text-yellow-400',
        iconBg: 'bg-yellow-500/10',
        glow: 'shadow-yellow-500/50'
      },
      green: { 
        bg: 'from-green-500/10 to-green-600/5', 
        border: 'border-green-500/30', 
        activeBorder: 'border-green-500',
        text: 'text-green-400',
        iconBg: 'bg-green-500/10',
        glow: 'shadow-green-500/50'
      },
      purple: { 
        bg: 'from-purple-500/10 to-purple-600/5', 
        border: 'border-purple-500/30', 
        activeBorder: 'border-purple-500',
        text: 'text-purple-400',
        iconBg: 'bg-purple-500/10',
        glow: 'shadow-purple-500/50'
      },
      orange: { 
        bg: 'from-orange-500/10 to-orange-600/5', 
        border: 'border-orange-500/30', 
        activeBorder: 'border-orange-500',
        text: 'text-orange-400',
        iconBg: 'bg-orange-500/10',
        glow: 'shadow-orange-500/50'
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

    const colors = colorClasses[industry.color];

    return (
      <div
        onMouseEnter={() => onHover(index)}
        className={`group relative cursor-pointer transition-all duration-500 ease-out ${
          isActive ? 'scale-105' : ''
        }`}
        style={{
          animation: isVisible ? `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` : 'none'
        }}
      >
        <div className={`relative h-full p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 ease-out ${
          isActive 
            ? `bg-gradient-to-br ${colors.bg} ${colors.activeBorder} shadow-xl ${colors.glow}` 
            : `bg-slate-900/30 ${colors.border} hover:${colors.activeBorder}`
        }`}>
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-xl mb-4 ${colors.iconBg} ${
            isActive ? 'ring-2 ' + colors.activeBorder : ''
          } transition-all duration-300 ease-out`}>
            <Icon className={`w-8 h-8 ${colors.text}`} />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
          <p className={`text-sm mb-4 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
            {industry.tagline}
          </p>

          <p className={`text-sm leading-relaxed transition-colors duration-300 ease-out ${
            isActive ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {industry.description}
          </p>

          {/* Arrow indicator */}
          <div className={`absolute bottom-6 right-6 transition-all duration-300 ease-out ${
            isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <ArrowRight className={`w-5 h-5 ${colors.text}`} />
          </div>

          {/* Active indicator */}
          {isActive && (
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} rounded-b-2xl`} />
          )}
        </div>
      </div>
    );
  };

  const DetailView = ({ industry }: DetailViewProps) => {
    const Icon = industry.icon;
    const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
      blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
      yellow: { text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
      green: { text: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
      purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
      orange: { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
      cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' }
    };
    const colors = colorClasses[industry.color];

    return (
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Use Cases & Technologies */}
        <div className="space-y-6">
          {/* Use Cases */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Key Use Cases</h4>
            <div className="space-y-2">
              {industry.useCases.map((useCase, i) => (
                <div 
                  key={i}
                  className="flex items-start space-x-3"
                  style={{ animation: `fadeInLeft 0.4s ease-out ${i * 0.1}s both` }}
                >
                  <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-slate-300">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {industry.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 ${colors.bg} border ${colors.border} rounded-full text-sm ${colors.text} font-medium`}
                  style={{ animation: `fadeIn 0.4s ease-out ${0.3 + i * 0.1}s both` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className={`group flex items-center space-x-2 px-6 py-3 ${colors.bg} border ${colors.border} rounded-lg font-semibold ${colors.text} hover:bg-opacity-80 transition-all duration-300 ease-out`}>
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
          </button>
        </div>

        {/* Right: Metrics & Visual */}
        <div className="space-y-6">
          {/* Image placeholder */}
          <div className={`relative w-full h-64 ${colors.bg} border ${colors.border} rounded-xl overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className={`w-24 h-24 ${colors.text} opacity-20`} />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2">
                <div className="text-xs text-slate-400 mb-1">Industry Solution</div>
                <div className="text-sm font-semibold text-white">{industry.image}</div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {industry.metrics.map((metric, i) => {
              const MetricIcon = metric.icon;
              return (
                <div
                  key={i}
                  className={`${colors.bg} border ${colors.border} rounded-xl p-4 text-center`}
                  style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}
                >
                  <MetricIcon className={`w-5 h-5 ${colors.text} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

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
            <Factory className="w-4 h-4" />
            <span>Industries</span>
          </div>
          
          <h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none' }}
          >
            Built for Industrial-Grade
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none' }}
          >
            From manufacturing to energy, logistics to smart buildings—our solutions 
            are proven across the most demanding industrial environments.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={index}
              isActive={activeIndustry === index}
              isVisible={isVisible}
              onHover={setActiveIndustry}
            />
          ))}
        </div>

        {/* Detail View */}
        <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="flex items-center space-x-3 mb-8">
            {(() => {
              const Icon = industries[activeIndustry].icon;
              return <Icon className="w-8 h-8 text-blue-400" />;
            })()}
            <div>
              <h3 className="text-2xl font-bold text-white">
                {industries[activeIndustry].title}
              </h3>
              <p className="text-slate-400">
                {industries[activeIndustry].tagline}
              </p>
            </div>
          </div>
          
          <DetailView industry={industries[activeIndustry]} />
        </div>

        {/* Stats Bar */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 1.2s both' : 'none' }}
        >
          {[
            { label: 'Industries Served', value: '6+', icon: Factory },
            { label: 'Active Deployments', value: '50+', icon: CheckCircle },
            { label: 'Countries', value: '12+', icon: Building2 },
            { label: 'Uptime SLA', value: '99.95%', icon: Shield }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div 
                key={i}
                className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-center"
              >
                <Icon className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Don't See Your Industry?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We've powered solutions across dozens of industrial verticals. 
            Let's discuss how IIoTEdge can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
              <span className="flex items-center justify-center space-x-2">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
              </span>
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-semibold transition-all duration-300 ease-out hover:scale-105">
              View All Case Studies
            </button>
          </div>
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
      `}</style>
    </div>
  );
};

export default IndustriesSection;

