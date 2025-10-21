import { Search } from 'lucide-react'; // You still need to install this: npm install lucide-react

// Set up navigation links
const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Works", href: "#" },
  { name: "Contact", href: "#" },
];

function App() {
  return (
    <div className="font-['Montserrat',_sans-serif]">
      
      <header className="px-12 py-5 flex justify-between items-center">
        <div className="text-2xl font-black tracking-wider">RANDON</div>
        <nav>
          <ul className="  flex">
            {navLinks.map((link) => (
              <li key={link.name} className="mx-5">
                <a href={link.href} className=" text-sm font-normal text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Search className="text-lg cursor-pointer" />
      </header>

      <main className="min-h-[80vh] flex flex-col justify-center items-center px-5">
        
        <h1 className="
          text-[15vw] lg:text-[12vw]
          font-black
          uppercase
          text-transparent
          bg-clip-text
          
          /* These classes replace the tailwind.config.js file */
          animate-[gradient-flow_10s_linear_infinite]
          bg-[linear-gradient(90deg,#ff00a9,#ff4f4f,#ffee00,#4fffb5,#00a9ff,#ff00a9)]
          bg-[size:400%_auto]
        ">
          Gaurav
        </h1>

        <p className="text-lg font-normal text-neutral-300 text-center mt-2">
          Counselor to Traveler to Educator to Designer: Bridging the Gaps to Solve Complex Problems
        </p>
      </main>

    </div>
  );
}

export default App;