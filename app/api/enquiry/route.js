// Same-origin bridge: browsers cannot read Apps Script's cross-origin POST response.
export const runtime = "nodejs";

export async function POST(request) {
  const url = process.env.NEXT_PUBLIC_ENQUIRY_API_URL;
  if (!url) {
    return Response.json({ ok: false, error: "The enquiry service is not configured." }, { status: 503 });
  }

  let target;
  try {
    target = new URL(url);
  } catch {
    return Response.json({ ok: false, error: "The enquiry service URL is invalid." }, { status: 500 });
  }
  if (target.protocol !== "https:" || target.hostname !== "script.google.com" || !target.pathname.endsWith("/exec")) {
    return Response.json({ ok: false, error: "The enquiry service URL is invalid." }, { status: 500 });
  }

  try {
    const payload = await request.json();
    const upstream = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(20000),
    });
    const body = await upstream.text();
    let result;
    try {
      result = JSON.parse(body);
    } catch {
      result = null;
    }

    if (!upstream.ok || !result || result.ok !== true) {
      const authError = upstream.status === 401 || upstream.status === 403;
      return Response.json({
        ok: false,
        error: authError
          ? "The enquiry service rejected the request. Check that the Apps Script deployment is accessible to anyone and that this is its current /exec URL."
          : result?.error || "The enquiry could not be saved. Please try again.",
      }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    const timeout = error?.name === "TimeoutError" || error?.name === "AbortError";
    return Response.json({
      ok: false,
      error: timeout ? "The request took too long. Please try again." : "Could not reach the enquiry service. Please try again.",
    }, { status: 502 });
  }
}
