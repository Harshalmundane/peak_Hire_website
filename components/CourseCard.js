import Link from "next/link";
export default function CourseCard({ course: c, onEnroll }) {
  return (
    <div className="ph-card h-100 d-flex flex-column">
      <div className="ph-course-img">
        <img src={c.img} alt={c.title} loading="lazy" />
        <span className="ph-badge" style={{ background: c.badgeColor }}>{c.badge}</span>
        <span className="ph-weeks"><i className="bi bi-clock-fill me-1" />{c.weeks}</span>
      </div>
      <div className="p-3 d-flex flex-column flex-grow-1">
        <div className="d-flex justify-content-between small mb-1">
          <span className="fw-bold" style={{ color: c.ecoColor, fontSize: ".7rem" }}>{c.eco}</span>
          <span style={{ fontSize: ".7rem", color: "#d97706" }}><i className="bi bi-star-fill" /> {c.rating} <span className="text-secondary">({c.enrolled} enrolled)</span></span>
        </div>
        <h3 className="ph-course-title">{c.title}</h3>
        <p className="text-secondary small flex-grow-1">{c.desc}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div><del className="text-secondary small me-2">{c.old}</del><span className="fs-5 fw-bold">{c.price}</span></div>
          <span className="ph-off">{c.off}</span>
        </div>
        <div className="row g-2">
          <div className="col-6"><Link href={`/training/${c.slug}`} className="btn btn-ph-soft w-100 small">View Syllabus</Link></div>
          <div className="col-6"><button className="btn btn-ph w-100 small" onClick={onEnroll}>Enroll Now</button></div>
        </div>
      </div>
    </div>
  );
}
