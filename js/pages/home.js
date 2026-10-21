import { icon } from '../shared/icons.js';
import { projects } from '../state.js';
import { card } from '../components/project-card.js';
function home() {
  return `<div class="featured-intro">
    <article class="current">
    <div class="company-icon">${icon('chip', 29)}</div>
    <div>
    <div class="eyebrow"><span class="status-dot"></span>Currently · Espressif Systems</div>
    <h2>Finding the bugs before the silicon.</h2>
    <p>Digital IC verification · SystemVerilog, UVM & C</p><button class="text-link" data-page="experience">Explore my experience ${icon('arrow', 13)}</button>
    </div>
    </article>
    <article class="personal-note">
    <div class="eyebrow">Beyond the work</div>
    <h3>Engineer.<br>Always a human first.</h3><button class="text-link" data-page="about">Meet the person ${icon('arrow', 13)}</button>
    </article>
    </div>
    <div class="section-head">
    <div>
    <h2>Start here</h2>
    <p>A few things I’ve helped bring to life.</p>
    </div><button class="text-link" data-page="projects">All projects ${icon('arrow', 14)}</button>
    </div>
    <div class="project-grid">${projects.slice(0, 3).map(card).join('')}</div>
    <section class="work-strip">
    <div class="section-head">
    <div>
    <h2>Learning by doing</h2>
    <p>From silicon to robots, and the people in between.</p>
    </div><button class="text-link" data-page="experience">My journey ${icon('arrow', 14)}</button>
    </div>
    <div class="work-grid"><button class="mini-work" data-job="espressif">
    <div class="date">2026 — PRESENT</div>
    <h3>Espressif Systems</h3>
    <p>Digital IC Verification</p><strong>25+</strong><small>directed test cases</small></button><button class="mini-work" data-job="august-robotics">
    <div class="date">2025</div>
    <h3>August Robotics</h3>
    <p>Software Engineering</p><strong>ARM + x86</strong><small>deployment automation</small></button><button class="mini-work" data-job="pixta">
    <div class="date">2024</div>
    <h3>Pixta Vietnam</h3>
    <p>Content & Videography</p><strong>7+</strong><small>professional shoots led</small></button>
    </div>
    </section>
    <div class="bottom-note">
    <p>There’s a person behind every problem worth solving.</p><button class="btn outline" data-page="about">My story ${icon('arrow', 14)}</button>
    </div>`;
}
export { home };
