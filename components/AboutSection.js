import { about as a } from "@/data/company";
export default function AboutSection({ onTalk }) {
  return (
    <section id="about" className="ph-section ph-section-soft">
      <div className="container">
        <div className="row g-4 align-items-center mb-5">
          <div className="col-lg-7">
            <div className="ph-eyebrow mb-1">{a.eyebrow}</div>
            <h2 className="ph-h2">{a.title}</h2>
            <p className="text-secondary">{a.intro}</p>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-ph px-3 py-2" onClick={onTalk}>Talk to Our Team</button>
              <a href="#courses" className="btn btn-outline-secondary bg-white px-3 py-2 fw-semibold">Explore Training</a>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <img src="/logo.jpeg" alt="Peak Hire Solutions" className="img-fluid" style={{ maxWidth: 280, borderRadius: "50%", boxShadow: "0 18px 40px rgba(10,40,90,.15)" }} />
          </div>
        </div>

        <div className="ph-card p-4 mb-4" style={{ boxShadow: "none" }}>
          <h3 className="h5 fw-bold">{a.purposeTitle}</h3>
          <p className="text-secondary mb-0">{a.purpose}</p>
        </div>

        <h3 className="h5 fw-bold mb-3">{a.whatTitle}</h3>
        <div className="row g-3 mb-4">
          {a.what.map((w) => (
            <div key={w.title} className="col-12 col-md-6">
              <div className="ph-card p-4 h-100" style={{ boxShadow: "none" }}>
                <div className="ph-icon-tile mb-3" style={{ background: w.bg, color: w.fg }}><i className={`bi bi-${w.icon}`} /></div>
                <h4 className="h6 fw-bold">{w.title}</h4>
                <p className="text-secondary small mb-0">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-3 mb-4">
          {a.approach.map((x) => (
            <div key={x.title} className="col-12 col-md-6">
              <div className="ph-card p-4 h-100" style={{ boxShadow: "none" }}>
                <h4 className="h6 fw-bold">{x.title}</h4>
                <p className="text-secondary small mb-0">{x.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ph-plan primary ph-card" style={{ transform: "none" }}>
          <div className="d-flex gap-3 align-items-start">
            <i className="bi bi-shield-check fs-2 text-info" />
            <div><h3 className="h5 fw-bold">{a.commitTitle}</h3><p className="small text-white-50 mb-0">{a.commit}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
