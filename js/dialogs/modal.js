import { $ } from '../shared/dom.js';
import { state } from '../state.js';
function showModal(title, html, label = 'A closer look') {
  if (!$('#detail').open) state.opener = document.activeElement;
  $('#dialog-label').textContent = label;
  $('#dialog-body').innerHTML = html;
  if (!$('#detail').open) $('#detail').showModal();
  $('#detail').scrollTop = 0;
  document.body.style.overflow = 'hidden';
  $('#close-modal').focus();
}
function closeModal() {
  $('#detail').close();
}
export { showModal, closeModal };
