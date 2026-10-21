import { projects, state } from '../state.js';
import { esc } from '../shared/dom.js';
import { card } from '../components/project-card.js';
function projectPage() {
  const list = projects.filter(p => (state.filter === 'All' || p.kind === state.filter) && [p.name, p.short, p.context, ...p.tech].join(' ').toLowerCase().includes(state.query.toLowerCase()));
  if (state.sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
  return `<div class="section-intro">
    <div>
    <div class="eyebrow">A collection of experiments</div>
    <h2>Things I’ve built.</h2>
    <p>Hardware, software, and ideas that made it off the page. Open a project for the story and my contribution.</p>
    </div>
    </div>
    <div class="filters" aria-label="Project filters">${['All', 'Hardware', 'Software', 'Ventures'].map(f => `<button class="chip ${state.filter === f ? 'active' : ''}" data-filter="${f}" aria-pressed="${state.filter === f}">${f}</button>`).join('')}<label class="sort">Sort by <select id="sort"><option value="featured" ${state.sort === 'featured' ? 'selected' : ''}>Featured order</option><option value="az" ${state.sort === 'az' ? 'selected' : ''}>A–Z</option></select></label>
    </div>
    <div class="result-line" role="status">${list.length} project${list.length !== 1 ? 's' : ''}${state.query ? ' for “' + esc(state.query) + '”' : ''}${state.query ? '<button class="text-link" data-clear>Clear search ×</button>' : ''}</div>
    <div class="project-grid">${list.length ? list.map(card).join('') : '<div class="empty"><h3>No projects found</h3><p>Try a technology like Java, ROS, or Verilog.</p><button class="btn" data-reset>Reset filters</button></div>'}</div>`;
}
export { projectPage };
