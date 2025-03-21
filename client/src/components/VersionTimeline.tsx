
import React from 'react';
import { Version } from '@/types';

interface VersionTimelineProps {
  versions: Version[];
}

export default function VersionTimeline({ versions }: VersionTimelineProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Version History</h3>
      <div className="space-y-4">
        {versions.map((version) => (
          <div key={version.id} className="flex gap-4 items-start">
            <div className={`w-3 h-3 rounded-full mt-2 ${version.breakingChanges ? 'bg-red-500' : 'bg-green-500'}`} />
            <div>
              <h4 className="font-medium">{version.version}</h4>
              <p className="text-sm text-gray-500">{version.releaseDate}</p>
              <ul className="mt-2 space-y-1">
                {version.changes.map((change, index) => (
                  <li key={index} className="text-sm text-gray-600">• {change}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
