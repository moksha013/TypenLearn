function LoginForm() {
  return (
    <div
      className="
        w-full
        rounded-[2rem]
        bg-[#fffaff]/90
        backdrop-blur-xl
        border
        border-white/70
        px-10
        py-12
        shadow-[0_25px_70px_rgba(91,63,102,0.20)]
      "
    >

      {/* Brand */}
      <p
        className="
          text-center
          text-sm
          tracking-[0.4em]
          uppercase
          text-[#9b70b2]
          font-medium
        "
      >
        Type&Learn
      </p>

      {/* Heading */}
      <h1
        className="
          mt-5
          text-center
          text-4xl
          font-bold
          text-[#4b3855]
        "
      >
        Welcome Back
      </h1>

      {/* Subtitle */}
      <p
        className="
          mt-3
          text-center
          text-[#8c7b91]
          text-base
        "
      >
        Continue your typing journey.
      </p>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 my-8">
        <span className="h-px w-12 bg-[#d8bfdc]" />
        <span className="text-[#b88ac4] text-sm">✦</span>
        <span className="h-px w-12 bg-[#d8bfdc]" />
      </div>

      <form className="space-y-6">

        {/* Name */}
        <div>
          <label
            className="
              block
              mb-2
              text-sm
              font-medium
              text-[#68546f]
            "
          >
            Enter your name
          </label>

          <input
            type="text"
            placeholder="Your Name"
            autoComplete="off"
            className="
              w-full
              rounded-2xl
              bg-white/80
              border
              border-[#d8c3dc]
              px-5
              py-4
              text-[#4b3855]
              placeholder:text-[#a99bab]
              outline-none
              transition-all
              duration-300
              focus:border-[#a77bb5]
              focus:ring-4
              focus:ring-[#c9a7d4]/20
            "
          />
        </div>

        {/* Continue */}
        <button
          type="submit"
          className="
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-[#a77bc0]
            to-[#b56bc4]
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-[#a77bc0]/20
            transition-all
            duration-300
            hover:scale-[1.01]
            hover:shadow-xl
            hover:shadow-[#a77bc0]/30
            active:scale-[0.99]
          "
        >
          <span className="flex items-center justify-center gap-3">
            Continue
            <span className="text-lg"></span>
          </span>
        </button>

      </form>

      {/* Tiny motivational line */}
      <p className="mt-8 text-center text-xs text-[#a493aa]">
        Keep growing, one keystroke at a time.
      </p>

    </div>
  );
}

export default LoginForm;