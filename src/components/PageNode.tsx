'use client';

import { Handle, Position } from '@xyflow/react';
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

        {/* SUB PAGES */}
      </div>

      {/* Handles */}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
