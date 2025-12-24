import { useState } from "react";
import "../../styles/ExperiencePage.css";
import "../../styles/TradingPage.css";
import experience from "../../data/experience.json";

type Experience = {
  id: number;
  company: string;
  title: string;
  duration: string;
  achievements: string[];
};

function TradingPage() {
  // Filter trading-related experiences
  const tradingExperiences: Experience[] = experience.experience.filter(
    (exp) => exp.company === "Family Office"
  );

  const [experienceToDisplay, setExperienceToDisplay] = useState<Experience>(
    tradingExperiences[0]
  );

  return (
    <main>
      <section className="trading-hero">
        <div className="container">
          <h1 className="page-title">Trading & Portfolio Analysis</h1>
          <p className="page-subtitle">
            Trader and portfolio analyst with five years of experience executing
            discretionary and systematic strategies across index futures, FX,
            commodities, and crypto, supported by rigorous risk management and
            analytics.
          </p>
        </div>
      </section>

      <section className="trading-content">
        <div className="container">
          <div className="trading-stats">
            <div className="stat-card">
              <h3>5+ Years</h3>
              <p>Trading Experience</p>
            </div>
            <div className="stat-card">
              <h3>Multi-Asset</h3>
              <p>Futures, FX, Crypto, Commodities</p>
            </div>
            <div className="stat-card">
              <h3>Systematic</h3>
              <p>Risk Management & Analytics</p>
            </div>
            <div className="stat-card">
              <h3>Institutional</h3>
              <p>Family Office & Private Clients</p>
            </div>
          </div>

          <div className="trading-expertise">
            <h2 className="section-title">Core Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-card">
                <h4>Market Analysis</h4>
                <ul>
                  <li>Supply-demand & market structure analysis</li>
                  <li>COT data & positioning analysis</li>
                  <li>On-chain metrics & blockchain analytics</li>
                  <li>Macro context & sector imbalances</li>
                </ul>
              </div>
              <div className="expertise-card">
                <h4>Trading Strategies</h4>
                <ul>
                  <li>Discretionary & systematic approaches</li>
                  <li>Volatility regimes & macro catalysts</li>
                  <li>Portfolio hedging & scenario modeling</li>
                  <li>Multi-asset allocation strategies</li>
                </ul>
              </div>
              <div className="expertise-card">
                <h4>Risk & Analytics</h4>
                <ul>
                  <li>SQL-driven risk & P&L dashboards</li>
                  <li>Systematic risk management</li>
                  <li>Portfolio optimization</li>
                  <li>Performance attribution analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="trading-assets">
            <h2 className="section-title">Asset Classes</h2>
            <div className="assets-grid">
              <div className="asset-card">
                <h4>Digital Assets</h4>
                <p>Stablecoins, Layer 1/2 (Ethereum, Solana), DeFi, RWAs</p>
              </div>
              <div className="asset-card">
                <h4>Futures</h4>
                <p>Index futures, commodity futures</p>
              </div>
              <div className="asset-card">
                <h4>FX</h4>
                <p>Major and emerging market currencies</p>
              </div>
              <div className="asset-card">
                <h4>Commodities</h4>
                <p>Energy, metals, agricultural products</p>
              </div>
            </div>
          </div>

          <div className="trading-experience">
            <h2 className="section-title">Trading Experience</h2>
            <div className="experience-timeline">
              <div>
                <ul>
                  {tradingExperiences.map((experience) => (
                    <li key={experience.id}>
                      <button
                        className={
                          experience.id === experienceToDisplay.id
                            ? "experience-button active"
                            : "experience-button"
                        }
                        onClick={() => setExperienceToDisplay(experience)}
                      >
                        {experience.company}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h3 className="job-title">
                      {experienceToDisplay.title}
                      <span className="company">
                        {" "}
                        @ {experienceToDisplay.company}
                      </span>
                    </h3>
                    <span className="duration">
                      {experienceToDisplay.duration}
                    </span>
                  </div>
                  <ul className="job-description">
                    {experienceToDisplay.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TradingPage;

