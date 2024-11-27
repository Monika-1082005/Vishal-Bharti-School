import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing FontAwesome arrow up icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled down and toggle the visibility of the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll the page smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-110 hover:shadow-2xl transition-transform transform ${
        isVisible ? 'block opacity-100' : 'hidden opacity-0'
      }`}
      aria-label="Scroll to Top"
      style={{
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <FaArrowUp size={24} /> {/* FontAwesome arrow-up icon */}
    </button>
  );
};

export default ScrollToTop;
