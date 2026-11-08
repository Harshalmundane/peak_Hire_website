// Shared validation + submit helper for every enquiry form on the site.
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEnquiry({ name, email, phone, enquiry }) {
  const e = {};
  if (name.trim().length < 2) e.name = "Please enter your name (at least 2 characters).";
  if (!EMAIL_RE.test(email.trim())) e.email = "Please enter a valid email address.";
  const digits = phone.replace(/\D/g, "");
  if (!/^[+\d\s()-]+$/.test(phone.trim()) || digits.length < 10 || digits.length > 15) e.phone = "Please enter a valid phone number (10 to 15 digits).";
  if (enquiry.trim().length < 5) e.enquiry = "Please tell us a little about your enquiry.";
  return e;
}

// Send through our same-origin route so the browser can read the Apps Script result.
export async function submitEnquiry(payload) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) {
      throw new Error(result.error || "We couldn't submit your enquiry. Please try again.");
    }
    return result;
  } catch (err) {
    if (err instanceof Error && err.name !== "AbortError" && err.message !== "Failed to fetch") throw err;
    if (err.name === "AbortError") throw new Error("The request took too long. Please check your connection and try again.");
    throw new Error("Network error. Please check your connection and try again.");
  } finally {
    clearTimeout(timer);
  }
}
