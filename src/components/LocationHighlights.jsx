import { useState } from "react";

const locations = {
  SCHOOLS: [
    ["Nearby Schools", "2.0 KM"],
    ["Local School Campus", "2.8 KM"],
    ["International School", "4.1 KM"],
  ],

  HOSPITALS: [
    ["Nearby Hospital", "3.1 KM"],
    ["Multi Specialty Hospital", "4.2 KM"],
    ["Medical Center", "5.0 KM"],
  ],

  TRANSPORT: [
    ["Main Road", "1.5 KM"],
    ["Bus Stop", "1.8 KM"],
    ["Metro Connectivity", "5.5 KM"],
  ],

  MALLS: [
    ["Nearby Shopping Center", "4.2 KM"],
    ["Shopping Mall", "5.0 KM"],
    ["Retail Hub", "5.8 KM"],
  ],

  "EDUCATIONAL INSTITIONS": [
    ["Educational Campus", "3.0 KM"],
    ["College", "4.5 KM"],
    ["University", "7.0 KM"],
  ],

  PARKS: [
    ["Prashantha Vanam", "3.2 KM"],
    ["Pranavayu Urban Forest Park", "2.7 KM"],
    ["Children's Park", "2.6 KM"],
  ],
};

const categories = [
  "SCHOOLS",
  "HOSPITALS",
  "TRANSPORT",
  "MALLS",
  "EDUCATIONAL INSTITIONS",
  "PARKS",
];

function LocationHighlights() {
  const [activeCategory, setActiveCategory] =
    useState("PARKS");

  return (
    <section className="highlights-section section">

      <div className="page-container">

        <div className="section-heading">

          <h2>Location Highlights</h2>

        </div>

        <div className="highlight-tabs">

          {categories.map((category) => (
            <button
              key={category}
              className={`highlight-tab ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

        <div className="highlight-list">

          {locations[activeCategory].map(
            ([name, distance], index) => (
              <div
                className="highlight-item"
                key={index}
              >

                <div className="highlight-name">
                  {name}
                </div>

                <div className="highlight-distance">
                  {distance}
                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

export default LocationHighlights;