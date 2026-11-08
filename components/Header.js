"use client";
import { useState } from "react";
import { site, navLinks } from "@/data/site";
import Logo from "./Logo";

export default function Header({ onDemo }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="ph-topbar py-1">
        <div className="container d-flex justify-content-between align-items-center">
          <span><i className="bi bi-mortarboard-fill me-1" />{site.topbarText}</span>
          <span className="d-none d-sm-inline">
            <a href={site.phoneHref} className="me-3"><i className="bi bi-telephone-fill me-1" />{site.phone}</a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer"><i className="bi bi-whatsapp me-1" />WhatsApp Support</a>
          </span>
        </div>
      </div>
      <header className="ph-header sticky-top">
        <div className="container d-flex align-items-center justify-content-between py-2">
          <Logo />
          <nav className="d-none d-lg-flex gap-4">
            {navLinks.map((l) => <a key={l.href} href={l.href} className="text-decoration-none text-dark fw-semibold small">{l.label}</a>)}
          </nav>
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-ph btn-sm px-3" onClick={onDemo}><i className="bi bi-calendar-check me-1" />Book Free Live Demo</button>
            <button className="btn border-0 d-lg-none fs-3 p-0 ms-1" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><i className="bi bi-list" /></button>
          </div>
        </div>
      </header>
      {open && <div className="ph-backdrop" onClick={() => setOpen(false)} />}
      <aside className={`ph-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Logo /><button className="btn border-0 fs-4" aria-label="Close menu" onClick={() => setOpen(false)}><i className="bi bi-x-lg" /></button>
        </div>
        {navLinks.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href={site.phoneHref}><i className="bi bi-telephone-fill me-2" />{site.phone}</a>
      </aside>
    </>
  );
}
