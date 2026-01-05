import {
    ReactFlow,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: any[] = [];
const initialEdges: any[] = [];

const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, , onEdgesChange] = useEdgesState(initialEdges);

export default function FlowCanvas() {
    return (
        <div className="relative w-full h-full bg-slate-50">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            >
                <Background gap={16} />
                <Controls />
            </ReactFlow>
        </div>
    );
}
