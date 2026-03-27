"use client";

import TreeMark from "./TreeMark";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div style={{ color: "var(--color-accent)", width: "60px" }} className="anim anim-0">
          <TreeMark />
        </div>

        <p className="wordmark anim anim-1">FIELD &amp; CODE</p>
        <p className="tagline anim anim-2">DESIGN · PRINT · DEVELOP</p>

        <hr className="rule anim anim-3" />

        <p className="headline anim anim-4">
          Good work doesn&apos;t need to introduce itself.
        </p>

        <span className="scroll-cue anim anim-5">↓</span>
      </section>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero {
          min-height: 100vh;
          background-color: var(--color-ground);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .anim {
          opacity: 0;
          animation: fadeUp 800ms ease-out forwards;
        }

        .anim-0 { animation-delay: 0ms; }
        .anim-1 { animation-delay: 300ms; }
        .anim-2 { animation-delay: 500ms; }
        .anim-3 { animation-delay: 600ms; }
        .anim-4 { animation-delay: 800ms; }
        .anim-5 { animation-delay: 1200ms; }

        .wordmark {
          margin-top: 1.5rem;
          font-family: var(--font-sans);
          font-weight: 300;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-primary);
          font-size: 1.25rem;
        }

        .tagline {
          margin-top: 0.5rem;
          font-family: var(--font-sans);
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-muted);
          font-size: 0.6rem;
        }

        .rule {
          width: 120px;
          border: none;
          border-top: 1px solid var(--color-surface);
          margin: 2rem auto;
        }

        .headline {
          font-family: var(--font-sans);
          font-weight: 300;
          color: var(--color-primary);
          font-size: 1.1rem;
          max-width: 340px;
          text-align: center;
          line-height: 1.6;
        }

        .scroll-cue {
          margin-top: 3rem;
          color: var(--color-muted);
          font-size: 0.75rem;
        }
      `}</style>
    </>
  );
}
