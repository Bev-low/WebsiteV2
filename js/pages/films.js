import { mountains } from '../shared/illustrations.js';
import { mediaGallery } from '../components/gallery.js';
import { icon } from '../shared/icons.js';
function films() {
  const ids = ['buffbuddy', 'e-mini-mart', 'obstacle'];
  return `<div class="film-hero">
    <div class="film-copy">
    <div class="eyebrow">Through another lens</div>
    <h2>A different way<br>of seeing things.</h2>
    <p>I enjoy finding the story in a place, a person, or something we’ve built. A camera gives me another way to connect.</p>
    <div class="film-stats">
    <div><strong>30+</strong><span>videos & marketing materials at Pixta</span>
    </div>
    <div><strong>7+</strong><span>professional shoots led</span>
    </div>
    </div>
    </div>
    <div class="film-illustration">${mountains()}<svg viewBox="0 0 400 300" aria-hidden="true"><g transform="rotate(-8 200 170)"><rect x="100" y="101" width="195" height="125" rx="13" fill="#263e35"/><path d="M125 101v-17h43l10 17" fill="#263e35"/><circle cx="203" cy="165" r="47" fill="#758873"/><circle cx="203" cy="165" r="35" fill="#d8dfc2"/><circle cx="203" cy="165" r="27" fill="#3d5b4c"/><circle cx="210" cy="157" r="12" fill="#8aa697" opacity=".6"/><rect x="260" y="115" width="20" height="10" rx="2" fill="#bfab85"/></g></svg>
    </div>
    </div>${mediaGallery()}<div class="work-strip">
    <div class="section-head">
    <div>
    <h2>Behind the camera at Pixta</h2>
    <p>Hanoi, Vietnam · May – August 2024</p>
    </div><button class="text-link" data-job="pixta">The full story ${icon('arrow', 14)}</button>
    </div>
    <p style="max-width:720px;color:var(--muted);font-size:13px;line-height:1.9">As a Business Incubation Intern, I worked across content strategy, production, and creative direction. I led shoots, coordinated stakeholders, and helped increase production from two to five videos per week.</p>
    </div>`;
}
export { films };
