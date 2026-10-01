import { Link } from "react-router";
import brandLogo from "../assets/brand/Vector.png";
import image2 from "../assets/images/card2.jpg";
import image3 from "../assets/images/card3.jpg";
import CourseCard from "../components/CourseCard";

function Signup() {
  const course1 = {
    id: 1,
    title: "Build Digital Asset",
    creator: "pureart studio",
    image: image2,
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  };

  const course2 = {
    id: 3,
    title: "The Power of Big Data",
    creator: "pureart studio",
    image: image3,
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  };

  return (
    <section className="min-h-screen overflow-hidden bg-[#1239D9]">
      <div
        className="
          relative
          min-h-screen
          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:112px_112px]
        "
      >
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-2 lg:px-12">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative flex min-h-140 flex-col justify-between">
            {/* Logo */}
            <div className="relative z-20">
              <Link to="/">
                <div className="flex h-7 w-7 items-center justify-center">
                  <img src={brandLogo} alt="ByteSpace" className="mb-2" />
                </div>
              </Link>
            </div>

            {/* Intro Text */}
            <div className="relative z-20 mt-8 max-w-70">
              <h1 className="text-sm font-medium text-white">
                Sign up and come in
              </h1>

              <p className="mt-3 text-[10px] leading-5 text-white/80 mb-20">
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost.
              </p>
            </div>

            {/* Course Visual */}
            <div className="relative mx-auto mt-10 h-95 w-full max-w-130 sm:h-105">
              {/* Back Course Card */}
              <div className="absolute">
                <CourseCard course={course1} />
              </div>

              {/* Front Course Card */}
              <div className="absolute bottom-24 left-20">
                <CourseCard course={course2} />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative z-20 flex justify-center lg:justify-end">
            <div
              className="
                w-full
                max-w-130
                rounded-2xl
                bg-white
                px-8
                py-10
                shadow-xl
                sm:px-10
                sm:py-12
                lg:min-h-130
              "
            >
              {/* Form Heading */}
              <div>
                <p className="text-[10px] text-blue-600">Create an Account</p>

                <h2 className="mt-1 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
                  Welcome to
                  <br />
                  ByteSpace
                </h2>
              </div>

              {/* Form */}
              <form className="mt-7 space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-[9px] font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Jamie Davis"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-200
                      px-3
                      py-2
                      text-xs
                      outline-none
                      transition
                      focus:border-blue-500
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-[9px] font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="designer@example.com"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-200
                      px-3
                      py-2
                      text-xs
                      outline-none
                      transition
                      focus:border-blue-500
                    "
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-[9px] font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-200
                      px-3
                      py-2
                      text-xs
                      outline-none
                      transition
                      focus:border-blue-500
                    "
                  />
                </div>

                {/* Continue Button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="
                      rounded-full
                      bg-[#D4FB20]
                      px-5
                      py-2
                      text-[10px]
                      font-medium
                      text-black
                      transition
                      hover:bg-[#c8ef16]
                    "
                  >
                    Continue
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <p className="mt-16 text-center text-[9px] text-gray-500">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
