import { projects } from '../state.js';
import { showModal } from './modal.js';
import { projectVisual } from '../shared/assets.js';
import { icon } from '../shared/icons.js';
import { tagList } from '../shared/tags.js';
function showProject(id) {
  const p = projects.find(p => p.id === id);
  if (!p) return;
  showModal(p.name, `<div class="modal-hero">${projectVisual(p)}</div>
    <div class="eyebrow" style="color:var(--green)">${p.kind} · ${p.status}</div>
    <h2 id="dialog-title">${p.name}</h2>
    <p class="lead">${p.short}</p>
    <div class="actions">${p.url ? `<a class="btn primary" href="${p.url}" target="_blank" rel="noopener noreferrer">${icon('github', 15)} View source ↗</a>` : ''}${p.video ? `<a class="btn outline" href="${p.video}" target="_blank" rel="noopener noreferrer">Watch demo ↗</a>` : ''}</div>
    <div class="modal-columns">
    <div>
    <h3>The project</h3>
    <p class="context">${p.context}</p>
    <h3>${p.role === 'Team robotics project' ? 'The team’s work' : 'My contribution & team context'}</h3>
    <ul class="detail-list">${p.contributions.map(c => `<li>${c}</li>`).join('')}</ul>
    <h3>Where it landed</h3>
    <p class="context">${p.result}</p>
    </div>
    <aside class="fact-box"><dl><dt>My role</dt><dd>${p.role}</dd><dt>Status</dt><dd>${p.status}</dd><dt>Toolkit</dt><dd>${tagList(p.tech)}</dd></dl>
    </aside>
    </div>`, 'Project / ' + p.name);
}
export { showProject };
