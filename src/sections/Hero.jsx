import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import avatar5 from "../assets/avatars/avatar5.png";
import avatar6 from "../assets/avatars/avatar6.png";
import avatar7 from "../assets/avatars/avatar7.png";
import heroPerson from "../assets/hero/hero-person.png";
import cone1 from "../assets/shapes/Cone1.svg";
import cone2 from "../assets/shapes/Cone2.svg";
import cone3 from "../assets/shapes/Cone3.svg";
import frame1 from "../assets/shapes/Frame1.svg";
import frame2 from "../assets/shapes/Frame2.svg";
import frame3 from "../assets/shapes/Frame3.svg";
import heroBottom from "../assets/shapes/hero-bottom.svg";
import SearchBar from "../components/SearchBar";

function Hero() {
  return (
    <section className="relative min-h-155 overflow-hidden bg-[#003BE2] pt-32 sm:pt-36 lg:pt-40">
      {/* Decoration 1 */}
      <div className="relative top-10 hidden w-full sm:block lg:top-0">
        <img
          src={frame1}
          alt=""
          className="absolute left-0 w-20 sm:w-28 lg:w-auto"
        />

        <img
          src={cone1}
          alt=""
          className="absolute right-0 w-20 sm:w-28 lg:w-auto"
        />
      </div>

      {/* Decoration 2 */}
      <div className="relative top-60 mx-auto hidden w-full max-w-4xl sm:block lg:top-60">
        <img
          src={frame2}
          alt=""
          className="absolute left-4 h-20 w-20 sm:h-24 sm:w-24 lg:left-0 lg:h-30 lg:w-30"
        />

        <img
          src={cone2}
          alt=""
          className="absolute right-4 h-20 w-20 sm:h-24 sm:w-24 lg:right-0 lg:h-30 lg:w-30"
        />
      </div>

      {/* Decoration 3 */}
      <div className="relative z-40 top-100 mx-auto hidden w-full max-w-4xl sm:block lg:top-110">
        <img
          src={cone3}
          alt=""
          className="absolute left-4 h-28 w-28 sm:h-36 sm:w-36 lg:left-0 lg:h-50 lg:w-50"
        />

        <img
          src={frame3}
          alt=""
          className="absolute right-4 h-28 w-28 sm:h-36 sm:w-36 lg:right-0 lg:h-50 lg:w-50"
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        {/* Heading */}
        <h1 className="max-w-85 text-2xl font-semibold leading-[1.1] tracking-tight text-white sm:max-w-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Get Access to Hundreds
          <br className="hidden sm:block" /> Courses Available
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-4xl text-xs leading-5 text-white/60 sm:mt-6 sm:text-sm">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search */}
        <SearchBar />

        {/* Hero image area */}
        <div className="relative mt-4 h-72 w-full sm:h-80 md:h-82">
          <img
            src={heroBottom}
            alt=""
            className="absolute bottom-0 left-1/2 h-52 w-auto max-w-4xl -translate-x-1/2 sm:h-60 md:h-68"
          />

          {/* Person */}
          <img
            src={heroPerson}
            alt="Student learning with a laptop"
            className="absolute -bottom-2 left-1/2 z-20 h-72 w-auto -translate-x-1/2 object-contain sm:-bottom-4 sm:h-80 md:h-82"
          />

          {/* UI/UX card */}
          <div
            className="
              absolute left-2 top-14 z-30
              rounded-lg bg-white px-2 py-1.5 text-left
              sm:left-[18%] sm:top-16 sm:px-3 sm:py-2
              lg:left-60 lg:top-20
              xl:left-80
            "
          >
            <p className="text-[8px] font-medium text-gray-800 sm:text-[9px]">
              UI/UX Design
            </p>

            <p className="text-[6px] text-gray-400 sm:text-[7px]">
              200+ Courses • 1000+ Students
            </p>
          </div>

          {/* Learning progress */}
          <div
            className="
              absolute right-2 top-16 z-30 w-32
              rounded-lg bg-white px-2 py-1.5 text-left
              sm:right-[18%] sm:top-20 sm:w-36 sm:px-3 sm:py-2
              lg:right-60 lg:top-25 lg:w-40
              xl:right-80
            "
          >
            <p className="text-[7px] text-gray-500 sm:text-[8px]">
              Learning Progress
            </p>

            <p className="mt-1 text-xl font-bold text-gray-800 sm:text-2xl">
              55%
            </p>

            <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
              <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>

          {/* Happy students */}
          <div
            className="
              absolute bottom-8 left-1/2 z-30
              -translate-x-1/2
              rounded-lg bg-white px-2 py-1.5 text-left
              sm:left-[25%] sm:bottom-8 sm:translate-x-0 sm:px-3 sm:py-2
              lg:left-56 lg:top-55 lg:bottom-auto
              xl:left-75
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

                <span className="h-6 w-6 rounded-full bg-[#D4FB20] text-[10px] font-semibold flex items-center justify-center">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
