import { externalURL, safeAsset, mediaVisual } from '../shared/assets.js';
import { esc } from '../shared/dom.js';
import { media, state } from '../state.js';
function mediaCard(item) {
  const photo = item.type === 'photo';
  const url = externalURL(item.url);
  const external = !photo && !safeAsset(item.src) && url;
  const opening = external ? `<a class="film-card" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="Watch ${esc(item.title)} (opens in a new tab)">` : `<button class="film-card" data-media="${esc(item.id)}" aria-label="${photo ? 'View photo' : 'Play video'}: ${esc(item.title)}">`;
  return `${opening}<div class="thumb">${mediaVisual(item)}${photo ? '' : '<span class="play-disc"></span>'}<span class="type">${photo ? 'PHOTO' : external ? 'WATCH VIDEO ↗' : 'PLAY VIDEO'}</span>
    </div>
    <h3>${esc(item.title)}</h3>
    <p>${esc(item.description || item.category || '')}</p>${external ? '</a>' : '</button>'}`;
}
function filteredMedia() {
  return media.filter(item => state.mediaFilter === 'All' || state.mediaFilter === 'Videos' && item.type === 'video' || state.mediaFilter === 'Photos' && item.type === 'photo' || state.mediaFilter === 'Project demos' && item.category === 'Project demo');
}
function mediaGallery() {
  const selected = filteredMedia();
  const emptyText = state.mediaFilter === 'Photos' ? 'No photos shared here yet.' : 'More moments are on their way.';
  return `<div class="section-head">
    <div>
    <h2>Things worth keeping.</h2>
    <p>Personal films, photographs, and projects in motion.</p>
    </div>
    </div>
    <div class="filters" aria-label="Media filters">${['All', 'Videos', 'Photos', 'Project demos'].map(name => `<button class="chip ${state.mediaFilter === name ? 'active' : ''}" data-media-filter="${name}" aria-pressed="${state.mediaFilter === name}">${name}</button>`).join('')}</div>
    <div class="result-line" role="status">${selected.length} ${selected.length === 1 ? 'moment' : 'moments'}</div>
    <div class="project-grid media-grid">${selected.length ? selected.map(mediaCard).join('') : `<div class="empty">
    <h3>${emptyText}</h3><button class="btn" data-media-filter="All">Explore all moments</button>
    </div>`}</div>`;
}
export { mediaCard, filteredMedia, mediaGallery };
