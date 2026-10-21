import { $ } from './dom.js';
import { icon } from './icons.js';
function themeUI() {
  const dark = document.body.classList.contains('dark');
  $('#theme').innerHTML = icon(dark ? 'sun' : 'moon', 19);
  $('#theme').setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
  $('meta[name="theme-color"]').content = dark ? '#171b18' : '#faf9f6';
}
export { themeUI };
