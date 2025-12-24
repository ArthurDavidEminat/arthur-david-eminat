function Connect() {
  return (
    <section id="connect" className="cta">
      {/* FINAL CTA */}
      <div>
        <h3>Let's Connect</h3>
        <p>
          I'm always open to discussions around procurement strategy, market
          structure, analytics, and risk-based decision-making.
        </p>

        <div className="cta-actions">
          <a
            href="/assets/Arthur-Procurement-Resume.pdf"
            className="btn btn-secondary"
          >
            Download Procurement Resume
          </a>
          <a
            href="/assets/Arthur-Trading-Resume.pdf"
            className="btn btn-secondary"
          >
            Download Trading Resume
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/arthur-david-eminat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-linkedin"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Connect;
