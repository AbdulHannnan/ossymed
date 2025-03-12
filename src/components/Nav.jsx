import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FDF8F3] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-green-700">
          OssyMed
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
        <div className="mr-32 mt-1 md:flex gap-12 font-medium ">
        <li>
            <Link to="programs" smooth={true} duration={500} className="cursor-pointer hover:text-green-600">
              Programs
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-green-600">
              About
            </Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500} className="cursor-pointer hover:text-green-600">
              Blog
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-green-600">
              Contact
            </Link>
          </li>
          </div>
          <li>
            <button className="text-gray-700 hover:text-green-600 rounded-lg border-2 px-4 py-1.5 border-orange-500 hover:bg-orange-500" >Log in</button>
          </li>
          <li>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Get Started
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
            <li>
            <Link to="programs" smooth={true} duration={500} className="cursor-pointer hover:text-green-600">
           Programs
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-green-600">
              About
            </Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500} className="cursor-pointer hover:text-green-600">
              Blog
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-green-600">
              Contact
            </Link>
          </li>
          <li>
            <button className="text-gray-700 hover:text-green-600">Log in</button>
          </li>
          <li>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Get Started
            </button>
          </li>
        
        </ul>
         
        
      )}
      

      
    </nav>
  );
};

export default Nav;

