import { recruitment as r } from "@/data/company";
export default function RecruitmentSection({ onLead }) {
  return (
    <section id="recruitment" className="ph-section">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: 760 }}>
          <div className="ph-eyebrow mb-1">{r.eyebrow}</div>
          <h2 className="ph-h2">{r.title}</h2>
          <p className="text-secondary">{r.intro}</p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button className="btn btn-ph px-3 py-2" onClick={() => onLead(r.ctaPrimary, "Tell us about the role, skills, experience and timeline.")}>{r.ctaPrimary}</button>
            <button className="btn btn-outline-secondary bg-white px-3 py-2 fw-semibold" onClick={() => onLead(r.ctaSecondary, "Share your company details and hiring needs.")}>{r.ctaSecondary}</button>
          </div>
        </div>

        <h3 className="h5 fw-bold mb-3">Our Recruitment Services</h3>
        <div className="row g-3 mb-5">
          {r.services.map((s) => (
            <div key={s.title} className="col-12 col-sm-6 col-lg-3">
              <div className="ph-card p-4 h-100" style={{ boxShadow: "none" }}>
                <div className="ph-icon-tile mb-3" style={{ background: s.bg, color: s.fg }}><i className={`bi bi-${s.icon}`} /></div>
                <h4 className="h6 fw-bold">{s.title}</h4>
                <p className="text-secondary small mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="ph-card p-4 h-100">
              <h3 className="h5 fw-bold mb-3">{r.processTitle}</h3>
              {r.steps.map((s, i) => (
                <div key={s.t} className="d-flex gap-3 mb-3">
                  <span className="ph-step">{i + 1}</span>
                  <div><div className="fw-bold small">{s.t}</div><div className="text-secondary small">{s.d}</div></div>
                </div>
              ))}
              <h3 className="h6 fw-bold mt-4 mb-2">{r.rolesTitle}</h3>
              <div className="d-flex flex-wrap gap-2 mb-2">
                {r.roles.map((x) => <span key={x} className="ph-chip">{x}</span>)}
              </div>
              <small className="text-secondary">{r.rolesNote}</small>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="ph-plan primary ph-card h-100" style={{ transform: "none" }}>
              <div className="ph-eyebrow text-info">Transparent terms</div>
              <h3 className="h4 fw-bold mt-1">{r.commercialTitle}</h3>
              <p className="small text-white-50 flex-grow-1">{r.commercial}</p>
              <button className="btn btn-ph w-100 py-2" onClick={() => onLead(r.ctaPrimary, "Tell us about the role, skills, experience and timeline.")}>{r.ctaPrimary} →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
