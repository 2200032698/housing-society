function Location() {
  return (
    <section className="location-section section">

      <div className="page-container">

        <div className="section-heading">

          <h2>Location</h2>

        </div>

        <div className="location-content">

          <p className="location-address">
            Find us at Rajiv Swagruha Township,
            Mettakanigudem, Hyderabad, Telangana 500055
          </p>

          <div className="map-container">

            <iframe
              title="Housing Society Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7232.70220053463!2d78.432937!3d17.526621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f0026254d0f%3A0x6206d81240dd6d30!2sB06!5e1!3m2!1sen!2sin!4v1762749774379!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Location;