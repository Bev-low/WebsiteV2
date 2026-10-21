let mountainSequence = 0;
function mountains() {
  const mid = ++mountainSequence;
  return `<svg viewBox="0 0 1200 290" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="sky-${mid}" x2="0" y2="1"><stop stop-color="#e9d9b9"/><stop offset="1" stop-color="#d3d9c1"/></linearGradient><linearGradient id="ridge-${mid}" x2="0" y2="1"><stop stop-color="#7f9986"/><stop offset="1" stop-color="#506f61"/></linearGradient></defs><rect width="1200" height="290" fill="url(#sky-${mid})"/><circle cx="957" cy="59" r="31" fill="#f7e7bd"/><path d="M320 205 437 115 508 147 591 63 673 125 729 85 807 154 896 53 970 124 1037 72 1200 176V290H320" fill="#a8b5a2"/><path d="m591 63-30 54 30-13 30 29-14-47z M896 53l-43 74 48-26 38 22z M1037 72l-28 43 28-13 18 10z" fill="#e4e6d1"/><path d="M0 269 117 216 216 243 345 159 443 211 548 146 657 215 754 138 864 211 1000 152 1136 221 1200 190V290H0" fill="url(#ridge-${mid})"/><path d="M0 285 166 255 282 276 421 219 533 259 682 207 774 238 897 184 1018 246 1150 187 1200 218V290H0" fill="#34584c"/><path d="M561 290c70-21 105-42 159-40s107 11 166-14 120-10 152-19" stroke="#bfc7a5" stroke-width="1" fill="none" opacity=".4"/><path d="M0 290 127 279 263 290M992 290l85-57 55 8 68-39V290" fill="#25483e"/><g fill="#203e35"><path d="m1045 232-8 16h6v20h4v-20h6z"/><circle cx="1045" cy="228" r="3"/></g><path d="m1052 248 5 22" stroke="#203e35" stroke-width="1.5"/><g fill="none" stroke="#708879" opacity=".45"><path d="m753 137 27 35-16 24 M895 184l-30 38 M547 147l32 39-13 23"/></g></svg>`;
}
function art(kind) {
  let bg = '#d9dfcc',
    body = '';
  const label = (t, x = 28, y = 34, color = '#485c4a', size = 10) => `<text x="${x}" y="${y}" fill="${color}" font-family="Arial,sans-serif" font-size="${size}" letter-spacing="2">${t}</text>`;
  if (kind === 'chess') {
    bg = '#bfcbb4';
    let squares = '';
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) squares += `<rect x="${128 + c * 18}" y="${43 + r * 18}" width="18" height="18" fill="${(r + c) % 2 ? '#718364' : '#e6e7d4'}"/>`;
    body = `<circle cx="363" cy="9" r="154" fill="#aebda4"/>${label('MAKE YOUR MOVE.')}<g transform="rotate(-9 200 115)"><rect x="119" y="34" width="162" height="162" rx="5" fill="#3d5342"/>${squares}<g fill="#263e30" font-family="Georgia,serif" font-size="27"><text x="146" y="67">♜</text><text x="235" y="86">♞</text><text x="198" y="122">♚</text></g><g fill="#fffcef" font-family="Georgia,serif" font-size="28"><text x="163" y="176">♘</text><text x="218" y="158">♙</text><text x="183" y="193">♔</text></g></g><rect x="310" y="111" width="66" height="35" rx="5" fill="#3c5342"/><text x="321" y="134" fill="#e6ecd7" font-size="16" font-family="monospace">02:48</text><path d="M280 160h27v-30h3" fill="none" stroke="#637956" stroke-width="2"/>${label('TWO BOARDS. ONE GAME.', 25, 202, '#475d46', 8)}`;
  }
  if (kind === 'robot' || kind === 'obstacle') {
    bg = kind === 'robot' ? '#e9d6be' : '#dbc8b3';
    body = `<path d="M0 180 200 80 400 180M0 220 240 100M110 225 315 122M190 225 380 140" fill="none" stroke="#cab89f"/><circle cx="221" cy="116" r="75" fill="none" stroke="#b6a58b" stroke-dasharray="3 6"/><circle cx="221" cy="116" r="101" fill="none" stroke="#c9b798"/>${label(kind === 'robot' ? 'MEET ALEX.' : 'SMALL ROBOT. BIG IDEAS.', 25, 32, '#67573e')}<path d="m129 131 91-47 78 41-91 49z" fill="#53665c"/><path d="m129 131 78 43v24l-78-43z" fill="#394d45"/><path d="m207 174 91-49v24l-91 49z" fill="#71816b"/><g fill="#333d36"><ellipse cx="160" cy="166" rx="16" ry="23" transform="rotate(-24 160 166)"/><ellipse cx="266" cy="164" rx="16" ry="23" transform="rotate(23 266 164)"/></g><path d="m166 113 49-25 44 23-49 25z" fill="#b5c09e"/><rect x="203" y="62" width="35" height="43" rx="5" fill="#eee9d6"/><ellipse cx="220" cy="62" rx="18" ry="8" fill="#51685b"/><rect x="192" y="117" width="33" height="15" rx="3" fill="#db9a6e"/><circle cx="201" cy="124" r="4" fill="#354b3e"/><circle cx="216" cy="124" r="4" fill="#354b3e"/><path d="M219 46V35M204 48l-7-10M234 48l7-10" stroke="#9c6741" stroke-width="2"/>${label('SENSING · THINKING · MOVING', 25, 204, '#79674e', 8)}`;
  }
  if (kind === 'terminal') {
    bg = '#c8d4d3';
    body = `${label('ONE REP AT A TIME.', 25, 30, '#47646a')}<rect x="43" y="48" width="314" height="155" rx="9" fill="#273d3d"/><path d="M43 76h314" stroke="#49605b"/><g fill="#bdc9b4"><circle cx="59" cy="61" r="3"/><circle cx="71" cy="61" r="3"/><circle cx="83" cy="61" r="3"/></g><text x="159" y="65" fill="#bacdc3" font-size="9" font-family="monospace">buffbuddy — cli</text><g font-family="monospace" font-size="11"><text x="62" y="102" fill="#e6ead8">&gt; water add 500</text><text x="62" y="125" fill="#a2c7ac">✓ Hydration logged. Keep going.</text><text x="62" y="153" fill="#c3d5c5">TODAY’S PROGRESS</text><text x="62" y="182" fill="#91bba1">████████░░░░</text><text x="221" y="180" fill="#c7d4c4">1,500 / 2,000 ml</text></g>`;
  }
  if (kind === 'cooling') {
    bg = '#c5d9d6';
    body = `${label('A DIFFERENT DIRECTION.', 25, 31, '#395e5b')}<g stroke="#436967" stroke-width="1.5" fill="none"><path d="m97 71 115-28 98 43v107l-115 25-98-43z"/><path d="m97 71 98 43 115-28M195 114v104"/></g><path d="m105 111 91 41 106-27v64l-107 22-90-39z" fill="#6dada6" opacity=".55"/><g stroke="#4d716a" stroke-width="1.5" fill="#e2e9d8"><path d="m125 73 58 26v83l-58-26z"/><path d="m158 65 58 26v83l-58-26z"/><path d="m191 57 58 26v83l-58-26z"/></g><path d="M334 150v-57m-5 8 5-8 5 8" stroke="#698b7f" fill="none"/><text x="345" y="145" fill="#4d716a" font-size="8" transform="rotate(-90 345 145)" letter-spacing="2">VERTICAL</text>${label('IMMERSION COOLING / CONCEPT', 25, 208, '#436b66', 8)}`;
  }
  if (kind === 'mart' || kind === 'web') {
    bg = kind === 'mart' ? '#dfcbbf' : '#dcdcc8';
    body = `${label(kind === 'mart' ? 'A LITTLE MORE ACCESSIBLE.' : 'A CORNER OF THE INTERNET.', 25, 30, '#6e5848')}<rect x="53" y="49" width="294" height="156" rx="7" fill="#faf8f0"/><path d="M53 69h294" stroke="#dad7c7"/><circle cx="67" cy="59" r="3" fill="#c4866c"/><circle cx="78" cy="59" r="3" fill="#b6b995"/><rect x="68" y="83" width="262" height="39" rx="4" fill="${kind === 'mart' ? '#7c8567' : '#abb99a'}"/><text x="80" y="107" fill="#fffbea" font-family="Georgia,serif" font-size="15">${kind === 'mart' ? 'Good things, within reach.' : 'Build things. Find perspective.'}</text>${[0, 1, 2].map(n => `<rect x="${69 + n * 89}" y="135" width="80" height="42" rx="3" fill="${['#dfc19c', '#b7c1a1', '#c4d0c4'][n]}"/><path d="M${69 + n * 89} 188h63M${69 + n * 89} 195h39" stroke="#aaa895" stroke-width="3"/>`).join('')}`;
  }
  if (kind === 'rtos') {
    bg = '#bfcbd9';
    body = `${label('EVERY MILLISECOND MATTERS.', 25, 31, '#3c536b')}<rect x="74" y="52" width="252" height="139" rx="7" fill="#384c63"/><text x="92" y="78" font-size="10" font-family="monospace" fill="#c8d6e7">CHILD #5 / TASK SCHEDULER</text><g stroke="#596d7d">${[100, 125, 150, 175].map(y => `<path d="M93 ${y}h215"/>`).join('')}</g><g fill="none" stroke-width="3"><path d="M94 111h13V95h35v16h39V95h31v16h44V95h40" stroke="#bbcaa7"/><path d="M94 136h35v-16h37v16h39v-16h35v16h57" stroke="#cfa585"/><path d="M94 161h58v-16h36v16h65v-16h44" stroke="#a6c1cf"/></g>${label('MOTION / LIGHT / SOUND', 25, 211, '#3c536b', 8)}`;
  }
  if (kind === 'maze') {
    bg = '#d1d2b8';
    body = `${label('FIND A WAY THROUGH.', 25, 31, '#535e40')}<g stroke="#6d7a55" stroke-width="10" fill="none" stroke-linejoin="round"><path d="M76 195V55h247v140H112V89h67v70h73V90h34v68M216 55v69M112 159h35M179 195v-36M323 125h-37"/></g><path d="M92 199V72h105v71h73V73h36v105H162V108h-34v30" fill="none" stroke="#eadfbc" stroke-width="3" stroke-dasharray="5 5"/><rect x="115" y="125" width="26" height="21" rx="5" fill="#a9684c"/><circle cx="121" cy="130" r="3" fill="#eee4c9"/><circle cx="135" cy="130" r="3" fill="#eee4c9"/>`;
  }
  return `<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="400" height="225" fill="${bg}"/>${body}</svg>`;
}
export { mountainSequence, mountains, art };
