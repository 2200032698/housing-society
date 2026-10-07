import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import FloorPlans from "./components/FloorPlans";
import ProjectStatus from "./components/ProjectStatus";
import Location from "./components/Location";
import EnquireButton from "./components/EnquireButton";
import Amenities from "./components/Amenities";
import LocationHighlights from "./components/LocationHighlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <Stats />

        <About />

        <FloorPlans />

        <ProjectStatus />

        <Location />

        <Amenities />

        <LocationHighlights />

        <Contact />

      </main>

      <EnquireButton />

      <Footer />

    </div>
  );
}

export default App;