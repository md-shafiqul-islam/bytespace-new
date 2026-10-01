import Navbar from "../components/Navbar";
import Course from "../sections/Course";
import Growth from "../sections/Growth";
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
        <Growth />
      </main>
    </>
  );
}

export default Home;
