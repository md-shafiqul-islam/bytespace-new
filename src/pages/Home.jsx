import Navbar from "../components/Navbar";
import Course from "../sections/Course";
import Hero from "../sections/Hero";
import Partners from "../sections/Partners";
import Paths from "../sections/Paths";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Partners />
        <Course />
        <Paths />
      </main>
    </>
  );
}

export default Home;
