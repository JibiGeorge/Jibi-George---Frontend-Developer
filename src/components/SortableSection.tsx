import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { HomeSection } from '@/types';

export default function SortableSection({ section }: { section: HomeSection }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...attributes}
      {...listeners}
      className="border rounded p-2 bg-slate-50 cursor-grab"
    >
      <div className="text-black font-semibold text-xs">{section.title}</div>
      {section.content && (
        <div className="text-xs text-slate-500 line-clamp-2">
          {section.content}
        </div>
      )}
    </div>
  );
}
