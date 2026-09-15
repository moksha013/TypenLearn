import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-[#F3EDF4] border-b border-[#DDD0DF] text-[#493653]">
      
      <Link
        to="/"
        className="text-2xl font-bold tracking-tight text-[#684A73] hover:text-[#8E5BA5] transition"
      >
        Type&Learn
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-[#75657A] hover:text-[#795087] font-medium transition"
        >
          Home
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;