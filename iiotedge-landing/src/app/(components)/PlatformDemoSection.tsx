"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, Bell, TrendingUp, Shield, Settings, 
  Zap, Database, Eye, AlertTriangle, CheckCircle,
  Activity, Gauge, Thermometer, Power, Wifi,
  Search, Filter, Download, Share2, Play, Pause,
  ChevronRight, Maximize2, Cpu, Cloud, LineChart
} from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Device {
  id: number;
  name: string;
  status: 'online' | 'warning' | 'offline';
  temp: number;
  power: number;
  efficiency: number;
}

interface Alert {
  id: number;
  type: 'warning' | 'info' | 'success';
  device: string;
  message: string;
  time: string;
  priority: string;
}

interface MetricCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  change: string;
  positive: boolean;
}

interface DeviceCardProps {
  device: Device;
  isSelected: boolean;
  onClick: () => void;
}

interface AlertCardProps {
  alert: Alert;
}

interface LiveChartProps {
  isPlaying: boolean;
}

interface ChartDataPoint {
  time: number;
  value: number;
}

const PlatformDemoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('monitoring');
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState<number | null>(null);
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

  const tabs: Tab[] = [
    { id: 'monitoring', label: 'Real-Time Monitoring', icon: Activity },
    { id: 'analytics', label: 'Predictive Analytics', icon: TrendingUp },
    { id: 'alerts', label: 'Smart Alerts', icon: Bell },
    { id: 'control', label: 'Remote Control', icon: Settings }
  ];

  const devices: Device[] = [
    { id: 1, name: 'Assembly Line A', status: 'online', temp: 72, power: 85, efficiency: 94 },
    { id: 2, name: 'Conveyor B-12', status: 'online', temp: 68, power: 92, efficiency: 97 },
    { id: 3, name: 'Robot Arm C3', status: 'warning', temp: 89, power: 78, efficiency: 88 },
    { id: 4, name: 'CNC Machine D', status: 'online', temp: 75, power: 88, efficiency: 96 },
    { id: 5, name: 'Quality Station E', status: 'online', temp: 70, power: 91, efficiency: 99 },
  ];

  const alerts: Alert[] = [
    { id: 1, type: 'warning', device: 'Robot Arm C3', message: 'Temperature approaching threshold', time: '2 min ago', priority: 'medium' },
    { id: 2, type: 'info', device: 'Assembly Line A', message: 'Maintenance due in 48 hours', time: '15 min ago', priority: 'low' },
    { id: 3, type: 'success', device: 'Conveyor B-12', message: 'Performance optimization complete', time: '1 hour ago', priority: 'low' },
  ];

  const DashboardHeader = () => (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-slate-400">Live Data</span>
        </div>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4 text-slate-400" /> : <Play className="w-4 h-4 text-slate-400" />}
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
          <Search className="w-4 h-4 text-slate-400" />
        </button>
        <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
          <Filter className="w-4 h-4 text-slate-400" />
        </button>
        <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
          <Download className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  );

  const MetricCard = ({ icon: Icon, label, value, change, positive }: MetricCardProps) => (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
      <div className="flex items-center space-x-3 mb-3">
        <Icon className="w-5 h-5 text-blue-400" />
        <span className="text-sm text-slate-400">{label}</span>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className={`text-sm ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </div>
    </div>
  );

  const LiveChart = ({ isPlaying }: LiveChartProps) => {
    const [data, setData] = useState<ChartDataPoint[]>(Array(20).fill(0).map((_, i) => ({
      time: i,
      value: 50 + Math.random() * 30
    })));

    useEffect(() => {
      if (!isPlaying) return;

      const interval = setInterval(() => {
        setData(prev => {
          const newData = [...prev.slice(1), {
            time: prev[prev.length - 1].time + 1,
            value: 50 + Math.random() * 30
          }];
          return newData;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [isPlaying]);

    return (
      <div className="h-48 flex items-end space-x-1">
        {data.map((point, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t transition-all duration-300"
            style={{ height: `${point.value}%` }}
          />
        ))}
      </div>
    );
  };

  const DeviceCard = ({ device, isSelected, onClick }: DeviceCardProps) => (
    <div 
      onClick={onClick}
      className={`bg-slate-900/50 border rounded-xl p-4 cursor-pointer transition-all ${
        isSelected ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-800 hover:border-slate-700'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            device.status === 'online' ? 'bg-green-500/10' : 'bg-yellow-500/10'
          }`}>
            <Cpu className={`w-5 h-5 ${
              device.status === 'online' ? 'text-green-400' : 'text-yellow-400'
            }`} />
          </div>
          <div>
            <div className="font-semibold text-white">{device.name}</div>
            <div className="text-xs text-slate-400 capitalize">{device.status}</div>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-600" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <Thermometer className="w-3 h-3 text-slate-500" />
            <span className="text-xs text-slate-500">Temp</span>
          </div>
          <div className="text-sm font-semibold text-white">{device.temp}°F</div>
        </div>
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <Power className="w-3 h-3 text-slate-500" />
            <span className="text-xs text-slate-500">Power</span>
          </div>
          <div className="text-sm font-semibold text-white">{device.power}%</div>
        </div>
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <Gauge className="w-3 h-3 text-slate-500" />
            <span className="text-xs text-slate-500">Eff.</span>
          </div>
          <div className="text-sm font-semibold text-white">{device.efficiency}%</div>
        </div>
      </div>
    </div>
  );

  const AlertCard = ({ alert }: AlertCardProps) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      warning: AlertTriangle,
      info: Bell,
      success: CheckCircle
    };
    const Icon = iconMap[alert.type];
    
    const colorMap: Record<string, { bg: string; border: string; text: string }> = {
      warning: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400' },
      info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
      success: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' }
    };
    const colors = colorMap[alert.type];

    return (
      <div className={`${colors.bg} border ${colors.border} rounded-xl p-4`}>
        <div className="flex items-start space-x-3">
          <Icon className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-white">{alert.device}</span>
              <span className="text-xs text-slate-500">{alert.time}</span>
            </div>
            <p className="text-sm text-slate-300">{alert.message}</p>
          </div>
        </div>
      </div>
    );
  };

  const MonitoringView = () => {
    const [metrics, setMetrics] = useState({
      activeDevices: 342,
      dataPoints: 12847,
      uptime: 99.95,
      alerts: 3
    });

    useEffect(() => {
      if (!isPlaying) return;
      
      const interval = setInterval(() => {
        setMetrics(prev => ({
          activeDevices: prev.activeDevices + Math.floor(Math.random() * 3 - 1),
          dataPoints: prev.dataPoints + Math.floor(Math.random() * 100),
          uptime: 99.95,
          alerts: prev.alerts
        }));
      }, 2000);

      return () => clearInterval(interval);
    }, [isPlaying]);

    return (
      <div className="space-y-6">
        <DashboardHeader />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            icon={Cpu}
            label="Active Devices"
            value={metrics.activeDevices}
            change="+2.4%"
            positive={true}
          />
          <MetricCard
            icon={Database}
            label="Data Points/min"
            value={metrics.dataPoints.toLocaleString()}
            change="+12.3%"
            positive={true}
          />
          <MetricCard
            icon={Activity}
            label="System Uptime"
            value={`${metrics.uptime}%`}
            change="↑ 0.02%"
            positive={true}
          />
          <MetricCard
            icon={Bell}
            label="Active Alerts"
            value={metrics.alerts}
            change="2 resolved"
            positive={true}
          />
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-white">Real-Time Performance</h4>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>Last 24 hours</span>
            </div>
          </div>
          <LiveChart isPlaying={isPlaying} />
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {devices.map(device => (
            <DeviceCard 
              key={device.id} 
              device={device}
              isSelected={selectedDevice === device.id}
              onClick={() => setSelectedDevice(device.id)}
            />
          ))}
        </div>
      </div>
    );
  };

  const AnalyticsView = () => (
    <div className="space-y-6">
      <DashboardHeader />

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Predictive Maintenance</h4>
              <p className="text-sm text-slate-400">AI-powered failure prediction</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { device: 'Pump Motor #4', risk: 78, days: 12, color: 'red' },
              { device: 'Conveyor Belt B', risk: 45, days: 28, color: 'yellow' },
              { device: 'Robot Arm C3', risk: 23, days: 45, color: 'green' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">{item.device}</span>
                  <span className={`font-semibold ${
                    item.color === 'red' ? 'text-red-400' :
                    item.color === 'yellow' ? 'text-yellow-400' :
                    'text-green-400'
                  }`}>
                    {item.risk}% risk
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        item.color === 'red' ? 'bg-red-500' :
                        item.color === 'yellow' ? 'bg-yellow-500' :
                        'bg-green-500'
                      } transition-all duration-1000`}
                      style={{ width: `${item.risk}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">{item.days}d</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Energy Optimization</h4>
              <p className="text-sm text-slate-400">Smart consumption insights</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Today's Consumption</span>
                <span className="text-2xl font-bold text-white">2,847 kWh</span>
              </div>
              <div className="text-sm text-green-400">↓ 12% vs yesterday</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-1">Peak Hours</div>
                <div className="text-lg font-bold text-white">14:00-16:00</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-xs text-slate-400 mb-1">Savings This Month</div>
                <div className="text-lg font-bold text-green-400">$2,340</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Eye className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Quality Analytics</h4>
              <p className="text-sm text-slate-400">Real-time defect detection</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Pass Rate</span>
              <span className="text-2xl font-bold text-white">98.7%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Defects Caught</span>
              <span className="text-lg font-semibold text-purple-400">142 today</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Avg Detection Time</span>
              <span className="text-lg font-semibold text-white">0.3s</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Performance Trends</h4>
              <p className="text-sm text-slate-400">Week over week comparison</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Throughput', current: 94, previous: 89, unit: '%' },
              { label: 'Efficiency', current: 97, previous: 95, unit: '%' },
              { label: 'Availability', current: 99.5, previous: 98.8, unit: '%' },
            ].map((metric, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1 text-sm">
                  <span className="text-slate-400">{metric.label}</span>
                  <span className="text-white font-semibold">
                    {metric.current}{metric.unit}
                    <span className="text-green-400 text-xs ml-2">
                      +{(metric.current - metric.previous).toFixed(1)}
                    </span>
                  </span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    style={{ width: `${metric.current}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AlertsView = () => (
    <div className="space-y-6">
      <DashboardHeader />

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
          <div className="text-3xl font-bold text-red-400 mb-1">1</div>
          <div className="text-sm text-slate-400">Critical Alerts</div>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <div className="text-3xl font-bold text-yellow-400 mb-1">2</div>
          <div className="text-sm text-slate-400">Warnings</div>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <div className="text-3xl font-bold text-blue-400 mb-1">5</div>
          <div className="text-sm text-slate-400">Info</div>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.map(alert => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );

  const ControlView = () => (
    <div className="space-y-6">
      <DashboardHeader />

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-white mb-6">Remote Device Control</h4>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {devices.slice(0, 4).map(device => (
            <div key={device.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h5 className="font-semibold text-white mb-1">{device.name}</h5>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      device.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                    <span className="text-xs text-slate-400">{device.status}</span>
                  </div>
                </div>
                <button className="p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-blue-400" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Power</span>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue={device.power}
                      className="w-24 h-1"
                    />
                    <span className="text-sm text-white w-12 text-right">{device.power}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                  <button className="px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm font-semibold transition-colors">
                    Start
                  </button>
                  <button className="px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-400 text-sm font-semibold transition-colors">
                    Pause
                  </button>
                  <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm font-semibold transition-colors">
                    Stop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} className="relative bg-slate-950 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none' }}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Platform Demo</span>
          </div>
          
          <h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none' }}
          >
            See Your Operations in
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Real-Time
            </span>
          </h2>
          
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none' }}
          >
            Our unified platform gives you complete visibility and control over 
            your industrial operations—all in one intuitive dashboard.
          </p>
        </div>

        <div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          style={{ animation: isVisible ? 'fadeInUp 0.6s ease-out 0.8s both' : 'none' }}
        >
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 lg:p-8 mb-12">
          {activeTab === 'monitoring' && <MonitoringView />}
          {activeTab === 'analytics' && <AnalyticsView />}
          {activeTab === 'alerts' && <AlertsView />}
          {activeTab === 'control' && <ControlView />}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Cloud, title: 'Cloud & Edge Hybrid', desc: 'Process locally, sync globally' },
            { icon: Shield, title: 'Enterprise Security', desc: 'End-to-end encryption' },
            { icon: Zap, title: 'Real-Time Updates', desc: '<50ms data refresh' }
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i}
                className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-center"
                style={{ animation: isVisible ? `fadeInUp 0.6s ease-out ${1.2 + i * 0.1}s both` : 'none' }}
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-slate-400 mb-6">
            Experience the full platform with a personalized demo
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
            <span className="flex items-center justify-center space-x-2">
              <span>Request Live Demo</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PlatformDemoSection;

