import { Link } from "react-router-dom";
import features from "../../data/features";

function Features() {
  const routes = {
    "Live WPM": "/practice",
    "Performance Insights": "/analytics",
    "Arcade Mode": "/arcade",
    "Typing Garden": "/garden",
  };

  return (
    <aside
      className="
        w-72
        min-h-[calc(100vh-80px)]
        p-6
        bg-[#F3EDF4]
        border-r
        border-[#DDD0DF]
        text-[#493653]
        relative
        overflow-hidden
      "
    >
      {/* Soft decorative glow */}
      <div
        className="
          absolute
          -top-24
          -left-24
          w-56
          h-56
          rounded-full
          bg-[#D8B4E2]/30
          blur-3xl
        "
      />

      {/* Header */}
      <div className="mb-8 relative z-10">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-[#9A70A8]
            font-medium
          "
        >
          Explore
        </p>

        <h2
          className="
            text-2xl
            font-bold
            mt-2
            text-[#493653]
          "
        >
          TypenLearn
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="space-y-4 relative z-10">
        {features.map((feature) => (
          <Link
            key={feature.id}
            to={routes[feature.title]}
            className="
              group
              w-full
              flex
              items-center
              gap-4
              rounded-2xl
              p-4
              text-left
              bg-white/65
              backdrop-blur-md
              border
              border-[#E0D2E2]
              shadow-sm
              hover:-translate-y-1
              hover:bg-white
              hover:border-[#B78BC5]
              hover:shadow-md
              transition-all
              duration-300
            "
          >
            
            {/* Text */}
            <div>
              <h3
                className="
                  font-semibold
                  text-[#493653]
                  group-hover:text-[#795087]
                  transition
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  text-sm
                  text-[#8A788D]
                  mt-1
                "
              >
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default Features;