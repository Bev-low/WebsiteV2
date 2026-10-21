import { esc } from '../shared/dom.js';
import { tagList } from '../shared/tags.js';
function jobCard(j, i) {
  return `<details class="job" id="job-${esc(j.id)}" ${i < 2 ? 'open' : ''}>
    <summary>
    <div class="job-title">
    <div class="date">${j.date}</div>
    <h3>${j.company}</h3>
    <div class="role">${j.role}${j.place ? ' · ' + j.place : ''}</div>
    </div><span class="plus" aria-hidden="true">+</span>
    </summary>
    <div class="job-body">
    <ul>${j.points.map(p => `<li>${p}</li>`).join('')}</ul>${tagList(j.tags)}</div>
    </details>`;
}
export { jobCard };
