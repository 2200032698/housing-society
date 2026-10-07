import { useState } from "react";

const images = [
  "/assets/status6.png",
  "/assets/status5.png",
  "/assets/status3.jpg",
  "/assets/status4.jpg",
];

function ProjectStatus() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="status-section section">

      <div className="page-container">

        <div className="section-heading">

          <h2>Current Project Status - Nov 2025</h2>

        </div>

        <div className="carousel">

          <button
            className="carousel-button left"
            onClick={previousSlide}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <div className="carousel-window">

            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >

              {images.map((image, index) => (
                <div
                  className="carousel-slide"
                  key={index}
                >
                  <img
                    src={image}
                    alt={`Project status ${index + 1}`}
                  />
                </div>
              ))}

            </div>

          </div>

          <button
            className="carousel-button right"
            onClick={nextSlide}
            aria-label="Next image"
          >
            &#10095;
          </button>

        </div>

        <div className="carousel-dots">

          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectStatus;