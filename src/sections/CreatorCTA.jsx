import cone1 from "../assets/svgs/cone1.svg";
import cone2 from "../assets/svgs/cone2.svg";
import cone3 from "../assets/svgs/cone3.svg";
import cone4 from "../assets/svgs/cone4.svg";
import shape1 from "../assets/svgs/shape1.svg";
import shape2 from "../assets/svgs/shape2.svg";
import shape3 from "../assets/svgs/shape3.svg";

function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1239D9] py-16 sm:py-20 lg:py-24">
      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:112px_112px]
        "
      />

      {/* Decorative Shapes */}

      {/* Top Left - Lime Shape */}
      <img
        src={shape1}
        alt=""
        className="
          absolute
          -left-8
          -top-5
          z-10
          w-24
          sm:w-32
          lg:-left-1
          lg:top-0
          lg:w-36
        "
      />

      {/* Top Left/Center - White Shape */}
      <img
        src={shape2}
        alt=""
        className="
          absolute
          left-24
          top-5
          z-10
          w-12
          sm:left-32
          sm:w-14
          lg:left-36
          lg:top-5
          lg:w-16
        "
      />

      {/* Top Right - Yellow Triangle */}
      <img
        src={cone1}
        alt=""
        className="
          absolute
          right-20
          top-4
          z-10
          w-16
          sm:right-24
          sm:w-20
          lg:right-28
          lg:top-3
          lg:w-24
        "
      />

      {/* Bottom Left - Lime Arc */}
      <img
        src={cone3}
        alt=""
        className="
          absolute
          -bottom-10
          left-10
          z-10
          w-28
          sm:left-12
          sm:w-36
          lg:bottom-0
          lg:left-10
          lg:w-44
        "
      />

      <img
        src={cone2}
        alt=""
        className="
          absolute
          -right-6
          top-8
          z-10
          w-24
          sm:-right-4
          sm:w-28
          lg:-right-2
          lg:top-5
          lg:w-32
        "
      />

      {/* Bottom Right - Lime Shape */}
      <img
        src={cone4}
        alt=""
        className="
          absolute
          -bottom-8
          right-5
          z-10
          w-28
          sm:right-8
          sm:w-36
          lg:top-40
          lg:left-0
          lg:w-44
        "
      />

      <img
        src={shape3}
        alt=""
        className="
          absolute
          -bottom-8
          right-5
          z-10
          w-28
          sm:right-8
          sm:w-36
          lg:bottom-0
          lg:right-8
          lg:w-44
        "
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-3xl px-6 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="
            mt-7
            rounded-full
            bg-[#D4FB20]
            px-6
            py-2
            text-xs
            font-medium
            text-black
            transition
            hover:bg-[#c9ef18]
          "
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}

export default CreatorCTA;
