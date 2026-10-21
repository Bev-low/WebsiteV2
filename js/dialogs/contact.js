import { externalURL } from '../shared/assets.js';
import { profile } from '../state.js';
import { showModal } from './modal.js';
import { esc } from '../shared/dom.js';
import { icon } from '../shared/icons.js';
function contact() {
  const github = externalURL(profile.github);
  const linkedin = externalURL(profile.linkedin);
  const email = String(profile.email || '').trim();
  const website = externalURL(profile.website);
  showModal('Let’s connect', `<div class="eyebrow" style="color:var(--green)">Good things start with a conversation</div>
    <h2 id="dialog-title">Let’s cross paths.</h2>
    <p class="lead">I’m interested in engineering, cloud infrastructure, and people building useful things. Here’s where you can find me.</p>
    <div class="actions contact-actions">${email ? `<a class="btn primary" href="mailto:${encodeURIComponent(email)}">Email me ↗</a>` : ''}${linkedin ? `<a class="btn outline" href="${esc(linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>` : ''}</div>
    ${github ? `<div class="contact-card">${icon('github', 31)}<div>
    <h3>My work on GitHub</h3>
    <p>Projects, source code, and my public profile.</p>
    </div><a class="btn primary" href="${esc(github)}" target="_blank" rel="noopener noreferrer">Visit GitHub ↗</a>
    </div>` : ''}
    ${website ? `<h3>Keep in touch with this little corner</h3>
    <p class="context">Save or share my portfolio address.</p>
    <div class="copy-field"><input id="portfolio-url" aria-label="Portfolio address" value="${esc(website)}" readonly><button class="btn outline" data-copy>Copy address</button>
    </div>` : ''}`, 'Connect / ' + profile.name);
}
export { contact };
