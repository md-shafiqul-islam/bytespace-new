import CourseCard from "../components/CourseCard";
import { categories } from "../data/categories";
import { courses } from "../data/courses";

const Course = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            At ByteSpace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 max-w-5xl mx-auto flex flex-wrap justify-center gap-2 items-center">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-xs ${
                index === 0
                  ? "bg-lime-400 text-gray-900"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}

          <span className="text-[#003BE2] text-xs">+ More</span>
        </div>

        {/* Courses */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
