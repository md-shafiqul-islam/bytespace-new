import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-20 bg-[radial-gradient(circle_at_0%_0%,rgba(212,251,32,0.35),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(191,219,254,0.5),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(212,251,32,0.35),transparent_40%),linear-gradient(135deg,#ffffff_0%,#ffffff_55%,#f5f9ff_100%)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl font-bold md:text-5xl">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p className="text-sm leading-7 text-gray-500">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl bg-white p-7 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <h3 className="mt-6 font-bold">{item.name}</h3>

              <p className="mt-1 text-sm text-blue-600">{item.role}</p>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                "{item.text}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
