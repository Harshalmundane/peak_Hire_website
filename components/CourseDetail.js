"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import LeadModal from "./LeadModal";
import EnquiryForm from "./EnquiryForm";
import { site } from "@/data/site";

export default function CourseDetail({ course: c }) {
  const [lead, setLead] = useState(null);
  const open = (title, subtitle) => setLead({ title, subtitle });
  // Add more files here (or set c.resources in data) and they appear as extra rows.
  const resources = c.resources || [{ name: `${c.track} Course Syllabus`, file: `/syllabus/${c.slug}.pdf`, meta: "PDF · Course syllabus" }];
  const [primary, secondary] = c.page.ctas;
  const wa = `${site.whatsappHref}?text=${encodeURIComponent(`Hi, I would like details about: ${c.title}`)}`;
  const secondaryIsWa = /whatsapp/i.test(secondary);

  return (
    <>
      <Header onDemo={() => open("Book a free live demo", "Pick a time and a counselor will confirm on WhatsApp.")} />
      <main>
        <section className="ph-hero">
          <div className="container">
            <nav className="small mb-3" aria-label="breadcrumb">
              <Link href="/" className="text-decoration-none text-secondary">Home</Link> <span className="text-secondary">/</span>{" "}
              <Link href="/#courses" className="text-decoration-none text-secondary">Courses</Link> <span className="text-secondary">/</span>{" "}
              <span className="text-ph fw-semibold">{c.track}</span>
            </nav>
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <span className="ph-pill mb-3"><i className="bi bi-mortarboard-fill" />{c.eco}</span>
                <h1 className="mb-3" style={{ fontWeight: 800, letterSpacing: "-.03em", fontSize: "clamp(1.9rem,5vw,3rem)", lineHeight: 1.1 }}>{c.title}</h1>
                <p className="text-secondary mb-4" style={{ maxWidth: 720 }}>{c.page.intro}</p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="#syllabus" className="btn btn-ph px-3 py-2"><i className="bi bi-file-earmark-pdf-fill me-1" />{primary}</a>
                  {secondaryIsWa
                    ? <a href={wa} target="_blank" rel="noreferrer" className="btn btn-outline-secondary bg-white px-3 py-2 fw-semibold"><i className="bi bi-whatsapp me-1" />{secondary}</a>
                    : <a href="#enquiry" className="btn btn-outline-secondary bg-white px-3 py-2 fw-semibold">{secondary}</a>}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ph-card overflow-hidden">
                  <div className="ph-course-img" style={{ height: 160, borderRadius: 0 }}>
                    <img src={c.img} alt={c.title} />
                    <span className="ph-badge" style={{ background: c.badgeColor }}>{c.badge}</span>
                    <span className="ph-weeks"><i className="bi bi-clock-fill me-1" />{c.weeks}</span>
                  </div>
                  <div className="p-3">
                    <button className="btn btn-ph w-100 mb-2" onClick={() => open(`Enroll: ${c.title}`, c.weeks)}>Enroll Now</button>
                    <a href="#syllabus" className="btn btn-ph-soft w-100">View Syllabus PDF</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section">
          <div className="container">
            <div className="row g-3">
              {c.page.sections.map((s) => (
                <div key={s.title} className="col-12 col-md-6">
                  <div className="ph-card p-4 h-100" style={{ boxShadow: "none" }}>
                    <div className="ph-icon-tile mb-3" style={{ background: "#e0f2fe", color: "#0284c7" }}><i className={`bi bi-${s.icon}`} /></div>
                    <h2 className="h5 fw-bold">{s.title}</h2>
                    <p className="text-secondary small mb-0">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="syllabus" className="ph-section ph-section-soft">
          <div className="container">
            <div className="ph-card p-3 p-md-4" style={{ boxShadow: "none" }}>
              <h2 className="h4 fw-bold pb-3 mb-3 border-bottom">Download Resources</h2>
              <div className="row g-3">
                {resources.map((r) => (
                  <div key={r.file} className="col-12 col-lg-6">
                    <div className="ph-file">
                      <span className="ph-file-icon"><i className="bi bi-file-earmark" /><em>PDF</em></span>
                      <div className="flex-grow-1 min-w-0">
                        <a href={r.file} target="_blank" rel="noreferrer" className="ph-file-name">{r.name}</a>
                        <div className="ph-file-meta">{r.meta}</div>
                      </div>
                      <a href={r.file} target="_blank" rel="noreferrer" className="ph-file-btn" aria-label={`View ${r.name}`} title="View"><i className="bi bi-eye" /></a>
                      <a href={r.file} download className="ph-file-btn" aria-label={`Download ${r.name}`} title="Download"><i className="bi bi-download" /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="enquiry" className="ph-section">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="text-center mb-4">
              <div className="ph-eyebrow mb-1">Enquiry</div>
              <h2 className="ph-h2">Have a question about this course?</h2>
              <p className="text-secondary small">Share your details and our team will confirm the syllabus, batch schedule and next steps.</p>
            </div>
            <div className="ph-card p-4"><EnquiryForm source={`Course page: ${c.title}`} defaultMessage={`I would like to know more about ${c.title}.`} /></div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadModal lead={lead} onClose={() => setLead(null)} />
    </>
  );
}
