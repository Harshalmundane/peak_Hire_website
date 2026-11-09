import { pillars } from "@/data/site";
export default function CareerEcosystem() {
  return (
    <section id="career-builder" className="ph-section ph-section-soft">
      <div className="container">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: 620 }}>
          <div className="ph-eyebrow mb-1">Career Builder</div>
          <h2 className="ph-h2">Beyond Courses: Our Complete 6-Pillar Career Ecosystem</h2>
          <p className="text-secondary small">We don&apos;t just complete tutorials; we mentor you until you successfully clear enterprise technical rounds and land offers.</p>
        </div>
        <div className="row g-3">
          {pillars.map((p) => (
            <div key={p.title} className="col-12 col-md-6 col-lg-4">
              <div className="ph-card p-4 h-100" style={{ boxShadow: "none" }}>
                <div className="ph-icon-tile mb-3" style={{ background: p.bg, color: p.fg }}><i className={`bi bi-${p.icon}`} /></div>
                <h3 className="h6 fw-bold">{p.title}</h3>
                <p className="text-secondary small mb-0">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
