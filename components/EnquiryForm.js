"use client";
import { useId, useRef, useState } from "react";
import { submitEnquiry, validateEnquiry } from "@/lib/enquiry";

// The ONE enquiry form used everywhere (course pages and the popup).
// Fields: name, email, phone, enquiry. Saves to Google Sheets via Apps Script.
export default function EnquiryForm({ source = "Website", defaultMessage = "", placeholder = "Tell us how we can help", onClose, paymentUrl = "" }) {
  const uid = useId();
  const empty = { name: "", email: "", phone: "", enquiry: defaultMessage };
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");
  const busy = useRef(false); // blocks double submits while a request is running
  const trap = useRef(null); // honeypot: real users never fill this

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    busy.current = true;
    setStatus("loading");
    setServerError("");
    try {
      await submitEnquiry({
        name: values.name.trim(), email: values.email.trim(), phone: values.phone.trim(), enquiry: values.enquiry.trim(),
        source, website: trap.current?.value || "",
      });
      setStatus("success");
      setValues(empty);
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    } finally {
      busy.current = false;
    }
  };

  if (status === "success")
    return (
      <div className="text-center py-3" role="status">
        <i className="bi bi-check-circle-fill text-success display-5" />
        <p className="fw-bold mt-2 mb-1">Thank you! Your enquiry has been received.</p>
        <p className="text-secondary small mb-3">Our team will contact you shortly.</p>
        {paymentUrl && (
          <div className="border rounded-3 bg-light p-3 mb-3 text-start">
            <p className="fw-semibold mb-1">Ready to continue with enrollment?</p>
            <p className="text-secondary small mb-2">You can continue to our Razorpay payment page in a new tab.</p>
            <a className="btn btn-ph w-100" href={paymentUrl} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-shield-lock-fill me-2" />Continue to Razorpay
            </a>
          </div>
        )}
        {onClose ? <button className="btn btn-ph" onClick={onClose}>Close</button> : <button className="btn btn-ph" onClick={() => setStatus("idle")}>Send another enquiry</button>}
      </div>
    );

  const loading = status === "loading";
  const field = (k, label, props = {}) => (
    <div className={props.col || "col-12"}>
      <label className="form-label small fw-semibold" htmlFor={`${uid}-${k}`}>{label}</label>
      {k === "enquiry"
        ? <textarea id={`${uid}-${k}`} rows={4} className={`form-control ${errors[k] ? "is-invalid" : ""}`} value={values[k]} onChange={set(k)} placeholder={placeholder} disabled={loading} maxLength={1000} />
        : <input id={`${uid}-${k}`} className={`form-control ${errors[k] ? "is-invalid" : ""}`} value={values[k]} onChange={set(k)} disabled={loading} {...props.input} />}
      {errors[k] && <div className="invalid-feedback d-block">{errors[k]}</div>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row g-3">
        {field("name", "Name", { col: "col-md-6", input: { placeholder: "Your full name", autoComplete: "name", maxLength: 100 } })}
        {field("email", "Email", { col: "col-md-6", input: { type: "email", placeholder: "you@example.com", autoComplete: "email", maxLength: 150 } })}
        {field("phone", "Phone", { input: { type: "tel", placeholder: "+91 00000 00000", autoComplete: "tel", maxLength: 20 } })}
        {field("enquiry", "Enquiry")}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <input ref={trap} tabIndex={-1} autoComplete="off" name="website" />
        </div>
        {status === "error" && <div className="col-12"><div className="alert alert-danger py-2 small mb-0" role="alert">{serverError}</div></div>}
        <div className="col-12">
          <button className="btn btn-ph w-100 py-2" disabled={loading}>
            {loading ? <><span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />Sending...</> : "Send Enquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}
