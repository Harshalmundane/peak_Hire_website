import { recruitment as r } from "@/data/company";

const alumniCompanies = [
  { name: "accenture", color: "#111827", accent: "#a100ff" },
  { name: "aws", color: "#232f3e", accent: "#ff9900" },
  { name: "Capgemini", color: "#0070ad", accent: "#0070ad" },
  { name: "intel", color: "#0071c5", accent: "#0071c5" },
  { name: "Microsoft", color: "#5e5e5e", accent: "#f25022" },
  { name: "TCS", color: "#0067b1", accent: "#e91e63" },
];

export default function RecruitmentSection({ onLead }) {
  return (
    <section id="recruitment" className="ph-section">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 760 }}>
          <div className="ph-eyebrow mb-1">{r.eyebrow}</div>
          <h2 className="ph-h2">{r.title}</h2>
          <p className="text-secondary">{r.intro}</p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button
              className="btn btn-ph px-3 py-2"
              onClick={() =>
                onLead(
                  r.ctaPrimary,
                  "Tell us about the role, skills, experience and timeline.",
                )
              }
            >
              {r.ctaPrimary}
            </button>
            <button
              className="btn bg-white border border-2 border-dark px-3 py-2 fw-semibold"
              onClick={() =>
                onLead(
                  r.ctaSecondary,
                  "Share your company details and hiring needs.",
                )
              }
            >
              {r.ctaSecondary}
            </button>
          </div>
        </div>

        <h3 className="h5 fw-bold mb-3">Our Recruitment Services</h3>
        <div className="row g-3 mb-5">
          {r.services.map((s) => (
            <div key={s.title} className="col-12 col-sm-6 col-lg-3">
              <div className="ph-card p-4 h-100" style={{ boxShadow: "none" }}>
                <div
                  className="ph-icon-tile mb-3"
                  style={{ background: s.bg, color: s.fg }}
                >
                  <i className={`bi bi-${s.icon}`} />
                </div>
                <h4 className="h6 fw-bold">{s.title}</h4>
                <p className="text-secondary small mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="ph-card p-4 h-100">
              <h3 className="h5 fw-bold mb-3">{r.processTitle}</h3>
              {r.steps.map((s, i) => (
                <div key={s.t} className="d-flex gap-3 mb-3">
                  <span className="ph-step">{i + 1}</span>
                  <div>
                    <div className="fw-bold small">{s.t}</div>
                    <div className="text-secondary small">{s.d}</div>
                  </div>
                </div>
              ))}
              <h3 className="h6 fw-bold mt-4 mb-2">{r.rolesTitle}</h3>
              <div className="d-flex flex-wrap gap-2 mb-2">
                {r.roles.map((x) => (
                  <span key={x} className="ph-chip">
                    {x}
                  </span>
                ))}
              </div>
              <small className="text-secondary">{r.rolesNote}</small>
            </div>
          </div>
        </div>

        <section className="ph-alumni mt-5" aria-labelledby="alumni-title">
          <h3 id="alumni-title" className="ph-h2 text-center mb-4">
            Our <span className="text-ph">Alumni</span> Work At
          </h3>
          <div className="ph-alumni-window">
            <div className="ph-alumni-track">
              {[0, 1].map((set) => (
                <div
                  key={set}
                  className="ph-alumni-group"
                  aria-hidden={set === 1 ? "true" : undefined}
                >
                  {alumniCompanies.map((company) => (
                    <div className="ph-alumni-card" key={`${set}-${company.name}`}>
                      <span style={{ color: company.color }}>
                        {company.name === "aws" ? (
                          <><b>aws</b><i style={{ backgroundColor: company.accent }} /></>
                        ) : company.name === "accenture" ? (
                          <><b>accenture</b><em style={{ color: company.accent }}>›</em></>
                        ) : (
                          <b>{company.name}</b>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
