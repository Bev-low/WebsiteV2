import { showModal } from './modal.js';
import { esc } from '../shared/dom.js';
import { profile, jobs, projects } from '../state.js';
function resume() {
  showModal('Résumé', `<article class="resume">
    <div class="resume-actions" style="margin-bottom:22px"><button class="btn primary" data-print>Print / save as PDF</button>
    </div>
    <h2 id="dialog-title">${esc(profile.name)}</h2>
    <p class="resume-sub">Computer Engineering · National University of Singapore<br>Graduating May 2027 · Singapore · github.com/Bev-low</p>
    <p style="font-size:12px;line-height:1.8">Experience across digital IC verification, robotics testing, embedded integration, and Linux deployment automation. Interested in engineering roles and developing further in cloud infrastructure.</p>
    <h3>Education</h3>
    <div class="resume-job">
    <div class="row"><strong>National University of Singapore</strong><span>August 2023 – May 2027</span>
    </div>
    <p>Bachelor of Computer Engineering · GPA 4.85/5.00</p>
    <p>Dean’s List AY24/25 Semester 2 · IEEE-HKN · NOC Vietnam · NOC Greater Bay Area · NTNU exchange</p>
    </div>
    <h3>Experience</h3>${jobs.map(j => `<section class="resume-job">
    <div class="row"><strong>${j.company}</strong><span>${j.date}</span>
    </div>
    <p>${j.role}${j.place ? ' · ' + j.place : ''}</p>
    <ul>${j.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </section>`).join('')}<h3>Selected projects</h3>${projects.slice(0, 3).map(p => `<div class="resume-job">
    <div class="row"><strong>${p.name}</strong><span>${p.tech.slice(0, 3).join(' · ')}</span>
    </div>
    <p>${p.role}. ${p.contributions[0]}</p>
    </div>`).join('')}<h3>Technical skills</h3>
    <p style="font-size:11px;line-height:1.9">SystemVerilog · UVM · Verilog · Python · C/C++ · Java · Linux · Bash · ROS · Git · React · JavaScript · PCB design</p>
    </article>`, 'Résumé / Beverly Low');
}
export { resume };
