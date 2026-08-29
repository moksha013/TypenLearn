import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
        flex
        items-center
        justify-between
        px-10
        py-5
        bg-[#F3EDF4]
        border-b
        border-[#DDD0DF]
        text-[#493653]
      "
    >

      {/* Logo */}
      <Link
        to="/"
        className="
          text-2xl
          font-bold
          tracking-tight
          text-[#684A73]
          hover:text-[#8E5BA5]
          transition
        "
      >
        Type&Learn
      </Link>


      {/* Navigation */}
      <div className="flex items-center gap-8">

        <Link
          to="/"
          className="
            text-[#75657A]
            hover:text-[#795087]
            font-medium
            transition
          "
        >
          Home
        </Link>

        <a
          href="#features"
          className="
            text-[#75657A]
            hover:text-[#795087]
            font-medium
            transition
          "
        >
          Features
        </a>

        <Link
          to="/login"
          className="
            text-[#75657A]
            hover:text-[#795087]
            font-medium
            transition
          "
        >
          Login
        </Link>

        <Link
          to="/login"
          className="
            px-5
            py-2.5
            rounded-xl
            bg-[#8E5BA5]
            hover:bg-[#795087]
            text-white
            font-medium
            shadow-sm
            hover:shadow-md
            transition-all
            duration-300
          "
        >
          Sign Up
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;