import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const navItems = [
  { name: 'Home', link: '/' },
  {
    name: 'About',
    subItems: [
      { name: 'Introduction', link: '/' },
      { name: 'Our Mission & Vision', link: '/' },
      { name: 'Mandatory Disclosure', link: '/' },
      { name: "Principal's Desk", link: '/' },
    ],
  },
  {
    name: 'Infrastructure',
    subItems: [
      { name: 'Reception', link: '/' },
      { name: 'Mathematics Laboratory', link: '/' },
      { name: 'Biology, Chemistry, Physics Labs', link: '/' },
      { name: 'Computer Lab', link: '/' },
      { name: 'Play Zone', link: '/' },
      { name: 'Music Room', link: '/' },
      { name: 'Playground', link: '/' },
      { name: 'Library', link: '/' },
      { name: 'Transportation', link: '/' },
      { name: 'Class Rooms', link: '/' },
    ],
  },
  {
    name: 'Admission',
    subItems: [
      { name: 'Procedure', link: '/' },
      { name: 'Registration Form', link: '/' },
      { name: 'Admission/Withdrawal rule', link: '/' },
    ],
  },
  {
    name: 'Academics',
    subItems: [
      { name: 'Rules & Regulations', link: '/' },
      { name: 'Assessments', link: '/' },
      { name: 'Counselling', link: '/' },
    ],
  },
  {
    name: 'Activities',
    subItems: [
      { name: 'Glimpse of Activities', link: '/' },
      { name: 'Planner', link: '/' },
    ],
  },
  { name: 'Contact', link: '/' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-[#0D347B] shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4 sm:px-6 md:px-8">
        {/* Navbar Links for Larger Screens */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)} // Open on hover
                onMouseLeave={() => setActiveDropdown(null)}  // Close when hover ends
              >
                <Link
                  to={item.subItems ? '#' : item.link || '/'}
                  aria-haspopup={!!item.subItems}
                  aria-expanded={activeDropdown === index}
                  className="text-white px-4 py-2 rounded-md hover:text-slate-50 text-sm md:text-base lg:text-lg"
                  onClick={(e) => item.subItems && e.preventDefault()}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <ul
                    className={`${
                      activeDropdown === index ? 'block' : 'hidden'
                    } absolute left-0 bg-white shadow-md rounded group-hover:block z-20 mt-2`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.link || '/'}
                          className="block px-4 py-2 text-black hover:text-gray-600 whitespace-nowrap text-sm md:text-base"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon for Smaller Screens */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navbar Links for Smaller Screens */}
      {isOpen && (
        <div className="md:hidden bg-[#0D347B] shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <div>
                  <button
                    className="w-full text-left text-white  px-4 py-2 text-sm md:text-base"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}
                  </button>
                  {item.subItems && activeDropdown === index && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.link || '/'}
                            className="block bg-white text-black px-4 py-2 hover:bg-gray-400 whitespace-nowrap text-sm md:text-base"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
