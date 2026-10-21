const icons = {
  home: 'M3 10l9-7 9 7v10H7V10 M10 20v-6h4v6',
  projects: 'M3 5h7l2 2h9v13H3z',
  experience: 'M8 6V3h8v3 M3 7h18v13H3z M3 12l9 3 9-3 M12 12v5',
  films: 'M4 4h16v16H4z M4 8h16 M8 4l4 4 M14 4l4 4 M10 12l5 3-5 3z',
  about: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2',
  search: 'm21 21-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
  moon: 'M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5',
  sun: 'M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5l1.5 1.5 M5 19l1.5-1.5 M17.5 6.5l1.5-1.5 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  close: 'm6 6 12 12 M6 18 18 6',
  arrow: 'M5 12h14 M14 7l5 5-5 5',
  pin: 'M19 9c0 5-7 12-7 12S5 14 5 9a7 7 0 0 1 14 0 M14.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0',
  chip: 'M6 6h12v12H6z M9 9h6v6H9z M9 2v4 M15 2v4 M9 18v4 M15 18v4 M2 9h4 M2 15h4 M18 9h4 M18 15h4',
  github: 'M9 19c-4 1-4-2-6-2 M15 22v-4c0-1-.3-1.7-.8-2.2 3-.3 5.8-1.5 5.8-6.5 0-1.5-.5-2.6-1.4-3.6.1-.4.6-1.8-.1-3.6 0 0-1.1-.3-3.7 1.4a13 13 0 0 0-6.6 0C5.6 1.8 4.5 2.1 4.5 2.1c-.7 1.8-.2 3.2-.1 3.6A5.2 5.2 0 0 0 3 9.3c0 5 2.8 6.2 5.8 6.5-.4.4-.8 1.1-.8 2.2v4'
};
function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${icons[name] || icons.projects}"/></svg>`;
}
export { icons, icon };
