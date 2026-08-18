import { Play } from "lucide-react";

function LessonItem({ lesson }) {
  return (
    <div className="flex items-center justify-between bg-[#0B1120] border border-gray-800 rounded-2xl p-4 hover:border-violet-500 transition">
      
      <div>
        <h3 className="text-white font-medium">
          {lesson.title}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Lesson {lesson.id}
        </p>
      </div>

      <button
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-xl
          bg-violet-600
          hover:bg-violet-500
          text-white
          transition
        "
      >
        <Play size={16} />
        Start
      </button>

    </div>
  );
}

export default LessonItem;