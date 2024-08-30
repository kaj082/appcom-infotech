import React from "react";

const MyMapComponent = () => {
  return (
    <iframe
      title="Appcom Infotech LLP Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5161210847166!2d72.52494301511476!3d23.027561123589527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84cebe99335b%3A0xcc5fe35573e43727!2sAppcom%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1693412345678!5m2!1sen!2sin"
      width="100%"
      height="800" // Adjusted height for a larger map view
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
    ></iframe>
  );
};

export default MyMapComponent;
