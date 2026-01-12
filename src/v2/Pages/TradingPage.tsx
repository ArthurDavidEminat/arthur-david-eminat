import { useState } from "react";
import "../../styles/ExperiencePage.css";
import "../../styles/TradingPage.css";
import experience from "../../data/experience.json";
import Header from "../../components/Header";
import { NavItem } from "../../types";

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
    <div>
      <main>
        <section className="trading-hero">
          <div className="container">
            <h1 className="page-title">Trading & Portfolio Analysis</h1>
            <p className="page-subtitle">
              Digital Asset Strategist with five years of experience managing
              multi-million dollar institutional portfolios across Stablecoins,
              Layer 1/2 blockchains, DeFi, and RWAs. Specialized in executing
              advanced trading strategies, delivering consistent double-digit
              returns through systematic risk management, portfolio
              diversification, and AI-driven sentiment analysis.
            </p>
          </div>
        </section>

        <section className="trading-content">
          <div className="container">
            <div className="trading-stats">
              <div className="stat-card">
                <h3>5 Years</h3>
                <p>Digital Asset Strategy</p>
              </div>
              <div className="stat-card">
                <h3>Multi-Million $</h3>
                <p>Portfolio Management</p>
              </div>
              <div className="stat-card">
                <h3>Double-Digit</h3>
                <p>Consistent Returns</p>
              </div>
              <div className="stat-card">
                <h3>Institutional</h3>
                <p>Family Office & UHNW Clients</p>
              </div>
            </div>

            <div className="trading-expertise">
              <h2 className="section-title">Core Expertise</h2>
              <div className="expertise-grid">
                <div className="expertise-card">
                  <h4>Market Analysis</h4>
                  <ul>
                    <li>
                      On-chain metrics (transaction volumes, wallet
                      distributions)
                    </li>
                    <li>COT data & positioning analysis</li>
                    <li>Macro positioning strategies & sector rotations</li>
                    <li>AI-blockchain investment opportunity identification</li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h4>Trading & Strategy</h4>
                  <ul>
                    <li>
                      Advanced trading strategies for family offices & UHNW
                      clients
                    </li>
                    <li>
                      Portfolio diversification & systematic risk management
                    </li>
                    <li>AI-driven sentiment analysis</li>
                    <li>Strategic asset allocation & portfolio rebalancing</li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h4>Risk & Compliance</h4>
                  <ul>
                    <li>Regulatory compliance & tax optimization</li>
                    <li>Quantum-resistant security protocols</li>
                    <li>Custody solutions & wallet architecture</li>
                    <li>DeFi protocol risk mitigation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="trading-assets">
              <h2 className="section-title">Asset Classes</h2>
              <div className="assets-grid">
                <div className="asset-card">
                  <h4>Digital Assets</h4>
                  <p>
                    Stablecoins, Layer 1/2 (Ethereum, Solana), DeFi, RWAs,
                    Tokenized Bonds
                  </p>
                </div>
                <div className="asset-card">
                  <h4>Emerging Markets</h4>
                  <p>AI-crypto convergence, NFT strategies, Decentralized AI</p>
                </div>
                <div className="asset-card">
                  <h4>Traditional Assets</h4>
                  <p>FX, Commodities, Equities</p>
                </div>
                <div className="asset-card">
                  <h4>Infrastructure</h4>
                  <p>
                    Blockchain interoperability, Digital custody, Wallet
                    architecture
                  </p>
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
    </div>
  );
}

export default TradingPage;
