import partner1 from "../assets/partners/Vector1.png";
import partner2 from "../assets/partners/Vector2.png";
import partner3 from "../assets/partners/Vector3.png";
import partner4 from "../assets/partners/Vector4.png";

function Partners() {
  const logos = [
    { label: "Logipsum", icon: partner1 },
    { label: "Logipsum", icon: partner2 },
    { label: "Logipsum", icon: partner3 },
    { label: "Logipsum", icon: partner4 },
    { label: "Logipsum", icon: partner1 },
  ];

  return (
    <section className="bg-gray-400/20 py-20">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 px-6 text-xl font-semibold text-gray-400 md:justify-between">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-1">
            <img src={logo.icon} alt="" />
            <span>{logo.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
