import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="
        flex-1
        min-h-[calc(100vh-80px)]
        flex
        items-center
        justify-center
        px-10
        py-20
        text-[#493653]
        relative
        overflow-hidden
        bg-[#F8F3F8]
      "
    >

      {/* Soft decorative glows */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#D8B4E2]/30 blur-3xl" />

      <div className="absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-[#C7A3D4]/20 blur-3xl" />

      <div className="absolute top-1/2 right-10 w-40 h-40 rounded-full bg-[#E8D7EA]/40 blur-3xl" />


      <div className="relative z-10 max-w-5xl text-center">

        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            border
            border-[#B78BC5]/40
            bg-white/60
            backdrop-blur-md
            text-[#8E5BA5]
            text-sm
            mb-8
            shadow-sm
          "
        >
          Type&nbsp; • &nbsp;Learn&nbsp; • &nbsp;Improve
        </div>


        {/* Heading */}
        <h1
          className="
            text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
            tracking-tight
            text-[#493653]
          "
        >
          Master Touch Typing
          <br />

          <span
            className="
              bg-gradient-to-r
              from-[#8E6AAE]
              via-[#B276B8]
              to-[#C58BC5]
              bg-clip-text
              text-transparent
            "
          >
            One Key at a Time.
          </span>
        </h1>


        {/* Description */}
        <p
          className="
            text-[#806D82]
            text-lg
            md:text-xl
            mt-7
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Improve your speed and build consistency
          <br />
          through typing and gamified practice.
        </p>


        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/login"
            className="
              px-9
              py-4
              rounded-xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-[#8E5BA5]
              to-[#B55CB8]
              shadow-lg
              shadow-[#9B6BAA]/20
              hover:scale-[1.02]
              hover:shadow-xl
              transition
              duration-300
              inline-block
            "
          >
            Start Learning&nbsp;
          </Link>


          <Link
            to="/practice"
            className="
              px-9
              py-4
              rounded-xl
              font-semibold
              text-[#654B6C]
              bg-white/70
              backdrop-blur-md
              border
              border-[#C9A8D0]
              hover:bg-white
              hover:border-[#A678B5]
              transition
              duration-300
              inline-block
            "
          >
            Take Typing Test
          </Link>

        </div>


        {/* Divider */}
        <div className="w-full max-w-3xl mx-auto mt-20 border-t border-[#DCCBDD]" />


        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-10 max-w-3xl mx-auto">

          <div>
            <h2 className="text-3xl font-bold text-[#8E6AAE]">
              50K+
            </h2>

            <p className="text-[#8C7A8F] mt-2">
              Typing Tests
            </p>
          </div>


          <div>
            <h2 className="text-3xl font-bold text-[#A66FAF]">
              95%
            </h2>

            <p className="text-[#8C7A8F] mt-2">
              Accuracy Goal
            </p>
          </div>


          <div>
            <h2 className="text-3xl font-bold text-[#B47DB5]">
              24/7
            </h2>

            <p className="text-[#8C7A8F] mt-2">
              Practice Anytime
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;