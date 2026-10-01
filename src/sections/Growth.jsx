import heroGirl from "../assets/hero/hero-girl.png";
import heroPerson from "../assets/hero/hero-person.png";
import image1 from "../assets/images/card1.jpg";
import mShapeOne from "../assets/shapes/m-shape-1.svg";
import mShapeTwo from "../assets/shapes/m-shape-2.svg";
import CourseCard from "../components/CourseCard";

import { CircleCheck } from "lucide-react";
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import avatar5 from "../assets/avatars/avatar5.png";
import avatar6 from "../assets/avatars/avatar6.png";
import avatar7 from "../assets/avatars/avatar7.png";

const course = {
  id: 1,
  title: "Learn Figma from Basic",
  creator: "pureart studio",
  image: image1,
  rating: 4.5,
  price: 25,
  level: "Beginner",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
};

function Growth() {
  return (
    <section
      className="
        overflow-hidden
        py-16
        sm:py-20
        bg-[radial-gradient(circle_at_0%_0%,rgba(212,251,32,0.35),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(212,251,32,0.35),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(191,219,254,0.5),transparent_40%),linear-gradient(135deg,#ffffff_0%,#ffffff_55%,#f5f9ff_100%)]
      "
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* ================= FIRST ROW ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey.
            </p>

            <div className="mt-8 flex gap-8 sm:gap-10">
              <div>
                <p className="text-2xl font-bold text-blue-700">12K</p>
                <p className="text-xs text-gray-500">Students</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-blue-700">70+</p>
                <p className="text-xs text-gray-500">Courses</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-blue-700">16</p>
                <p className="text-xs text-gray-500">Creators</p>
              </div>
            </div>
          </div>

          {/* First Visual */}
          <div className="relative mx-auto aspect-square w-full max-w-125">
            {/* Course Card */}
            <div
              className="
                absolute
                left-[8%]
                top-[5%]
                z-10
                scale-75
                sm:scale-85
                lg:scale-100
              "
            >
              <CourseCard course={course} />
            </div>

            {/* Person */}
            <img
              src={heroPerson}
              alt="Student learning"
              className="
                absolute
                left-[28%]
                top-[10%]
                z-20
                w-[58%]
                object-contain
              "
            />

            {/* Green Shape */}
            <img
              src={mShapeOne}
              alt=""
              className="
                absolute
                right-[3%]
                top-[17%]
                z-0
                w-[17%]
                sm:right-[5%]
              "
            />

            {/* Learning Progress */}
            <div
              className="
                absolute
                right-[2%]
                top-[39%]
                z-30
                w-36
                rounded-lg
                bg-white
                px-2
                py-2
                shadow-sm
                sm:w-40
              "
            >
              <p className="text-[9px] text-gray-500">Learning Progress</p>

              <p className="mt-1 text-xl font-bold text-gray-800 sm:text-2xl">
                55%
              </p>

              <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
                <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECOND ROW ================= */}
        <div className="mt-12 grid items-center gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-2">
          {/* Second Visual */}
          <div className="relative mx-auto aspect-square w-full max-w-125">
            {/* Revenue Cards */}
            <div
              className="
                absolute
                left-[2%]
                top-[16%]
                z-10
                space-y-5
                sm:left-[5%]
              "
            >
              {/* Total Revenue */}
              <div className="w-44 rounded-lg bg-blue-700 p-3 text-white sm:w-52">
                <p className="text-xs">Total Revenue</p>
                <p className="text-xs">July 1-28</p>
                <p className="text-lg font-bold">$120.29</p>

                <div className="mt-1 h-1.5 rounded-full bg-gray-200">
                  <div className="h-1.5 w-2/3 rounded-full bg-[#D4FB20]" />
                </div>
              </div>

              {/* Year to Date */}
              <div className="w-28 rounded-lg bg-blue-700 p-3 text-white">
                <p className="text-xs">Year to Date</p>
                <p className="text-xs">2023</p>
                <p className="text-lg font-bold">$1,200.38</p>

                <span className="rounded-xl bg-[#D4FB20] px-2 py-1 text-[10px] font-semibold text-black">
                  +12$
                </span>
              </div>
            </div>

            {/* Girl */}
            <img
              src={heroGirl}
              alt="Student learning"
              className="
                absolute
                left-[19%]
                top-[14%]
                z-20
                w-[48%]
                object-contain
                sm:left-[18%]
                sm:w-[52%]
                lg:left-[18%]
              "
            />

            {/* Green Shape */}
            <img
              src={mShapeTwo}
              alt=""
              className="
                absolute
                left-[50%]
                top-[24%]
                z-20
                w-[18%]
                sm:left-[51%]
              "
            />

            {/* Happy Students */}
            <div
              className="
                absolute
                bottom-[45%]
                right-[2%]
                z-30
                rounded-lg
                bg-white
                px-2
                py-1.5
                shadow-sm
                sm:right-[25%]
              "
            >
              <p className="text-[8px] font-medium text-gray-700">
                Happy Students
              </p>

              <p className="text-[7px] text-gray-400">4.5 (240+)</p>

              <div className="mt-1 flex items-center">
                <div className="flex -space-x-2">
                  <img
                    src={avatar1}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={avatar2}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={avatar3}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={avatar4}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={avatar5}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={avatar6}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={avatar7}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  />

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4FB20] text-[10px] font-semibold">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500">
              <span className="font-bold text-black">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <CircleCheck color="blue" />
                Share Your Expertise
              </li>

              <li className="flex items-center gap-2">
                <CircleCheck color="blue" />
                Monetize Your Passion
              </li>

              <li className="flex items-center gap-2">
                <CircleCheck color="blue" />
                Flexibility and Autonomy
              </li>

              <li className="flex items-center gap-2">
                <CircleCheck color="blue" />
                Build a Community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Growth;
