import features from "../../data/features";

function Features() {
  return (
    <aside className="w-72 border-r border-gray-800 p-6 text-white">

      <div className="mb-8">
  <p className="text-sm uppercase tracking-widest text-violet-400">
    Explore
  </p>

  <h2 className="text-2xl font-bold mt-2">
    TypenLearn
  </h2>
</div>

      <div className="space-y-4">

        {features.map((feature) => (
          <button
  key={feature.id}
  className="
    w-full
    flex
    items-center
    gap-4
    rounded-xl
    p-4
    bg-[#111827]
    hover:-translate-y-1
    hover:bg-violet-600/20
    hover:border-violet-500
    border
    border-transparent
    transition-all
    duration-300
  "
>
            <span className="text-3xl">
  {feature.icon}
</span>

            <div className="text-left">
              <h3 className="font-semibold text-white">
  {feature.title}
</h3>

              <p className="text-sm text-gray-400">
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