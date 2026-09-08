import { Link } from "react-router-dom";

function Garden() {
  return (
    <div className="min-h-screen bg-[#F8F3F8] text-[#493653] relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#D8B4E2]/25 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C9DCCB]/30 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9A70A8] font-medium">
            Your Growth
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#493653] mt-2">
            Typing Garden
          </h1>

          <p className="mt-4 text-[#8A788D] max-w-xl mx-auto leading-7">
            Every practice session helps your garden grow.
            Keep typing, keep improving, and watch your progress bloom.
          </p>
        </div>

        {/* Garden Card */}
        <div className="mt-12 bg-white/75 backdrop-blur-xl border border-[#E2D6E4] rounded-[2rem] shadow-sm p-8 md:p-12">
          <div className="min-h-[380px] rounded-[1.5rem] bg-gradient-to-b from-[#FDFBFD] via-[#F5EEF6] to-[#EDE4F0] border border-[#E5D9E7] flex flex-col items-center justify-center relative overflow-hidden">

            {/* Decorative glow */}
            <div className="absolute w-64 h-64 rounded-full bg-[#D8B4E2]/20 blur-3xl" />

            {/* Plant */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-40 h-40 flex items-end justify-center">

                {/* Pot */}
                <div className="w-16 h-10 rounded-full bg-[#8B6F61] shadow-md" />

                {/* Stem */}
                <div className="absolute bottom-9 w-2.5 h-28 rounded-full bg-[#789B82]" />

                {/* Leaves */}
                <div className="absolute bottom-24 left-1 w-14 h-7 rounded-full bg-[#9DBFA4] rotate-[-35deg]" />
                <div className="absolute bottom-28 right-1 w-14 h-7 rounded-full bg-[#B6A0C4] rotate-[35deg]" />

                <div className="absolute bottom-16 left-5 w-12 h-6 rounded-full bg-[#AFC7B3] rotate-[-20deg]" />
                <div className="absolute bottom-20 right-5 w-12 h-6 rounded-full bg-[#C4A9C8] rotate-[20deg]" />

                {/* Flower */}
                <div className="absolute bottom-32 w-8 h-8 rounded-full bg-[#C58BC5] shadow-lg shadow-[#C58BC5]/30" />
                <div className="absolute bottom-[8.5rem] left-[4.1rem] w-5 h-5 rounded-full bg-[#D8A9D2]" />
                <div className="absolute bottom-[8.5rem] right-[4.1rem] w-5 h-5 rounded-full bg-[#D8A9D2]" />
                <div className="absolute bottom-[8.1rem] w-3 h-3 rounded-full bg-[#E8C98B]" />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#493653]">
                Your garden is growing....
              </h2>

              <p className="mt-2 text-sm text-[#8A788D]">
                Start practicing to grow it further.
              </p>

              <Link
                to="/practice"
                className="mt-7 px-7 py-3.5 rounded-2xl bg-[#8E5BA5] text-white font-semibold shadow-sm hover:bg-[#795087] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Practice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garden;