function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#0B1120] border-b border-gray-800">

      <h1 className="text-2xl font-bold text-violet-400">
        Type&Learn
      </h1>

      <div className="flex items-center gap-8">

        <a
          href="#"
          className="text-gray-300 hover:text-violet-400 transition"
        >
          Home
        </a>

        <a
          href="#"
          className="text-gray-300 hover:text-violet-400 transition"
        >
          Features
        </a>

        <button
          className="text-gray-300 hover:text-violet-400 transition"
        >
          Login
        </button>

        <button
          className="bg-violet-600 hover:bg-violet-500 transition px-5 py-2 rounded-xl text-white"
        >
          Sign Up
        </button>

      </div>

    </nav>
  );
}

export default Navbar;