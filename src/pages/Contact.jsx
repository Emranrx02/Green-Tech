// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const [toast, setToast] = useState({
    show: false,
    msg: "",
    type: "success", // success | error
  });

  const showToast = (msg, type = "success") => {
    setToast({ show: true, msg, type });
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => {
      setToast({ show: false, msg: "", type: "success" });
    }, 2600);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_42df7zl", // Service ID
        "template_yk1ar1f", // Template ID
        formRef.current,
        "XCOJqLB5R5ncQkryk" // Public key
      );

      setStatus("sent");
      showToast("✅ Message sent successfully! We’ll reply within 24 hours.", "success");
      formRef.current.reset();

      setTimeout(() => setStatus("idle"), 2200);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("❌ Failed to send. Please try again.", "error");

      setTimeout(() => setStatus("idle"), 2200);
    }
  };

  return (
    <>
      {/* ✅ Popup / Toast */}
      <div className={`toast ${toast.show ? "show" : ""} ${toast.type}`}>
        {toast.msg}
      </div>

      <section className="contactSection">
        <div className="contactCard">
          <h1>Contact Us</h1>
          <p>Tell us about your needs — we’ll get back within 24 hours.</p>

          <form ref={formRef} onSubmit={sendEmail}>
            <div className="formGroup full">
              <input name="user_name" type="text" placeholder="Full Name" required />
            </div>

            <div className="formGroup full">
              <input name="user_company" type="text" placeholder="Company / Project" />
            </div>

            <div className="formGroup full">
              <input name="user_email" type="email" placeholder="Email" required />
            </div>

            <div className="formGroup full">
              <input name="subject" type="text" placeholder="Subject" />
            </div>

            <div className="formGroup full">
              <textarea name="message" placeholder="Your Message..." required />
            </div>

            <button
              id="sendBtn"
              type="submit"
              className={`truck-button ${status === "sending" ? "anim" : ""} ${
                status === "sent" ? "done" : ""
              } ${status === "error" ? "fail" : ""}`}
              disabled={status === "sending"}
            >
              <span className="label default">Send Message</span>
              <span className="label success">✅ Sent!</span>
              <span className="label error">❌ Try again</span>

              <span className="truck" aria-hidden="true" />
              <span className="shadow" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
