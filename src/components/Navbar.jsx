import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import brandLogo from "../assets/brand/Vector.png";
import cart from "../assets/icons/cart.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full bg-[#003BE2] ">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:h-30 lg:px-10">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center">
            <img src={brandLogo} alt="ByteSpace" className="mb-2" />
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-xs text-white/80 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="text-xs text-white/80 transition hover:text-white"
          >
            Courses
          </Link>

          <Link
            to="/creators"
            className="text-xs text-white/80 transition hover:text-white"
          >
            Creators
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/signin"
            className="text-xs text-white/80 transition hover:text-white"
          >
            Sign In
          </Link>

          <Link
            to="/join"
            className="text-xs text-white/80 transition hover:text-white"
          >
            Join Us
          </Link>

          <button
            type="button"
            aria-label="Shopping bag"
            className="text-white/80 transition hover:text-white"
          >
            <img src={cart} alt="Shopping Bag" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-blue-700 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <Link to="/" onClick={closeMenu} className="text-sm text-white">
              Home
            </Link>

            <Link
              to="/courses"
              onClick={closeMenu}
              className="text-sm text-white"
            >
              Courses
            </Link>

            <Link
              to="/creators"
              onClick={closeMenu}
              className="text-sm text-white"
            >
              Creators
            </Link>

            <div className="h-px bg-white/10" />

            <Link
              to="/signin"
              onClick={closeMenu}
              className="text-sm text-white"
            >
              Sign In
            </Link>

            <Link
              to="/join"
              onClick={closeMenu}
              className="w-fit rounded-full bg-[#D4FB20] px-5 py-2 text-sm font-medium text-blue-900"
            >
              Join Us
            </Link>

            <button
              type="button"
              className="flex items-center gap-2 text-left text-sm text-white"
            >
              <img src={cart} alt="Shopping Bag" />
              Shopping Bag
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
