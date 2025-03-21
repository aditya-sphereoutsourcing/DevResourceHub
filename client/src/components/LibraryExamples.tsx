
import React from 'react';
import { Example } from '@/types';

interface LibraryExamplesProps {
  examples: Example[];
}

export default function LibraryExamples({ examples }: LibraryExamplesProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Integration Examples</h3>
      <div className="grid gap-4">
        {examples.map((example) => (
          <div key={example.id} className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-medium mb-2">{example.title}</h4>
            <p className="text-gray-600 mb-4">{example.description}</p>
            <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
