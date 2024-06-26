import "#internal/nitro/virtual/polyfill";
import { nitroApp } from "../app";
import { isPublicAssetURL } from "#internal/nitro/virtual/public-assets";

// https://docs.netlify.com/edge-functions/api/
export default async function netlifyEdge(request: Request, _context) {
  const url = new URL(request.url);

  if (isPublicAssetURL(url.pathname)) {
    return;
  }

  if (!request.headers.has("x-forwarded-proto") && url.protocol === "https:") {
    request.headers.set("x-forwarded-proto", "https");
  }

  let body;
  if (request.body) {
    body = await request.arrayBuffer();
  }

  return nitroApp.localFetch(url.pathname + url.search, {
    host: url.hostname,
    protocol: url.protocol,
    headers: request.headers,
    method: request.method,
    redirect: request.redirect,
    body,
  });
}
