// Single source of truth for social-share (Open Graph / Twitter) images.
//
// Every page previously built this URL by hand against two different hosts
// (og-image.jenuel.dev and jenuel-dev-og-image.vercel.app), some without
// URL-encoding. Route everything through here so the service and encoding
// stay consistent.
const OG_IMAGE_BASE = "https://og-image.jenuel.dev/api/og/generate";

export function ogImageUrl(title: string, description = ""): string {
    // URLSearchParams encodes &, #, spaces, etc. so titles never break the URL.
    const params = new URLSearchParams({ title, description });
    return `${OG_IMAGE_BASE}?${params.toString()}`;
}
