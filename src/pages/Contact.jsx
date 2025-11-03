export default function Contact() {
  return (
    <section className="contactSection">
      <div className="contactCard">
        <h1>Contact Us</h1>
        <p>Tell us about your needs — we’ll get back within 24 hours.</p>

        <form>
          <div className="formGroup">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Company / Project" />
          </div>
          <div className="formGroup">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" />
          </div>
          <div className="formGroup full">
            <textarea placeholder="Your Message..." required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}