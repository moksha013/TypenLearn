import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    localStorage.setItem("userName", trimmedName);

    navigate("/login");
  };

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
        px-6
        py-10
        relative
      "
      style={{ backgroundImage: "url('/login-bg.png')" }}
    >
      {/* Soft pastel overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Signup Form */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-lg
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
          Create Your Profile
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
          Start your typing journey with us.
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-8">
          <span className="h-px w-12 bg-[#d8bfdc]" />
          <span className="text-[#b88ac4] text-sm">✦</span>
          <span className="h-px w-12 bg-[#d8bfdc]" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            Continue
          </button>
        </form>

        {/* Login link */}
        <p className="mt-8 text-center text-sm text-[#8c7b91]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-semibold text-[#8e5ba5] hover:text-[#795087] transition"
          >
            Login
          </button>
        </p>
      </div>
    </main>
  );
}

export default Signup;