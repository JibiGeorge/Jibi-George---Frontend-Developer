'use client';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { HomeSection } from '@/types';
import SortableSection from './SortableSection';

export default function HomeSections({
    sections,
    onChange,
}: {
    sections: HomeSection[];
    onChange: (s: HomeSection[]) => void;
}) {
    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={(event) => {
                const { active, over } = event;
                if (over && active.id !== over.id) {
                    const oldIndex = sections.findIndex((s) => s.id === active.id);
                    const newIndex = sections.findIndex((s) => s.id === over.id);
                    onChange(arrayMove(sections, oldIndex, newIndex));
                }
            }}
        >
            <SortableContext
                items={sections.map((s) => s.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="space-y-2">
                    {sections.map((section) => (
                        <SortableSection key={section.id} section={section} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}
