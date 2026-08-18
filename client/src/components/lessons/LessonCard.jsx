import { Play } from "lucide-react";

function LessonCard({ lesson, onStart }) {
  return (
    <div className="flex items-center justify-between bg-[#0F172A] border border-gray-800 rounded-2xl p-4 hover:border-violet-500 transition">

      <div>
        <h3 className="text-lg font-semibold">
          {lesson.title}
        </h3>
      </div>

      <button
        onClick={onStart}
        className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-xl transition"
      >
        <Play size={16} />
        Start
      </button>

    </div>
  );
}

export default LessonCard;