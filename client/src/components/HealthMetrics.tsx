
import React from 'react';
import { Analytics } from '@/types';

interface HealthMetricsProps {
  analytics: Analytics;
}

export default function HealthMetrics({ analytics }: HealthMetricsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Package Health</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-600">Downloads</h4>
          <p className="text-2xl font-bold">{analytics.downloads.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-600">GitHub Stars</h4>
          <p className="text-2xl font-bold">{analytics.stars.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-600">Open Issues</h4>
          <p className="text-2xl font-bold">{analytics.issues}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium text-gray-600">Last Update</h4>
          <p className="text-2xl font-bold">{new Date(analytics.lastUpdate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
