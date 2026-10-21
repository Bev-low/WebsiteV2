import { $ } from './dom.js';
import { state } from '../state.js';
function toast(message) {
  $('#toast').textContent = message;
  $('#toast').classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 3000);
}
export { toast };
