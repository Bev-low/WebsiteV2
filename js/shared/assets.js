import { art } from './illustrations.js';
import { esc } from './dom.js';
// Accept ordinary local asset paths or HTTPS/HTTP links, never executable URLs.
function safeAsset(value) {
  const url = String(value || '').trim();
  if (!url || url.startsWith('//') || /[\u0000-\u001f]/.test(url)) return '';
  if (/^[a-z][a-z0-9+.-]*:/i.test(url) && !/^https?:\/\//i.test(url)) return '';
  return url;
}
function externalURL(value) {
  return /^https?:\/\//i.test(String(value || '')) ? safeAsset(value) : '';
}
function visual(image, alt, fallback = 'web') {
  const src = safeAsset(image);
  return art(fallback) + (src ? `<img class="custom-cover" src="${esc(src)}" alt="${esc(alt || '')}" loading="lazy" decoding="async">` : '');
}
function projectVisual(project) {
  return visual(project.image, project.imageAlt || project.name, project.art);
}
function mediaVisual(item) {
  return visual(item.thumbnail || (item.type === 'photo' ? item.src : ''), item.alt || item.title, item.art || 'web');
}
export { safeAsset, externalURL, visual, projectVisual, mediaVisual };
