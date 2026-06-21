(() => {
  const data = window.PORTFOLIO_DATA;
  const profile = data?.profile;

  const icon = (name, extra = '') => {
    const family = name.includes('fa-brands') ? '' : 'fa-solid';
    return `<i class="${family} ${name} ${extra}" aria-hidden="true"></i>`;
  };

  const cleanId = value => String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const acAnchor = code => `ac-${cleanId(code)}`;
  const reflectionAnchor = code => `reflexion-${cleanId(code)}`;
  const temporaryTextMarkers = [
    String.raw`\u00e0\s+(?:compl\u00e9ter|confirmer|ajouter|pr\u00e9ciser)`,
    String.raw`preuve(?:s)?\s+(?:\u00e0\s+ajouter|\u00e0\s+compl\u00e9ter|manquante?s?)`,
    String.raw`source r\u00e9ellement utilis\u00e9e`,
    String.raw`non prouv[\u00e9e]`,
    String.raw`r\u00e9sultat exp\u00e9rimental`,
    String.raw`retour personnel`,
    'place' + 'holder',
    String.raw`sortie r\u00e9elle \u00e0 compl\u00e9ter`,
    String.raw`validation \u00e0 compl\u00e9ter`,
    String.raw`reste \u00e0 compl\u00e9ter`,
    String.raw`doit \u00eatre compl\u00e9t\u00e9`,
    String.raw`doivent \u00eatre compl\u00e9t\u00e9s`
  ];
  const temporaryTextPattern = new RegExp(`(?:${temporaryTextMarkers.join('|')})`, 'i');

  function isRealText(value) {
    return typeof value === 'string' && value.trim().length > 0 && !temporaryTextPattern.test(value);
  }

  function realText(value) {
    return isRealText(value) ? value : '';
  }

  function cleanTextList(items = []) {
    return (items || []).filter(isRealText);
  }

  function hasAvailableEvidence(sae) {
    return (sae?.evidence || []).some(item => item.status === 'available');
  }

  function availableEvidenceItems(sae) {
    return (sae?.evidence || []).filter(item => item.status === 'available');
  }

  function currentPage() {
    return document.body.dataset.page || 'home';
  }

  function findCompetence(slug) {
    return data.competences.find(item => item.slug === slug);
  }

  function findAc(code) {
    for (const competence of data.competences) {
      const ac = competence.acs.find(item => item.code === code);
      if (ac) return { competence, ac };
    }
    return null;
  }

  function navMarkup() {
    const page = currentPage();
    const links = [
      { href: 'index.html', label: 'Accueil', active: page === 'home' },
      { href: 'competences.html', label: 'Compétences', active: ['competences', 'competence', 'sae'].includes(page) },
      { href: 'a-propos.html', label: 'À propos', active: page === 'about' },
      { href: 'cv.html', label: 'CV', active: page === 'cv' },
      { href: 'index.html#contact', label: 'Contact', active: false }
    ];

    return `
      <nav class="navbar" aria-label="Navigation principale">
        <div class="container nav-inner">
          <a class="nav-logo" href="index.html" aria-label="Retour à l'accueil">Adam<span>TM.</span></a>
          <button class="nav-toggle" type="button" aria-label="Ouvrir le menu" aria-controls="primary-navigation" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <ul class="nav-menu" id="primary-navigation">
            ${links.map(link => `<li><a href="${link.href}" ${link.active ? 'class="active" aria-current="page"' : ''}>${link.label}</a></li>`).join('')}
          </ul>
        </div>
      </nav>`;
  }

  function footerMarkup() {
    return `
      <footer id="contact" class="footer footer-pro">
        <div class="footer-accent-line" aria-hidden="true"></div>
        <div class="container footer-pro-inner">
          <div class="footer-pro-main">
            <div>
              <p class="eyebrow">Contact</p>
              <h2>Construire des infrastructures fiables, apprendre sur le terrain.</h2>
              <p>Portfolio BUT2 Réseaux & Télécommunications — parcours ROM, enrichi par une expérience d’alternance dans les réseaux structurants.</p>
            </div>
            <a class="btn btn-primary" href="mailto:${profile.email}">${icon('fa-envelope')} Me contacter</a>
          </div>
          <div class="footer-pro-columns">
            <nav class="footer-pro-col" aria-label="Navigation secondaire">
              <h3>Navigation</h3>
              <a href="index.html">Accueil</a>
              <a href="competences.html">Compétences</a>
              <a href="a-propos.html">À propos</a>
              <a href="cv.html">CV</a>
              <a href="#contact">Contact</a>
            </nav>
            <div class="footer-pro-col">
              <h3>Domaines</h3>
              <span>Réseaux</span>
              <span>Télécommunications</span>
              <span>Transmission</span>
              <span>Fibre optique</span>
              <span>Réseaux opérateurs</span>
              <span>Cybersécurité</span>
            </div>
            <div class="footer-pro-col">
              <h3>Contact</h3>
              <a href="mailto:${profile.email}">${icon('fa-envelope')} Email</a>
              <a target="_blank" rel="noreferrer" href="${profile.linkedin}">${icon('fa-brands fa-linkedin')} LinkedIn</a>
              <a target="_blank" rel="noreferrer" href="${profile.github}">${icon('fa-brands fa-github')} GitHub</a>
            </div>
          </div>
          <div class="footer-pro-bottom">
            <span>© 2026 Adam Tmimi</span>
            <span>BUT Réseaux & Télécommunications — IUT de Béthune</span>
            <div class="footer-brand-mini" aria-label="Logos Orange et IUT de Béthune">
              <img src="assets/brand/orange-logo.png" alt="Logo Orange" loading="eager">
              <img src="assets/brand/iut-bethune-logo.png" alt="Logo IUT de Béthune" loading="eager">
            </div>
          </div>
        </div>
      </footer>`;
  }

  function proofStatusMarkup(sae) {
    const available = availableEvidenceItems(sae).length;
    if (available > 0) {
      const label = available > 1 ? `${available} éléments techniques disponibles` : 'Documents et traces disponibles';
      return `<span class="proof-status proof-status-ready">${icon('fa-circle-check')} ${label}</span>`;
    }
    return '';
  }

  function saeMarkup(saeId, ac, competence) {
    const sae = data.saes[saeId];
    if (!sae) return '';
    const href = `${sae.page}?from=${encodeURIComponent(competence.slug)}&ac=${encodeURIComponent(ac.code)}`;
    return `
      <li>
        <a class="sae-chip" href="${href}" aria-label="Ouvrir la page détaillée ${sae.code}">
          <span class="semester semester-${sae.semester.toLowerCase()}">${sae.semester}</span>
          <span class="sae-chip-body">
            <strong>${sae.code}</strong>
            <small>${sae.title}</small>
            ${proofStatusMarkup(sae)}
            <span class="sae-view-link">Voir la SAÉ</span>
          </span>
          <span class="sae-chip-arrow">${icon('fa-arrow-right')}</span>
        </a>
      </li>`;
  }

  function competenceCard(competence, index) {
    const saeIds = new Set(competence.acs.flatMap(ac => ac.saeIds));
    return `
      <a class="competence-card accent-${competence.accent} reveal-on-scroll" href="${competence.slug}.html" style="--delay:${index * 0.06}s">
        <div class="competence-card-top">
          <span class="competence-code">${competence.code}</span>
          <span class="competence-icon">${icon(competence.icon)}</span>
        </div>
        <h3>${competence.shortTitle}</h3>
        <p>${competence.description}</p>
        <div class="competence-stats"><span>${competence.acs.length} AC</span><span>${saeIds.size} SAÉ mobilisées</span></div>
        <span class="card-link">Explorer la compétence ${icon('fa-arrow-right')}</span>
      </a>`;
  }

  function renderHome() {
    const grid = document.getElementById('competence-grid');
    if (!grid || !data) return;
    grid.innerHTML = data.competences.map(competenceCard).join('');
  }

  function renderCompetencesPage() {
    const root = document.getElementById('competences-root');
    if (!root || !data) return;
    root.innerHTML = `
      <section class="competences-hero">
        <div class="container">
          <p class="eyebrow">Portfolio BUT2 ROM</p>
          <h1>Compétences</h1>
        <p class="lead">Les cinq compétences sont organisées selon la hiérarchie attendue : compétence, apprentissages critiques, pages SAÉ associées, traces puis analyse réflexive.</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-heading section-heading-left">
            <p class="eyebrow">Accès aux dossiers</p>
            <h2>Choisir une compétence.</h2>
            <p>Chaque compétence ouvre ses AC sous forme d’accordéons. Les SAÉ restent accessibles uniquement depuis les AC concernés.</p>
          </div>
          <div class="competence-grid">${data.competences.map(competenceCard).join('')}</div>
        </div>
      </section>`;
  }

  function acEvidenceStatus(ac) {
    const evidenceCount = ac.saeIds.reduce((count, id) => count + availableEvidenceItems(data.saes[id]).length, 0);
    if (!evidenceCount) return '';
    return evidenceCount > 1 ? `${evidenceCount} éléments techniques disponibles` : 'Documents et traces disponibles';
  }

  function acMarkup(ac, index, competence) {
    const panelId = `panel-${cleanId(ac.code)}`;
    const titleId = `title-${cleanId(ac.code)}`;
    const open = index === 0;
    const evidenceStatus = acEvidenceStatus(ac);
    const evidenceText = realText(ac.evidence);
    const saeItems = ac.saeIds.map(saeId => saeMarkup(saeId, ac, competence)).filter(Boolean).join('');
    const reflectionText = realText(ac.reflection);
    const contentSections = [
      saeItems ? `<section><div class="micro-title">SAÉ associées</div><ul class="sae-list">${saeItems}</ul></section>` : '',
      reflectionText ? `<section class="reflection-box"><div class="micro-title">Réflexion liée à l’AC</div><p>${reflectionText}</p></section>` : ''
    ].filter(Boolean).join('');
    return `
      <article class="ac-card reveal-on-scroll" id="${acAnchor(ac.code)}" data-ac-code="${ac.code}" style="--delay:${Math.min(index * 0.035, 0.32)}s">
        <button class="ac-toggle" type="button" aria-expanded="${open}" aria-controls="${panelId}">
          <span class="ac-code">${ac.code}</span>
          <span class="ac-title" id="${titleId}">${ac.title}</span>
          <span class="ac-open-icon">${icon('fa-plus')}</span>
        </button>
        <div class="ac-panel" id="${panelId}" role="region" aria-labelledby="${titleId}" ${open ? '' : 'hidden'}>
          <p class="ac-description">${ac.description}</p>
          ${evidenceStatus ? `<div class="ac-status-row">
            <span>${icon('fa-folder-open')} Statut des preuves</span>
            <strong>${acEvidenceStatus(ac)}</strong>
          </div>` : ''}
          ${contentSections ? `<div class="ac-content-grid">${contentSections}</div>` : ''}
          ${evidenceText ? `<div class="evidence-box">
            ${icon('fa-folder-open')}<div><strong>Éléments de preuve à intégrer</strong><p>${ac.evidence}</p></div>
          </div>` : ''}
        </div>
      </article>`;
  }

  function renderCompetence() {
    const root = document.getElementById('competence-root');
    if (!root || !data) return;
    const slug = document.body.dataset.competence;
    const competence = findCompetence(slug);
    if (!competence) {
      root.innerHTML = '<div class="container empty-state"><h1>Compétence introuvable</h1><a class="btn btn-primary" href="competences.html">Retour aux compétences</a></div>';
      return;
    }

    const allSaeIds = [...new Set(competence.acs.flatMap(ac => ac.saeIds))];
    root.innerHTML = `
      <section class="competence-hero accent-${competence.accent}">
        <div class="container">
          <a class="back-link" href="competences.html">${icon('fa-arrow-left')} Retour aux compétences</a>
          <div class="competence-hero-grid">
            <div>
              <p class="eyebrow">${competence.code} · Parcours ROM</p>
              <h1>${competence.title}</h1>
              <p class="lead">${competence.description}</p>
              <span class="level-badge">${competence.level}</span>
            </div>
            <aside class="competence-hero-panel">
              <div><strong>${competence.acs.length}</strong><span>apprentissages critiques</span></div>
              <div><strong>${allSaeIds.length}</strong><span>pages SAÉ liées</span></div>
              <div><strong>S3 + S4</strong><span>périmètre du portfolio</span></div>
            </aside>
          </div>
        </div>
      </section>
      <section class="ac-section">
        <div class="container">
          <div class="section-heading section-heading-left">
            <p class="eyebrow">Dossier de compétence</p>
            <h2>Apprentissages critiques</h2>
            <p>Chaque accordéon présente les SAÉ associées selon les données centrales du portfolio. Une carte SAÉ ouvre une page dédiée, réutilisée depuis tous les AC concernés.</p>
          </div>
          <div class="ac-list">${competence.acs.map((ac, index) => acMarkup(ac, index, competence)).join('')}</div>
        </div>
      </section>`;
  }

  function resolveSaeContext(sae) {
    const params = new URLSearchParams(window.location.search);
    const requestedSlug = params.get('from');
    const requestedAc = params.get('ac');
    let competence = requestedSlug && sae.competenceSlugs.includes(requestedSlug) ? findCompetence(requestedSlug) : null;
    let acMatch = requestedAc && sae.linkedACs.includes(requestedAc) ? findAc(requestedAc) : null;

    if (!competence && acMatch) competence = acMatch.competence;
    if (!acMatch && competence) {
      const ac = competence.acs.find(item => sae.linkedACs.includes(item.code));
      if (ac) acMatch = { competence, ac };
    }
    if (!competence) competence = findCompetence(sae.competenceSlugs[0]);
    if (!acMatch) acMatch = findAc(sae.linkedACs[0]);

    return { competence: competence || acMatch?.competence, ac: acMatch?.ac };
  }

  function contextBackHref(competence, ac) {
    if (!competence || !ac) return 'competences.html';
    return `${competence.slug}.html#${acAnchor(ac.code)}`;
  }

  function renderPillList(items) {
    const source = cleanTextList(items);
    return source.map(item => `<span class="data-pill">${item}</span>`).join('');
  }

  function renderDetailList(items) {
    const source = cleanTextList(items);
    if (!source.length) return '';
    return `<ul class="detail-list">${source.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }

  function renderListBlock(title, items) {
    const list = renderDetailList(items);
    return list ? `<div class="context-block"><strong>${title}</strong>${list}</div>` : '';
  }

  function renderTextBlock(title, value) {
    if (!isRealText(value)) return '';
    return `<div class="context-block"><strong>${title}</strong><p>${value}</p></div>`;
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[character]);
  }

  function renderLinkList(links = []) {
    const cleanLinks = links.filter(link => isRealText(link.label) && isRealText(link.href));
    if (!cleanLinks.length) return '';
    return `
      <div class="proof-links">
        ${cleanLinks.map(link => `<a class="proof-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} ${icon('fa-arrow-up-right-from-square')}</a>`).join('')}
      </div>`;
  }

  function renderEvidenceImages(images = []) {
    const cleanImages = images.filter(image => isRealText(image.src));
    if (!cleanImages.length) return '';
    return `
      <div class="proof-images">
        ${cleanImages.map(image => `<a href="${escapeHtml(image.src)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || '')}" loading="lazy"></a>`).join('')}
      </div>`;
  }

  function renderCodeSnippet(code) {
    if (!isRealText(code)) return '';
    return `<pre class="proof-code"><code>${escapeHtml(code)}</code></pre>`;
  }

  function renderTimeline(items) {
    const source = cleanTextList(items);
    if (!source.length) return '';
    return `
      <ol class="timeline-list">
        ${source.map((item, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><p>${item}</p></li>`).join('')}
      </ol>`;
  }

  function renderArchitecture(items = []) {
    const cleanItems = items.filter(item => isRealText(item.label) && isRealText(item.value));
    if (!cleanItems.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Architecture</p>
        <h2>Architecture et éléments techniques</h2>
        <div class="tech-grid">
          ${cleanItems.map(item => `<div class="tech-card"><strong>${item.label}</strong><p>${item.value}</p></div>`).join('')}
        </div>
      </article>`;
  }

  function renderTests(items = []) {
    const cleanItems = items
      .map(test => ({
        title: realText(test.title),
        objective: realText(test.objective),
        result: realText(test.result),
        proof: realText(test.proof),
        conclusion: realText(test.conclusion)
      }))
      .filter(test => test.title && test.objective && test.result && test.conclusion);
    if (!cleanItems.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Validation</p>
        <h2>Tests et validation</h2>
        <div class="test-grid">
          ${cleanItems.map(test => `
            <article class="test-card">
              <h3>${test.title}</h3>
              <div><strong>Objectif</strong><p>${test.objective}</p></div>
              <div><strong>Résultat</strong><p>${test.result}</p></div>
              ${test.proof ? `<div><strong>Trace</strong><p>${test.proof}</p></div>` : ''}
              <div><strong>Conclusion</strong><p>${test.conclusion}</p></div>
            </article>`).join('')}
        </div>
      </article>`;
  }

  function renderTransmissionChain(chain = [], note = '') {
    const cleanChain = chain.filter(item => isRealText(item.label) && isRealText(item.detail));
    if (!cleanChain.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Architecture HF</p>
        <h2>Chaîne de transmission audio/vidéo</h2>
        <div class="rf-chain">
          ${cleanChain.map((item, index) => `
            <div class="rf-node">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <strong>${item.label}</strong>
              <p>${item.detail}</p>
            </div>`).join('')}
        </div>
        ${isRealText(note) ? `<p class="chain-note">${note}</p>` : ''}
      </article>`;
  }

  function renderSourceAndTools(sae) {
    const sources = (sae.sourceOptions || []).filter(option => isRealText(option.title) && isRealText(option.description) && isRealText(option.status));
    const tools = (sae.projectTools || []).filter(tool => isRealText(tool.name) && isRealText(tool.detail) && isRealText(tool.status));
    const hasSources = sources.length;
    const hasTools = tools.length;
    if (!hasSources && !hasTools) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Choix techniques</p>
        <h2>Choix de la source et outils</h2>
        ${isRealText(sae.sourceUsed) ? `<div class="source-used">${sae.sourceUsed}</div>` : ''}
        ${hasSources ? `
          <div class="source-grid">
            ${sources.map(option => `
              <div class="source-card">
                <span>${option.label}</span>
                <h3>${option.title}</h3>
                <p>${option.description}</p>
                <strong>${option.status}</strong>
              </div>`).join('')}
          </div>` : ''}
        ${hasTools ? `
          <div class="tool-detail-grid">
            ${tools.map(tool => `
              <div class="tool-detail-card">
                <strong>${tool.name}</strong>
                <p>${tool.detail}</p>
                <span>${tool.status}</span>
              </div>`).join('')}
          </div>` : ''}
      </article>`;
  }

  function renderCodecBandwidth(config) {
    if (!config) return '';
    const items = [
      ['Codec vidéo choisi', config.videoCodec],
      ['Codec audio choisi', config.audioCodec],
      ['Débit cible', config.targetBitrate],
      ['Bande passante estimée', config.estimatedBandwidth],
      ['Compromis qualité / débit / occupation spectrale', config.tradeoff]
    ].filter(([, value]) => isRealText(value));
    if (!items.length && !isRealText(config.explanation)) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Codecs et bande passante</p>
        <h2>Codec, débit et bande passante</h2>
        ${isRealText(config.explanation) ? `<p class="section-intro">${config.explanation}</p>` : ''}
        <div class="metric-grid">
          ${items.map(([label, value]) => `<div class="metric-card"><span>${label}</span><strong>${value}</strong></div>`).join('')}
        </div>
      </article>`;
  }

  function renderImplementationSteps(config = []) {
    const steps = (Array.isArray(config) ? config : (config.steps || []))
      .map(step => ({
        title: realText(step.title),
        objective: realText(step.objective),
        tools: realText(step.tools),
        result: realText(step.result),
        proof: realText(step.proof)
      }))
      .filter(step => step.title && step.objective && step.tools && step.result);
    if (!steps.length) return '';
    const eyebrow = Array.isArray(config) ? 'GNU Radio' : (config.eyebrow || 'Mise en œuvre');
    const title = Array.isArray(config) ? 'Mise en œuvre avec GNU Radio' : (config.title || 'Mise en œuvre technique');
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">${eyebrow}</p>
        <h2>${title}</h2>
        <div class="implementation-list">
          ${steps.map((step, index) => `
            <article class="implementation-step">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>${step.title}</h3>
                <dl>
                  <div><dt>Objectif</dt><dd>${step.objective}</dd></div>
                  <div><dt>Outils</dt><dd>${step.tools}</dd></div>
                  <div><dt>Résultat</dt><dd>${step.result}</dd></div>
                  ${step.proof ? `<div><dt>Trace</dt><dd>${step.proof}</dd></div>` : ''}
                </dl>
              </div>
            </article>`).join('')}
        </div>
      </article>`;
  }

  function renderSpectralAnalysis(analysis) {
    if (!analysis) return '';
    const rows = [
      ['Fréquence porteuse', analysis.carrierFrequency],
      ['Largeur de bande mesurée', analysis.measuredBandwidth],
      ['Puissance d’émission', analysis.txPower],
      ['Observations', analysis.observations]
    ].filter(([, value]) => isRealText(value));
    if (!rows.length && !analysis.image) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Analyse spectrale</p>
        <h2>Analyse spectrale de l’émission HF</h2>
        ${isRealText(analysis.explanation) ? `<p class="section-intro">${analysis.explanation}</p>` : ''}
        <div class="spectral-grid">
          <div class="spectral-values">
            ${rows.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('')}
          </div>
          <div class="spectral-proof">
            ${analysis.image ? `<a href="${escapeHtml(analysis.image.src)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(analysis.image.src)}" alt="${escapeHtml(analysis.image.alt || '')}" loading="lazy"></a>` : ''}
          </div>
        </div>
      </article>`;
  }

  function renderLteTopology(topology) {
    if (!topology?.lanes?.length) return '';
    const lanes = topology.lanes
      .map(lane => ({
        ...lane,
        nodes: (lane.nodes || []).filter(node => isRealText(node.title) && isRealText(node.detail))
      }))
      .filter(lane => isRealText(lane.title) && lane.nodes.length);
    if (!lanes.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Architecture LTE</p>
        <h2>${realText(topology.title) || 'Architecture de déploiement'}</h2>
        ${isRealText(topology.description) ? `<p class="section-intro">${topology.description}</p>` : ''}
        <div class="lte-topology">
          ${lanes.map(lane => `
            <section class="lte-lane">
              <div class="lte-lane-heading">
                <span>${icon(lane.icon || 'fa-server')}</span>
                <div><strong>${lane.title}</strong><small>${lane.subtitle || ''}</small></div>
              </div>
              <div class="lte-node-list">
                ${lane.nodes.map(node => `
                  <div class="lte-node">
                    <span>${node.badge}</span>
                    <strong>${node.title}</strong>
                    <p>${node.detail}</p>
                  </div>`).join('')}
              </div>
            </section>`).join('')}
        </div>
        ${isRealText(topology.note) ? `<p class="chain-note">${topology.note}</p>` : ''}
      </article>`;
  }

  function renderToipTopology(topology) {
    if (!topology?.nodes?.length) return '';
    const nodes = topology.nodes.filter(node => isRealText(node.label) && isRealText(node.detail));
    if (!nodes.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Architecture ToIP</p>
        <h2>${realText(topology.title) || 'Architecture ToIP'}</h2>
        ${isRealText(topology.description) ? `<p class="section-intro">${topology.description}</p>` : ''}
        <div class="toip-diagram" aria-label="Schéma logique ToIP">
          ${nodes.map(node => `
            <div class="toip-node ${node.kind || ''}">
              <span>${icon(node.icon || 'fa-phone')}</span>
              <strong>${node.label}</strong>
              <small>${node.detail}</small>
            </div>`).join('')}
        </div>
        ${cleanTextList(topology.flows).length ? `<div class="toip-flow-list">${cleanTextList(topology.flows).map(flow => `<span>${flow}</span>`).join('')}</div>` : ''}
        ${topology.image ? `<div class="topology-proof"><a href="${escapeHtml(topology.image.src)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(topology.image.src)}" alt="${escapeHtml(topology.image.alt || '')}" loading="lazy"></a></div>` : ''}
      </article>`;
  }

  function renderConfigCards(cards = []) {
    const cleanCards = cards.filter(card => isRealText(card.title) && isRealText(card.description));
    if (!cleanCards.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Configuration</p>
        <h2>Configuration du service Asterisk</h2>
        <div class="config-card-grid">
          ${cleanCards.map(card => `
            <section class="config-card">
              <div class="config-card-top">
                <span>${icon(card.icon || 'fa-file-code')}</span>
                <h3>${card.title}</h3>
              </div>
              <p>${card.description}</p>
              ${renderDetailList(card.points, [])}
              ${renderCodeSnippet(card.code)}
              ${card.links ? renderLinkList(card.links) : ''}
            </section>`).join('')}
        </div>
      </article>`;
  }

  function renderServiceCards(cards = []) {
    const cleanCards = cards.filter(card => isRealText(card.title) && isRealText(card.description));
    if (!cleanCards.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Services</p>
        <h2>Services déployés</h2>
        <div class="service-card-grid">
          ${cleanCards.map(card => `
            <section class="service-card">
              <span>${icon(card.icon || 'fa-phone-volume')}</span>
              <h3>${card.title}</h3>
              <p>${card.description}</p>
              ${renderDetailList(card.points, [])}
              ${isRealText(card.status) ? `<strong>${card.status}</strong>` : ''}
            </section>`).join('')}
        </div>
      </article>`;
  }

  function renderProvisioningComparison(items = []) {
    const cleanItems = items.filter(item => isRealText(item.title) && isRealText(item.description));
    if (!cleanItems.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Terminaux</p>
        <h2>Provisioning Fanvil et Cisco</h2>
        <div class="provisioning-grid">
          ${cleanItems.map(item => `
            <section class="provisioning-card">
              <span>${icon(item.icon || 'fa-phone')}</span>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              ${renderDetailList(item.points, [])}
              ${item.image ? `<a class="provisioning-image" href="${escapeHtml(item.image.src)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(item.image.src)}" alt="${escapeHtml(item.image.alt || '')}" loading="lazy"></a>` : ''}
            </section>`).join('')}
        </div>
      </article>`;
  }

  function renderSecurityAudit(audit) {
    if (!audit) return '';
    const sections = ['risks', 'analysis', 'countermeasures', 'validation']
      .filter(key => audit[key] && isRealText(audit[key].title) && cleanTextList(audit[key].items).length);
    if (!sections.length && !audit.image) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Sécurité</p>
        <h2>Sécurité des communications ToIP</h2>
        ${isRealText(audit.description) ? `<p class="section-intro">${audit.description}</p>` : ''}
        <div class="security-audit-grid">
          ${sections.map(key => `
            <section class="security-audit-card">
              <h3>${audit[key].title}</h3>
              ${renderDetailList(audit[key].items, [])}
            </section>`).join('')}
        </div>
        ${audit.image ? `<div class="security-proof"><a href="${escapeHtml(audit.image.src)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(audit.image.src)}" alt="${escapeHtml(audit.image.alt || '')}" loading="lazy"></a></div>` : ''}
      </article>`;
  }

  function renderTechnicalParameters(parameters = []) {
    const cleanParameters = parameters.filter(item => isRealText(item.label) && isRealText(item.value));
    if (!cleanParameters.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Paramètres</p>
        <h2>Paramètres techniques retenus</h2>
        <div class="parameter-grid">
          ${cleanParameters.map(item => `
            <div class="parameter-card">
              <span>${item.label}</span>
              <strong>${item.value}</strong>
              ${isRealText(item.note) ? `<p>${item.note}</p>` : ''}
            </div>`).join('')}
        </div>
      </article>`;
  }

  function renderStatusResults(items = []) {
    const cleanItems = items.filter(item => item.status !== 'missing' && isRealText(item.title) && isRealText(item.result));
    if (!cleanItems.length) return '';
    const labels = {
      validated: 'Validé',
      partial: 'Partiel',
      blocked: 'Non finalisé'
    };
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Résultats</p>
        <h2>Tests et résultats observés</h2>
        <div class="status-result-grid">
          ${cleanItems.map(item => `
            <article class="status-result-card status-${item.status || 'missing'}">
              <div class="status-result-top">
                <span>${labels[item.status] || 'Documenté'}</span>
                ${icon(item.icon || 'fa-signal')}
              </div>
              <h3>${item.title}</h3>
              <p>${item.result}</p>
              ${isRealText(item.proof) ? `<small>${item.proof}</small>` : ''}
            </article>`).join('')}
        </div>
      </article>`;
  }

  function renderCommandBlocks(blocks = []) {
    const cleanBlocks = blocks.filter(block => isRealText(block.title) && isRealText(block.description) && isRealText(block.command));
    if (!cleanBlocks.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Commandes</p>
        <h2>Commandes et scripts utilisés</h2>
        <div class="command-grid">
          ${cleanBlocks.map(block => `
            <article class="command-card">
              <h3>${block.title}</h3>
              <p>${block.description}</p>
              <pre><code>${escapeHtml(block.command)}</code></pre>
              ${isRealText(block.proof) ? `<span>${block.proof}</span>` : ''}
            </article>`).join('')}
        </div>
      </article>`;
  }

  function renderLimitations(items = []) {
    const cleanItems = items.filter(item => isRealText(item.title) && isRealText(item.text));
    if (!cleanItems.length) return '';
    return `
      <article class="sae-section-panel limitation-panel">
        <p class="eyebrow">Limites</p>
        <h2>Limites observées</h2>
        <div class="limitation-grid">
          ${cleanItems.map(item => `
            <div class="limitation-card">
              <strong>${item.title}</strong>
              <p>${item.text}</p>
            </div>`).join('')}
        </div>
      </article>`;
  }

  function renderExtraActions(actions = []) {
    const cleanActions = actions.filter(action => isRealText(action.label) && isRealText(action.href));
    if (!cleanActions.length) return '';
    return `
      <div class="sae-extra-actions">
        ${cleanActions.map(action => `<a class="btn ${action.variant === 'primary' ? 'btn-primary' : 'btn-secondary'}" href="${escapeHtml(action.href)}">${action.icon ? icon(action.icon) : ''} ${escapeHtml(action.label)}</a>`).join('')}
      </div>`;
  }

  function evidenceGrid(sae) {
    const customEvidence = new Map(availableEvidenceItems(sae).map(item => [item.type, item]));
    const evidenceTypes = sae.evidenceTypes || data.evidenceTypes;
    return evidenceTypes.map(type => {
      const evidence = customEvidence.get(type.id);
      if (!evidence) return '';
      const label = realText(evidence.label) || 'Documents et traces disponibles';
      const body = realText(evidence.description);
      return `
        <article class="proof-card proof-card-ready">
          <span class="proof-icon">${icon(type.icon)}</span>
          <div>
            <h3>${type.title}</h3>
            ${body ? `<p>${body}</p>` : ''}
            ${renderEvidenceImages(evidence?.images)}
            ${renderCodeSnippet(evidence?.code)}
            ${evidence?.links ? renderLinkList(evidence.links) : ''}
            ${evidence?.url ? `<a class="proof-link" href="${evidence.url}" target="_blank" rel="noreferrer">Ouvrir la preuve ${icon('fa-arrow-up-right-from-square')}</a>` : ''}
            <span class="proof-empty proof-available">${label}</span>
          </div>
        </article>`;
    }).join('');
  }

  function renderEvidenceSection(sae) {
    const grid = evidenceGrid(sae).trim();
    if (!grid) return '';
    return `
      <article class="sae-section-panel" id="sae-proofs">
        <p class="eyebrow">Traces</p>
        <h2>Traces et preuves</h2>
        <div class="proof-grid">${grid}</div>
      </article>`;
  }

  function reflectionField(label, value) {
    return isRealText(value) ? `<div class="reflection-field"><strong>${label}</strong><p>${value}</p></div>` : '';
  }

  function reflectionBlock(sae, code) {
    const match = findAc(code);
    const ac = match?.ac;
    const competence = match?.competence;
    const custom = sae.reflections?.[code] || {};
    const fields = [
      reflectionField('Ce que j’ai fait', custom.fait),
      reflectionField('Pourquoi je l’ai fait', custom.pourquoi),
      reflectionField('Comment je l’ai fait', custom.comment),
      reflectionField('Les outils et méthodes utilisés', custom.outils),
      reflectionField('Mes difficultés', custom.difficultes),
      reflectionField('Ce qui a fonctionné', custom.fonctionne),
      reflectionField('Ce qui n’a pas fonctionné', custom.pasFonctionne),
      reflectionField('Ce que j’en ai appris', custom.appris),
      reflectionField('Ce que je ferais autrement', custom.autrement),
      reflectionField('Comment cela montre ma progression', custom.progression)
    ].filter(Boolean);
    if (!fields.length) return '';

    return `
      <article class="sae-reflection-card" id="${reflectionAnchor(code)}">
        <div class="reflection-card-top">
          <span class="ac-code">${code}</span>
          <span>${competence?.shortTitle || 'Compétence'}</span>
        </div>
        <h3>${ac?.title || 'Apprentissage critique'}</h3>
        <div class="reflection-grid">
          ${fields.join('')}
        </div>
      </article>`;
  }

  function renderReflectionSection(sae) {
    const cards = sae.linkedACs.map(code => reflectionBlock(sae, code)).filter(Boolean).join('');
    if (!cards) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Analyse réflexive BUT2</p>
        <h2>Analyse par apprentissage critique</h2>
        <p class="section-intro">Chaque bloc analyse les choix, les validations et la progression personnelle à partir des traces disponibles.</p>
        <div class="sae-reflection-list">${cards}</div>
      </article>`;
  }

  function acBadges(sae) {
    return sae.linkedACs.map(code => {
      const match = findAc(code);
      if (!match) return '';
      return `
        <a class="ac-badge-card" href="${match.competence.slug}.html#${acAnchor(code)}">
          <span>${code}</span>
          <strong>${match.competence.shortTitle}</strong>
          <small>${match.ac.title}</small>
        </a>`;
    }).join('');
  }

  function linkedAcNavigation(sae, currentAc) {
    const links = sae.linkedACs.map(code => findAc(code)).filter(Boolean);
    if (links.length < 2) return '';
    const index = Math.max(0, links.findIndex(item => item.ac.code === currentAc?.code));
    const previous = links[(index - 1 + links.length) % links.length];
    const next = links[(index + 1) % links.length];
    return `
      <div class="sae-nav-actions">
        <a class="btn btn-secondary" href="${previous.competence.slug}.html#${acAnchor(previous.ac.code)}">${icon('fa-arrow-left')} AC précédent</a>
        <a class="btn btn-primary" href="${next.competence.slug}.html#${acAnchor(next.ac.code)}">AC suivant ${icon('fa-arrow-right')}</a>
      </div>`;
  }

  function renderSaeOverview(sae, competence) {
    const objective = cleanTextList(sae.objectives)[0] || realText(sae.problem);
    const technologies = cleanTextList(sae.technologies).slice(0, 8).join(', ');
    const result = (sae.statusResults || []).find(item => item.status !== 'missing' && isRealText(item.result))?.result || realText(sae.summary);
    const competences = sae.competenceSlugs.map(slug => findCompetence(slug)?.shortTitle).filter(Boolean).join(', ') || competence?.shortTitle;
    const items = [
      ['Objectif', objective],
      ['Technologies principales', technologies],
      ['Résultat obtenu', result],
      ['Compétences mobilisées', competences]
    ].filter(([, value]) => isRealText(value));
    if (!items.length) return '';
    return `
      <article class="sae-section-panel sae-overview-panel">
        <p class="eyebrow">Résumé</p>
        <h2>Vue d’ensemble</h2>
        <div class="overview-grid">
          ${items.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('')}
        </div>
      </article>`;
  }

  function renderTechnicalBalance(sae) {
    const balance = realText(sae.technicalBalance)
      || (hasAvailableEvidence(sae) && cleanTextList(sae.method).length
        ? 'Cette SAÉ m’a permis de consolider ma méthode de travail : préparer l’environnement, tester progressivement, analyser les résultats et documenter les choix techniques.'
        : '');
    if (!balance) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Bilan</p>
        <h2>Bilan technique</h2>
        <p class="section-intro">${balance}</p>
      </article>`;
  }

  function renderProfessionalTimeline(items = []) {
    const source = cleanTextList(items);
    if (!source.length) return '';
    return `
      <article class="sae-section-panel experience-orange">
        <p class="eyebrow">Progression</p>
        <h2>Timeline</h2>
        <ol class="professional-timeline">
          ${source.map((item, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${item}</strong></li>`).join('')}
        </ol>
      </article>`;
  }

  function renderProfessionalSections(sections = []) {
    const cleanSections = sections.filter(section => isRealText(section.title) && (isRealText(section.body) || cleanTextList(section.items).length));
    return cleanSections.map(section => `
      <article class="sae-section-panel">
        <p class="eyebrow">Alternance</p>
        <h2>${section.title}</h2>
        ${isRealText(section.body) ? `<p class="section-intro">${section.body}</p>` : ''}
        ${renderDetailList(section.items)}
      </article>`).join('');
  }

  function renderInterventionDomains(domains = []) {
    const cleanDomains = domains.filter(domain => isRealText(domain.title) && isRealText(domain.role));
    if (!cleanDomains.length) return '';
    return `
      <article class="sae-section-panel experience-card">
        <p class="eyebrow">Missions issues du rapport</p>
        <h2>Mes domaines d’intervention</h2>
        <div class="intervention-domain-grid">
          ${cleanDomains.map((domain, index) => `
            <details class="intervention-domain-card" ${index === 0 ? 'open' : ''}>
              <summary>
                <span class="domain-icon">${icon(domain.icon || 'fa-network-wired')}</span>
                <span>
                  <strong>${domain.title}</strong>
                  <small>${domain.role}</small>
                </span>
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </summary>
              <div class="domain-panel">
                <div>
                  <h3>Rôle du domaine</h3>
                  <p>${domain.role}</p>
                </div>
                <div>
                  <h3>Exemples de missions</h3>
                  ${renderDetailList(domain.missions)}
                </div>
                <div>
                  <h3>Compétences développées</h3>
                  <div class="professional-tags">${cleanTextList(domain.skills).map(item => `<span>${item}</span>`).join('')}</div>
                </div>
                <div>
                  <h3>Méthode utilisée</h3>
                  <p>${domain.method}</p>
                </div>
                <div>
                  <h3>Ce que cette expérience m’apporte</h3>
                  <p>${domain.takeaway}</p>
                </div>
              </div>
            </details>`).join('')}
        </div>
      </article>`;
  }

  function renderFieldMethod(steps = [], note = '') {
    const cleanSteps = steps.filter(step => isRealText(step.title) && isRealText(step.text));
    if (!cleanSteps.length) return '';
    return `
      <article class="sae-section-panel experience-card">
        <p class="eyebrow">Méthode terrain</p>
        <h2>Ma méthode terrain</h2>
        <ol class="field-method-timeline">
          ${cleanSteps.map((step, index) => `
            <li>
              <span>${String(index + 1).padStart(2, '0')}</span>
              <strong>${step.title}</strong>
              <p>${step.text}</p>
            </li>`).join('')}
        </ol>
        ${isRealText(note) ? `<p class="chain-note">${note}</p>` : ''}
      </article>`;
  }

  function renderProfessionalSkills(skills = []) {
    const cleanSkills = cleanTextList(skills);
    if (!cleanSkills.length) return '';
    return `
      <article class="sae-section-panel">
        <p class="eyebrow">Compétences</p>
        <h2>Compétences professionnelles</h2>
        <div class="professional-skill-grid">
          ${cleanSkills.map(skill => `<span>${skill}</span>`).join('')}
        </div>
      </article>`;
  }

  function renderButRomLink(config) {
    if (!config || !isRealText(config.text)) return '';
    return `
      <article class="sae-section-panel but-rom-panel">
        <p class="eyebrow">Parcours ROM</p>
        <h2>${config.title || 'L’alternance et mon parcours BUT2 ROM'}</h2>
        <p class="section-intro">${config.text}</p>
        <div class="but-rom-bridge">
          <section>
            <h3>Formation académique</h3>
            <div class="professional-tags">${cleanTextList(config.academic).map(item => `<span>${item}</span>`).join('')}</div>
          </section>
          <span class="bridge-symbol" aria-hidden="true">×</span>
          <section>
            <h3>Expérience terrain</h3>
            <div class="professional-tags">${cleanTextList(config.field).map(item => `<span>${item}</span>`).join('')}</div>
          </section>
        </div>
      </article>`;
  }

  function renderExperiencePage(root, sae) {
    const { competence, ac } = resolveSaeContext(sae);
    const backHref = contextBackHref(competence, ac);
    document.title = `${sae.title} - ${sae.subtitle} | Adam Tmimi`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', sae.metaDescription || sae.summary || 'Alternance chez Orange dans le cadre du BUT2 Réseaux & Télécommunications Parcours ROM.');

    root.innerHTML = `
      <section class="sae-hero accent-orange experience-page-hero">
        <div class="container">
          <nav class="breadcrumb" aria-label="Fil d’Ariane">
            <a href="index.html">Accueil</a>
            <span>›</span>
            <a href="cv.html">CV</a>
            <span>›</span>
            <strong>Alternance chez Orange</strong>
          </nav>
          <a class="back-link" href="${backHref}">${icon('fa-arrow-left')} Retour vers ${ac?.code || 'les compétences'}</a>
          <div class="experience-hero-grid">
            <div>
              <p class="eyebrow">Expérience professionnelle</p>
              <h1>${sae.title}</h1>
              <h2>${sae.subtitle}</h2>
              <p class="experience-subtitle">${sae.headline}</p>
              <p class="lead">${sae.summary || sae.description}</p>
              <div class="sae-hero-badges">
                <span class="orange-badge">${icon('fa-tower-broadcast')} Alternance chez Orange</span>
                <span class="data-pill">Alternance en cours</span>
                <span class="data-pill">Orange France — UCI Nord de France</span>
              </div>
            </div>
            <aside class="brand-lockup">
              <p class="eyebrow">Formation & Entreprise</p>
              <div class="brand-lockup-row">
                <img src="assets/brand/orange-logo.png" alt="Logo Orange" loading="eager">
                <img src="assets/brand/iut-bethune-logo.png" alt="Logo IUT de Béthune" loading="eager">
              </div>
              <strong>${sae.brandLine}</strong>
              <small>Adam Tmimi · ${sae.company}</small>
            </aside>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container sae-layout">
          ${renderInterventionDomains(sae.interventionDomains)}
          ${renderFieldMethod(sae.fieldMethod, sae.fieldMethodNote)}
          ${renderProfessionalSkills(sae.professionalSkills)}
          ${renderButRomLink(sae.butRomLink)}
          <article class="sae-section-panel">
            <p class="eyebrow">AC mobilisés</p>
            <h2>Apprentissages critiques associés</h2>
            <div class="ac-badge-grid">${acBadges(sae)}</div>
            ${linkedAcNavigation(sae, ac)}
          </article>
        </div>
      </section>`;
  }

  function renderSaePage() {
    const root = document.getElementById('sae-root');
    if (!root || !data) return;
    const saeId = document.body.dataset.saeId;
    const sae = data.saes[saeId];
    if (!sae) {
      root.innerHTML = '<div class="container empty-state"><h1>SAÉ introuvable</h1><a class="btn btn-primary" href="competences.html">Retour aux compétences</a></div>';
      return;
    }

    if (saeId === 'stage-rom') {
      renderExperiencePage(root, sae);
      return;
    }

    const { competence, ac } = resolveSaeContext(sae);
    const backHref = contextBackHref(competence, ac);
    const title = `${sae.code} - ${sae.title}`;
    document.title = `${title} | Adam Tmimi`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', sae.metaDescription || `Page détaillée ${sae.code} : contexte, traces et analyse réflexive BUT2.`);
    const contextBlocks = [
      renderTextBlock('Contexte du projet', sae.context),
      renderTextBlock('Problématique rencontrée', sae.problem),
      renderListBlock('Objectifs techniques', sae.objectives),
      renderListBlock('Contraintes du cahier des charges', sae.constraints),
      renderListBlock('Livrables attendus', sae.deliverables || (sae.deliverable ? [sae.deliverable] : [])),
      renderTextBlock('Rôle personnel dans le projet', sae.personalRole)
    ].filter(Boolean).join('');
    const contextSection = (isRealText(sae.description) || contextBlocks) ? `
      <article class="sae-section-panel">
        <p class="eyebrow">Contexte</p>
        <h2>Contexte et objectif</h2>
        ${isRealText(sae.description) ? `<p class="section-intro">${sae.description}</p>` : ''}
        ${contextBlocks ? `<div class="context-grid">${contextBlocks}</div>` : ''}
      </article>` : '';
    const workTimeline = renderTimeline(sae.workDone);
    const workSection = workTimeline ? `
      <article class="sae-section-panel">
        <p class="eyebrow">Réalisation</p>
        <h2>Ce que j’ai réalisé</h2>
        ${workTimeline}
      </article>` : '';
    const methodPills = renderPillList(sae.technologies);
    const methodList = renderDetailList(sae.method);
    const methodSection = (methodPills || methodList || sae.referenceDocs?.length) ? `
      <article class="sae-section-panel">
        <p class="eyebrow">Méthode</p>
        <h2>Méthode et outils</h2>
        ${methodPills ? `<div class="tool-strip">${methodPills}</div>` : ''}
        ${methodList}
        ${sae.referenceDocs?.length ? `<div class="reference-docs"><div class="micro-title">Documents et supports utilisés</div>${renderLinkList(sae.referenceDocs)}</div>` : ''}
      </article>` : '';

    root.innerHTML = `
      <section class="sae-hero accent-${competence?.accent || 'blue'}">
        <div class="container">
          <nav class="breadcrumb" aria-label="Fil d’Ariane">
            <a href="index.html">Accueil</a>
            <span>›</span>
            <a href="competences.html">Compétences</a>
            <span>›</span>
            <a href="${competence?.slug || 'competences'}.html">${competence?.shortTitle || 'Compétence'}</a>
            <span>›</span>
            <a href="${backHref}">${ac?.code || 'AC'}</a>
            <span>›</span>
            <strong>${sae.code}</strong>
          </nav>
          <a class="back-link" href="${backHref}">${icon('fa-arrow-left')} Retour vers ${ac?.code || 'la compétence'}</a>
          <div class="sae-hero-grid">
            <div>
              <p class="eyebrow">Page SAÉ dédiée</p>
              <h1>${title}</h1>
              <p class="lead">${sae.summary || sae.description}</p>
              <div class="sae-hero-badges">
                <span class="sae-code-badge">${sae.code}</span>
                <span class="semester semester-${sae.semester.toLowerCase()}">${sae.semester}</span>
                ${proofStatusMarkup(sae)}
                ${(sae.heroBadges || []).map(item => `<span class="data-pill">${item}</span>`).join('')}
              </div>
            </div>
            <aside class="sae-meta-panel">
              <div><span>Compétence(s)</span><strong>${sae.competenceSlugs.map(slug => findCompetence(slug)?.shortTitle).filter(Boolean).join(', ')}</strong></div>
              <div><span>AC liés</span><strong>${sae.linkedACs.length}</strong></div>
              <div><span>Retour conseillé</span><strong>${ac?.code || 'AC associé'}</strong></div>
            </aside>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container sae-layout">
          ${renderSaeOverview(sae, competence)}

          ${contextSection}

          ${workSection}

          ${renderArchitecture(sae.architecture)}

          ${renderLteTopology(sae.lteTopology)}

          ${renderToipTopology(sae.toipTopology)}

          ${renderTransmissionChain(sae.transmissionChain, sae.transmissionNote)}

          ${renderSourceAndTools(sae)}

          ${renderCodecBandwidth(sae.codecBandwidth)}

          ${renderConfigCards(sae.configCards)}

          ${renderServiceCards(sae.serviceCards)}

          ${renderProvisioningComparison(sae.provisioningComparison)}

          ${renderSecurityAudit(sae.securityAudit)}

          ${methodSection}

          ${renderTechnicalParameters(sae.technicalParameters)}

          ${renderImplementationSteps(sae.implementationSteps)}

          ${renderCommandBlocks(sae.commandBlocks)}

          ${renderSpectralAnalysis(sae.spectralAnalysis)}

          ${renderStatusResults(sae.statusResults)}

          ${renderLimitations(sae.limitations)}

          ${renderTests(sae.tests)}

          ${renderEvidenceSection(sae)}

          ${renderReflectionSection(sae)}

          ${renderTechnicalBalance(sae)}

          <article class="sae-section-panel">
            <p class="eyebrow">AC mobilisés</p>
            <h2>Apprentissages critiques mobilisés</h2>
            <div class="ac-badge-grid">${acBadges(sae)}</div>
            ${linkedAcNavigation(sae, ac)}
            ${renderExtraActions(sae.extraActions)}
          </article>
        </div>
      </section>`;
  }

  function setupNavigation() {
    const nav = document.querySelector('.navbar');
    const toggle = nav?.querySelector('.nav-toggle');
    const menu = nav?.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function openAcFromHash() {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;
    const article = document.getElementById(hash)
      || [...document.querySelectorAll('[data-ac-code]')].find(item => item.dataset.acCode === hash);
    if (!article) return;
    const button = article.querySelector('.ac-toggle');
    const panel = button ? document.getElementById(button.getAttribute('aria-controls')) : null;
    if (button && panel) {
      button.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
      article.classList.add('ac-focused');
      window.setTimeout(() => article.scrollIntoView({ behavior: 'smooth', block: 'start' }), 90);
    }
  }

  function setupAccordions() {
    document.querySelectorAll('.ac-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
      });
    });
    openAcFromHash();
    window.addEventListener('hashchange', openAcFromHash);
  }

  function setupReveal() {
    const items = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
  }

  function setupBackToTop() {
    const button = document.querySelector('.back-to-top');
    if (!button) return;
    const update = () => button.classList.toggle('visible', window.scrollY > 540);
    update();
    window.addEventListener('scroll', update, { passive: true });
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const navRoot = document.getElementById('site-nav');
    const footerRoot = document.getElementById('site-footer');
    if (navRoot) navRoot.innerHTML = navMarkup();
    if (footerRoot) footerRoot.innerHTML = footerMarkup();
    renderHome();
    renderCompetencesPage();
    renderCompetence();
    renderSaePage();
    setupNavigation();
    setupAccordions();
    setupReveal();
    setupBackToTop();
  });
})();
