import { $, esc } from './shared/dom.js';
import { profile } from './state.js';
import { icon } from './shared/icons.js';
import { externalURL, safeAsset } from './shared/assets.js';
function applyProfile() {
  $('.title-line h1').textContent = profile.name;
  $('.handle').textContent = `${profile.handle} · ${profile.educationLine} · Class of ${profile.classYear}`;
  $('.profile-bio').innerHTML = `${esc(profile.intro)}<br><span class="more">${esc(profile.subtitle)} </span><button class="text-link" data-page="about">A little more about me <span aria-hidden="true">↗</span></button>`;
  $('#location').innerHTML = icon('pin', 13) + esc(profile.location);
  const githubLink = document.querySelector('.actions a');
  if (externalURL(profile.github)) githubLink.href = profile.github;else githubLink.hidden = true;
  if (safeAsset(profile.avatar)) {
    $('.avatar').insertAdjacentHTML('beforeend', `<img class="avatar-photo" src="${esc(safeAsset(profile.avatar))}" alt="${esc(profile.name)}">`);
    $('.avatar').setAttribute('aria-label', profile.name);
  }
  if (safeAsset(profile.banner)) {
    $('#banner-art').insertAdjacentHTML('beforeend', `<img class="banner-photo" src="${esc(safeAsset(profile.banner))}" alt="">`);
    $('.banner').setAttribute('aria-label', 'Profile banner');
  }
}
export { applyProfile };
