"use client";

import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, X, Zap, Shield, TrendingUp, ArrowRight, Check, Wifi, Cloud, Cpu, Network } from 'lucide-react';

interface Problem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

interface ProblemCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  delay: number;
  activeView: string;
  isVisible: boolean;
}

interface SolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  delay: number;
  activeView: string;
  isVisible: boolean;
}

interface NetworkNode {
  x: number;
  y: number;
  label: string;
  connected?: boolean;
  isHub?: boolean;
  isCloud?: boolean;
}

interface NetworkVisualizationProps {
  mode: string;
  isVisible: boolean;
}

const ProblemSolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeView, setActiveView] = useState<'problem' | 'solution'>('problem');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer for scroll animations
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

  // Auto-toggle between problem and solution views
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveView(prev => prev === 'problem' ? 'solution' : 'problem');
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const problems: Problem[] = [
    {
      icon: X,
      title: "Legacy Systems Can't Communicate",
      description: "Disconnected devices create data silos and prevent real-time decision making",
      color: "red"
    },
    {
      icon: AlertCircle,
      title: "Cloud-Only Creates Latency & Risk",
      description: "Sending all data to the cloud introduces delays and security vulnerabilities",
      color: "orange"
    },
    {
      icon: TrendingUp,
      title: "Scaling IIoT is Complex & Expensive",
      description: "Traditional approaches require massive infrastructure investments and expertise",
      color: "red"
    }
  ];

  const solutions: Solution[] = [
    {
      icon: Network,
      title: "Universal Protocol Integration",
      description: "OPC-UA, MQTT, Modbus - connect any device seamlessly",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Edge + 5G Hybrid Architecture",
      description: "Process locally with <1ms latency, sync to cloud when needed",
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Plug-and-Play Scalability",
      description: "Add nodes instantly, pay as you grow, enterprise-grade security built in",
      color: "blue"
    }
  ];

  const ProblemCard = ({ icon: Icon, title, description, color, delay, activeView, isVisible }: ProblemCardProps) => (
    <div 
      className={`group p-6 rounded-xl border transition-all duration-500 ${
        activeView === 'problem' 
          ? 'bg-red-500/5 border-red-500/30 opacity-100' 
          : 'bg-slate-800/20 border-slate-700/20 opacity-30'
      }`}
      style={{
        animation: isVisible ? `fadeInUp 0.6s ease-out ${delay}s both` : 'none'
      }}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${
          activeView === 'problem' 
            ? 'bg-red-500/10 ring-2 ring-red-500/20' 
            : 'bg-slate-700/50'
        } transition-all duration-300`}>
          <Icon className={`w-6 h-6 ${
            activeView === 'problem' ? 'text-red-400' : 'text-slate-500'
          } transition-colors`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-2 ${
            activeView === 'problem' ? 'text-white' : 'text-slate-500'
          } transition-colors`}>
            {title}
          </h3>
          <p className={`text-sm ${
            activeView === 'problem' ? 'text-slate-300' : 'text-slate-600'
          } transition-colors`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  const SolutionCard = ({ icon: Icon, title, description, color, delay, activeView, isVisible }: SolutionCardProps) => (
    <div 
      className={`group p-6 rounded-xl border transition-all duration-500 ${
        activeView === 'solution' 
          ? 'bg-blue-500/5 border-blue-500/30 opacity-100' 
          : 'bg-slate-800/20 border-slate-700/20 opacity-30'
      }`}
      style={{
        animation: isVisible ? `fadeInUp 0.6s ease-out ${delay}s both` : 'none'
      }}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${
          activeView === 'solution' 
            ? 'bg-blue-500/10 ring-2 ring-blue-500/20' 
            : 'bg-slate-700/50'
        } transition-all duration-300`}>
          <Icon className={`w-6 h-6 ${
            activeView === 'solution' ? 'text-blue-400' : 'text-slate-500'
          } transition-colors`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-2 ${
            activeView === 'solution' ? 'text-white' : 'text-slate-500'
          } transition-colors`}>
            {title}
          </h3>
          <p className={`text-sm ${
            activeView === 'solution' ? 'text-slate-300' : 'text-slate-600'
          } transition-colors`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  // Animated network visualization
  const NetworkVisualization = ({ mode, isVisible }: NetworkVisualizationProps) => {
    const nodes: NetworkNode[] = mode === 'problem' 
      ? [
          { x: 20, y: 30, label: 'PLC', connected: false },
          { x: 80, y: 25, label: 'SCADA', connected: false },
          { x: 50, y: 70, label: 'Sensor', connected: false },
          { x: 30, y: 60, label: 'HMI', connected: false },
          { x: 70, y: 65, label: 'MES', connected: false },
        ]
      : [
          { x: 30, y: 30, label: 'PLC', connected: true },
          { x: 70, y: 30, label: 'SCADA', connected: true },
          { x: 50, y: 50, label: 'Gateway', isHub: true },
          { x: 30, y: 70, label: 'Sensor', connected: true },
          { x: 70, y: 70, label: 'MES', connected: true },
          { x: 50, y: 85, label: 'Cloud', isCloud: true },
        ];

    return (
      <div className="relative w-full h-80 bg-slate-900/30 rounded-xl border border-slate-700/50 overflow-hidden">
        {/* Background grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 102, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {mode === 'solution' && nodes.filter(n => n.connected || n.isHub).map((node, i) => 
            nodes.filter((n, j) => j > i && (n.connected || n.isHub || n.isCloud)).map((targetNode, j) => {
              const hub = nodes.find(n => n.isHub);
              if (node.isHub || targetNode.isHub || (node.label === 'Cloud' && targetNode.isHub) || (targetNode.label === 'Cloud' && node.isHub)) {
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke="rgba(0, 217, 255, 0.4)"
                    strokeWidth="2"
                    className="animate-pulse"
                    style={{
                      animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`
                    }}
                  />
                );
              }
              return null;
            })
          )}
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <div
            key={i}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animation: isVisible ? `nodeFloat 3s ease-in-out ${i * 0.3}s infinite` : 'none'
            }}
          >
            <div className={`relative group cursor-pointer ${node.isHub ? 'scale-125' : ''}`}>
              {/* Node circle */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                mode === 'problem'
                  ? 'bg-red-500/10 border-red-500/30'
                  : node.isHub
                  ? 'bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/50'
                  : node.isCloud
                  ? 'bg-cyan-500/20 border-cyan-400'
                  : 'bg-blue-500/10 border-blue-500/30'
              }`}>
                {node.isHub ? (
                  <Network className="w-6 h-6 text-blue-400" />
                ) : node.isCloud ? (
                  <Cloud className="w-6 h-6 text-cyan-400" />
                ) : (
                  <Cpu className={`w-5 h-5 ${mode === 'problem' ? 'text-red-400' : 'text-blue-400'}`} />
                )}
              </div>

              {/* Pulse ring for hub */}
              {node.isHub && mode === 'solution' && (
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75" />
              )}

              {/* Label */}
              <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium px-2 py-1 rounded ${
                mode === 'problem'
                  ? 'bg-red-500/10 text-red-300'
                  : node.isHub
                  ? 'bg-blue-500/20 text-blue-300 font-bold'
                  : 'bg-slate-700/50 text-slate-300'
              }`}>
                {node.label}
              </div>

              {/* Disconnected indicator */}
              {mode === 'problem' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-3 h-3 text-white" />
                </div>
              )}

              {/* Connected indicator */}
              {mode === 'solution' && node.connected && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Status label */}
        <div className={`absolute top-4 right-4 px-4 py-2 rounded-lg font-semibold text-sm ${
          mode === 'problem'
            ? 'bg-red-500/10 text-red-300 border border-red-500/30'
            : 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
        }`}>
          {mode === 'problem' ? 'Disconnected Systems' : 'Unified Network'}
        </div>
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-slate-400 mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none' }}
          >
            <AlertCircle className="w-4 h-4" />
            <span>The Challenge</span>
          </div>
          
          <h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none' }}
          >
            Industrial Operations Are Drowning in
            <span className="block mt-2 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Disconnected Data
            </span>
          </h2>
          
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none' }}
          >
            Legacy infrastructure wasn't built for the real-time, AI-powered future. 
            Here's what's holding you back—and how we fix it.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Problems */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Current State Problems</h3>
            </div>
            
            {problems.map((problem, i) => (
              <ProblemCard 
                key={i} 
                {...problem} 
                delay={0.8 + i * 0.1} 
                activeView={activeView}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Right: Solutions */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Check className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">IIoTEdge Solution</h3>
            </div>
            
            {solutions.map((solution, i) => (
              <SolutionCard 
                key={i} 
                {...solution} 
                delay={0.8 + i * 0.1} 
                activeView={activeView}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Before/After Visualization */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveView('problem')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'problem'
                  ? 'bg-red-500/20 text-red-300 border-2 border-red-500/50'
                  : 'bg-slate-800/30 text-slate-500 border-2 border-slate-700/30 hover:border-slate-600/50'
              }`}
            >
              Before: Disconnected
            </button>
            
            <div className="flex items-center space-x-2 text-slate-500">
              <ArrowRight className="w-5 h-5" />
            </div>
            
            <button
              onClick={() => setActiveView('solution')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'solution'
                  ? 'bg-blue-500/20 text-blue-300 border-2 border-blue-500/50'
                  : 'bg-slate-800/30 text-slate-500 border-2 border-slate-700/30 hover:border-slate-600/50'
              }`}
            >
              After: IIoTEdge
            </button>
          </div>

          <NetworkVisualization mode={activeView} isVisible={isVisible} />
        </div>

        {/* Transition Statement */}
        <div 
          className="text-center"
          style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 1.4s both' : 'none' }}
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-semibold text-white">There's a Better Way</span>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            IIoTEdge unifies your industrial infrastructure with edge intelligence, 
            5G connectivity, and enterprise-grade security—all in one platform.
          </p>

          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
            <span className="flex items-center space-x-2">
              <span>Explore Our Solution</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes nodeFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProblemSolutionSection;


