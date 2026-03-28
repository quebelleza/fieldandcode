"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Web & Digital",
  "Print & Graphic",
  "Development",
  "All of the above",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleService(service: string) {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ name, email, message, services });
    setSubmitted(true);
  }

  return (
    <>
      <section className="contact-section">
        <div className="contact-inner">
          {submitted ? (
            <p className="confirmation">We&apos;ll be in touch.</p>
          ) : (
            <>
              <h2 className="contact-heading">
                You didn&apos;t come this far to say nothing.
              </h2>

              <form onSubmit={handleSubmit}>
                <fieldset className="checkbox-group">
                  <legend className="field-label">What are we working on?</legend>
                  {SERVICE_OPTIONS.map((option) => (
                    <label key={option} className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={services.includes(option)}
                        onChange={() => toggleService(option)}
                      />
                      <span className="checkbox-label">{option}</span>
                    </label>
                  ))}
                </fieldset>

                <div className="field">
                  <label className="field-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="field-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="field-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label className="field-label" htmlFor="message">Tell us about the project</label>
                  <textarea
                    id="message"
                    className="field-input"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Let&apos;s talk.
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          background-color: var(--color-surface);
          display: flex;
          justify-content: center;
          padding: 80px 24px;
        }

        .contact-inner {
          width: 100%;
          max-width: 560px;
        }

        .contact-heading {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 1.4rem;
          color: var(--color-primary);
          margin-bottom: 2.5rem;
        }

        .field-label {
          display: block;
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-muted);
          margin-bottom: 1rem;
        }

        .checkbox-group {
          border: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }

        .checkbox-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          cursor: pointer;
        }

        .checkbox-row input[type="checkbox"] {
          accent-color: var(--color-accent);
          width: 14px;
          height: 14px;
          cursor: pointer;
        }

        .checkbox-label {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 0.95rem;
          color: var(--color-primary);
        }

        .field {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .field-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-muted);
          padding: 0.5rem 0;
          width: 100%;
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 0.95rem;
          color: var(--color-primary);
          outline: none;
          border-radius: 0;
          resize: none;
        }

        .submit-btn {
          margin-top: 2.5rem;
          background: var(--color-accent);
          color: #0D0D0D;
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          padding: 0.85rem 2.5rem;
          border: none;
          border-radius: 0;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .submit-btn:hover {
          opacity: 0.85;
        }

        .confirmation {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 1.1rem;
          color: var(--color-primary);
          text-align: center;
        }
      `}</style>
    </>
  );
}
