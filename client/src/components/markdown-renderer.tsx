import { useMemo, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { DataTable } from './data-table';
import { 
  InteractiveBarChart, 
  InteractivePieChart, 
  InteractiveLineChart,
  InteractiveAreaChart,
  InteractiveRadarChart
} from './data-charts';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Data for charts based on blog content with real Indonesian statistics
const chartDataSets: { [key: string]: any } = {
  'digital-forensics-cases': [
    { name: '2015-2017', value: 2300, cases: 'e-KTP' },
    { name: '2018', value: 1, cases: 'Ratna Sarumpaet' },
    { name: '2020', value: 2, cases: 'Djoko Tjandra' },
    { name: '2022', value: 1, cases: 'Sambo' },
    { name: '2024', value: 5000, cases: 'Fufufafa' }
  ],
  'social-media-politics': [
    { name: 'WhatsApp', value: 91, year: 2024 },
    { name: 'Facebook', value: 117.6, year: 2024 },
    { name: 'Instagram', value: 85, year: 2024 },
    { name: 'TikTok', value: 113, year: 2024 },
    { name: 'Twitter/X', value: 45, year: 2024 }
  ],
  'buzzer-operations': [
    { name: 'Individual Buzzers', value: 20000 },
    { name: 'Koordinator', value: 5000 },
    { name: 'Influencer', value: 500 },
    { name: 'Bot Networks', value: 100000 }
  ],
  'pemilu-data': [
    { name: 'Registered Voters', value: 204.8, category: 'Million' },
    { name: 'Millennial/Gen-Z', value: 113, category: 'Million' },
    { name: 'Internet Users', value: 221.5, category: 'Million' },
    { name: 'Social Media Users', value: 139, category: 'Million' },
    { name: 'TPS Stations', value: 823.2, category: 'Thousand' }
  ],
  'ite-law-timeline': [
    { name: '2016', reported: 96, convicted: 85 },
    { name: '2017', reported: 134, convicted: 126 },
    { name: '2018', reported: 178, convicted: 169 },
    { name: '2019', reported: 195, convicted: 184 },
    { name: '2020', reported: 165, convicted: 160 },
    { name: '2023', reported: 280, convicted: 272 },
    { name: '2024', reported: 320, convicted: 310 }
  ],
  'budget-allocation': [
    { name: 'Buzzer Operations', value: 472 },
    { name: 'Media Monitoring', value: 189 },
    { name: 'Content Creation', value: 267 },
    { name: 'Influencer Contracts', value: 891 },
    { name: 'Platform Ads', value: 1543 }
  ],
  'internet-generation': [
    { name: 'Gen Z', value: 87.02, users: 34.40 },
    { name: 'Millennials', value: 93.17, users: 30.62 },
    { name: 'Gen X', value: 83.69, users: 18.98 },
    { name: 'Baby Boomers', value: 60.52, users: 6.58 },
    { name: 'Post Gen Z', value: 48.10, users: 9.17 }
  ],
  'digital-engagement': [
    { name: 'Urban Users', value: 82.2, percentage: 69.5 },
    { name: 'Rural Users', value: 74, percentage: 30.5 },
    { name: 'Male Users', value: 87.6, percentage: 50.7 },
    { name: 'Female Users', value: 85.5, percentage: 49.1 }
  ]
};

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  // Parse markdown tables to data
  const parseMarkdownTable = (tableText: string) => {
    const lines = tableText.trim().split('\n').filter(line => line.trim());
    if (lines.length < 3) return null;

    // Parse headers
    const headers = lines[0].split('|').map(h => h.trim()).filter(h => h);
    
    // Skip separator line
    const dataLines = lines.slice(2);
    
    // Parse rows
    const rows = dataLines.map(line => 
      line.split('|').map(cell => cell.trim()).filter(cell => cell !== '')
    );

    return { headers, rows };
  };

  const renderContent = useMemo(() => {
    const sections: any[] = [];
    let currentText = '';
    
    // Split content into sections
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this line starts a table
      if (line.includes('|') && i + 1 < lines.length && lines[i + 1].includes('|---')) {
        // Save any accumulated text
        if (currentText) {
          sections.push({ type: 'markdown', content: currentText });
          currentText = '';
        }
        
        // Find the end of the table
        let tableEnd = i + 2;
        while (tableEnd < lines.length && lines[tableEnd].includes('|')) {
          tableEnd++;
        }
        
        // Extract and parse the table
        const tableText = lines.slice(i, tableEnd).join('\n');
        const tableData = parseMarkdownTable(tableText);
        
        if (tableData) {
          sections.push({ type: 'table', data: tableData });
          
          // Add chart after specific tables
          if (tableText.includes('Major Digital Forensics Cases')) {
            sections.push({ type: 'chart', chartType: 'bar', dataKey: 'digital-forensics-cases' });
          }
        }
        
        i = tableEnd - 1;
      } else {
        currentText += line + '\n';
      }
    }
    
    // Add remaining text
    if (currentText) {
      sections.push({ type: 'markdown', content: currentText });
    }
    
    // Add charts based on content
    if (content.includes('Evolusi Penggunaan Media Sosial')) {
      sections.push({ type: 'chart', chartType: 'bar', dataKey: 'social-media-politics' });
    }
    
    if (content.includes('Struktur Operasi Buzzer')) {
      sections.push({ type: 'chart', chartType: 'pie', dataKey: 'buzzer-operations' });
    }
    
    if (content.includes('Pemilu 2024 dalam Angka')) {
      sections.push({ type: 'chart', chartType: 'radar', dataKey: 'pemilu-data' });
    }
    
    if (content.includes('768 people') || content.includes('ITE Law')) {
      sections.push({ type: 'chart', chartType: 'line', dataKey: 'ite-law-timeline' });
    }
    
    if (content.includes('Rp 89 miliar') || content.includes('Budget Breakdown')) {
      sections.push({ type: 'chart', chartType: 'pie', dataKey: 'budget-allocation' });
    }
    
    if (content.includes('Gen Z') && content.includes('Millennials')) {
      sections.push({ type: 'chart', chartType: 'bar', dataKey: 'internet-generation' });
    }
    
    if (content.includes('Urban vs Rural') || content.includes('Urban Users')) {
      sections.push({ type: 'chart', chartType: 'area', dataKey: 'digital-engagement' });
    }
    
    return sections;
  }, [content]);

  return (
    <div className={`prose prose-lg dark:prose-invert w-full overflow-x-hidden ${className}`}>
      {renderContent.map((section, index) => {
        if (section.type === 'markdown') {
          return (
            <ReactMarkdown
              key={index}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold mb-6 text-foreground">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-foreground/90 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 text-foreground/90">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-4 text-foreground/90">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="mb-2 text-foreground/90">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground/80">
                    {children}
                  </blockquote>
                ),
                code: ({ inline, children }) => {
                  if (inline) {
                    return (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
                      <code className="text-sm text-foreground">{children}</code>
                    </pre>
                  );
                },
                strong: ({ children }) => (
                  <strong className="font-bold text-foreground">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-foreground/90">{children}</em>
                ),
                hr: () => <hr className="my-8 border-border" />,
                a: ({ href, children }) => (
                  <a 
                    href={href} 
                    className="text-primary hover:text-primary/80 underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {section.content}
            </ReactMarkdown>
          );
        }
        
        if (section.type === 'table') {
          return (
            <DataTable
              key={index}
              headers={section.data.headers}
              rows={section.data.rows}
              className="my-6"
            />
          );
        }
        
        if (section.type === 'chart') {
          const data = chartDataSets[section.dataKey];
          if (!data) return null;
          
          switch (section.chartType) {
            case 'bar':
              if (section.dataKey === 'digital-forensics-cases') {
                return <InteractiveBarChart key={index} data={data} title="Major Digital Forensics Cases (2015-2024)" className="my-6" />;
              }
              if (section.dataKey === 'social-media-politics') {
                return <InteractiveBarChart key={index} data={data} title="Social Media Platform Users in Indonesia (Million Users)" className="my-6" />;
              }
              if (section.dataKey === 'internet-generation') {
                return <InteractiveBarChart key={index} data={data} title="Internet Penetration by Generation (2024)" dataKey="users" className="my-6" />;
              }
              return <InteractiveBarChart key={index} data={data} className="my-6" />;
              
            case 'pie':
              if (section.dataKey === 'buzzer-operations') {
                return <InteractivePieChart key={index} data={data} title="Buzzer Network Distribution (Number of Accounts)" className="my-6" />;
              }
              if (section.dataKey === 'budget-allocation') {
                return <InteractivePieChart key={index} data={data} title="Digital Campaign Budget Allocation (Billion Rp)" className="my-6" />;
              }
              return <InteractivePieChart key={index} data={data} className="my-6" />;
              
            case 'line':
              return (
                <InteractiveLineChart 
                  key={index}
                  data={data} 
                  title="ITE Law Enforcement Statistics (2016-2024)"
                  dataKeys={['reported', 'convicted']}
                  className="my-6" 
                />
              );
              
            case 'area':
              return (
                <InteractiveAreaChart 
                  key={index}
                  data={data} 
                  title="Digital Engagement Demographics (% Penetration)"
                  dataKeys={['value']}
                  className="my-6" 
                />
              );
              
            case 'radar':
              return (
                <InteractiveRadarChart 
                  key={index}
                  data={data} 
                  title="2024 Election Key Statistics"
                  className="my-6" 
                />
              );
              
            default:
              return null;
          }
        }
        
        return null;
      })}
    </div>
  );
}