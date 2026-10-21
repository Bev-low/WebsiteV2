import { media, state } from '../state.js';
import { safeAsset } from '../shared/assets.js';
import { esc } from '../shared/dom.js';
import { showModal } from './modal.js';
function showMedia(id) {
  const item = media.find(entry => entry.id === id);
  if (!item) return;
  state.currentMediaId = id;
  const src = safeAsset(item.src);
  const photos = media.filter(entry => entry.type === 'photo');
  const photoIndex = photos.findIndex(entry => entry.id === id);
  const isPhoto = item.type === 'photo';
  const mediaElement = isPhoto ? src ? `<img class="lightbox-photo" src="${esc(src)}" alt="${esc(item.alt || item.title)}">` : '' : src ? `<video class="local-film" controls playsinline preload="metadata"${safeAsset(item.thumbnail) ? ` poster="${esc(item.thumbnail)}"` : ''} src="${esc(src)}">Your browser does not support this video format.</video>` : '';
  showModal(item.title, `<div class="media-stage">${mediaElement || '<p>No media file is available for this item.</p>'}<p class="media-error" hidden role="status">This file could not be loaded. Please try again later.</p>
    </div>
    <div class="media-title">
    <div>
    <div class="eyebrow">${esc(item.category || 'Personal')} · ${isPhoto ? 'Photography' : 'Video'}</div>
    <h2 id="dialog-title">${esc(item.title)}</h2>
    </div>${isPhoto && photos.length > 1 ? `<div class="photo-navigation"><button class="btn outline" data-media-step="-1" aria-label="Previous photo">←</button><span>${photoIndex + 1} / ${photos.length}</span><button class="btn outline" data-media-step="1" aria-label="Next photo">→</button>
    </div>` : ''}</div>
    <p class="lead">${esc(item.description || '')}</p>`, 'A moment / ' + item.title);
}
function nextPhoto(step) {
  const photos = media.filter(item => item.type === 'photo');
  const index = photos.findIndex(item => item.id === state.currentMediaId);
  if (index < 0 || photos.length < 2) return;
  showMedia(photos[(index + step + photos.length) % photos.length].id);
}
export { showMedia, nextPhoto };
