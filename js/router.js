import { state, tabs, projects, profile } from './state.js';
import { $ } from './shared/dom.js';
import { icon } from './shared/icons.js';
import { home } from './pages/home.js';
import { projectPage } from './pages/projects.js';
import { experience } from './pages/experience.js';
import { films } from './pages/films.js';
import { about } from './pages/about.js';
function setPage(page, scroll = true, record = true) {
  state.active = tabs.some(t => t[0] === page) ? page : 'home';
  if (location.hash.slice(1) !== state.active) {
    try {
      history[record ? 'pushState' : 'replaceState'](null, '', '#' + state.active);
    } catch {}
  }
  $('#tabs').innerHTML = tabs.map(([id, label]) => `<button data-page="${id}" class="${state.active === id ? 'active' : ''}" ${state.active === id ? 'aria-current="page"' : ''}>${label}${id === 'projects' ? '<span class="count">' + projects.length + '</span>' : ''}</button>`).join('');
  $('#rail').innerHTML = tabs.map(([id, label]) => `<button data-page="${id}" class="${state.active === id ? 'active' : ''}" ${state.active === id ? 'aria-current="page"' : ''}>${icon(id)}${label}</button>`).join('') + '<div class="rail-line"></div><button data-resume>' + icon('experience') + 'Résumé</button>';
  $('#content').innerHTML = {
    home,
    projects: projectPage,
    experience,
    films,
    about
  }[state.active]();
  $('#content').classList.remove('fade-in');
  void $('#content').offsetWidth;
  $('#content').classList.add('fade-in');
  document.title = `${state.active === 'home' ? 'Engineer. Curious human.' : tabs.find(t => t[0] === state.active)[1]} — ${profile.name}`;
  if (scroll) {
    $('#tabs').scrollIntoView({
      block: 'start'
    });
    window.scrollBy(0, -(window.innerWidth <= 800 ? 61 : 72));
    $('#content').focus({
      preventScroll: true
    });
  }
}
export { setPage };
