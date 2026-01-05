'use client';

import { useEffect, useMemo } from 'react';
import { HomeSection } from "@/types";
import PageNode from "./PageNode";
import {
    Background,
    Controls,
    Edge,
    Node,
    NodeTypes,
    ReactFlow,
    useEdgesState,
    useNodesState
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { getLayoutedElements } from '@/lib/layout';

const nodeTypes: NodeTypes = {
    page: PageNode,
};

export default function FlowCanvas({
    sections,
    setSections,
}: {
    sections: HomeSection[];
    setSections: (s: HomeSection[]) => void;
}) {

    const handleAddSection = (pageId: string) => {
        console.log('Add section for:', pageId);
        alert(`Add section for ${pageId}`);
    };

    const handleGeneratePages = (pageId: string) => {
        console.log('Generate pages for:', pageId);
        alert(`Generate pages for ${pageId}`);
    };


    const baseNodes: Node[] = [
        {
            id: 'home_page',
            type: 'page',
            data: {
                label: 'HomePage',
                level: 1,
                isHome: true,
                sections,
                onSectionsChange: setSections,
            },
            position: { x: 0, y: 0 },
        },
        {
            id: 'about_us', type: 'page', data: {
                label: 'About Us', level: 2, onAddSection: handleAddSection,
                onGeneratePages: handleGeneratePages,
            }, position: { x: 0, y: 0 }
        },
        {
            id: 'courses', type: 'page', data: {
                label: 'Courses', level: 2, onAddSection: handleAddSection,
                onGeneratePages: handleGeneratePages,
            }, position: { x: 0, y: 0 }
        },
        {
            id: 'community_form', type: 'page', data: {
                label: 'Community Forum', level: 2, onAddSection: handleAddSection,
                onGeneratePages: handleGeneratePages,
            }, position: { x: 0, y: 0 }
        },
        {
            id: 'blog', type: 'page', data: {
                label: 'Blog', level: 2, onAddSection: handleAddSection,
                onGeneratePages: handleGeneratePages,
            }, position: { x: 0, y: 0 }
        },
        {
            id: 'contact_us', type: 'page', data: {
                label: 'Contact Us', level: 2, onAddSection: handleAddSection,
                onGeneratePages: handleGeneratePages,
            }, position: { x: 0, y: 0 }
        },

        {
            id: 'course_detail_page', type: 'page', data: {
                label: 'Course Detail Page', level: 3, onAddSection: handleAddSection,
                onGeneratePages: handleGeneratePages,
            }, position: { x: 0, y: 0 }
        },
        {
            id: 'live_classes', type: 'page', data: {
                label: 'Live Classes', level: 3, onAddSection: handleAddSection,
                onGeneratePages: handleGeneratePages,
            }, position: { x: 0, y: 0 }
        },
        {
            id: 'mentorship_rogram', type: 'page', data: {
                label: 'Mentorship Program', level: 3, onAddSection: handleAddSection,
                onGeneratePages: handleGeneratePages,
            }, position: { x: 0, y: 0 }
        },
    ];

    const baseEdges: Edge[] = [
        { id: 'e1', source: 'home_page', target: 'about_us' },
        { id: 'e2', source: 'home_page', target: 'courses' },
        { id: 'e3', source: 'home_page', target: 'community_form' },
        { id: 'e4', source: 'home_page', target: 'blog' },
        { id: 'e5', source: 'home_page', target: 'contact_us' },

        { id: 'e6', source: 'courses', target: 'course_detail_page' },
        { id: 'e7', source: 'courses', target: 'live_classes' },
        { id: 'e8', source: 'courses', target: 'mentorship_rogram' },
    ];

    const layouted = useMemo(
        () => getLayoutedElements(baseNodes, baseEdges),
        []
    );

    const [nodes, setNodes, onNodesChange] = useNodesState(layouted.nodes);
    const [edges, , onEdgesChange] = useEdgesState(layouted.edges);

    // 🔥 SYNC HOME SECTIONS INTO NODE DATA
    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) =>
                node.id === 'home_page'
                    ? {
                        ...node,
                        data: {
                            ...node.data,
                            sections,
                            onSectionsChange: setSections,
                        },
                    }
                    : node
            )
        );
    }, [sections, setSections, setNodes]);

    return (
        <div className="relative w-full h-full bg-slate-50 overflow-hidden">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                nodesDraggable={true}
                panOnDrag={true}
                className="w-full h-full"
            >
                <Background gap={16} />
                <Controls />
            </ReactFlow>
        </div>
    );
}
