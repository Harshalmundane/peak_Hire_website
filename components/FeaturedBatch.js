"use client";
import { featuredBatch as b } from "@/data/site";

export default function FeaturedBatch({ onReserve }) {
  return (
    <div className="ph-batch">
      <div className="ph-batch-head">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="ph-tag-green">LIVE INSTRUCTOR-LED BATCH</span>
          <small style={{ fontSize: ".65rem", color: "#cbd5e1" }}>Seats: Only {b.seats} Left</small>
        </div>
        <h2 className="h5 fw-bold mb-2">{b.title}</h2>
        <p className="mb-0" style={{ fontSize: ".75rem", color: "#cbd5e1" }}>{b.desc}</p>
      </div>
      <div className="p-3">
        <div className="ph-count mb-3" aria-label="Course highlights">
          {b.highlights.map((item, i) => (
            <div key={item.label} className={i === b.highlights.length - 1 ? "last" : ""}><b>{item.value}</b><small>{item.label}</small></div>
          ))}
        </div>
        <ul className="list-unstyled small text-secondary mb-3">
          {b.perks.map((p) => <li key={p} className="mb-1"><i className="bi bi-check-circle-fill text-success me-2" />{p}</li>)}
        </ul>
        <div className="d-flex gap-2">
          <button className="btn btn-ph flex-grow-1 py-2 small" onClick={onReserve}>Reserve Your Seat Now</button>
          <a href="#courses" className="btn btn-ph-soft small py-2">Syllabus</a>
        </div>
      </div>
    </div>
  );
}
