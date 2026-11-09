import { site } from "@/data/site";
export default function HeroSection({ onEnroll }) {
  const s = site.stats;
  return (
    <>
      <span className="ph-pill mb-3">
        <i className="bi bi-trophy-fill text-warning" />
        Leading IT Training &amp; Placement Ecosystem
      </span>
      <h1 className="mb-3">
        Master In-Demand Enterprise Technologies &amp;{" "}
        <span className="text-ph">Elevate Your IT Career</span>
      </h1>
      <p className="text-secondary mb-4" style={{ maxWidth: 560 }}>
        <b className="text-dark">PeakHire</b> delivers instructor-led,
        project-driven IT certification training in{" "}
        <b className="text-dark">
          Workday HCM, ServiceNow, SAP S/4HANA, GenAI &amp; Data Analytics and
          QA Automation
        </b>{" "}
        with real-time server sandboxes, comprehensive mock evaluation, and
        dedicated 1-on-1 placement support.
      </p>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
        <button className="btn btn-ph px-3 py-2" onClick={onEnroll}>
          <i className="bi bi-lightning-charge-fill me-1" />
          Enroll in Next Live Batch
        </button>
        <a
          href="#courses"
          className="btn bg-white border border-2 border-dark px-3 py-2 fw-semibold"
        >
          <i className="bi bi-grid me-1" />
          Explore All 12+ Courses
        </a>
        <a
          href={site.phoneHref}
          className="btn btn-link text-decoration-none text-dark small"
        >
          <i className="bi bi-telephone-fill text-ph me-1" />
          Call: {site.phone}
        </a>
      </div>
      <div className="d-flex flex-wrap gap-4 pt-3 border-top">
        <div>
          <div className="ph-stars">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-half" />{" "}
            <b className="text-dark ms-1">{s.rating.split("/")[0]}/5</b>
          </div>
          <small className="text-secondary">{s.alumni} Certified Alumni</small>
        </div>
        <div>
          <div className="ph-stat-num">{s.lab}</div>
          <small className="text-secondary">Lab / Sandbox Access</small>
        </div>
        <div>
          <div className="ph-stat-num text-success">{s.placement}</div>
          <small className="text-secondary">Avg. Placement Window</small>
        </div>
      </div>
    </>
  );
}
