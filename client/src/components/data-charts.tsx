import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Sector,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const COLORS = [
  '#d86d55', // primary color
  '#3598d4', // chart-1 blue
  '#14b868', // chart-2 green  
  '#f5bf38', // chart-3 yellow
  '#22c569', // chart-4 teal
  '#c73e7f', // chart-5 pink
];

interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

interface BaseChartProps {
  data: ChartData[];
  title?: string;
  className?: string;
}

interface BarChartProps extends BaseChartProps {
  dataKey?: string;
  xKey?: string;
}

interface PieChartProps extends BaseChartProps {
  dataKey?: string;
  showLabel?: boolean;
}

interface LineChartProps extends BaseChartProps {
  dataKeys?: string[];
  xKey?: string;
}

interface RadarChartProps extends BaseChartProps {
  dataKey?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 rounded-lg border border-border">
        <p className="font-semibold text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function InteractiveBarChart({ 
  data, 
  title, 
  className = '', 
  dataKey = 'value',
  xKey = 'name' 
}: BarChartProps) {
  return (
    <motion.div
      className={`glass-card rounded-xl p-2 md:p-4 w-full ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h3 className="text-sm md:text-lg font-semibold text-foreground mb-2 md:mb-4">{title}</h3>
      )}
      <div className="w-full overflow-hidden" style={{ maxWidth: 'calc(100vw - 3rem)' }}>
        <ResponsiveContainer width="99%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey={xKey} 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
            style={{ fontSize: '12px' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Bar 
            dataKey={dataKey} 
            fill="hsl(var(--primary))"
            animationDuration={1000}
            radius={[8, 8, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function InteractivePieChart({ 
  data, 
  title, 
  className = '', 
  dataKey = 'value',
  showLabel = true 
}: PieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const [animatedData, setAnimatedData] = useState(data);
  
  // Gradient colors with glass effect
  const gradientColors = [
    { start: '#60a5fa', end: '#3b82f6' }, // Blue gradient
    { start: '#34d399', end: '#10b981' }, // Green gradient  
    { start: '#fbbf24', end: '#f59e0b' }, // Yellow gradient
    { start: '#f87171', end: '#ef4444' }, // Red gradient
    { start: '#a78bfa', end: '#8b5cf6' }, // Purple gradient
    { start: '#f472b6', end: '#ec4899' }, // Pink gradient
  ];
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    if (percent < 5 || activeIndex !== undefined && activeIndex !== index) return null;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="font-bold text-sm pointer-events-none"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}
      >
        {`${percent.toFixed(0)}%`}
      </text>
    );
  };

  const CustomActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
    
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 8}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          cornerRadius={12}
        />
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius - 2}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          fillOpacity={0.3}
          cornerRadius={12}
        />
      </g>
    );
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(undefined);
  };

  return (
    <motion.div
      className={`rounded-2xl p-4 md:p-6 w-full backdrop-blur-md bg-background/30 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      {title && (
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">{title}</h3>
      )}
      
      <div className="flex flex-col items-center">
        {/* Pie Chart with gradients */}
        <div className="w-full max-w-md">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <defs>
                {gradientColors.map((color, index) => (
                  <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={color.start} stopOpacity={0.9} />
                    <stop offset="100%" stopColor={color.end} stopOpacity={1} />
                  </linearGradient>
                ))}
              </defs>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={window.innerWidth < 768 ? 50 : 60}
                outerRadius={window.innerWidth < 768 ? 100 : 120}
                paddingAngle={0}
                fill="#8884d8"
                dataKey={dataKey}
                animationBegin={0}
                animationDuration={1500}
                animationEasing="ease-out"
                activeIndex={activeIndex}
                activeShape={CustomActiveShape}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`url(#gradient-${index % gradientColors.length})`}
                    stroke="none"
                    strokeWidth={0}
                    style={{
                      filter: activeIndex !== undefined && activeIndex !== index ? 'opacity(0.6)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend with glass effect */}
        <div className="w-full max-w-lg mt-6 space-y-2">
          {data.map((entry, index) => {
            const color = gradientColors[index % gradientColors.length];
            return (
              <motion.div 
                key={entry.name}
                className="flex items-center justify-between p-3 rounded-xl backdrop-blur-sm transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(undefined)}
                style={{
                  background: activeIndex === index 
                    ? `linear-gradient(135deg, ${color.start}20 0%, ${color.end}15 100%)`
                    : 'rgba(255, 255, 255, 0.03)',
                  border: activeIndex === index ? `1px solid ${color.end}40` : '1px solid transparent',
                  opacity: activeIndex !== undefined && activeIndex !== index ? 0.5 : 1,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-md flex-shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${color.start} 0%, ${color.end} 100%)`,
                      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)'
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{entry.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {typeof entry.value === 'number' ? `${entry.value.toLocaleString()} suara` : entry.value}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold" 
                     style={{ 
                       background: `linear-gradient(135deg, ${color.start} 0%, ${color.end} 100%)`,
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent',
                       backgroundClip: 'text'
                     }}>
                    {typeof entry.value === 'number' ? entry.value.toFixed(0) : entry.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export function InteractiveLineChart({ 
  data, 
  title, 
  className = '', 
  dataKeys = ['value'],
  xKey = 'name' 
}: LineChartProps) {
  return (
    <motion.div
      className={`glass-card rounded-xl p-2 md:p-4 w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h3 className="text-sm md:text-lg font-semibold text-foreground mb-2 md:mb-4">{title}</h3>
      )}
      <div className="w-full overflow-hidden" style={{ maxWidth: 'calc(100vw - 3rem)' }}>
        <ResponsiveContainer width="99%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey={xKey} 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
            style={{ fontSize: '12px' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
          />
          {dataKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth={2}
              dot={{ fill: COLORS[index % COLORS.length], r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1500}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function InteractiveAreaChart({ 
  data, 
  title, 
  className = '', 
  dataKeys = ['value'],
  xKey = 'name' 
}: LineChartProps) {
  return (
    <motion.div
      className={`glass-card rounded-xl p-2 md:p-4 w-full ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {title && (
        <h3 className="text-sm md:text-lg font-semibold text-foreground mb-2 md:mb-4">{title}</h3>
      )}
      <div className="w-full overflow-hidden" style={{ maxWidth: 'calc(100vw - 3rem)' }}>
        <ResponsiveContainer width="99%" height={200}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey={xKey} 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))' }}
            style={{ fontSize: '12px' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
          />
          {dataKeys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={COLORS[index % COLORS.length]}
              fill={COLORS[index % COLORS.length]}
              fillOpacity={0.3}
              strokeWidth={2}
              animationDuration={1500}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function InteractiveRadarChart({ 
  data, 
  title, 
  className = '', 
  dataKey = 'value' 
}: RadarChartProps) {
  return (
    <motion.div
      className={`glass-card rounded-xl p-2 md:p-4 w-full ${className}`}
      initial={{ opacity: 0, rotate: 90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.7 }}
    >
      {title && (
        <h3 className="text-sm md:text-lg font-semibold text-foreground mb-2 md:mb-4">{title}</h3>
      )}
      <div className="w-full overflow-hidden" style={{ maxWidth: 'calc(100vw - 3rem)' }}>
        <ResponsiveContainer width="99%" height={200}>
        <RadarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.3} />
          <PolarAngleAxis 
            dataKey="name" 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
          />
          <PolarRadiusAxis 
            stroke="hsl(var(--foreground))"
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 10 }}
          />
          <Radar 
            name="Value" 
            dataKey={dataKey} 
            stroke="hsl(var(--primary))" 
            fill="hsl(var(--primary))" 
            fillOpacity={0.6}
            animationDuration={1500}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    </motion.div>
  );
}