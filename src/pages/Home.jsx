import Navbar from "../components/Navbar";
import Course from "../sections/Course";
import CreatorCTA from "../sections/CreatorCTA";
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
        <CreatorCTA />
      </main>
    </>
  );
}

export default Home;
