import { Box } from "@mui/material";
import '../styles/Marquee.css'; // Import the CSS file

const Marquee = () => {
  const lines = [
    "Registration open for admission in classes LKG, UKG and I for the session (2025-26)",
  ];

  return (
    <Box
      component="div"
      className="marquee-container bg-gradient-to-r from-blue-500 to-indigo-600" // Use the class defined in CSS
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%", // Ensure the container takes full width
        position: "relative", // Make sure container has relative positioning for absolute elements
      }}
    >
      <div className="marquee-track">
        {/* Duplicate the lines to ensure continuous scrolling */}
        {lines.map((line, index) => (
          <span
            key={index}
            className="marquee-text cursor-pointer text-2xl"
            style={{
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
          >
            {line}
          </span>
        ))}

        {/* Duplicate the lines for smooth continuous scrolling */}
        {lines.map((line, index) => (
          <span
            key={`duplicate-${index}`}
            className="marquee-text cursor-pointer text-2xl"
            style={{
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
          >
            {line}
          </span>
        ))}
      </div>
    </Box>
  );
};

export default Marquee;
