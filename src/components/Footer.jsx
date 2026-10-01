import { Link } from "react-router";
import brand from "../assets/brand/Vector.png";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md font-bold">
            <img src={brand} alt="ByteSpace" />
          </div>

          <span className="text-xl font-bold">ByteSpace</span>
        </Link>
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="mt-5 max-w-md text-sm text-gray-500">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="mt-6 flex max-w-md gap-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border border-gray-200 px-5 text-sm outline-none"
              />

              <button className="my-1 rounded-full bg-[#D4FB20] px-6 text-sm font-medium">
                Search
              </button>
            </div>

            <p className="mt-5 max-w-md text-sm text-gray-500">
              By subscribing, you agree to out Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <Link className="block" to="/courses">
                Featured Courses
              </Link>
              <Link className="block" to="/courses">
                Featured Categories
              </Link>
              <Link className="block" to="/courses">
                Business
              </Link>
              <Link className="block" to="/courses">
                IT
              </Link>
              <Link className="block" to="/courses">
                Design
              </Link>
            </div>
          </div>

          <div>
            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <Link className="block" to="/courses">
                Development
              </Link>
              <Link className="block" to="/courses">
                Marketing
              </Link>
              <Link className="block" to="/courses">
                Photography
              </Link>
              <Link className="block" to="/courses">
                Finance
              </Link>
              <Link className="block" to="/courses">
                Sport
              </Link>
            </div>
          </div>

          <div>
            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <Link className="block" to="/creators">
                Become a Creator
              </Link>

              <Link className="block" to="/creators">
                Affiliate Program
              </Link>

              <a href="#contact" className="block">
                Contact
              </a>

              <a href="#help" className="block">
                Help
              </a>

              <a href="#about" className="block">
                About
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
