import { reviews, site } from "@/data/site";
const Stars = () => <span className="ph-stars">{"★★★★★"}</span>;
export default function Testimonials() {
  return (
    <section id="reviews" className="ph-section ph-section-soft">
      <div className="container">
        <div className="text-center mb-4">
          <div className="ph-eyebrow mb-1">Real Career Transformations</div>
          <h2 className="ph-h2">Hear From Our Successfully Certified Alumni</h2>
          <p className="text-secondary small">Read how engineers and functional analysts scaled their compensation and technical confidence with PeakHire.</p>
        </div>
        <div className="ph-gbox d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div className="d-flex align-items-center gap-3">
            <span className="bg-white border rounded-3 p-2 fs-3"><i className="bi bi-google text-primary" /></span>
            <div>
              <div className="d-flex align-items-center gap-2"><small className="fw-bold text-secondary">GOOGLE RATING</small><span className="badge bg-success-subtle text-success">EXCELLENT</span></div>
              <div className="fs-4 fw-bold">{site.google.rating} <Stars /></div>
              <small className="text-secondary">Based on {site.google.count} verified Google Reviews from enrolled students &amp; working professionals</small>
            </div>
          </div>
          <a href="https://www.google.com/search?q=PeakHire+reviews" target="_blank" rel="noreferrer" className="btn btn-outline-secondary bg-white btn-sm fw-semibold"><i className="bi bi-google me-1" />Write a Review on Google</a>
        </div>
        <div className="row g-3">
          {reviews.map((r) => (
            <div key={r.name} className="col-12 col-md-6">
              <div className="ph-card p-3 h-100 d-flex flex-column" style={{ boxShadow: "none" }}>
                <div className="d-flex justify-content-between mb-2">
                  <div className="d-flex gap-2 align-items-center">
                    <span className="ph-avatar" style={{ background: r.c }}>{r.i}</span>
                    <div><div className="fw-bold small">{r.name} <i className="bi bi-patch-check-fill text-success" /></div><small className="text-secondary" style={{ fontSize: ".65rem" }}>{r.meta}</small></div>
                  </div>
                  <i className="bi bi-google text-primary" />
                </div>
                <div className="mb-2"><Stars /> <small className="text-secondary ms-1">{r.time}</small></div>
                <span className="ph-course-tag mb-2 align-self-start">Course: {r.course}</span>
                <p className="small text-secondary flex-grow-1">&ldquo;{r.text}&rdquo;</p>
                <div className="d-flex justify-content-between text-secondary pt-2 border-top" style={{ fontSize: ".68rem" }}><span><i className="bi bi-google me-1" />Posted on Google</span><span>{r.place}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
