import features from "../../data/features";

function Features() {
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

          <button
            key={feature.id}
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

            {/* Icon */}
            <div
              className="
                flex
                items-center
                justify-center
                w-11
                h-11
                shrink-0
                rounded-xl
                bg-[#E9DCEE]
                text-[#8E5BA5]
                group-hover:bg-[#DCC3E2]
                group-hover:scale-105
                transition
                duration-300
              "
            >
              <span className="text-xl">
                {feature.icon}
              </span>
            </div>


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

          </button>

        ))}

      </div>

    </aside>
  );
}

export default Features;