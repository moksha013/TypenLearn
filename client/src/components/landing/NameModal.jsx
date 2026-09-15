import { useState } from "react";

function NameModal({ onClose, onSave }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    localStorage.setItem("userName", trimmedName);
    onSave(trimmedName);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-[#493653]/25
        backdrop-blur-sm
        flex
        items-center
        justify-center
        px-6
      "
      onClick={onClose}
    >
      <div
        className="
          w-full
          max-w-md
          rounded-[2rem]
          bg-[#fffaff]
          border
          border-white
          p-8
          shadow-[0_25px_70px_rgba(91,63,102,0.22)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Brand */}
        <p className="text-center text-xs tracking-[0.35em] uppercase text-[#9b70b2] font-medium">
          Type&Learn
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-center text-2xl font-bold text-[#4b3855]">
          What should we call you?
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-sm text-[#8c7b91]">
          Enter your name to personalize your journey.
        </p>

        <form onSubmit={handleSubmit} className="mt-7">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            autoComplete="off"
            className="
              w-full
              rounded-2xl
              bg-[#FCF8FD]
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

          <button
            type="submit"
            className="
              w-full
              mt-4
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
              active:scale-[0.99]
            "
          >
            Continue
          </button>

          <button
            type="button"
            onClick={onClose}
            className="
              w-full
              mt-3
              py-2
              text-sm
              text-[#8c7b91]
              hover:text-[#684A73]
              transition
            "
          >
            Maybe later
          </button>
        </form>
      </div>
    </div>
  );
}

export default NameModal;