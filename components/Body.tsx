export default function Body() {
  return (
    <>
      <section className="body-section">
        <p className="body-text">
          We build things that hold up. Websites, print, code — executed with
          precision and built to last. We don&apos;t advertise. We don&apos;t
          take every project. If you&apos;re here, something we made brought you
          here. That&apos;s enough of an introduction.
        </p>
      </section>

      <style jsx>{`
        .body-section {
          background-color: var(--color-ground);
          display: flex;
          justify-content: center;
          padding: 80px 24px;
        }

        .body-text {
          max-width: 560px;
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 1.05rem;
          color: var(--color-muted);
          line-height: 1.9;
          text-align: center;
        }
      `}</style>
    </>
  );
}
