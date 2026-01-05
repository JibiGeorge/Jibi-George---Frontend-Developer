'use client';

import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { HomeSection } from '@/types';

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
        </DndContext>
    );
}
