import { site } from "@/data/site";
// Brand logo lives in /public/logo.jpeg (replace the file to change it).
export default function Logo({ size = 48 }) {
  return (
    <a href="/" className="d-flex align-items-center gap-2 text-decoration-none text-dark">
      <img src="/logo.jpeg" alt="Peak Hire Solutions logo" width={size} height={size} style={{ borderRadius: "50%", objectFit: "cover", background: "#fff" }} />
      <span className="d-none d-sm-block">
        <div className="ph-logo-text">PEAK<span>HIRE</span></div>
        <div className="ph-logo-sub">{site.tagline}</div>
      </span>
    </a>
  );
}
