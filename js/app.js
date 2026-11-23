/* Display and interaction logic. Start in content.js for everyday edits. */
const $=s=>document.querySelector(s);
const icons={home:'M3 10l9-7 9 7v10H7V10 M10 20v-6h4v6',projects:'M3 5h7l2 2h9v13H3z',experience:'M8 6V3h8v3 M3 7h18v13H3z M3 12l9 3 9-3 M12 12v5',films:'M4 4h16v16H4z M4 8h16 M8 4l4 4 M14 4l4 4 M10 12l5 3-5 3z',about:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2',search:'m21 21-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',moon:'M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5',sun:'M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5l1.5 1.5 M5 19l1.5-1.5 M17.5 6.5l1.5-1.5 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',close:'m6 6 12 12 M6 18 18 6',arrow:'M5 12h14 M14 7l5 5-5 5',pin:'M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 0 1 14 0 M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0',chip:'M6 6h12v12H6z M9 9h6v6H9z M9 2v4 M15 2v4 M9 18v4 M15 18v4 M2 9h4 M2 15h4 M18 9h4 M18 15h4',github:'M9 19c-4 1-4-2-6-2 M15 22v-4c0-1-.3-1.7-.8-2.2 3-.3 5.8-1.5 5.8-6.5 0-1.5-.5-2.6-1.4-3.6.1-.4.6-1.8-.1-3.6 0 0-1.1-.3-3.7 1.4a13 13 0 0 0-6.6 0C5.6 1.8 4.5 2.1 4.5 2.1c-.7 1.8-.2 3.2-.1 3.6A5.2 5.2 0 0 0 3 9.3c0 5 2.8 6.2 5.8 6.5-.4.4-.8 1.1-.8 2.2v4'};
function icon(name,size=20){return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${icons[name]||icons.projects}"/></svg>`}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
let mountainSequence=0;
function mountains(){const mid=++mountainSequence;return `<svg viewBox="0 0 1200 290" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="sky-${mid}" x2="0" y2="1"><stop stop-color="#e9d9b9"/><stop offset="1" stop-color="#d3d9c1"/></linearGradient><linearGradient id="ridge-${mid}" x2="0" y2="1"><stop stop-color="#7f9986"/><stop offset="1" stop-color="#506f61"/></linearGradient></defs><rect width="1200" height="290" fill="url(#sky-${mid})"/><circle cx="957" cy="59" r="31" fill="#f7e7bd"/><path d="M320 205 437 115 508 147 591 63 673 125 729 85 807 154 896 53 970 124 1037 72 1200 176V290H320" fill="#a8b5a2"/><path d="m591 63-30 54 30-13 30 29-14-47z M896 53l-43 74 48-26 38 22z M1037 72l-28 43 28-13 18 10z" fill="#e4e6d1"/><path d="M0 269 117 216 216 243 345 159 443 211 548 146 657 215 754 138 864 211 1000 152 1136 221 1200 190V290H0" fill="url(#ridge-${mid})"/><path d="M0 285 166 255 282 276 421 219 533 259 682 207 774 238 897 184 1018 246 1150 187 1200 218V290H0" fill="#34584c"/><path d="M561 290c70-21 105-42 159-40s107 11 166-14 120-10 152-19" stroke="#bfc7a5" stroke-width="1" fill="none" opacity=".4"/><path d="M0 290 127 279 263 290M992 290l85-57 55 8 68-39V290" fill="#25483e"/><g fill="#203e35"><path d="m1045 232-8 16h6v20h4v-20h6z"/><circle cx="1045" cy="228" r="3"/></g><path d="m1052 248 5 22" stroke="#203e35" stroke-width="1.5"/><g fill="none" stroke="#708879" opacity=".45"><path d="m753 137 27 35-16 24 M895 184l-30 38 M547 147l32 39-13 23"/></g></svg>`}
function art(kind){let bg='#d9dfcc',body='';const label=(t,x=28,y=34,color='#485c4a',size=10)=>`<text x="${x}" y="${y}" fill="${color}" font-family="Arial,sans-serif" font-size="${size}" letter-spacing="2">${t}</text>`;
if(kind==='chess'){bg='#bfcbb4';let squares='';for(let r=0;r<8;r++)for(let c=0;c<8;c++)squares+=`<rect x="${128+c*18}" y="${43+r*18}" width="18" height="18" fill="${(r+c)%2?'#718364':'#e6e7d4'}"/>`;body=`<circle cx="363" cy="9" r="154" fill="#aebda4"/>${label('MAKE YOUR MOVE.')}<g transform="rotate(-9 200 115)"><rect x="119" y="34" width="162" height="162" rx="5" fill="#3d5342"/>${squares}<g fill="#263e30" font-family="Georgia,serif" font-size="27"><text x="146" y="67">♜</text><text x="235" y="86">♞</text><text x="198" y="122">♚</text></g><g fill="#fffcef" font-family="Georgia,serif" font-size="28"><text x="163" y="176">♘</text><text x="218" y="158">♙</text><text x="183" y="193">♔</text></g></g><rect x="310" y="111" width="66" height="35" rx="5" fill="#3c5342"/><text x="321" y="134" fill="#e6ecd7" font-size="16" font-family="monospace">02:48</text><path d="M280 160h27v-30h3" fill="none" stroke="#637956" stroke-width="2"/>${label('TWO BOARDS. ONE GAME.',25,202,'#475d46',8)}`}
if(kind==='robot'||kind==='obstacle'){bg=kind==='robot'?'#e9d6be':'#dbc8b3';body=`<path d="M0 180 200 80 400 180M0 220 240 100M110 225 315 122M190 225 380 140" fill="none" stroke="#cab89f"/><circle cx="221" cy="116" r="75" fill="none" stroke="#b6a58b" stroke-dasharray="3 6"/><circle cx="221" cy="116" r="101" fill="none" stroke="#c9b798"/>${label(kind==='robot'?'MEET ALEX.':'SMALL ROBOT. BIG IDEAS.',25,32,'#67573e')}<path d="m129 131 91-47 78 41-91 49z" fill="#53665c"/><path d="m129 131 78 43v24l-78-43z" fill="#394d45"/><path d="m207 174 91-49v24l-91 49z" fill="#71816b"/><g fill="#333d36"><ellipse cx="160" cy="166" rx="16" ry="23" transform="rotate(-24 160 166)"/><ellipse cx="266" cy="164" rx="16" ry="23" transform="rotate(23 266 164)"/></g><path d="m166 113 49-25 44 23-49 25z" fill="#b5c09e"/><rect x="203" y="62" width="35" height="43" rx="5" fill="#eee9d6"/><ellipse cx="220" cy="62" rx="18" ry="8" fill="#51685b"/><rect x="192" y="117" width="33" height="15" rx="3" fill="#db9a6e"/><circle cx="201" cy="124" r="4" fill="#354b3e"/><circle cx="216" cy="124" r="4" fill="#354b3e"/><path d="M219 46V35M204 48l-7-10M234 48l7-10" stroke="#9c6741" stroke-width="2"/>${label('SENSING · THINKING · MOVING',25,204,'#79674e',8)}`}
if(kind==='terminal'){bg='#c8d4d3';body=`${label('ONE REP AT A TIME.',25,30,'#47646a')}<rect x="43" y="48" width="314" height="155" rx="9" fill="#273d3d"/><path d="M43 76h314" stroke="#49605b"/><g fill="#bdc9b4"><circle cx="59" cy="61" r="3"/><circle cx="71" cy="61" r="3"/><circle cx="83" cy="61" r="3"/></g><text x="159" y="65" fill="#bacdc3" font-size="9" font-family="monospace">buffbuddy — cli</text><g font-family="monospace" font-size="11"><text x="62" y="102" fill="#e6ead8">&gt; water add 500</text><text x="62" y="125" fill="#a2c7ac">✓ Hydration logged. Keep going.</text><text x="62" y="153" fill="#c3d5c5">TODAY’S PROGRESS</text><text x="62" y="182" fill="#91bba1">████████░░░░</text><text x="221" y="180" fill="#c7d4c4">1,500 / 2,000 ml</text></g>`}
if(kind==='cooling'){bg='#c5d9d6';body=`${label('A DIFFERENT DIRECTION.',25,31,'#395e5b')}<g stroke="#436967" stroke-width="1.5" fill="none"><path d="m97 71 115-28 98 43v107l-115 25-98-43z"/><path d="m97 71 98 43 115-28M195 114v104"/></g><path d="m105 111 91 41 106-27v64l-107 22-90-39z" fill="#6dada6" opacity=".55"/><g stroke="#4d716a" stroke-width="1.5" fill="#e2e9d8"><path d="m125 73 58 26v83l-58-26z"/><path d="m158 65 58 26v83l-58-26z"/><path d="m191 57 58 26v83l-58-26z"/></g><path d="M334 150v-57m-5 8 5-8 5 8" stroke="#698b7f" fill="none"/><text x="345" y="145" fill="#4d716a" font-size="8" transform="rotate(-90 345 145)" letter-spacing="2">VERTICAL</text>${label('IMMERSION COOLING / CONCEPT',25,208,'#436b66',8)}`}
if(kind==='mart'||kind==='web'){bg=kind==='mart'?'#dfcbbf':'#dcdcc8';body=`${label(kind==='mart'?'A LITTLE MORE ACCESSIBLE.':'A CORNER OF THE INTERNET.',25,30,'#6e5848')}<rect x="53" y="49" width="294" height="156" rx="7" fill="#faf8f0"/><path d="M53 69h294" stroke="#dad7c7"/><circle cx="67" cy="59" r="3" fill="#c4866c"/><circle cx="78" cy="59" r="3" fill="#b6b995"/><rect x="68" y="83" width="262" height="39" rx="4" fill="${kind==='mart'?'#7c8567':'#abb99a'}"/><text x="80" y="107" fill="#fffbea" font-family="Georgia,serif" font-size="15">${kind==='mart'?'Good things, within reach.':'Build things. Find perspective.'}</text>${[0,1,2].map((n)=>`<rect x="${69+n*89}" y="135" width="80" height="42" rx="3" fill="${['#dfc19c','#b7c1a1','#c4d0c4'][n]}"/><path d="M${69+n*89} 188h63M${69+n*89} 195h39" stroke="#aaa895" stroke-width="3"/>`).join('')}`}
if(kind==='rtos'){bg='#bfcbd9';body=`${label('EVERY MILLISECOND MATTERS.',25,31,'#3c536b')}<rect x="74" y="52" width="252" height="139" rx="7" fill="#384c63"/><text x="92" y="78" font-size="10" font-family="monospace" fill="#c8d6e7">CHILD #5 / TASK SCHEDULER</text><g stroke="#596d7d">${[100,125,150,175].map(y=>`<path d="M93 ${y}h215"/>`).join('')}</g><g fill="none" stroke-width="3"><path d="M94 111h13V95h35v16h39V95h31v16h44V95h40" stroke="#bbcaa7"/><path d="M94 136h35v-16h37v16h39v-16h35v16h57" stroke="#cfa585"/><path d="M94 161h58v-16h36v16h65v-16h44" stroke="#a6c1cf"/></g>${label('MOTION / LIGHT / SOUND',25,211,'#3c536b',8)}`}
if(kind==='maze'){bg='#d1d2b8';body=`${label('FIND A WAY THROUGH.',25,31,'#535e40')}<g stroke="#6d7a55" stroke-width="10" fill="none" stroke-linejoin="round"><path d="M76 195V55h247v140H112V89h67v70h73V90h34v68M216 55v69M112 159h35M179 195v-36M323 125h-37"/></g><path d="M92 199V72h105v71h73V73h36v105H162V108h-34v30" fill="none" stroke="#eadfbc" stroke-width="3" stroke-dasharray="5 5"/><rect x="115" y="125" width="26" height="21" rx="5" fill="#a9684c"/><circle cx="121" cy="130" r="3" fill="#eee4c9"/><circle cx="135" cy="130" r="3" fill="#eee4c9"/>`}
if(kind==='processor'){bg='#d6dfd5';body=`${label('RISC-V / SOFT CORE',25,30,'#3b5548')}<g fill="none" stroke="#78917d" stroke-width="2"><path d="M50 110h60m180 0h60M200 42v25m0 91v35M60 160h50m180 0h45v-50"/></g><rect x="110" y="65" width="180" height="115" rx="8" fill="#304d40"/><rect x="130" y="85" width="65" height="42" rx="4" fill="#aebfa1"/><text x="162" y="111" text-anchor="middle" fill="#233a30" font-size="14" font-family="monospace">ALU</text><g fill="#e5ebdc" font-family="monospace" font-size="10"><text x="211" y="101">CONTROL</text><text x="211" y="119">REGISTERS</text><text x="135" y="153">DATAPATH / MEMORY</text></g>${label('FPGA · PIPELINING IN PROGRESS',25,207,'#3b5548',8)}`}
return `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="400" height="225" fill="${bg}"/>${body}</svg>`}
// Data is kept in content.js so you can edit it without changing the layout.
const portfolio = window.PORTFOLIO;
const profile = portfolio.profile;
// Shuffle once per page load so filtering does not move cards around.
function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function orderedProjects(items) {
  const pinned = items.filter(item => item.pinned > 0).sort((a, b) => a.pinned - b.pinned);
  return [...pinned, ...shuffled(items.filter(item => !(item.pinned > 0)))];
}
const projects = orderedProjects(portfolio.projects);
const jobs = portfolio.experience;
const media = shuffled(portfolio.media);
let mediaFilter = 'All';
let currentMediaId = null;
let currentPhotoIndex = 0;
let albumTimer = null;
const albumIndexes = new Map();
let galleryResizeObserver = null;
let galleryLayoutFrame = 0;
const tabs=[['home','Home'],['projects','Projects'],['experience','Experience'],['films','Films & Photos'],['about','About']];
let active='home',filter='All',query='',opener=null,toastTimer;
function tagList(tags){return `<div class="tags">${tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>`}

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
function visual(image, alt, fallback='web') {
  const src = safeAsset(image);
  return art(fallback) + (src ? `<img class="custom-cover" src="${esc(src)}" alt="${esc(alt || '')}" loading="lazy" decoding="async">` : '');
}
function projectVisual(project) {
  return visual(project.image, project.imageAlt || project.name, project.art);
}
function eventPhotos(item) {
  if (!item || item.type !== 'photo') return [];
  const entries = Array.isArray(item.photos) && item.photos.length ? item.photos : [{ src: item.src || item.url || item.thumbnail, alt: item.alt }];
  return entries.map((photo, index) => ({
    src: safeAsset(typeof photo === 'string' ? photo : photo.src),
    alt: (typeof photo === 'string' ? '' : photo.alt) || item.title + ' — photo ' + (index + 1)
  })).filter(photo => photo.src);
}
function photoAlbumCard(item, photos) {
  const index = (albumIndexes.get(item.id) || 0) % photos.length;
  return `<article class="film-card photo-album" data-album="${esc(item.id)}">
    <button class="album-open" data-media="${esc(item.id)}" aria-label="Open ${esc(item.title)} album, ${photos.length} photos">
    <div class="thumb">${visual(photos[index].src, photos[index].alt, item.art)}<span class="album-position" data-album-counter>${index + 1} / ${photos.length}</span><span class="type">${esc(item.label === 'Photo' ? 'Photo album' : item.label || 'Photo album')} · ${photos.length} photos</span></div>
    <h3>${esc(item.title)}</h3><p>${esc(item.description || '')}</p></button>
  </article>`;
}
function albumCanAdvance(card, id) {
  const bounds = card.getBoundingClientRect();
  return card.isConnected && !document.hidden && !$('#detail').open && !matchMedia('(prefers-reduced-motion: reduce)').matches && bounds.bottom > 0 && bounds.top < innerHeight;
}
async function advanceAlbumPreview(card) {
  const id = card.dataset.album;
  if (card.dataset.loading || !albumCanAdvance(card, id)) return;
  const photos = eventPhotos(media.find(item => item.id === id));
  const current = albumIndexes.get(id) || 0;
  card.dataset.loading = 'true';
  try {
    for (let step = 1; step < photos.length; step++) {
      const index = (current + step) % photos.length;
      const candidate = new Image();
      candidate.src = photos[index].src;
      try { await candidate.decode(); } catch { continue; }
      if (!albumCanAdvance(card, id) || (albumIndexes.get(id) || 0) !== current) return;
      let image = card.querySelector('.custom-cover');
      if (!image) {
        image = document.createElement('img');
        image.className = 'custom-cover';
        card.querySelector('.thumb').append(image);
      }
      image.src = photos[index].src;
      image.alt = photos[index].alt;
      albumIndexes.set(id, index);
      card.querySelector('[data-album-counter]').textContent = (index + 1) + ' / ' + photos.length;
      return;
    }
  } finally { delete card.dataset.loading; }
}
function setupAlbumCarousels() {
  clearInterval(albumTimer);
  albumTimer = null;
  const cards = [...document.querySelectorAll('[data-album]')];
  if (cards.length) albumTimer = setInterval(() => cards.forEach(advanceAlbumPreview), 2000);
}
function mediaVisual(item) {
  const photo = eventPhotos(item)[0];
  return visual(item.thumbnail || photo?.src, item.alt || photo?.alt || item.title, item.art || 'web');
}
function mediaCard(item) {
  const photo = item.type === 'photo';
  const photos = eventPhotos(item);
  if (photos.length > 1) return photoAlbumCard(item, photos);
  const url = externalURL(item.url);
  const external = !photo && !safeAsset(item.src) && url;
  const opening = external
    ? `<a class="film-card" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="Watch ${esc(item.title)} (opens in a new tab)">`
    : `<button class="film-card" data-media="${esc(item.id)}" aria-label="${photo ? 'View photo' : 'Play video'}: ${esc(item.title)}">`;
  return `${opening}<div class="thumb">${mediaVisual(item)}${photo ? '' : '<span class="play-disc"></span>'}<span class="type">${esc(item.label || (photo ? 'Photo' : item.category === 'Project demo' ? 'Project videos' : 'Fun films'))}</span></div><h3>${esc(item.title)}</h3><p>${esc(item.description || item.category || '')}</p>${external ? '</a>' : '</button>'}`;
}
function filteredMedia() {
  return media.filter(item => mediaFilter === 'All'
    || (mediaFilter === 'Videos' && item.type === 'video')
    || (mediaFilter === 'Photos' && item.type === 'photo')
    || (mediaFilter === 'Project demos' && item.category === 'Project demo'));
}
// Size staggered cards without CSS columns leaving a desktop column unused.
function observeMediaGallery() {
  if (galleryResizeObserver) galleryResizeObserver.disconnect();
  cancelAnimationFrame(galleryLayoutFrame);
  const grid = document.querySelector('.media-grid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.film-card')];
  const update = () => {
    if (!grid.isConnected) return;
    // Phone galleries use native flex scrolling, so masonry sizing is unnecessary.
    if (getComputedStyle(grid).display === 'flex') {
      cards.forEach(card => { card.style.gridRowEnd = ''; });
      return;
    }
    const spans = cards.map(card => Math.ceil(card.getBoundingClientRect().height + parseFloat(getComputedStyle(card).marginBottom)));
    cards.forEach((card, index) => {
      const span = 'span ' + spans[index];
      if (card.style.gridRowEnd !== span) card.style.gridRowEnd = span;
    });
  };
  update();
  galleryResizeObserver = new ResizeObserver(() => {
    cancelAnimationFrame(galleryLayoutFrame);
    galleryLayoutFrame = requestAnimationFrame(update);
  });
  cards.forEach(card => galleryResizeObserver.observe(card));
}
function mediaGallery() {
  const selected = filteredMedia();
  const emptyText = mediaFilter === 'Photos' ? 'No photos shared here yet.' : 'More moments are on their way.';
  return `<div class="section-head"><div><h2>Things worth keeping.</h2><p>Personal films, photographs, and projects in motion.</p></div></div>
    <div class="filters" aria-label="Media filters">${['All','Videos','Photos','Project demos'].map(name => `<button class="chip ${mediaFilter === name ? 'active' : ''}" data-media-filter="${name}" aria-pressed="${mediaFilter === name}">${name}</button>`).join('')}</div>
    <div class="result-line" role="status">${selected.length} ${selected.length === 1 ? 'moment' : 'moments'}</div>
    <div class="project-grid media-grid">${selected.length ? selected.map(mediaCard).join('') : `<div class="empty"><h3>${emptyText}</h3><button class="btn" data-media-filter="All">Explore all moments</button></div>`}</div>`;
}
function showMedia(id) {
  const item = media.find(entry => entry.id === id);
  if (!item) return;
  currentMediaId = id;
  const isPhoto = item.type === 'photo';
  const photos = eventPhotos(item);
  currentPhotoIndex = photos.length ? (albumIndexes.get(id) || 0) % photos.length : 0;
  const photo = photos[currentPhotoIndex];
  const src = isPhoto ? photo?.src : safeAsset(item.src);
  const mediaElement = isPhoto
    ? (src ? `<img class="lightbox-photo" src="${esc(src)}" alt="${esc(photo.alt)}">` : '')
    : (src ? `<video class="local-film" controls playsinline preload="metadata"${safeAsset(item.thumbnail) ? ' poster="' + esc(item.thumbnail) + '"' : ''} src="${esc(src)}">Your browser does not support this video format.</video>` : '');
  showModal(item.title, `<div class="media-stage ${isPhoto ? 'photo-stage' : ''}">${mediaElement || '<p>No media file is available for this item.</p>'}<p class="media-error" hidden role="status">This file could not be loaded. Please try another photo.</p></div>
    <div class="media-title"><div><div class="eyebrow">${esc(item.label || item.category || 'Personal')} · ${isPhoto ? 'Photography' : 'Video'}</div><h2 id="dialog-title">${esc(item.title)}</h2></div>${isPhoto && photos.length > 1 ? `<div class="photo-navigation" aria-label="Album photos"><button class="btn outline" data-media-step="-1" aria-label="Previous photo in ${esc(item.title)}">←</button><span id="photo-counter" aria-live="polite" aria-atomic="true">${currentPhotoIndex + 1} / ${photos.length}</span><button class="btn outline" data-media-step="1" aria-label="Next photo in ${esc(item.title)}">→</button></div>` : ''}</div><p class="lead">${esc(item.description || '')}</p>`, 'A moment / ' + item.title);
}
function nextPhoto(step) {
  const item = media.find(entry => entry.id === currentMediaId);
  const photos = eventPhotos(item);
  if (photos.length < 2) return;
  currentPhotoIndex = (currentPhotoIndex + step + photos.length) % photos.length;
  const photo = photos[currentPhotoIndex];
  const image = document.querySelector('.lightbox-photo');
  if (!image) return;
  document.querySelector('.media-error').hidden = true;
  image.src = photo.src;
  image.alt = photo.alt;
  $('#photo-counter').textContent = (currentPhotoIndex + 1) + ' / ' + photos.length;
}

function card(p) {
  return `<button class="project" data-project="${esc(p.id)}" aria-label="View ${esc(p.name)} details">
    <div class="thumb">${projectVisual(p)}${p.label ? '<span class="type">' + esc(p.label) + '</span>' : ''}</div>
    <div class="project-info"><span class="project-mark">${icon(p.kind === 'Software' ? 'projects' : p.kind === 'Ventures' ? 'experience' : 'chip', 15)}</span>
    <div>${p.pinned > 0 || p.status === 'In progress' ? '<div class="card-flags">' + (p.pinned > 0 ? '<span>Pinned</span>' : '') + (p.status === 'In progress' ? '<span class="progress-label">In progress</span>' : '') + '</div>' : ''}
    <h3>${esc(p.name)}</h3><p>${esc(p.short)}</p><div class="card-evidence"><p><span>My role</span>${esc(p.role)}</p><p><span>Outcome</span>${esc(p.cardOutcome || p.result)}</p></div>${tagList(p.tech.slice(0, 3))}</div></div>
  </button>`;
}
function contactLinks() {
  return '<div class="actions"><button class="btn primary" data-resume>View résumé</button><a class="btn outline" href="'+esc(externalURL(profile.linkedin))+'" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a class="btn outline" href="mailto:'+esc(profile.email)+'">Email me ↗</a></div>';
}
function contactInvitation() { return '<section class="contact-invitation"><div><div class="eyebrow">Let’s connect</div><h3>Have a role or a problem in mind?</h3><p>I’m interested in solutions engineering, technology sales, and solutions architecture.</p></div>'+contactLinks()+'</section>'; }
function journeyGallery(item) {
  const photos = item.photos || [];
  return '<div class="journey-gallery" aria-label="' + esc(item.title || item.company || item.name) + ' photos"><div class="journey-photo-track" tabindex="0" role="region" aria-label="Photo gallery; scroll to explore">' + (photos.length ? photos.map(photo => '<figure><div class="journey-photo">' + visual(photo.src, photo.alt, 'web') + '</div><figcaption>' + esc(photo.caption || photo.alt) + '</figcaption></figure>').join('') : '<figure><div class="photo-placeholder"><span aria-hidden="true">＋</span><strong>Photos to come</strong><small>' + esc(item.title || item.company || item.name) + '</small></div><figcaption>A space for moments from this chapter.</figcaption></figure>') + '</div>' + (photos.length > 1 ? '<div class="journey-controls"><button class="btn outline" data-gallery-step="-1" aria-label="Previous photo">←</button><span>Scroll or use the arrows</span><button class="btn outline" data-gallery-step="1" aria-label="Next photo">→</button></div>' : '') + '</div>';
}
function educationJourney() {
  return '<section class="education-journey work-strip home-section education-section" aria-labelledby="education-journey-title"><div class="section-head"><div><div class="eyebrow">Beyond the classroom</div><h2 id="education-journey-title">An education across borders.</h2><p>Singapore, Shenzhen, Vietnam, and Norway. Open a chapter to read more.</p></div><div class="journey-controls"><button class="btn outline" data-journey-step="-1" aria-label="Previous education experience">←</button><button class="btn outline" data-journey-step="1" aria-label="Next education experience">→</button></div></div><div class="education-track" tabindex="0" role="region" aria-label="Education experiences">' + portfolio.education.experiences.map((item,index)=>'<button class="education-card" data-education="'+esc(item.id)+'"><div class="education-cover">'+(item.photos.length ? visual(item.photos[0].src,item.photos[0].alt,'web') : '<span class="chapter-number">0'+(index+1)+'</span><span class="chapter-place">'+esc(item.place)+'</span><small>Photos to come</small>')+'</div><div class="education-copy"><span class="eyebrow">'+esc(item.period)+'</span><h3>'+esc(item.title)+'</h3><p>'+esc(item.subtitle)+'</p><span class="text-link">Read the chapter · '+item.photos.length+' photos ↗</span></div></button>').join('')+'</div><div class="learning-credential"><span class="eyebrow">Certification</span><strong>AWS Certified Cloud Practitioner</strong><span>Earned November 2024</span></div><p class="planned-learning">Next after exams: NSE 4 · FortiOS Administrator study <span>Planned</span></p></section>';
}
document.addEventListener('click', event => {
  const chapter = event.target.closest('[data-education]');
  if (chapter) { const item = portfolio.education.experiences.find(x=>x.id===chapter.dataset.education); if(item) showModal(item.title,'<div class="eyebrow">'+esc(item.period)+' · '+esc(item.place)+'</div><h2 id="dialog-title">'+esc(item.title)+'</h2><p class="lead">'+esc(item.description)+'</p>'+journeyGallery(item)+(item.job?'<button class="btn outline" data-job="'+esc(item.job)+'">Read about the internship ↗</button>':''),'Education / '+item.title); }
  const arrow = event.target.closest('[data-journey-step], [data-gallery-step]');
  if (arrow) { const education = arrow.hasAttribute('data-journey-step'); const track = arrow.closest(education ? '.education-journey' : '.journey-gallery').querySelector(education ? '.education-track' : '.journey-photo-track'); track.scrollBy({left: Number(education?arrow.dataset.journeyStep:arrow.dataset.galleryStep)*(education?track.firstElementChild.getBoundingClientRect().width+18:track.clientWidth),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}); }
});
function home() {
  const featuredJobs = ['espressif','august-robotics','pixta'].map(id=>jobs.find(j=>j.id===id));
  return '<section class="home-section work-section" aria-labelledby="work-heading"><div class="section-head"><div><div class="eyebrow">01 / In practice</div><h2 id="work-heading">Engineering with real-world impact.</h2><p>Verification, robotics, and communicating ideas through film.</p></div><button class="text-link" data-page="experience">All experience ↗</button></div><div class="work-grid">'+featuredJobs.map(j=>'<button class="mini-work" data-job="'+esc(j.id)+'"><div class="work-cover"><div class="work-cover-placeholder"><span>'+esc(j.company)+'</span><small>Photo coming soon</small></div><img class="custom-cover" src="'+esc(safeAsset(j.coverImage))+'" alt="'+esc(j.coverAlt)+'" loading="lazy"></div><div class="work-card-body"><div class="date">'+esc(j.date)+'</div><h3>'+esc(j.company)+'</h3><p>'+esc(j.role)+'</p><div class="work-highlight"><span class="eyebrow">'+esc(j.highlight)+'</span><p>'+esc(j.highlightDetail)+'</p></div><span class="work-read">Explore my work'+(j.photos?.length ? ' · '+j.photos.length+' photos' : '')+' ↗</span></div></button>').join('')+'</div></section><section class="home-section projects-section" aria-labelledby="selected-projects-heading"><div class="section-head"><div><div class="eyebrow">02 / Selected projects</div><h2 id="selected-projects-heading">From architecture to working systems.</h2><p>Three projects, with my contribution and the result up front.</p></div><button class="text-link" data-page="projects">All projects ↗</button></div><div class="project-grid">'+projects.slice(0,3).map(card).join('')+'</div></section>'+educationJourney()+contactInvitation();
}
function projectPage(){const list=projects.filter(p=>(filter==='All'||p.kind===filter)&&[p.name,p.short,p.context,p.label,p.status,...p.tech,...(p.nextSteps || [])].join(' ').toLowerCase().includes(query.toLowerCase()));return `<div class="section-intro"><div><div class="eyebrow">A collection of experiments</div><h2>Things I’ve built.</h2><p>Hardware, software, and ideas that made it off the page. Open a project for the story and my contribution.</p></div></div><div class="filters" aria-label="Project filters">${['All','Hardware','Software','Ventures'].map(f=>`<button class="chip ${filter===f?'active':''}" data-filter="${f}" aria-pressed="${filter===f}">${f}</button>`).join('')}</div><div class="result-line" role="status">${list.length} project${list.length!==1?'s':''}${query?' for “'+esc(query)+'”':''}${query?'<button class="text-link" data-clear>Clear search ×</button>':''}</div><div class="project-grid">${list.length?list.map(card).join(''):'<div class="empty"><h3>No projects found</h3><p>Try a technology like Java, ROS, or Verilog.</p><button class="btn" data-reset>Reset filters</button></div>'}</div>`}
function jobCard(j,i){return `<details class="job" id="job-${esc(j.id)}" ${i<2?'open':''}><summary><div class="job-title"><div class="date">${j.date}</div><h3>${j.company}</h3><div class="role">${j.role}${j.place?' · '+j.place:''}</div></div><span class="plus" aria-hidden="true">+</span></summary><div class="job-body"><ul>${j.points.map(p=>`<li>${p}</li>`).join('')}</ul>${tagList(j.tags)}${j.photos ? journeyGallery(j) : ''}</div></details>`}
function experience() {
  const education = portfolio.education;
  return `<div class="section-intro"><div><div class="eyebrow">The journey so far</div><h2>Work, learn, repeat.</h2><p>Testing systems, building with teams, and turning ideas into tools people can use.</p></div><button class="btn outline" data-resume>View résumé ↗</button></div>
    <div class="experience-layout"><div class="timeline">${jobs.map(jobCard).join('')}</div><aside>
    <div class="panel"><div class="eyebrow">Education</div><h3>${esc(education.institution)}</h3><p>${esc(education.degree)}<br>${esc(education.dates)}</p><div class="gpa">${esc(education.gpa)} <span>GPA</span></div><p>${esc(education.achievement)}</p><hr><p>${education.programmes.map(esc).join('<br>')}</p><hr><p>Relevant coursework</p>${tagList(education.coursework)}</div>
    <div class="panel"><div class="eyebrow">Certification</div>${portfolio.certifications.map(c => '<h3>' + esc(c.name) + '</h3><p>' + esc(c.date) + '</p>').join('')}</div>
    <div class="panel"><div class="eyebrow">My technical toolkit</div><h3>Across the stack.</h3>${portfolio.skillGroups.map(group => '<p>' + esc(group.name) + '</p>' + tagList(group.items)).join('<hr>')}</div>
    <div class="panel"><div class="eyebrow">Earlier education</div><h3>Hwa Chong Institution</h3><p>February 2021 – November 2022<br>Physics · Chemistry · Mathematics · Economics<br>GCE A Levels · AAA/B · 85/90</p></div></aside></div>${educationJourney()}`;
}
function films(){const ids=['buffbuddy','e-mini-mart','obstacle'];return `<div class="film-hero"><div class="film-copy"><div class="eyebrow">Through another lens</div><h2>A different way<br>of seeing things.</h2><p>I enjoy finding the story in a place, a person, or something we’ve built. A camera gives me another way to connect.</p><div class="film-stats"><div><strong>30+</strong><span>videos & marketing materials at Pixta</span></div><div><strong>7+</strong><span>professional shoots led</span></div></div></div><div class="film-illustration film-portrait"><div class="portrait-placeholder"><span class="eyebrow">Behind the lens</span><span>A moment with my camera.</span><small>Portrait coming soon</small></div><img class="custom-cover" src="${esc(safeAsset(profile.filmPortrait))}" alt="${esc(profile.filmPortraitAlt)}" loading="lazy"></div></div>${mediaGallery()}<div class="work-strip"><div class="section-head"><div><h2>Behind the camera at Pixta</h2><p>Hanoi, Vietnam · May – August 2024</p></div><button class="text-link" data-job="pixta">The full story ${icon('arrow',14)}</button></div><p style="max-width:720px;color:var(--muted);font-size:13px;line-height:1.9">As a Business Incubation Intern, I worked across content strategy, production, and creative direction. I led shoots, coordinated stakeholders, and helped increase production from two to five videos per week.</p></div>`}
function about(){return `<div class="about-grid"><section class="about-main"><div class="eyebrow" style="color:var(--green)">Hello, I’m ${esc(profile.name.split(" ")[0])}.</div><h2>${portfolio.about.heading.map(esc).join('<br>')}</h2><p class="lead">${esc(portfolio.about.lead)}</p><div id="about-paragraphs">${portfolio.about.paragraphs.map(text => `<p>${esc(text)}</p>`).join('')}</div><div class="about-tags">${portfolio.about.interests.map(text => `<span>${esc(text)}</span>`).join('')}</div></section><aside><article class="fieldnote"><div class="fieldnote-art"><img src="assets/images/camera_images/Hiking.jpg" alt="A moment outdoors" loading="lazy"></div><div class="fieldnote-copy"><div class="eyebrow">A note from outside</div><h3>Small human.<br>Big, beautiful world.</h3><p>The outdoors makes my problems feel smaller. I love that feeling of being tiny in a huge landscape. It reminds me to be grateful, look beyond myself, and pay attention to the people around me.</p></div></article><div class="panel" style="margin-top:19px"><div class="eyebrow">Currently</div><h3>Learning. Building. Looking ahead.</h3><p>Digital IC verification at Espressif Systems.<br>Finishing my degree at NUS in May 2027.<br>Next after exams: NSE 4 · FortiOS Administrator study.</p></div></aside></div><div class="values"><div class="value"><span class="num">01</span><h3>Stay curious.</h3><p>Ask questions. Understand the problem before reaching for a solution.</p></div><div class="value"><span class="num">02</span><h3>Keep showing up.</h3><p>Confidence grows through the small promises I keep to myself.</p></div><div class="value"><span class="num">03</span><h3>Make it matter.</h3><p>Build with people in mind, and stay close enough to listen.</p></div></div><div class="bottom-note"><p>A work in progress.<br>And happy to be one.</p><button class="btn primary" data-contact>Let’s connect ↗</button></div>`}
function setPage(page,scroll=true,record=true){active=tabs.some(t=>t[0]===page)?page:'home';if(location.hash.slice(1)!==active){try{history[record?'pushState':'replaceState'](null,'','#'+active)}catch{}}$('#tabs').innerHTML=tabs.map(([id,label])=>`<button data-page="${id}" class="${active===id?'active':''}" ${active===id?'aria-current="page"':''}>${label}${id==='projects'?'<span class="count">'+projects.length+'</span>':''}</button>`).join('');$('#rail').innerHTML=tabs.map(([id,label])=>`<button data-page="${id}" class="${active===id?'active':''}" ${active===id?'aria-current="page"':''}>${icon(id)}${label}</button>`).join('')+'<div class="rail-line"></div><button data-resume>'+icon('experience')+'Résumé</button>';$('#content').innerHTML=({home,projects:projectPage,experience,films,about}[active])();observeMediaGallery();setupAlbumCarousels();$('#content').classList.remove('fade-in');void $('#content').offsetWidth;$('#content').classList.add('fade-in');document.title=`${active==='home'?'Engineer. Curious human.':tabs.find(t=>t[0]===active)[1]} — ${profile.name}`;if(scroll){$('#tabs').scrollIntoView({block:'start'});window.scrollBy(0,-($('.topbar').getBoundingClientRect().height));$('#content').focus({preventScroll:true})}}
function showModal(title,html,label='A closer look'){if(!$('#detail').open)opener=document.activeElement;$('#dialog-label').textContent=label;$('#dialog-body').innerHTML=html;$('#detail').classList.toggle('resume-dialog',Boolean($('#dialog-body .resume-preview')));if(!$('#detail').open)$('#detail').showModal();$('#detail').scrollTop=0;document.body.style.overflow='hidden';$('#close-modal').focus();}
function closeModal(){$('#detail').close()}
$('#detail').addEventListener('close',()=>{document.body.style.overflow='';currentMediaId=null;currentPhotoIndex=0;document.querySelectorAll('#detail video').forEach(video=>video.pause());if(opener&&opener.isConnected)opener.focus({preventScroll:true})});
function showProject(id) {
  const p = projects.find(p=>p.id===id); if(!p)return;
  const cpu = p.id === 'riscv-processor';
  const contribution = cpu ? ['My main contribution was the 2-bit bimodal branch predictor, which predicts branch direction using two-bit saturating counters.'] : p.contributions;
  showModal(p.name, '<div class="eyebrow">'+esc(p.kind)+' · '+esc(p.status)+'</div><h2 id="dialog-title">'+esc(p.name)+'</h2><p class="lead">'+esc(p.short)+'</p><div class="actions">'+(externalURL(p.video)?'<a class="btn primary" href="'+esc(p.video)+'" target="_blank" rel="noopener noreferrer">Watch demo ↗</a>':'')+(externalURL(p.url)?'<a class="btn outline" href="'+esc(p.url)+'" target="_blank" rel="noopener noreferrer">'+esc(p.sourceLabel||'View source')+' ↗</a>':'')+'</div><div class="project-story"><section><h3>What it does</h3><p class="context">'+esc(p.context)+'</p></section><section><h3>My contribution</h3><p class="contribution-role">'+esc(p.role)+'</p><ul class="detail-list">'+contribution.map(c=>'<li>'+esc(c)+'</li>').join('')+'</ul></section><section class="project-results"><div class="eyebrow">'+(cpu?'Combined team enhancements':'Outcome')+'</div><h3>Results</h3><p class="context">'+esc(p.result)+'</p>'+(cpu?'<p class="result-note">These figures describe the combined enhancements, including branch prediction, subword support, and interrupts; they are not isolated measurements of my branch predictor.</p>':'')+'</section>'+(p.photos?.length ? journeyGallery(p) : '<div class="modal-hero">'+projectVisual(p)+'</div>')+'<section class="project-technical"><h3>Technical details</h3>'+tagList(p.tech)+(p.date?'<p class="context">'+esc(p.date)+'</p>':'')+(cpu?'<p class="context">Five-stage pipelined RISC-V CPU on a Nexys 4 DDR board. The team integrated branch prediction, subword support, and interrupts, then ran Space Defenders entirely on the custom CPU.</p>':'')+(p.nextSteps?.length?'<h3>Planned next steps</h3><ul class="detail-list">'+p.nextSteps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul>':'')+'</section></div>'+contactInvitation(), 'Project / '+p.name);
}
function resume() {
  const pdfURL = profile.resumePdf || 'assets/documents/Low_Beverly_Resume_2026.pdf';
  if (matchMedia('(max-width: 580px)').matches) {
    window.open(pdfURL, '_blank', 'noopener,noreferrer');
    return;
  }
  showModal('Résumé', `<section class="resume-preview">
    <h2 id="dialog-title">${esc(profile.name)} · Résumé</h2>
    <div class="resume-actions">
      <a class="btn outline" href="${esc(pdfURL)}" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>
      <a class="btn primary" href="${esc(pdfURL)}" download="Low_Beverly_Resume_2026.pdf">Download PDF ↓</a>
    </div>
    <p class="resume-preview-help">If the preview doesn’t appear, open the PDF in a new tab or download it.</p>
    <iframe class="resume-pdf" src="${esc(pdfURL)}#view=FitH" title="Beverly Low résumé PDF"></iframe>
  </section>`, 'Résumé / Beverly Low');
}
function contact() {
  const github = externalURL(profile.github);
  const linkedin = externalURL(profile.linkedin);
  const email = String(profile.email || '').trim();
  const website = externalURL(profile.website);
  showModal('Let’s connect', `<div class="eyebrow" style="color:var(--green)">Good things start with a conversation</div><h2 id="dialog-title">Let’s cross paths.</h2><p class="lead">I’m interested in engineering, cloud infrastructure, and people building useful things. Here’s where you can find me.</p>
    <div class="actions contact-actions">${email ? `<a class="btn primary" href="mailto:${encodeURIComponent(email)}">Email me ↗</a>` : ''}${linkedin ? `<a class="btn outline" href="${esc(linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>` : ''}</div>
    ${github ? `<div class="contact-card">${icon('github',31)}<div><h3>My work on GitHub</h3><p>Projects, source code, and my public profile.</p></div><a class="btn primary" href="${esc(github)}" target="_blank" rel="noopener noreferrer">Visit GitHub ↗</a></div>` : ''}
    ${website ? `<h3>Keep in touch with this little corner</h3><p class="context">Save or share my portfolio address.</p><div class="copy-field"><input id="portfolio-url" aria-label="Portfolio address" value="${esc(website)}" readonly><button class="btn outline" data-copy>Copy address</button></div>` : ''}`, 'Connect / '+profile.name);
}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3000)}
function themeUI(){const dark=document.body.classList.contains('dark');$('#theme').innerHTML=icon(dark?'sun':'moon',19);$('#theme').setAttribute('aria-label','Switch to '+(dark?'light':'dark')+' theme');$('meta[name="theme-color"]').content=dark?'#171b18':'#faf9f6'}
document.addEventListener('click',async e=>{const el=e.target.closest('button,a');if(!el)return;if(el.dataset.page){setPage(el.dataset.page)}else if(el.dataset.mediaFilter){mediaFilter=el.dataset.mediaFilter;setPage('films',false);document.querySelector(`[data-media-filter="${mediaFilter}"]`).focus({preventScroll:true})}else if(el.dataset.media){showMedia(el.dataset.media)}else if(el.dataset.mediaStep){nextPhoto(Number(el.dataset.mediaStep))}else if(el.dataset.project){showProject(el.dataset.project)}else if('resume' in el.dataset){resume()}else if('contact' in el.dataset){contact()}else if(el.dataset.filter){filter=el.dataset.filter;setPage('projects',false);document.querySelector(`[data-filter="${filter}"]`).focus({preventScroll:true})}else if('clear' in el.dataset||'reset' in el.dataset){query='';$('#search-input').value='';if('reset'in el.dataset)filter='All';setPage('projects',false)}else if('job'in el.dataset){if($('#detail').open)closeModal();setPage('experience',false);const target=$('#job-'+el.dataset.job);target.open=true;target.scrollIntoView({block:'center'});target.querySelector('summary').focus({preventScroll:true})}else if('print'in el.dataset){window.print()}else if('copy'in el.dataset){try{await navigator.clipboard.writeText(profile.website);toast('Portfolio address copied')}catch{$('#portfolio-url').focus();$('#portfolio-url').select();toast('Select and copy the portfolio address')}}});
$('#search-form').addEventListener('submit',e=>{e.preventDefault();query=$('#search-input').value.trim();filter='All';setPage('projects')});$('#search-input').addEventListener('search',()=>{if(!$('#search-input').value&&query){query='';setPage('projects',false)}});$('#close-modal').addEventListener('click',closeModal);$('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=$('#detail').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal()}});$('#theme').addEventListener('click',()=>{document.body.classList.toggle('dark');try{localStorage.setItem('beverly-theme',document.body.classList.contains('dark')?'dark':'light')}catch{}themeUI()});$('#top').addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));window.addEventListener('popstate',()=>{const page=location.hash.slice(1);if(tabs.some(t=>t[0]===page))setPage(page,false,false)});window.addEventListener('hashchange',()=>{const page=location.hash.slice(1);if(tabs.some(t=>t[0]===page)&&page!==active)setPage(page)});$('.skip').addEventListener('click',e=>{e.preventDefault();$('#content').focus();$('#content').scrollIntoView({block:'start'});window.scrollBy(0,-($('.topbar').getBoundingClientRect().height+$('#tabs').getBoundingClientRect().height+12))});document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'&&!$('#detail').open){e.preventDefault();$('#search-input').focus()}});
try{document.body.classList.toggle('dark',localStorage.getItem('beverly-theme')!=='light')}catch{document.body.classList.add('dark')}themeUI();$('#banner-art').innerHTML=mountains();$('#search-button').innerHTML=icon('search',18);$('#github-icon').innerHTML=icon('github',15);$('#location').innerHTML=icon('pin',13)+'Singapore';$('#close-modal').innerHTML=icon('close',19);setPage(location.hash.slice(1)||'home',false,false);

function applyProfile() {
  $('.title-line h1').textContent = profile.name;
  $('.handle').textContent = `${profile.handle} · ${profile.educationLine} · Graduating ${profile.graduationDate || profile.graduationYear}`;
  $('.profile-bio').innerHTML = `${esc(profile.intro)}<br><span class="more">${esc(profile.subtitle)} </span><button class="text-link" data-page="about">A little more about me <span aria-hidden="true">↗</span></button>${profile.careerFocus ? '<span class="career-focus">' + esc(profile.careerFocus) + '</span>' : ''}`;
  $('#location').innerHTML = icon('pin',13) + esc(profile.location);
  $('.profile .actions').innerHTML = contactLinks().replace('<div class="actions">','').replace(/<\/div>$/, '') + '<a class="btn" data-profile-github href="'+esc(externalURL(profile.github))+'" target="_blank" rel="noopener noreferrer">GitHub ↗</a>';
  const githubLink = document.querySelector('[data-profile-github]');
  if (externalURL(profile.github)) githubLink.href = profile.github;
  else githubLink.hidden = true;
  if (safeAsset(profile.avatar)) {
    $('.avatar').insertAdjacentHTML('beforeend', `<img class="avatar-photo" src="${esc(safeAsset(profile.avatar))}" alt="${esc(profile.name)}">`);
    $('.avatar').setAttribute('aria-label', profile.name);
  }
  if (safeAsset(profile.banner)) {
    $('#banner-art').insertAdjacentHTML('beforeend', `<img class="banner-photo" src="${esc(safeAsset(profile.banner))}" alt="">`);
    $('.banner').setAttribute('aria-label', 'Profile banner');
  }
}
// Keep browsing usable if a newly added image or video path is incorrect.
document.addEventListener('error', event => {
  const element = event.target;
  if (element.tagName === 'IMG' && element.classList.contains('custom-cover')) element.remove();
  if (element.tagName === 'IMG' && (element.classList.contains('avatar-photo') || element.classList.contains('banner-photo'))) element.remove();
  if (element.classList && (element.classList.contains('lightbox-photo') || element.classList.contains('local-film'))) {
    const message = document.querySelector('.media-error');
    if (message) message.hidden = false;
  }
}, true);
document.addEventListener('keydown', event => {
  if (!$('#detail').open || !currentMediaId || !['ArrowLeft','ArrowRight'].includes(event.key)) return;
  if (['INPUT','TEXTAREA','VIDEO'].includes(event.target.tagName)) return;
  const current = media.find(item => item.id === currentMediaId);
  if (current && current.type === 'photo') {
    event.preventDefault();
    nextPhoto(event.key === 'ArrowRight' ? 1 : -1);
  }
});
applyProfile();

// Keep the search-help control in sync with click-away and Escape dismissal.
$('#search-help').addEventListener('toggle', event => {
  $('#search-help-button').setAttribute('aria-expanded', String(event.newState === 'open'));
});

// Blank lines in about.txt separate paragraphs; keep the bundled text as a fallback.
async function loadAboutText() {
  const file = safeAsset(portfolio.about.paragraphsFile);
  if (!file) return;
  try {
    const response = await fetch(file, { cache: 'no-store' });
    if (!response.ok) return;
    const text = (await response.text()).replace(/\r\n?/g, '\n').trim();
    portfolio.about.paragraphs = text ? text.split(/\n\s*\n/).map(paragraph => paragraph.replace(/\n/g, ' ').trim()).filter(Boolean) : [];
    const container = document.getElementById('about-paragraphs');
    if (container) container.innerHTML = portfolio.about.paragraphs.map(paragraph => '<p>' + esc(paragraph) + '</p>').join('');
  } catch {
    // Keep the page readable offline or when opened directly as a local HTML file.
  }
}
loadAboutText();
