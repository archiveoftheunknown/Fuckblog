import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

interface DataTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
  className?: string;
}

export function DataTable({ headers, rows, caption, className = '' }: DataTableProps) {
  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleSort = (columnIndex: number) => {
    if (sortColumn === columnIndex) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnIndex);
      setSortDirection('asc');
    }
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (sortColumn === null) return 0;
    
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    
    // Try to parse as number first
    const aNum = parseFloat(aVal.replace(/[^0-9.-]/g, ''));
    const bNum = parseFloat(bVal.replace(/[^0-9.-]/g, ''));
    
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
    }
    
    // Fall back to string comparison
    return sortDirection === 'asc' 
      ? aVal.localeCompare(bVal)
      : bVal.localeCompare(aVal);
  });

  return (
    <motion.div 
      className={`rounded-xl glass-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: '100vw' }}
    >
      <div className="overflow-x-auto" style={{ maxWidth: '100%' }}>
        <table className="w-full">
        {caption && (
          <caption className="text-lg font-semibold text-foreground mb-4 text-left px-4 py-2">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-border/50">
            {headers.map((header, index) => (
              <motion.th
                key={index}
                className="px-4 py-3 text-left font-semibold text-foreground cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => handleSort(index)}
                whileHover={{ backgroundColor: 'rgba(var(--accent), 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span>{header}</span>
                  <span className="ml-2">
                    {sortColumn === index ? (
                      sortDirection === 'asc' ? (
                        <ArrowUp className="w-4 h-4 text-primary" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-primary" />
                      )
                    ) : (
                      <ArrowUpDown className="w-4 h-4 text-muted-foreground opacity-50" />
                    )}
                  </span>
                </div>
              </motion.th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              className="border-b border-border/30 transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: rowIndex * 0.05 }}
              onMouseEnter={() => setHoveredRow(rowIndex)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                backgroundColor: hoveredRow === rowIndex ? 'rgba(var(--primary-rgb), 0.05)' : 'transparent',
              }}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-foreground/90"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (rowIndex * 0.05) + (cellIndex * 0.02) }}
                  >
                    {cell}
                  </motion.div>
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
      </div>
    </motion.div>
  );
}