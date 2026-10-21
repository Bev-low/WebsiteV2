import { jobs } from '../state.js';
import { jobCard } from '../components/job-card.js';
import { tagList } from '../shared/tags.js';
function experience() {
  return `<div class="section-intro">
    <div>
    <div class="eyebrow">The journey so far</div>
    <h2>Work, learn, repeat.</h2>
    <p>Testing systems, building with teams, and learning how to turn an idea into something that works.</p>
    </div><button class="btn outline" data-resume>View résumé ↗</button>
    </div>
    <div class="experience-layout">
    <div class="timeline">${jobs.map(jobCard).join('')}</div>
    <aside>
    <div class="panel">
    <div class="eyebrow">Education</div>
    <h3>National University<br>of Singapore</h3>
    <p>Bachelor of Computer Engineering<br>August 2023 – May 2027</p>
    <div class="gpa">4.85 <span>/ 5.00 GPA</span>
    </div>
    <p>Dean’s List · AY24/25 Semester 2</p><hr>
    <p>IEEE-HKN member<br>NOC Vietnam · 3 months<br>NOC Greater Bay Area · 6 months<br>Exchange · Norwegian University of Science and Technology</p>
    </div>
    <div class="panel">
    <div class="eyebrow">My technical toolkit</div>
    <h3>Across the stack.</h3>
    <p>Verification & hardware</p>${tagList(['SystemVerilog', 'UVM', 'Verilog', 'Vivado', 'PCB Design'])}<hr>
    <p>Software & systems</p>${tagList(['Python', 'C/C++', 'Java', 'Linux', 'Bash', 'ROS', 'Git', 'React'])}</div>
    <div class="panel">
    <div class="eyebrow">Earlier education</div>
    <h3>Hwa Chong Institution</h3>
    <p>February 2021 – November 2022<br>Physics · Chemistry · Mathematics · Economics<br>GCE A Levels · AAA/B · 85/90</p>
    </div>
    </aside>
    </div>`;
}
export { experience };
