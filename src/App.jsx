import React from "react";
import { Sun, Moon } from "lucide-react";
import TrueFocus from "./components/TrueFocus";
import LightRays from "./components/LightRays";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Works", href: "#" },
  { name: "Contact", href: "#" },
];

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
  };

  return (
    <>
      <div
        className={`font-['Montserrat',_sans-serif] ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        {/* LightRays background effect - positioned at the very top */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor={isDarkMode ? "#ffffff" : "#000000"}
            raysSpeed={1.5}
            lightSpread={1.2}
            rayLength={2.5}
            pulsating={true}
            fadeDistance={0.8}
            saturation={0.9}
            followMouse={true}
            mouseInfluence={0.15}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>
        
        <header className="px-4 sm:px-8 lg:px-12 py-4 sm:py-5 flex justify-between items-center relative z-10">
          <div className="text-xl sm:text-2xl font-black tracking-wider">GAURAV</div>
          <nav className="hidden sm:block">
            <ul className="flex">
              {navLinks.map((link) => (
                <li key={link.name} className="mx-3 lg:mx-5">
                  <a
                    href={link.href}
                    className="text-sm font-normal text-white hover:opacity-70 transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="text-lg cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            {isDarkMode ? (
              <Sun className="text-white" />
            ) : (
              <Moon className="text-white" />
            )}
            <span className="text-xs text-white"></span>
          </button>
        </header>

        <main className="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h1
            className="
          text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]
          font-black
          uppercase
          text-transparent
          bg-clip-text
          tracking-[0.05em] sm:tracking-[0.1em]
          leading-tight
          relative
          overflow-hidden
          text-center
          
          /* Background image animation */
          animate-[background-change_60s_linear_infinite]
          bg-[url('/images/your-image-1.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
        "
          >
            Gaurav
          </h1>

          <div className="flex flex-col items-center space-y-4 mt-4 sm:mt-6 w-full max-w-4xl">
            <TrueFocus
              sentence="Traveler Entrepreneur Developer"
              manualMode={false}
              blurAmount={5}
              borderColor={isDarkMode ? "white" : "black"}
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
