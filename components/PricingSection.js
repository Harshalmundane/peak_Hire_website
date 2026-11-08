import { plans } from "@/data/site";
export default function PricingSection({ onSelect }) {
  const btn = { light: "btn-ph-soft", primary: "btn-ph", dark: "btn-ph-dark" };
  const icons = { recorded: "bi-play-btn-fill", live: "bi-people-fill", placement: "bi-briefcase-fill" };
  return (
    <section id="pricing" className="ph-section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 560 }}>
          <div className="ph-eyebrow mb-1">Training Packages</div>
          <h2 className="ph-h2">Choose Your Learning Path</h2>
          <p className="text-secondary small">Compare the learning formats and support included in each package. Contact us for current fees and batch details.</p>
        </div>
        <div className="row g-4 align-items-stretch justify-content-center">
          {plans.map((p) => (
            <div key={p.key} className="col-12 col-md-6 col-lg-4">
              <article className={`ph-card ph-plan ${p.variant === "primary" ? "primary" : ""} ${p.popular ? "is-popular" : ""}`}>
                <div className="ph-plan-top">
                  <span className="ph-plan-icon"><i className={`bi ${icons[p.key] || "bi-mortarboard-fill"}`} /></span>
                  {p.popular && <span className="ph-popular">Most popular</span>}
                </div>
                <div className="ph-eyebrow">{p.eyebrow}</div>
                <h3 className="ph-plan-title">{p.name}</h3>
                <p className="ph-plan-summary">{p.summary}</p>
                <ul className="ph-plan-features">
                  {p.features.map((f) => (
                    <li key={f.t} className={f.on ? "" : "off"}>
                      <i className={`bi ${f.on ? "bi-check-lg text-success" : "bi-x-lg"}`} />{f.t}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${btn[p.variant]} w-100 py-2 ph-plan-cta`} onClick={() => onSelect(p)}>{p.cta}{p.popular ? " →" : ""}</button>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
