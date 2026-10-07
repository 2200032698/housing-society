import { useState } from "react";

const tabs = [
  {
    id: "layout",
    label: "Site Layout",
    image: "/assets/layout.png",
  },
  {
    id: "floor",
    label: "Floor Plan",
    image: "/assets/floorplan.jpg",
  },
  {
    id: "map",
    label: "Map Location",
    image: "/assets/map.jpg",
  },
];

function FloorPlans() {
  const [activeTab, setActiveTab] = useState("map");

  const activeItem = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <section className="floor-section section" id="floor-plans">

      <div className="page-container">

        <div className="section-heading">

          <h2>Site Layout &amp; Floor Plans</h2>

        </div>

        <div className="tab-buttons">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}

        </div>

        <div className="floor-image-container">

          <img
            src={activeItem.image}
            alt={activeItem.label}
            className="floor-image"
          />

        </div>

      </div>

    </section>
  );
}

export default FloorPlans;