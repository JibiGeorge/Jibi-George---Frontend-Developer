import dagre from 'dagre';
import { Edge, Node } from '@xyflow/react';


const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));


export function getLayoutedElements(
    nodes: Node[],
    edges: Edge[],
    direction: 'TB' | 'LR' = 'TB'
) {
    const isHorizontal = direction === 'LR';

    dagreGraph.setGraph({
        rankdir: direction,
        ranksep: 140,   // 🔥 vertical spacing between levels
        nodesep: 80,    // 🔥 horizontal spacing between nodes
        marginx: 50,
        marginy: 50,
    });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, {
            width: 220,
            height: node.data?.isHome ? 360 : 120, // 🔥 CRITICAL
        });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const layoutedNodes = nodes.map((node) => {
        const { x, y } = dagreGraph.node(node.id);

        return {
            ...node,
            position: {
                x: x - 110,
                y: y - (node.data?.isHome ? 180 : 60),
            },
        };
    });

    return { nodes: layoutedNodes, edges };
}