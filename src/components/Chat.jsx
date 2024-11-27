import { useState, useEffect } from 'react';
import { FaComments } from 'react-icons/fa'; // Importing FontAwesome chat bubble icon
import ChatModal from './ChatModal'; // Import ChatModal component

const Chat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={openModal} // Open the modal when the chat button is clicked
        className={`fixed bottom-8 left-8 z-50 p-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-110 hover:shadow-2xl transition-transform transform ${
          isVisible ? 'block opacity-100' : 'hidden opacity-0'
        }`}
        aria-label="Chat with us"
        style={{
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <FaComments size={24} /> {/* FontAwesome chat icon */}
      </button>

      {/* Conditional rendering of ChatModal */}
      {isModalOpen && <ChatModal closeModal={closeModal} />}
    </>
  );
};

export default Chat;
