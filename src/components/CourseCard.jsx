import { BarChart3, Star } from "lucide-react";
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";

function CourseCard({ course }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={course.image}
          alt={course.title}
          className="h-55 w-full object-cover"
        />

        {/* Image information */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between">
          <span className="rounded-full bg-white/80 p-2 text-xs text-gray-700 backdrop-blur">
            {course.lessons} Lessons
          </span>

          <span className="rounded-full bg-white/80 px-3 py-2 text-xs text-gray-700 backdrop-blur">
            {course.duration}
          </span>

          <span className="rounded-full bg-white/80 px-3 py-2 text-xs text-gray-700 backdrop-blur">
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Title + rating */}
      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="w-64">
          <h3 className="text-xl font-semibold md:truncate">{course.title}</h3>

          <p className="mt-1 text-sm text-gray-500">
            by <span className="text-blue-600">{course.creator}</span>
          </p>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <span>{course.rating}</span>
          <Star size={18} fill="currentColor" className="text-gray-300" />
        </div>
      </div>

      {/* Level + avatars */}
      <div className="mt-5 flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
          <BarChart3 size={17} />

          <span className="text-sm">{course.level}</span>
        </div>

        <div className="flex -space-x-2">
          <img
            src={avatar1}
            alt=""
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />

          <img
            src={avatar2}
            alt=""
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />

          <img
            src={avatar3}
            alt=""
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />

          <img
            src={avatar4}
            alt=""
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />

          <span className="h-8 w-8 rounded-full bg-[#D4FB20] text-[12px] font-semibold flex items-center justify-center">
            26+
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mt-5">
        <span className="text-2xl font-bold text-blue-700">$25</span>

        <span className="text-sm text-gray-500">/lifetime</span>
      </div>
    </article>
  );
}

export default CourseCard;
