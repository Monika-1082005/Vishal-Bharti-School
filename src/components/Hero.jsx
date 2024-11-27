import { Box, Container } from "@mui/material"; // MUI Box and Container for layout
import { motion } from "framer-motion"; // Framer Motion for animations
import { fadeIn } from "../variants";

const Hero = () => {
  const textReveal = {
    hidden: {
      width: "0%",
    },
    visible: {
      width: "100%",
      transition: {
        duration: 2.5, // Speed of reveal
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      className="bg-gray-100 py-12 global-font" // Global class for background
      sx={{
        backgroundImage: "url('/path-to-background-image.jpg')", // Background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Reveal Animation Wrapper */}
        <div className="relative text-center overflow-hidden py-2">
          {/* Background Rectangle for Reveal */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#DDFF46]"
            variants={textReveal} // Attach the reveal animation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.7 }}
            style={{ height: "100%" }}
          ></motion.div>

          {/* Title */}
          <h2 className="relative  text-black font-bold text-2xl sm:text-3xl lg:text-4xl">
            Vishal Bharti Senior Secondary School
          </h2>
        </div>

        {/* Subtitle */}
        <motion.h6
          className="text-gray-700 italic mb-6 text-base sm:text-lg lg:text-xl text-center mt-3"
          variants={fadeIn("right", 0.4)} // Apply fadeIn animation with a delay of 0.2 seconds
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          Discover Vishal Bharti Senior Secondary School’s Unique Approach to
          Learning
        </motion.h6>

        {/* Description */}
        <motion.p
          className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg text-center"
          variants={fadeIn("left", 0.4)} // Apply fadeIn animation with a delay of 0.2 seconds
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          At Vishal Bharti Senior Secondary School, we believe that every
          student has the potential to excel academically and personally. That’s
          why we’ve developed a unique approach to learning that focuses on each
          student’s individual needs and learning style. Our teachers are
          dedicated to fostering a supportive and inclusive learning
          environment, where students are encouraged to explore new ideas and
          take risks. We offer a wide range of academic and extracurricular
          programmes that enable our students to build a strong foundation for
          success.
        </motion.p>
      </Container>
    </Box>
  );
};

export default Hero;
