import { useEffect } from "react";
import "./App.css";
import robotImage from "./assets/robot2.png";
import bgImage from "./assets/bgnew.jpg";

function App() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    const handleMouseMove = (e) => {
      glow.style.transform = `translate(${e.clientX - 48}px, ${e.clientY - 48}px)`;
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="text-white">
      {/* Robot Image */}
      <div className="absolute bottom-0 right-0 p-4">
        <img
          src={robotImage}
          alt="Robot"
          className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[650px] transition-all duration-500 
            drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] 
            hover:drop-shadow-[0_0_35px_rgba(59,130,246,1)]"
        />
      </div>

      {/* Fixed Hero Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="h-screen bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0"></div>
        </div>
      </div>

      {/* Navbar */}
      <header className="absolute top-4 left-0 w-full z-50 flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-3xl font-bold ml-10">Acadence</div>

        {/* Navigation Buttons */}
        <nav className="hidden md:flex space-x-4 font-medium bg-black bg-opcaity-50">
          <a
            href="#attendance"
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 hover:bg-blue-500/20 text-blue-300 transition"
          >
            Attendance Requirement
          </a>
          <a
            href="#cgpa"
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 hover:bg-blue-500/20 text-blue-300 transition"
          >
            CGPA Calculator
          </a>
          <a
            href="#timetable"
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 hover:bg-blue-500/20 text-blue-300 transition"
          >
            Timetable Tracker
          </a>
          <button className="backdrop-blur-md bg-white/10 border border-white/30 rounded-full px-4 py-2 hover:bg-blue-500/20 text-blue-300 transition">
            Sign In
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="mr-[30em]">
        <section className="relative h-screen flex items-start pt-53 px-10">
          <div className="max-w-lg z-10">
            <h1 className="text-6xl font-extrabold leading-tight mb-4">
              AI-Powered
              <div className="flex gap-4">
                <span className="text-blue-400">Academic</span>
                Assistant
              </div>
            </h1>
            <p className="text-lg text-gray-200 mb-6 max-w-[500px]">
              Calculate your attendance requirement, track your timetable, and
              monitor your CGPA with smart academic tools.
            </p>
            <button className="!bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg">
              Get Started
            </button>
          </div>
        </section>
      </div>

      {/* Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed top-0 left-0 w-24 h-24 rounded-full bg-blue-400 opacity-70 blur-3xl mix-blend-screen z-50"
      ></div>
    </div>
  );
}

export default App;
