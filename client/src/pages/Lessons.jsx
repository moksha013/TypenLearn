import learningPaths from "../data/lessons";
import LearningPath from "../components/lessons/LearningPath";

function Lessons() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-10 py-12">

      <h1 className="text-5xl font-bold">
        Guided Lessons
      </h1>

      <p className="text-gray-400 mt-3 text-lg">
        Learn touch typing from beginner to pro.
      </p>

      <div className="flex flex-col gap-8 mt-12">

        {learningPaths.map((path) => (
          <LearningPath
            key={path.id}
            path={path}
          />
        ))}

      </div>

    </div>
  );
}

export default Lessons;