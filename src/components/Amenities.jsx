const amenities = [
  {
    icon: "🏋️",
    title: "Gym",
  },
  {
    icon: "🧘",
    title: "Yoga",
  },
  {
    icon: "🏊",
    title: "Pool",
  },
  {
    icon: "🚶",
    title: "Walking Area",
  },
  {
    icon: "🖥️",
    title: "Conference Room",
  },
  {
    icon: "🔋",
    title: "EV Charging",
  },
  {
    icon: "👶",
    title: "Creche",
  },
  {
    icon: "🏛️",
    title: "Auditorium",
  },
  {
    icon: "🌳",
    title: "Garden",
  },
  {
    icon: "🚗",
    title: "Car Parking",
  },
];

function Amenities() {
  return (
    <section className="amenities-section section">

      <div className="page-container">

        <div className="section-heading">

          <h2>Extra Fun, More Happiness</h2>

        </div>

        <p className="amenities-description">
          Extra fun for children &amp; alike starts the moment you are on the
          elevation at the grand floor. Designated blocks have their own areas
          for children so that they don’t have to move far from the block once
          they come down. Adventurous ones in an extra proactive area for
          growing and sweating out — swing over or slide &amp; glide, you sure
          are in for extra fun here!
        </p>

        <div className="amenities-grid">

          {amenities.map((amenity, index) => (
            <div
              className="amenity-card"
              key={index}
            >

              <div className="amenity-icon">
                {amenity.icon}
              </div>

              <h3>{amenity.title}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Amenities;