"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  opacity: number;
}

interface MetricCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number | string;
  label: string;
  delay: number;
}

interface CountUpProps {
  end: number | string;
  duration: number;
  delay: number;
}

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState<Node[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate network nodes
  useEffect(() => {
    const newNodes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 0.5 + 0.2,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setNodes(newNodes);
  }, []);

  // Animate nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        x: (node.x + Math.cos(node.angle) * node.speed + 100) % 100,
        y: (node.y + Math.sin(node.angle) * node.speed + 100) % 100,
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Track mouse for parallax with smooth easing
  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 20;
      targetY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    const animate = () => {
      // Smooth interpolation with easing
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      setMousePos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Draw connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(other => {
          const dx = (other.x - node.x) * canvas.width / 100;
          const dy = (other.y - node.y) * canvas.height / 100;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 102, 255, ${(1 - dist / 150) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x * canvas.width / 100, node.y * canvas.height / 100);
            ctx.lineTo(other.x * canvas.width / 100, other.y * canvas.height / 100);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(
          node.x * canvas.width / 100,
          node.y * canvas.height / 100,
          node.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(0, 217, 255, ${node.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();
  }, [nodes]);

  const MetricCard = ({ icon: Icon, value, label, delay }: MetricCardProps) => (
    <div 
      className="bg-slate-900/40 backdrop-blur-md border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 transition-all duration-300 ease-out hover:transform hover:scale-105"
      style={{ 
        animation: `fadeInUp 0.8s ease-out ${delay}s both`,
      }}
    >
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <div className="text-2xl font-bold text-white mb-1">
            <CountUp end={value} duration={2000} delay={delay * 1000} />
          </div>
          <div className="text-sm text-slate-400">{label}</div>
        </div>
      </div>
      </div>
  );

  const CountUp = ({ end, duration, delay }: CountUpProps) => {
    const [count, setCount] = useState<number | string>(0);

    useEffect(() => {
      if (typeof end === 'string') {
        setCount(end);
        return;
      }
      
      const timer = setTimeout(() => {
        let start = 0;
        const increment = end / (duration / 16);
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(counter);
      }, delay);
      return () => clearTimeout(timer);
    }, [end, duration, delay]);

    return <>{typeof end === 'string' ? end : count.toLocaleString()}</>;
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform',
        }}
      />

      {/* Network Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div 
            className="space-y-8"
            style={{ 
              transform: `translate(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)`,
              transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform'
            }}
          >
            {/* Badge */}
            <div 
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-300"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
            >
              <Zap className="w-4 h-4" />
              <span>5G-Enabled Industrial IoT Platform</span>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
            >
              Industrial Intelligence
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                at the Edge
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-xl text-slate-300 leading-relaxed max-w-xl"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
            >
              Deploy AI-powered IoT solutions with 5G connectivity that transform factories, 
              energy systems, and industrial operations in real-time
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
            >
              <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get Free IoT Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
    </button>

              <button className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white rounded-lg font-semibold hover:border-blue-500/50 transition-all duration-300 ease-out hover:scale-105">
                <span className="flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5 fill-current" />
                  <span>Watch 2-Min Demo</span>
                </span>
              </button>
            </div>

            {/* Trust Bar */}
            <div 
              className="flex flex-wrap items-center gap-6 pt-8 border-t border-slate-800"
              style={{ animation: 'fadeInUp 0.8s ease-out 1s both' }}
            >
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>ISO Certified</span>
              </div>
              <div className="text-slate-600">|</div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>342+ Active Nodes</span>
              </div>
              <div className="text-slate-600">|</div>
              <div className="text-sm text-slate-400">
                12,000+ Data Points Secured
              </div>
            </div>
    </div>

          {/* Right: Floating Metrics */}
          <div 
            className="relative h-96 lg:h-[500px]"
            style={{ 
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
              transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform'
            }}
          >
            {/* Demo Image - Behind floating elements */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 z-0"
              style={{ animation: 'float 4s ease-in-out 0.3s infinite' }}
            >
              <img 
                src="/Demo.png" 
                alt="Industrial IoT Edge Device" 
                className="w-full h-full object-contain opacity-90 drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 30px rgba(0, 102, 255, 0.3))' }}
              />
            </div>

            {/* Protocol Badges */}
            <div 
              className="absolute top-0 left-0 w-32 h-32 z-10"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-400/30 rounded-2xl p-4 text-center">
                <div className="text-sm font-bold text-blue-300 mb-1">OPC-UA</div>
                <div className="text-xs text-slate-400">Protocol</div>
              </div>
            </div>

            <div 
              className="absolute top-20 right-0 w-28 h-28 z-10"
              style={{ animation: 'float 3s ease-in-out 0.5s infinite' }}
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/30 rounded-2xl p-4 text-center">
                <div className="text-sm font-bold text-purple-300 mb-1">5G</div>
                <div className="text-xs text-slate-400">Network</div>
        </div>
    </div>

            <div 
              className="absolute bottom-32 left-10 w-32 h-32 z-10"
              style={{ animation: 'float 3s ease-in-out 1s infinite' }}
            >
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-400/30 rounded-2xl p-4 text-center">
                <div className="text-sm font-bold text-green-300 mb-1">MQTT</div>
                <div className="text-xs text-slate-400">Protocol</div>
              </div>
            </div>

            {/* Main Metric Cards */}
            <div className="absolute bottom-0 right-0 space-y-4 w-64 z-10">
              <MetricCard 
                icon={Zap}
                value="99.95"
                label="Uptime %"
                delay={1.2}
              />
              <MetricCard 
                icon={TrendingUp}
                value={342}
                label="Active Nodes"
                delay={1.4}
              />
              <MetricCard 
                icon={Shield}
                value="<1ms"
                label="5G Latency"
                delay={1.6}
              />
            </div>

            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: 'bounce 2s ease-in-out infinite' }}
      >
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse" />
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        /* Smooth animation performance */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
