import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'; // For prop validation
import { FaTimes } from 'react-icons/fa'; // Cross icon for closing the modal

const ChatModal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Create a reference to the modal container
  const modalRef = useRef(null);

  // Handle form submission (you can customize the function to handle the data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("How can we help?:", message);

    setName('');
    setEmail('');
    setMessage('');
    closeModal(); // Close the modal after form submission
  };

  // Close modal if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef} // Attach the ref to the modal container
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
      >
        {/* School Name */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Vishal Bharti Senior Secondary School</h2>
          <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
            <FaTimes size={24} /> {/* Cross icon */}
          </button>
        </div>

        {/* Chat Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message Input (How can we help?) */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              How can we help?
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

// Prop validation for ChatModal component
ChatModal.propTypes = {
  closeModal: PropTypes.func.isRequired, // Ensures closeModal is passed correctly
};

export default ChatModal;
