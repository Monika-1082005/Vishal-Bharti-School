import PropTypes from "prop-types";
import '../styles/Slider.css'


const Slider = ({ images }) => {
  // Duplicate the images array for infinite scrolling effect
  const duplicatedImages = [...images, ...images];

  return (
    <div className="slider">
      <div className="slide-track">
        {duplicatedImages.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
