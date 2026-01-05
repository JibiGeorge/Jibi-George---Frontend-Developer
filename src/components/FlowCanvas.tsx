import {
  ReactFlow,
  Background,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function FlowCanvas() {
  return (
    <div className="relative w-full h-full bg-slate-50">
      <ReactFlow fitView className="w-full h-full">
        <Background gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
