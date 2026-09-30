import { paths } from "../data/paths";

const Paths = () => {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-gray-500">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unless your potential and explore our
          carefully curated categories.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {paths.map((path) => (
            <div
              key={path.label}
              className="rounded-2xl border border-gray-200 px-4 py-8 transition hover:border-[#D4FB20] hover:shadow-md"
            >
              <div className="mx-auto flex h-10 w-10 p-2 items-center justify-center rounded-full bg-[#D4FB20] text-xl">
                <img src={path.icon} alt="" />
              </div>

              <p className="mt-4 text-sm font-medium">{path.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Paths;
