import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";

function LearningPath({ path }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-violet-500/50">

      {/* Path Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-7 flex items-center justify-between text-left"
      >
        <div>
          <h2 className="text-2xl font-bold text-white">
            {path.title}
          </h2>

          <p className="text-gray-400 mt-2">
            {path.subtitle}
          </p>

          <p className="text-sm text-gray-500 mt-3">
            {path.lessons.length} lessons
          </p>
        </div>

        <ChevronDown
          size={26}
          className={`text-violet-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Lessons */}
      {open && (
        <div className="px-7 pb-7 space-y-3">

          {path.lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="
                flex
                items-center
                justify-between
                bg-[#0B1120]
                border
                border-gray-800
                rounded-2xl
                px-5
                py-4
                hover:border-violet-500/50
                transition
              "
            >
              <div>
                <p className="text-white font-medium">
                  {lesson.title}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Lesson {lesson.id}
                </p>
              </div>

              <button
                onClick={() =>
                  console.log("Starting lesson:", lesson.id)
                }
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  bg-violet-600
                  hover:bg-violet-500
                  text-white
                  text-sm
                  font-medium
                  transition
                "
              >
                <Play size={16} />
                Start
              </button>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default LearningPath;