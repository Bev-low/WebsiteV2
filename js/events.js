import { $ } from './shared/dom.js';
import { state, profile, tabs, media } from './state.js';
import { setPage } from './router.js';
import { showMedia, nextPhoto } from './dialogs/media.js';
import { showProject } from './dialogs/project.js';
import { resume } from './dialogs/resume.js';
import { contact } from './dialogs/contact.js';
import { toast } from './shared/toast.js';
import { closeModal } from './dialogs/modal.js';
import { themeUI } from './shared/theme.js';
function registerEvents() {
  $('#detail').addEventListener('close', () => {
    document.body.style.overflow = '';
    state.currentMediaId = null;
    document.querySelectorAll('#detail video').forEach(video => video.pause());
    if (state.opener && state.opener.isConnected) state.opener.focus({
      preventScroll: true
    });
  });
  document.addEventListener('click', async e => {
    const el = e.target.closest('button,a');
    if (!el) return;
    if (el.dataset.page) {
      setPage(el.dataset.page);
    } else if (el.dataset.mediaFilter) {
      state.mediaFilter = el.dataset.mediaFilter;
      setPage('films', false);
      document.querySelector(`[data-media-filter="${state.mediaFilter}"]`).focus({
        preventScroll: true
      });
    } else if (el.dataset.media) {
      showMedia(el.dataset.media);
    } else if (el.dataset.mediaStep) {
      nextPhoto(Number(el.dataset.mediaStep));
    } else if (el.dataset.project) {
      showProject(el.dataset.project);
    } else if ('resume' in el.dataset) {
      resume();
    } else if ('contact' in el.dataset) {
      contact();
    } else if (el.dataset.filter) {
      state.filter = el.dataset.filter;
      setPage('projects', false);
      document.querySelector(`[data-filter="${state.filter}"]`).focus({
        preventScroll: true
      });
    } else if ('clear' in el.dataset || 'reset' in el.dataset) {
      state.query = '';
      $('#search-input').value = '';
      if ('reset' in el.dataset) state.filter = 'All';
      setPage('projects', false);
    } else if ('job' in el.dataset) {
      setPage('experience', false);
      const target = $('#job-' + el.dataset.job);
      target.open = true;
      target.scrollIntoView({
        block: 'center'
      });
      target.querySelector('summary').focus({
        preventScroll: true
      });
    } else if ('print' in el.dataset) {
      window.print();
    } else if ('copy' in el.dataset) {
      try {
        await navigator.clipboard.writeText(profile.website);
        toast('Portfolio address copied');
      } catch {
        $('#portfolio-url').focus();
        $('#portfolio-url').select();
        toast('Select and copy the portfolio address');
      }
    }
  });
  $('#search-form').addEventListener('submit', e => {
    e.preventDefault();
    state.query = $('#search-input').value.trim();
    state.filter = 'All';
    setPage('projects');
  });
  $('#search-input').addEventListener('search', () => {
    if (!$('#search-input').value && state.query) {
      state.query = '';
      setPage('projects', false);
    }
  });
  document.addEventListener('change', e => {
    if (e.target.id === 'sort') {
      state.sort = e.target.value;
      setPage('projects', false);
      $('#sort').focus({
        preventScroll: true
      });
    }
  });
  $('#close-modal').addEventListener('click', closeModal);
  $('#detail').addEventListener('click', e => {
    if (e.target === $('#detail')) {
      const r = $('#detail').getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeModal();
    }
  });
  $('#theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    try {
      localStorage.setItem('beverly-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    } catch {}
    themeUI();
  });
  $('#top').addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  }));
  window.addEventListener('popstate', () => {
    const page = location.hash.slice(1);
    if (tabs.some(t => t[0] === page)) setPage(page, false, false);
  });
  window.addEventListener('hashchange', () => {
    const page = location.hash.slice(1);
    if (tabs.some(t => t[0] === page) && page !== state.active) setPage(page);
  });
  $('.skip').addEventListener('click', e => {
    e.preventDefault();
    $('#content').focus();
    $('#content').scrollIntoView({
      block: 'start'
    });
    window.scrollBy(0, -135);
  });
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && !$('#detail').open) {
      e.preventDefault();
      $('#search-input').focus();
    }
  });
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
    if (!$('#detail').open || !state.currentMediaId || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    if (['INPUT', 'TEXTAREA', 'VIDEO'].includes(event.target.tagName)) return;
    const current = media.find(item => item.id === state.currentMediaId);
    if (current && current.type === 'photo') {
      event.preventDefault();
      nextPhoto(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
}
export { registerEvents };
