import { esc } from './dom.js';
function tagList(tags) {
  return `<div class="tags">${tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>`;
}
export { tagList };
