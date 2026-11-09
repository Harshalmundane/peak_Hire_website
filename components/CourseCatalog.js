"use client";
import { useState } from "react";
import { courses } from "@/data/courses";
import { filters } from "@/data/site";
import CourseCard from "./CourseCard";

export default function CourseCatalog({ onEnroll }) {
  const [active, setActive] = useState("All Tracks");
  const list = active === "All Tracks" ? courses : courses.filter((c) => c.track === active);
  return (
    <section id="courses" className="ph-section">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-3">
          <div style={{ maxWidth: 560 }}>
            <div className="ph-eyebrow mb-1">High-Impact Tech Tracks</div>
            <h2 className="ph-h2 mb-1">Explore Premier IT Certification Programs</h2>
            <p className="text-secondary small mb-0">Curated by veteran enterprise architects with live cloud tenants and real-world project portfolios.</p>
          </div>
          <a href="#courses" onClick={() => setActive("All Tracks")} className="small fw-semibold text-ph text-decoration-none mt-2">View All Programs (12+) →</a>
        </div>
        <div className="ph-chips mb-4" role="tablist">
          {filters.map((f) => (
            <button key={f} role="tab" aria-selected={active === f} className={`ph-chip ${active === f ? "active" : ""}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="row g-3 g-lg-4">
          {list.map((c) => (
            <div key={c.slug} className="col-12 col-md-6 col-lg-4">
              <CourseCard course={c} onEnroll={() => onEnroll(c)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
