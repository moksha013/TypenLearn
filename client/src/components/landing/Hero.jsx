import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="flex-1 flex items-center justify-center px-10 py-20 text-white">
      <div className="max-w-5xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8">
           Type • Learn  • Improve
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Master Touch Typing
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            One Key at a Time.
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mt-6">
          Improve your speed and build consistency
          through interactive lessons and gamified practice.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Link
  to="/login"
  className="bg-violet-600 hover:bg-violet-500 transition duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-violet-500/20 inline-block"
>
  Start Learning
</Link>

          <Link
  to="/practice"
  className="border border-gray-700 hover:border-violet-500 hover:text-violet-300 transition duration-300 px-8 py-4 rounded-xl inline-block"
>
  Take Typing Test
</Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">

          <div>
            <h2 className="text-3xl font-bold text-violet-400">50K+</h2>
            <p className="text-gray-400 mt-2">Typing Tests</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">95%</h2>
            <p className="text-gray-400 mt-2">Accuracy Goal</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-pink-400">24/7</h2>
            <p className="text-gray-400 mt-2">Practice Anytime</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;