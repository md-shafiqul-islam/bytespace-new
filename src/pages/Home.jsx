import Navbar from "../components/Navbar";
import Course from "../sections/Course";
import Hero from "../sections/Hero";
import Partners from "../sections/Partners";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Partners />
        <Course />
      </main>
    </>
  );
}

export default Home;
