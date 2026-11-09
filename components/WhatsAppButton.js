import { site } from "@/data/site";
export default function WhatsAppButton() {
  return <a className="ph-wa" href={site.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><i className="bi bi-whatsapp" /></a>;
}
