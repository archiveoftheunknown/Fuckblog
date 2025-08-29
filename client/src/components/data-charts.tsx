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
  
  const professionalColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 5) return null;
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
        className="font-semibold text-xs"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}
      >
        {`${percent.toFixed(0)}%`}
      </text>
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
      className={`glass-card rounded-xl p-4 md:p-6 w-full ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title && (
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">{title}</h3>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Pie Chart */}
        <div className="w-full">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={40}
                outerRadius={80}
                paddingAngle={3}
                fill="#8884d8"
                dataKey={dataKey}
                animationBegin={0}
                animationDuration={1200}
                animationEasing="ease-out"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={professionalColors[index % professionalColors.length]}
                    style={{
                      filter: activeIndex !== undefined && activeIndex !== index ? 'brightness(0.7) opacity(0.7)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                      transformOrigin: 'center'
                    }}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(31, 41, 55, 0.95)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                  padding: '12px 16px'
                }}
                itemStyle={{
                  color: '#e5e7eb',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {data.map((entry, index) => (
            <motion.div 
              key={entry.name}
              className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:translate-x-1 cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(undefined)}
              style={{
                opacity: activeIndex !== undefined && activeIndex !== index ? 0.4 : 0.85,
                backgroundColor: activeIndex === index ? 'rgba(55, 65, 81, 0.15)' : 'transparent',
              }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ 
                    backgroundColor: professionalColors[index % professionalColors.length],
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{entry.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {typeof entry.value === 'number' ? `${entry.value.toLocaleString()} votes` : entry.value}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold" style={{ color: professionalColors[index % professionalColors.length] }}>
                  {typeof entry.value === 'number' ? entry.value.toFixed(0) : entry.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info box */}
      {activeIndex !== undefined && (
        <motion.div 
          className="mt-6 p-4 bg-muted/30 backdrop-blur-sm rounded-lg text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg font-bold text-foreground">{data[activeIndex].name}</p>
          <p className="text-2xl font-bold" style={{ color: professionalColors[activeIndex % professionalColors.length] }}>
            {typeof data[activeIndex].value === 'number' ? data[activeIndex].value.toFixed(0) : data[activeIndex].value}
          </p>
        </motion.div>
      )}
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