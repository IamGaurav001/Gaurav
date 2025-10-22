import React from "react";
import { Sun, Moon } from "lucide-react";
import TrueFocus from "./components/TrueFocus";

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
        <header className="px-12 py-5 flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider">GAURAV</div>
          <nav>
            <ul className="  flex">
              {navLinks.map((link) => (
                <li key={link.name} className="mx-5">
                  <a
                    href={link.href}
                    className=" text-sm font-normal text-white"
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

        <main className="min-h-[80vh] flex flex-col justify-center items-center px-5">
          <h1
            className="
          text-[15vw] lg:text-[8vw] xl:text-[6vw]
          font-black
          uppercase
          text-transparent
          bg-clip-text
          tracking-[0.1em]
          leading-tight
          relative
          overflow-hidden
          
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

          <div className="flex flex-col items-center space-y-4 mt-6">
            {/* <p className="text-xl font-light text-neutral-300 tracking-wider">
          <span className="animate-fadeIn inline-block mx-3 hover:text-emerald-400 transition-colors duration-300">Traveler</span>
          <span className="text-neutral-500">•</span>
          <span className="animate-fadeIn inline-block mx-3 hover:text-emerald-400 transition-colors duration-300">Entrepreneur</span>
          <span className="text-neutral-500">•</span>
          <span className="animate-fadeIn inline-block mx-3 hover:text-emerald-400 transition-colors duration-300">Designer</span>
        </p> */}
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
