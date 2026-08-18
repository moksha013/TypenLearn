function LoginForm() {
  return (
    <div
  className="
    w-full
    max-w-lg
    rounded-3xl
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
    p-10
    shadow-2xl
  "
>
<p className="mb-5 text-center text-sm tracking-[0.35em] uppercase text-violet-400">
  Type&Learn
</p>
      <h1 className="text-4xl font-bold text-white text-center">
  Welcome Back
</h1>

      <p className="mt-3 text-center text-gray-400">
  Continue your typing journey.
</p>

      <form className="mt-10 space-y-6">

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Enter your name
          </label>

          <input
            type="text"
            placeholder="Your Name"
            autoComplete="off"
            className="
              w-full
              rounded-xl
              bg-[#0F172A]/80
              border
              border-gray-600
              p-4
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-violet-500
              transition
            "
          />
        </div>

        <button
          className="
            w-full
            rounded-xl
            bg-gradient-to-r from-violet-600 to-fuchsia-600
            py-4
            font-semibold
            text-white
            hover:from-violet-500 hover:to-fuchsia-500
            transition
          "
        >
          Continue
        </button>
       
      </form>

    </div>
  );
}

export default LoginForm;