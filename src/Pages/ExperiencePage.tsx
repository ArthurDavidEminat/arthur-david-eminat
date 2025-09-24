import "../styles/ExperiencePage.css";

function ExperiencePage() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">Digital Asset Strategist</h3>
              <span className="company">Family Office</span>
              <span className="duration">Jan 2020 - Jan 2025</span>
            </div>
            <ul className="job-description">
              <li>
                Collaborated with institutional stakeholders to manage
                multi-million dollar strategies across Stablecoins, Layer 1/2
                (Ethereum, Solana), DeFi, and RWAs
              </li>
              <li>
                Executed advanced trading strategies for family offices and
                private investors, delivering consistent double-digit returns
                through systematic risk management
              </li>
              <li>
                Analyzed complex market dynamics using COT data, on-chain
                metrics, and macro positioning strategies to identify sector
                imbalances and AI-blockchain investment opportunities
              </li>
              <li>
                Conducted deep-dive research on tokenomics, traditional assets
                (FX, commodities, equities), and blockchain interoperability
              </li>
              <li>
                Counseled ultra-high-net-worth clients on strategic asset
                allocation and portfolio rebalancing, ensuring regulatory
                compliance and tax optimization
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">
                Growth and ESG Partner (Regional Operations)
              </h3>
              <span className="company">National Social Security Fund</span>
              <span className="duration">Jul 2022 - Jan 2025</span>
            </div>
            <ul className="job-description">
              <li>
                Built strategic ESG sourcing framework incorporating category
                management principles, driving measurable cost savings and
                enhanced supplier performance
              </li>
              <li>
                Led partner onboarding and compliance procedures for 50+
                regional suppliers, improving procurement efficiency by 40%
              </li>
              <li>
                Created executive-level monthly business review dashboards using
                Power BI and Tableau, supporting strategic spend analysis for
                $100M+ procurement portfolio
              </li>
              <li>
                Implemented scalable de-risking strategies and performance
                measurement tools, proactively managing supplier risks
              </li>
              <li>
                Collaborated with C-level executives, regulators, and external
                stakeholders to integrate ESG best practices into supplier
                relationship management
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">
                IT Strategy Analyst (Project Management)
              </h3>
              <span className="company">National Social Security Fund</span>
              <span className="duration">Jul 2018 - Jun 2022</span>
            </div>
            <ul className="job-description">
              <li>
                Negotiated and managed IT service contracts worth $10M+,
                optimizing costs and strengthening vendor relationships through
                strategic contract management
              </li>
              <li>
                Streamlined requisition-to-pay workflows by integrating ERP
                systems (SAP, Oracle) with BI tools and automation, improving
                contract management efficiency by 80%
              </li>
              <li>
                Achieved 135% departmental performance target by implementing
                data-driven performance framework using Crystal Reports and
                advanced analytics
              </li>
              <li>
                Directed five major transformation projects, including
                AI-powered suspense account resolution with Microsoft,
                delivering 80% process efficiency improvement
              </li>
              <li>
                Led cloud migration and IT infrastructure optimization
                initiatives, reducing operational costs by 50% while enhancing
                system performance
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3 className="job-title">
                Procurement Specialist – Data Analytics
              </h3>
              <span className="company">National Social Security Fund</span>
              <span className="duration">Sep 2013 - Jun 2018</span>
            </div>
            <ul className="job-description">
              <li>
                Generated $18.97M in cost savings through strategic vendor
                contract negotiations while maintaining and enhancing key
                supplier relationships
              </li>
              <li>
                Reduced procurement cycle times by 40% through process
                automation, Lean methodologies, and comprehensive ERP
                integration (SAP, e-GP)
              </li>
              <li>
                Implemented IT Balanced Scorecard framework, achieving 96%
                success rate and aligning procurement activities with
                organizational performance metrics
              </li>
              <li>
                Resolved 15-month supplier payment backlog worth $5M+, restoring
                vendor trust and improving supplier performance through
                strategic payment initiatives
              </li>
              <li>
                Served as national change agent for Uganda's World Bank-funded
                e-GP system, leading institutional adoption and capacity
                building initiatives
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
