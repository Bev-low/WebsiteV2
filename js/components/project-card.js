import { esc } from '../shared/dom.js';
import { projectVisual } from '../shared/assets.js';
import { icon } from '../shared/icons.js';
import { tagList } from '../shared/tags.js';
function card(p) {
  return `<button class="project" data-project="${p.id}" aria-label="Read ${esc(p.name)} case study">
    <div class="thumb">${projectVisual(p)}<span class="type">${p.kind === 'Ventures' ? 'PAST VENTURE' : 'CASE STUDY'}</span>
    </div>
    <div class="project-info"><span class="project-mark">${icon(p.kind === 'Software' ? 'projects' : p.kind === 'Ventures' ? 'experience' : 'chip', 15)}</span>
    <div>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.short)}</p>${tagList(p.tech.slice(0, 3))}</div>
    </div></button>`;
}
export { card };
