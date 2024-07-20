import React from "react";
// import "./Gallery.css"; // Import your CSS file

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        {gallery.map((element, index) => (
          <div key={index} className="image-container">
            <img src={element} alt="galleryImage" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
