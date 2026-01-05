"use client"

import { loadState, saveState } from "@/lib/storage";
import { HomeSection } from "@/types";
import { useEffect, useState } from "react";
import FlowCanvas from "./FlowCanvas";

const Flow = () => {

    const [sections, setSections] = useState<HomeSection[]>([
        {
            id: 'header',
            title: 'Header Navbar',
        },
        {
            id: 'hero',
            title: 'Hero',
            content:
                'Welcome to Code with Sandesh, your entry point to mastering coding! Explore our mission of making coding accessible and engage in a community that fosters support and growth',
        },
        {
            id: 'services',
            title: 'Services',
            content: 'Disover our comprehensive coding courses, available for beginners to advanced learners, designed to empower you with essessential programming skills.',
        },
        {
            id: 'features',
            title: 'Features',
            content: 'Explore the interactive curriculum of code with Sandesh, encouraging practical learning through real-world projects that solidify your coding confidence.',
        },
        {
            id: 'cta',
            title: 'Call to Action',
            content: 'Start your coding journey with us at Codde with Sandesh! Enroll today and unlock your potential in the ever-evolving tech landscape.',
        },
        {
            id: 'footer',
            title: 'Footer',
        },
    ]);

    useEffect(() => {
        const saved = loadState();
        if (saved) setSections(saved.sections);
    }, []);

    return (
        <main className="p-6 space-y-4 w-full h-full">
            <div className="flex gap-2">
                <button onClick={() => saveState({ sections })} className="px-3 py-1 bg-indigo-600 text-white rounded">
                    Save
                </button>
                <button
                    onClick={() => {
                        const s = loadState();
                        if (s) setSections(s.sections);
                    }}
                    className="px-3 py-1 bg-slate-600 text-white rounded"
                >
                    Load
                </button>
                <button
                    onClick={() => alert(JSON.stringify({ pages: 'static-hierarchy', sections }, null, 2))}
                    className="px-3 py-1 bg-emerald-600 text-white rounded"
                >
                    Export JSON
                </button>
            </div>


            <FlowCanvas sections={sections} setSections={setSections} />
        </main>
    )
}

export default Flow