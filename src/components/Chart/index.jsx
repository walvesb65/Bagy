import React from 'react';
import { AreaChart, Area, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './styles.css';


export default function Chart() {

  return (
    <div className='chart_container'>
      <AreaChart
        width={800}
        height={360}
        margin={{
          top: 30,
          right: -30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="july" x1="0" y1="0" x2="1" y2="0">
            <stop offset="1.47%" stopColor="#37f3ff" stopOpacity={1} />
            <stop offset="96.74%" stopColor="#3751FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis
          orientation="right"
          tick={{ fontSize: '8px', fill: '#9FA2B4' }}
          strokeWidth={1}
          axisLine={false}
          tickCount={7}
          domain={[0, 60]}
          dy={-10}
          dx={-10}
        />
        <Tooltip  />
        <Area
          type="monotone"
          dataKey="Junho"
          stroke="#dfe0eb"
          strokeWidth={2}
          dot={false}
          activeDot={false}
          fill={'#fff'}
        />
        <Area
          type="monotone"
          dataKey="Julho"
          stroke="#fc3c8d"
          activeDot={{ r: 6 }}
          strokeWidth={2}
          dot={false}
          fill="url(#july)"
          fillOpacity={0.1}
        />
        <CartesianGrid vertical={false} />
      </AreaChart>
    </div>
  );
};
