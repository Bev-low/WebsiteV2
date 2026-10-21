import portfolio from './content.js';
const profile = portfolio.profile;
const projects = portfolio.projects;
const jobs = portfolio.experience;
const media = portfolio.media;
const tabs = [['home', 'Home'], ['projects', 'Projects'], ['experience', 'Experience'], ['films', 'Films & Photos'], ['about', 'About']];
const state = {
  mediaFilter: 'All',
  currentMediaId: null,
  active: 'home',
  filter: 'All',
  query: '',
  sort: 'featured',
  opener: null,
  toastTimer: null
};
export { profile, projects, jobs, media, tabs, state, portfolio };
