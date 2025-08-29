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
  const renderLabel = (entry: any) => {
    if (window.innerWidth < 768) return null;
    return `${entry.name}: ${entry.value}`;
  };

  return (
    <motion.div
      className={`glass-card rounded-xl p-2 md:p-4 w-full ${className}`}
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
    >
      {title && (
        <h3 className="text-sm md:text-lg font-semibold text-foreground mb-2 md:mb-4">{title}</h3>
      )}
      <div className="w-full overflow-hidden" style={{ maxWidth: 'calc(100vw - 3rem)' }}>
        <ResponsiveContainer width="99%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={false}
            outerRadius={window.innerWidth < 768 ? 50 : 70}
            fill="#8884d8"
            dataKey={dataKey}
            animationBegin={0}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
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
}: BaseChartProps) {
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