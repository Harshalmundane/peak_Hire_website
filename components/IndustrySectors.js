import { sectors } from "@/data/site";
export default function IndustrySectors() {
  return (
    <section className="py-4 border-top border-bottom bg-white">
      <div className="container">
        <p className="text-center text-secondary fw-bold mb-3" style={{ fontSize: ".65rem", letterSpacing: ".1em" }}>OUR 18,500+ ALUMNI EXCEL ACROSS HIGH-GROWTH TECHNOLOGY SECTORS</p>
        <div className="row g-2 g-md-3">
          {sectors.map((s) => (
            <div key={s.title} className="col-4 col-lg-2">
              <div className="ph-sector"><i className={`bi bi-${s.icon}`} style={{ color: s.color }} /><b>{s.title}</b><small>{s.sub}</small></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
