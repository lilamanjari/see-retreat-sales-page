"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "SEE Retreat Website Question");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch("https://formsubmit.co/ajax/seeretreat@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (submitError) {
      setStatus("error");
      setError(
        "Something went wrong while sending your message. Please try again or email seeretreat@gmail.com directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="contactSuccess">
        <p className="eyebrow">Message Sent</p>
        <h3>Thank you.</h3>
        <p>
          Your message has been sent to the SEE team. We&apos;ll be in touch
          shortly after reviewing your question.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <input
        type="text"
        name="_honey"
        className="contactHidden"
        tabIndex="-1"
        autoComplete="off"
      />

      <label className="contactField">
        <span>Name</span>
        <input type="text" name="name" required disabled={status === "submitting"} />
      </label>

      <label className="contactField">
        <span>Email</span>
        <input
          type="email"
          name="email"
          required
          disabled={status === "submitting"}
        />
      </label>

      <label className="contactField contactFieldFull">
        <span>Message</span>
        <textarea
          name="message"
          rows="6"
          required
          disabled={status === "submitting"}
        />
      </label>

      {status === "error" ? <p className="contactError">{error}</p> : null}

      <button type="submit" className="buttonPrimary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
