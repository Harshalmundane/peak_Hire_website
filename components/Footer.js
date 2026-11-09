import { site, footer } from "@/data/site";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="ph-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="mb-3"><Logo /></div>
            <p>PeakHire is a premier enterprise IT training, cloud certification, and tech talent incubation institute. We equip aspiring consultants and engineers with practical cloud tenant skills, real-time implementation experience, and 360° career placement assistance.</p>
            <span className="text-success small"><i className="bi bi-shield-check me-1" />Industry-Standard Practical IT Curriculum</span>
          </div>
          <div className="col-6 col-lg-2"><h6>Quick Links</h6>{footer.links.map((l) => <a key={l.l} href={l.h}>{l.l}</a>)}</div>
          <div className="col-6 col-lg-3"><h6>Popular Courses</h6>{footer.courses.map((c) => <a key={c.h} href={c.h}>{c.l}</a>)}</div>
          <div className="col-12 col-lg-3">
            <h6>Campus Headquarters</h6>
            <p className="mb-2"><i className="bi bi-geo-alt-fill text-info me-1" /><b className="text-white">Address:</b><br />{site.address}</p>
            <p className="mb-0"><b className="text-white">Direct Helpline:</b><br /><a href={site.phoneHref} className="d-inline">{site.phone}</a></p>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <small>© {new Date().getFullYear()} PeakHire. All rights reserved. Sample content for design implementation.</small>
      </div>
    </footer>
  );
}
