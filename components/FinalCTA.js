import { site } from "@/data/site";
export default function FinalCTA({ onBook }) {
  return (
    <section id="contact" className="ph-cta">
      <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div style={{ maxWidth: 560 }}>
          <h2 className="fw-bold" style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", letterSpacing: "-.02em" }}>Ready to transition into high-paying enterprise IT roles?</h2>
          <p className="mb-0 text-white-50 final-cta-line">Speak directly with an expert admissions counselor today at {site.phone}.</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-info text-white fw-bold px-3" onClick={onBook}>Book Free Counseling Call</button>
          <a href={site.phoneHref} className="btn btn-outline-light fw-bold"><i className="bi bi-telephone-fill me-1" />{site.phone}</a>
        </div>
      </div>
    </section>
  );
}
