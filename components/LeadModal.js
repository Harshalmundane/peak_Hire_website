"use client";
import Modal from "./Modal";
import EnquiryForm from "./EnquiryForm";

// Popup used by Demo / Enroll / Pricing / Hiring buttons. Same 4-field form as everywhere else.
export default function LeadModal({ lead, onClose }) {
  const paymentUrl = lead && /enroll/i.test(lead.title)
    ? "https://razorpay.me/@peakhiresolutionsprivatelimit"
    : "";
  return (
    <Modal show={!!lead} title={lead?.title} onClose={onClose}>
      {lead && (
        <>
          <p className="text-secondary small">{lead.subtitle}</p>
          <EnquiryForm key={lead.title} source={lead.title} onClose={onClose} paymentUrl={paymentUrl} placeholder="Tell us what you need (course, demo time, hiring requirement...)" />
        </>
      )}
    </Modal>
  );
}
