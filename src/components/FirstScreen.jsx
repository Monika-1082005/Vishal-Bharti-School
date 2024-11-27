import PropTypes from "prop-types"; // Import PropTypes
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; 

const FirstScreen = ({ img1 }) => {
  return (
    <div className="hero w-full h-screen relative">
      <img
        src={img1}
        alt="Hero Image"
        className="object-cover w-full h-full brightness-50 backdrop-blur-sm"  // Tailwind filter to darken the image
      />
      <motion.div 
        variants={fadeIn("down", 0.4)} // Apply fadeIn animation with a delay of 0.2 seconds
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="absolute bottom-0 left-0 w-full flex justify-center pb-28" // Position at bottom with padding
      >
        <h1
          className="text-white bg-opacity-50 backdrop-blur-sm bg-black font-normal text-2xl md:text-4xl lg:text-5xl p-5 rounded"
          style={{
            fontFamily: '"Handlee", cursive',
            fontWeight: 500, 
            fontStyle: "normal",
          }}
        >
          Shaping Minds, Building Futures
        </h1>
      </motion.div>
    </div>
  );
};

// Prop validation using PropTypes
FirstScreen.propTypes = {
  img1: PropTypes.string.isRequired, // Validate that img1 is a required string (URL)
};

export default FirstScreen;
