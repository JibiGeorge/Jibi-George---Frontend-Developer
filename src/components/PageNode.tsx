'use client';

import { Handle, Position } from '@xyflow/react';
import HomeSections from './HomeSections';
import { HomeSection } from '@/types';

type Props = {
  id: string;
  data: {
    label: string;
    level: 1 | 2 | 3;
    isHome?: boolean;

    // Home
    sections?: HomeSection[];
    onSectionsChange?: (s: HomeSection[]) => void;

    // Sub pages
    onAddSection?: (pageId: string) => void;
    onGeneratePages?: (pageId: string) => void;
  };
};

export default function PageNode({ id, data }: Props) {
  const levelColors = {
    1: 'bg-indigo-700',
    2: 'bg-indigo-500',
    3: 'bg-indigo-300',
  } as const;

  return (
    <div className="bg-white border rounded shadow w-[220px]">
      {/* Header */}
      <div
        className={`${levelColors[data.level]} text-white text-sm px-3 py-1 rounded-t`}
      >
        {data.label}
      </div>

      {/* Body */}
      <div className="p-2 text-xs space-y-2">
        {/* HOME PAGE */}
        {data.isHome && data.sections && data.onSectionsChange && (
          <HomeSections
            sections={data.sections}
            onChange={data.onSectionsChange}
          />
        )}

        {/* SUB PAGES */}
        {!data.isHome && (
          <div className="space-y-2">
            <button
              onClick={() => data.onAddSection?.(id)}
              className="w-full text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded px-2 py-1"
            >
              ➕ Add Section
            </button>

            <button
              onClick={() => data.onGeneratePages?.(id)}
              className="w-full text-xs bg-emerald-600 hover:bg-emerald-700 text-white rounded px-2 py-1"
            >
              ⚡ Generate Pages
            </button>
          </div>
        )}
      </div>

      {/* Handles */}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
