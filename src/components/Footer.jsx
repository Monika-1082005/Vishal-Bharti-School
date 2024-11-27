import { motion } from "framer-motion"; // Import Framer Motion

const Footer = () => {
  return (
    <footer className="bg-[#0D347B] text-white py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:space-x-6 space-y-6 md:space-y-0">
        {/* Left Content */}
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, y: 20 }} // Start offscreen with opacity 0
          animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl sm:text-xl font-semibold mb-4">
            Vishal Bharti Senior Secondary School
          </p>
          <p className="text-md sm:text-sm text-xs mb-2">
            Vishal Bharti Senior Secondary School, Parwana Road, Pundrik Vihar,
            Pitam Pura, New Delhi, Delhi, India
          </p>
          <p className="text-md sm:text-sm text-xs mb-4">Phone: 9354937851/54</p>
          <p className="text-md sm:text-sm text-xs">
            Copyright &copy; {new Date().getFullYear()} Vishal Bharti Senior Secondary
            School. All Rights Reserved.
          </p>
        </motion.div>

        {/* Right Content (Google Maps Embed) */}
        <motion.div
          className="md:w-1/3 order-1 md:order-2" // Ensure iframe comes below text on smaller screens
          initial={{ opacity: 0, x: 100 }} // Start offscreen with opacity 0 and position shifted 100px
          animate={{ opacity: 1, x: 0 }} // Fade in and return to original position
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.741283975418!2d77.12582485773312!3d28.693817979156965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03dd4002a4ef%3A0x418a9f9ece7afe33!2sVishal%20Bharti%20Sr%20Sec%20School!5e0!3m2!1sen!2sin!4v1732527532678!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" // Apply shadow but no translate on small screens
          ></iframe>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
