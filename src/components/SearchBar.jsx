import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mt-6 flex w-full max-w-120 flex-col items-center gap-2 sm:mt-8 sm:flex-row">
      <div className="relative w-full flex-1">
        <Search
          size={15}
          strokeWidth={1.5}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Course, topic, creator"
          className="h-10 w-full rounded-full bg-white pl-10 pr-4 text-xs text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      <button
        type="button"
        className="h-10 w-full rounded-full bg-[#D4FB20] px-5 text-xs font-medium text-gray-900 transition sm:w-auto"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
