import {
  profile,
  news,
  interests,
  education,
  publications,
  service,
  awards,
  talks
} from './data.js';


const $ = selector => document.querySelector(selector);

const text = (tag, value, className = '') => {
  const node = document.createElement(tag);
  node.textContent = value;

  if (className) {
    node.className = className;
  }

  return node;
};

const link = (label, url) => {
  const node = text('a', label);
  node.href = url;
  return node;
};


// Builds the introductory profile and contact links from the profile object.
function renderProfile() {
  document.title = `${profile.name}'s Homepage`;
  $('#wordmark').textContent = profile.name;

  const intro = document.createElement('p');
  intro.className = 'hero-intro';
  intro.append('I am a Ph.D. candidate at ');
  // intro.append(text('strong', profile.affiliation));
  intro.append(profile.affiliation);
  intro.append(', a member of the ');

  const labLink = link(profile.labName, profile.labUrl);
  labLink.target = '_blank';
  labLink.rel = 'noopener noreferrer';

  intro.append(labLink, `, advised by ${profile.advisor}.`);

  const summary = document.createElement('p');
  summary.className = 'hero-summary';
  summary.textContent = profile.bio;

  const contacts = document.createElement('div');
  contacts.className = 'contact';
  const rawEmail = profile.email.replace(' [at] ', '@');
  contacts.append(link('Email', `mailto:${rawEmail}`));
  contacts.append(...profile.links.map(item => link(item.label, item.url)));

  const copy = document.createElement('div');
  copy.append(text('div', profile.role, 'eyebrow'));
  copy.append(text('h1', profile.name));
  copy.append(intro, summary, contacts);

  const portrait = document.createElement('div');
  portrait.className = 'portrait';

  const photo = document.createElement('img');
  photo.src = `${profile.photo}?v=${Date.now()}`;
  photo.alt = `${profile.name} profile photo`;
  photo.loading = 'eager';
  photo.decoding = 'async';
  portrait.append(photo);

  $('#profile').append(copy, portrait);
}


// Turns each news object into one dated list item.
function renderNews() {
  const list = $('#news-list');

  news.forEach(item => {
    const li = document.createElement('li');
    li.append(text('span', item.date, 'date'), text('span', item.text));
    list.append(li);
  });
}

// Turns each research-interest object into a numbered vertical list item.
function renderInterests() {
  const grid = $('#interest-grid');

  interests.forEach((item, index) => {
    const itemElement = document.createElement('li');
    itemElement.className = 'interest';

    const copy = document.createElement('div');
    copy.append(text('h3', item.title), text('p', item.text));

    itemElement.append(
      text('span', String(index + 1).padStart(2, '0'), 'interest-index'),
      copy
    );

    grid.append(itemElement);
  });
}

// Builds the vertical education timeline from the education array.
function renderEducation() {
  const list = $('#education-list');

  education.forEach(item => {
    const li = document.createElement('li');
    li.className = 'education-item';

    const identity = document.createElement('div');
    identity.append(text('h3', item.degree), text('div', item.institution, 'institution'));

    const top = document.createElement('div');
    top.className = 'item-top';
    top.append(identity, text('span', item.years, 'years'));

    li.append(top, text('p', item.detail, 'detail'));
    list.append(li);
  });
}


// Renders authors safely and bolds only entries marked with `me: true` in data.js.
function renderAuthors(authors) {
  const fragment = document.createDocumentFragment();

  authors.forEach((author, index) => {
    if (index) {
      fragment.append(index === authors.length - 1 ? ' and ' : ', ');
    }

    fragment.append(text(author.me ? 'strong' : 'span', author.name));
  });

  fragment.append('.');
  return fragment;
}

// Builds publication rows from the structured data in data.js.
function renderPublications() {
  const list = $('#publication-list');

  publications.forEach(paper => {
    const li = document.createElement('li');
    li.className = 'publication';

    const title = paper.url && paper.url !== '#' && paper.url.trim()
      ? link(paper.title, paper.url)
      : text('span', paper.title);
    title.className = 'publication-title';

    const authors = document.createElement('div');
    authors.className = 'authors';
    authors.append(renderAuthors(paper.authors));

    const venue = document.createElement('div');
    venue.className = 'venue';
    venue.append(text('em', paper.venue), `, ${paper.year}.`);

    const controls = document.createElement('div');
    controls.className = 'paper-links';

    if (paper.award) {
      const awardBadge = document.createElement('span');
      awardBadge.className = 'award-badge';
      awardBadge.textContent = `🏅 ${paper.award}`;
      controls.append(awardBadge);
    }

    const extraLinks = (paper.links || []).filter(item => {
      const isPaperLink = item.label.toLowerCase() === 'paper';
      return !(paper.url && paper.url !== '#' && paper.url.trim() && isPaperLink);
    });
    controls.append(...extraLinks.map(item => link(item.label, item.url)));

    li.append(title, authors, venue, controls);
    list.append(li);
  });
}

// Builds the compact service and teaching list.
function renderService() {
  const list = $('#service-list');

  service.forEach(item => {
    const li = document.createElement('li');
    li.append(text('span', item.role, 'service-role'));
    li.append(' — ', text('span', item.meta, 'service-meta'));
    list.append(li);
  });
}


// Builds the awards list from the additional records stored in data.js.
function renderAwards() {
  const list = $('#awards-list');

  awards.forEach(item => {
    const li = document.createElement('li');
    li.append(text('span', item.title, 'service-role'));
    li.append(' — ', text('span', `${item.date} · ${item.organization}`, 'service-meta'));
    list.append(li);
  });
}

// Builds the talks list and adds a Slides link only when a talk provides one.
function renderTalks() {
  const list = $('#talks-list');

  talks.forEach(item => {
    const li = document.createElement('li');
    const metadata = [item.event, item.location, item.date, item.note]
      .filter(Boolean)
      .join(' · ');

    li.append(text('span', item.title, 'service-role'));
    li.append(' — ', text('span', metadata, 'service-meta'));

    if (item.slides) {
      li.append(' [', link('Slides', item.slides), ']');
    }

    list.append(li);
  });
}


// Called once by main.js to populate every shell container.
export function renderSite() {
  renderProfile();
  renderNews();
  renderInterests();
  renderEducation();
  renderPublications();
  renderService();
  renderAwards();
  renderTalks();

  $('#footer').append(
    text('span', `© ${new Date().getFullYear()} ${profile.name}`),
    text('span', 'Built with plain HTML, CSS & JavaScript.')
  );
}
