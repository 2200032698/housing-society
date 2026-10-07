import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.consent) {
      alert(
        "Please authorize us to contact you."
      );
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      consent: false,
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >

      <div className="page-container contact-grid">

        <div className="contact-information">

          <img
            src="/assets/contact_logo.png"
            alt="Housing Society"
            className="contact-logo"
          />

          <h2>About B06 Tower</h2>

          <p>
            Sahira Township, Gajularamaram is a large
            residential community in North Hyderabad.
            Spread over 35 acres, it offers 3 BHK
            apartments with modern amenities like a gym,
            power backup, and play areas. Located near
            major roads, schools, and hospitals, it
            provides great connectivity and is ideal for
            both living and investment.
          </p>

          <div className="contact-address">

            <strong>Housingsociety.net</strong>

            <span>B06 Tower, Sahira Township,</span>
            <span>Gajularamaram, Hyderabad,</span>
            <span>Telangana 500055</span>

          </div>

        </div>

        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

            </div>

            <div className="form-group">

              <label htmlFor="phone">
                Phone
              </label>

              <div className="phone-input">

                <span className="country-code">
                  🇮🇳 +91
                </span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />

              </div>

            </div>

            <div className="form-group">

              <label htmlFor="location">
                Location
              </label>

              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />

            </div>

            <label className="consent">

              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />

              <span>
                I authorize Housingsociety.net to contact
                me via Email, SMS, WhatsApp, and Call.
                This will override DND/NDNC preferences.
              </span>

            </label>

            <button
              type="submit"
              className="submit-button"
            >
              SUBMIT
            </button>

            {submitted && (
              <div className="success-message">
                Thank you! Your enquiry has been
                submitted successfully.
              </div>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;