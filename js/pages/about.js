import { esc } from '../shared/dom.js';
import { profile, portfolio } from '../state.js';
function about() {
  return `<div class="about-grid">
    <section class="about-main">
    <div class="eyebrow" style="color:var(--green)">Hello, I’m ${esc(profile.name.split(" ")[0])}.</div>
    <h2>${portfolio.about.heading.map(esc).join('<br>')}</h2>
    <p class="lead">${esc(portfolio.about.lead)}</p>${portfolio.about.paragraphs.map(text => `<p>${esc(text)}</p>`).join('')}<div class="about-tags">${portfolio.about.interests.map(text => `<span>${esc(text)}</span>`).join('')}</div>
    </section>
    <aside>
    <article class="fieldnote">
    <div class="fieldnote-art"><img src="assets/images/camera_images/Hiking.jpg" alt="A momment outdoors" loading="lazy">
    </div>
    <div class="fieldnote-copy">
    <div class="eyebrow">A note from outside</div>
    <h3>Small human.<br>Big, beautiful world.</h3>
    <p>The outdoors makes my problems feel smaller. I love that feeling of being tiny in a huge landscape. It reminds me to be grateful, look beyond myself, and pay attention to the people around me.</p>
    </div>
    </article>
    <div class="panel" style="margin-top:19px">
    <div class="eyebrow">Currently</div>
    <h3>Learning. Building. Looking ahead.</h3>
    <p>Digital IC verification at Espressif Systems.<br>Finishing my degree at NUS in May 2027.<br>Exploring where engineering and cloud infrastructure could take me next.</p>
    </div>
    </aside>
    </div>
    <div class="values">
    <div class="value"><span class="num">01</span>
    <h3>Stay curious.</h3>
    <p>Ask questions. Understand the problem before reaching for a solution.</p>
    </div>
    <div class="value"><span class="num">02</span>
    <h3>Keep showing up.</h3>
    <p>Confidence grows through the small promises I keep to myself.</p>
    </div>
    <div class="value"><span class="num">03</span>
    <h3>Make it matter.</h3>
    <p>Build with people in mind, and stay close enough to listen.</p>
    </div>
    </div>
    <div class="bottom-note">
    <p>A work in progress.<br>And happy to be one.</p><button class="btn primary" data-contact>Let’s connect ↗</button>
    </div>`;
}
export { about };
