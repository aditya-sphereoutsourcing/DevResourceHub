import React from 'react';

interface ChartData {
  name: string;
  value: number;
}

interface BarChartProps {
  data: ChartData[];
  index: string;
  categories: string[];
  colors: string[];
  valueFormatter?: (value: number) => string;
}

interface BarChartHorizontalProps {
  data: ChartData[];
  index: string;
  categories: string[];
  colors: string[];
  valueFormatter?: (value: number) => string;
  yAxisWidth?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  index, 
  categories, 
  colors,
  valueFormatter = (value) => `${value}` 
}) => {
  // Simple bar chart rendering
  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full">
        <div className="flex-1 relative">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-end absolute bottom-8" style={{ 
              left: `${(idx / data.length) * 100}%`, 
              width: `${80 / data.length}%`,
              height: '100%'
            }}>
              <div 
                className="w-full rounded-t-sm transition-all"
                style={{ 
                  height: `${(item.value / Math.max(...data.map(d => d.value))) * 100}%`,
                  backgroundColor: colors[0] || '#3b82f6'
                }}
              >
                <div className="text-xs text-white text-center py-1 font-medium">
                  {valueFormatter(item.value)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-8 flex items-center">
          {data.map((item, idx) => (
            <div 
              key={idx} 
              className="text-xs text-gray-500 text-center overflow-hidden text-ellipsis whitespace-nowrap"
              style={{ 
                width: `${100 / data.length}%`,
                paddingLeft: `${10 / data.length}%`,
                paddingRight: `${10 / data.length}%`
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BarChartHorizontal: React.FC<BarChartHorizontalProps> = ({ 
  data, 
  index, 
  categories, 
  colors,
  valueFormatter = (value) => `${value}`,
  yAxisWidth = 100
}) => {
  // Simple horizontal bar chart rendering
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="w-full h-full flex">
      <div className="w-full h-full flex flex-col justify-between">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center h-10 mb-1">
            <div className="w-24 pr-2 text-sm text-right text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap" style={{ width: `${yAxisWidth}px` }}>
              {item.name}
            </div>
            <div className="flex-1 h-8">
              <div 
                className="h-full rounded-r-sm flex items-center pl-2"
                style={{ 
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: colors[0] || '#3b82f6',
                  minWidth: item.value > 0 ? '2rem' : '0'
                }}
              >
                <span className="text-xs text-white font-medium">
                  {valueFormatter(item.value)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LineChart: React.FC<BarChartProps> = ({ 
  data, 
  index, 
  categories, 
  colors,
  valueFormatter = (value) => `${value}` 
}) => {
  // Simple placeholder for line chart
  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-gray-500">Line chart visualization</p>
    </div>
  );
};