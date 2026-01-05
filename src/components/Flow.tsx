"use client"

import FlowCanvas from "./FlowCanvas"

const Flow = () => {

    return (
        <main className="p-6 space-y-4 w-full h-full">
            <div className="flex gap-2">
                <button>
                    Save
                </button>
                <button className="px-3 py-1 bg-slate-600 text-white rounded">
                    Load
                </button>
                <button className="px-3 py-1 bg-emerald-600 text-white rounded">
                    Export JSON
                </button>
            </div>

            <FlowCanvas />
        </main>
    )
}

export default Flow