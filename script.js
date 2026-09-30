'use strict';

const EJS = { key: '-cawejxZaLoIR7jlN', svc: 'service_sryb28h', tpl: 'template_6tyy85g' };
const RESUME_ID = '1SkevAZHQVY3qSAm_mgKP1nYRug_Rf0wd';
const RESUME = `https://drive.google.com/file/d/${RESUME_ID}/view?usp=sharing`;
const RESUME_DL = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;
const GITHUB_URL = '';

const P = [
    {
        id: 'sharenear', name: 'ShareNear — Community Resource Sharing Platform', tag: 'Web · Community',
        live: 'https://sharenear-app.web.app/', repo: '', tech: ['Flutter', 'Firebase', 'Cloud Firestore','Cloud Messaging',"cloudinary", 'vercel'],
        desc: 'A resource donation and discovery platform connecting donors with shelters. Includes an SOS feature for urgent requests and an admin dashboard for monitoring, verification, and platform safety.',
        feat: ['Resource donation and discovery', 'SOS feature for urgent requests', 'Admin dashboard: monitoring, verification, platform safety'],
        arch: ['DONORS|Donors offer resources they can give.', 'DISCOVERY|Shelters discover available resources.', 'SOS|Urgent requests go through the SOS feature.', 'ADMIN|The admin dashboard handles monitoring, verification and safety.']
    },
    { id: 'agentic-loop', name: 'Agentic Loop — Document & Database-Aware AI Agent', tag: 'AI · Platform',
    live: '', repo: '', tech: ['RAG', 'LLM', "Python", "Flask", "MySQL", "Reactjs","MongoDB","Nodejs","faiss vectorstore"],
    desc: 'A customizable AI-powered chatbot generator enabling businesses to create chatbots trained on their own data sources — PDFs, links, spreadsheets, and documents.',
    feat: ['Chatbots trained on a business\'s own data', 'Sources: PDFs, links, spreadsheets, documents'],
    arch: ['SOURCES|PDFs, links, spreadsheets and documents supplied by the business.', 'RAG|Retrieval over the business\'s own data.', 'LLM|A language model answers using the retrieved context.', 'CHATBOT|A customized chatbot for that business.'] },
    {
        id: 'ai-contract-generator', name: 'AI Contract Generator for Legal Documents', tag: 'AI · Legal',
        live: '', repo: '', tech: ['Hugging Face',"Java","MySQL","Spring Boot","reactjs"],
        desc: 'An intelligent legal document generation tool that creates customized contracts based on user inputs, with AI-powered template customization and smart clause suggestions.',
        feat: ['Contracts generated from user inputs', 'AI-powered template customization', 'Smart clause suggestions'],
        arch: ['INPUTS|The user provides the details of the contract.', 'TEMPLATE|AI customizes the contract template.', 'CLAUSES|Smart clause suggestions are added.', 'CONTRACT|A customized legal document is generated.']
    },
    {
        id: 'rationchain', name: 'RationChain — Blockchain Ration Distribution System', tag: 'Blockchain · GovTech',
        live: 'https://ration-shop-chain.onrender.com/', repo: '', tech: ['Python', 'Blockchain', 'Cryptographic hashing'],
        desc: 'A secure, immutable system for government ration distribution using a custom Python blockchain with cryptographic hashing, identity verification, and a real-time analytics dashboard.',
        feat: ['Custom Python blockchain', 'Cryptographic hashing', 'Identity verification', 'Real-time analytics dashboard'],
        arch: ['USER|A beneficiary requests distribution.', 'IDENTITY|Identity verification runs first.', 'CHAIN|Distribution is recorded on a custom Python blockchain, hashed cryptographically and immutable.', 'DASHBOARD|A real-time analytics dashboard shows the data.']
    },
    {
        id: 'shoplane', name: 'Shoplane — Full-Stack E-Commerce Mobile App', tag: 'Mobile · E-Commerce',
        live: 'https://shoplon-2cbd5.web.app/', repo: '', tech: ['Flutter', 'Firebase', 'Cloudinary'],
        desc: 'Full-stack e-commerce mobile app using Flutter and Firebase with an admin dashboard, Cloudinary integration for image handling, and real-time order updates.',
        feat: ['Admin dashboard', 'Cloudinary image handling', 'Real-time order updates'],
        arch: ['USER|A shopper uses the mobile app.', 'FLUTTER UI|The app interface is built in Flutter.', 'FIREBASE|Backend with real-time order updates.', 'CLOUDINARY|Handles product images.', 'ADMIN|Admin dashboard manages the store.']
    }
];

const S = [
    ['LANGUAGES', [['Dart', 'Flutter apps at Fellow Founder and Shoplane.'], ['Python', 'RationChain custom blockchain.'], ['JavaScript', 'Web development at K-Loop.'], ['HTML5 / CSS3', 'Responsive frontends at K-Loop.']]],
    ['FRONTEND', [['Flutter', 'Fellow Founder internship; Shoplane.'], ['ReactJS', 'K-Loop internship.']]],
    ['BACKEND', [['Node.js', 'K-Loop internship.'], ['Flask', 'Listed skill.'], ['REST APIs', 'Integrated at Fellow Founder; backend APIs at K-Loop.']]],
    ['DATA', [['MySQL', 'Listed skill.'], ['MongoDB', 'K-Loop internship.'], ['Firebase', 'Fellow Founder internship; Shoplane.']]],
    ['CLOUD & DEVOPS', [['AWS', 'AWS Fundamentals certification (KodeKloud).'], ['Docker', 'Listed skill.'], ['Git / GitHub', 'Code reviews with Git at Fellow Founder.']]],
    ['AI', [['RAG Systems', 'K-Loop internship; Agentic Loop.'], ['LLM Integration', 'Agentic Loop; AI Contract Generator.']]],
    ['OTHER', [['State Management', 'Provider and Bloc at Fellow Founder.'], ['Figma / UI Design', 'Prototypes at K-Loop; Figma at Fellow Founder.'], ['Blockchain', 'RationChain.']]]
];

const X = [
    {
        t: 'Dec 2025 – May 2026', r: 'Software Developer Intern', c: 'K-Loop.in · Chennai',
        d: 'Full-stack web apps with responsive frontends and backend APIs. High-fidelity prototypes and reusable UI components. Sprint planning and code reviews in an Agile team.', k: ['React', 'Node.js', 'MongoDB', 'RAG']
    },
    {
        t: 'Mar 2025 – Aug 2025', r: 'Flutter Developer Intern', c: 'Fellow Founder · Chennai',
        d: 'Cross-platform mobile apps for multiple client projects. State management (Provider, Bloc), REST API integration, performance optimization, code reviews with Git.', k: ['Flutter', 'Dart', 'Firebase', 'Figma']
    }
];

const PROFILE = {
    name: 'Dhanush Kumar', role: 'Software Developer',
    focus: ['Flutter apps', 'Full-stack web', 'AWS-backend systems', 'RAG / LLM workflows'],
    location: 'Chennai, Tamil Nadu, India', education: ['MCA'],
    experience_years: '1+', projects_shipped: '5+', certifications: ['Generative AI', 'Flutter Development', 'ReactJS Development', 'AWS Fundamentals', 'Python Programming', 'UI/UX Design', 'Power BI'],
    email: 'dhanushkumarr1508@gmail.com', phone: '+91 99402 82826', status: 'Currently Employed '
};

const $ = (s, e = document) => e.querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = () => innerWidth <= 800;
const root = document.documentElement;
const desk = $('#desk'), out = $('#out'), input = $('#cmd'), tasks = $('#tasks'), menu = $('#smenu'), startBtn = $('#start');
const wins = { terminal: $('#w-term') };

function print(html, cls = '') {
    const d = document.createElement('div');
    d.className = 'ln ' + cls; d.innerHTML = html;
    out.append(d); out.scrollTop = out.scrollHeight;
}
const hist = []; let hi = 0;

const C = {
    help() { print('available commands:<br>' + Object.keys(C).filter(k => k !== 'theme' && k !== 'clear').map(k => `<button class="cl" data-cmd="${k}" type="button">${k}</button>`).join('')); },
    whoami() { print('Dhanush Kumar<br>Software Developer · Chennai, India'); },
    welcome() { openApp('welcome', 'My Computer', homeView); },
    about() { openApp('about', 'PROFILE.json', aboutView); },
    projects() { if (openApp('projects', 'PROJECTS', projectsView)) pick(0, 'overview'); },
    skills() { openApp('skills', 'STACK', skillsView); },
    experience() { openApp('experience', 'Experience log', expView); },
    contact() { openApp('contact', 'Connect', contactView); },
    resume() { openApp('resume', 'Resume', resumeView); },
    github() {
        if (GITHUB_URL) { print(`opening <a href="${GITHUB_URL}" target="_blank" rel="noopener">${GITHUB_URL}</a>`); window.open(GITHUB_URL, '_blank', 'noopener'); }
        else print('No GitHub profile URL is set yet. Add it to GITHUB_URL in script.js.');
    },
    theme() { setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'); print('theme switched.'); },
    clear() { out.textContent = ''; }
};

function run(raw, quiet) {
    const t = raw.trim(); if (!t) return;
    if (!quiet) print('$ ' + esc(t), 'pr');
    hist.push(t); hi = hist.length;
    let k = t.toLowerCase().split(/\s+/)[0];
    if (k === 'connect') k = 'contact';
    if (k === 'cv') k = 'resume';
    (C[k] || (() => print(`command not found: ${esc(k)}. Type <b>help</b>.`)))();
}

function typeCmd(c, done) {
    if (reduce) { run(c); return done && done(); }
    const d = document.createElement('div'); d.className = 'ln pr'; out.append(d);
    let i = 0;
    (function s() {
        d.textContent = '$ ' + c.slice(0, i++);
        if (i <= c.length) setTimeout(s, 55);
        else { run(c, true); done && done(); }
    })();
}

$('#tf').addEventListener('submit', e => { e.preventDefault(); run(input.value); input.value = ''; });
input.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
        const v = input.value.toLowerCase(), m = Object.keys(C).filter(k => k.startsWith(v));
        if (v && m.length) { e.preventDefault(); input.value = m[0]; }
    } else if (e.key === 'ArrowUp' && hist.length) { e.preventDefault(); input.value = hist[--hi < 0 ? (hi = 0) : hi]; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); input.value = hist[++hi] || ''; if (hi >= hist.length) hi = hist.length; }
});
$('#chips').innerHTML = ['projects', 'skills', 'experience', 'contact', 'resume', 'help'].map(k => `<button class="btn" data-cmd="${k}" type="button">${k}</button>`).join('');

function homeView() {
    return `<div class="hello"><div class="cube-wrap" aria-hidden="true"><div class="cube"><div>&lt;/&gt;</div><div>CODE</div><div>API</div><div>AI</div><div>SQL</div><div>GIT</div></div></div><div><h1>Dhanush Kumar</h1><p class="role">Software Developer</p><p>Software Developer and MCA graduate building Flutter apps, full-stack web products, AWS-backend systems, and RAG/LLM workflows.</p></div></div>
<fieldset><legend>System</legend><table class="sys"><tr><th>Experience</th><td>1+ years</td></tr><tr><th>Projects</th><td>5+</td></tr><tr><th>Internships</th><td>2</td></tr><tr><th>Certifications</th><td>6+</td></tr><tr><th>Location</th><td>Chennai, Tamil Nadu, India</td></tr></table></fieldset>
<div class="acts"><button class="btn pri" data-cmd="projects" type="button">Projects</button><button class="btn" data-cmd="contact" type="button">Contact</button></div>`;
}

let z = 10, n = 0;
function mk(id, title) {
    const w = document.createElement('section');
    w.className = 'appwin'; w.dataset.app = id; w.dataset.t = title; w.setAttribute('role', 'dialog'); w.setAttribute('aria-label', title);
    w.innerHTML = `<div class="tb"><svg class="ti"><use href="#i-${id}"/></svg><span class="ttl">${title}</span><div class="ctl"><button data-w="min" type="button" aria-label="Minimize"></button><button data-w="max" type="button" aria-label="Maximize"></button><button data-w="close" type="button" aria-label="Close"></button></div></div><div class="wb"></div>`;
    desk.append(w); wins[id] = w; return w;
}
function place(w) {
    if (mobile()) return;
    const r = desk.getBoundingClientRect(), k = n++ % 5, id = w.dataset.app, W = r.width - (innerWidth > 1000 ? 240 : 0);
    let ww = Math.min(W * .55, 720), hh = Math.min(r.height * .78, 520), l = 130 + k * 28, t = 24 + k * 28;
    if (id === 'terminal') { ww = Math.min(W * .44, 600); hh = Math.min(r.height - 60, 480); l = W - ww - 24; t = 32; }
    if (id === 'welcome') { ww = Math.min(W * .46, 560); hh = Math.min(r.height * .72, 460); l = 130; t = 40; }
    w.style.width = ww + 'px'; w.style.height = hh + 'px';
    w.style.left = Math.max(0, Math.min(W - ww, l)) + 'px'; w.style.top = Math.max(0, t) + 'px';
}
function syncDock() {
    const t = $('.appwin.top.open:not(.min)');
    tasks.innerHTML = Object.entries(wins).filter(([, w]) => w.classList.contains('open')).map(([id, w]) => `<button class="task${w === t ? ' act' : ''}" data-cmd="${id}" type="button"><svg class="ti"><use href="#i-${id}"/></svg><span>${w.dataset.t}</span></button>`).join('');
}
function focusWin(w) {
    document.querySelectorAll('.appwin.top').forEach(x => x.classList.remove('top'));
    w.classList.add('top'); w.style.zIndex = ++z; syncDock();
}
function openApp(id, title, html) {
    const w = wins[id] || mk(id, title);
    const was = w.classList.contains('open') && !w.classList.contains('min');
    if (!w.classList.contains('open') && html) $('.wb', w).innerHTML = html();
    if (!w.dataset.p) { place(w); w.dataset.p = 1; }
    w.classList.remove('min'); w.classList.add('open');
    focusWin(w);
    return !was;
}
function shut(w) { w.classList.remove('open', 'max', 'min', 'top'); syncDock(); }

desk.addEventListener('click', e => {
    const b = e.target.closest('[data-w]'); if (!b) return;
    const w = b.closest('.appwin'), a = b.dataset.w;
    if (a === 'close') shut(w);
    else if (a === 'min') { w.classList.add('min'); w.classList.remove('top'); syncDock(); }
    else w.classList.toggle('max');
});

let dr = null;
desk.addEventListener('pointerdown', e => {
    const w = e.target.closest('.appwin'); if (!w) return;
    if (!w.classList.contains('top')) focusWin(w);
    const tb = e.target.closest('.tb');
    if (!tb || e.target.closest('button') || mobile() || w.classList.contains('max')) return;
    dr = { w, x: e.clientX - w.offsetLeft, y: e.clientY - w.offsetTop };
    tb.setPointerCapture(e.pointerId);
});
desk.addEventListener('pointermove', e => {
    if (!dr) return;
    const r = desk.getBoundingClientRect();
    dr.w.style.left = Math.max(0, Math.min(r.width - 80, e.clientX - dr.x)) + 'px';
    dr.w.style.top = Math.max(0, Math.min(r.height - 30, e.clientY - dr.y)) + 'px';
});
addEventListener('pointerup', () => { dr = null; });
addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (menu.classList.contains('open')) { menu.classList.remove('open'); startBtn.classList.remove('on'); return; }
    const t = $('.appwin.top.open'); if (t) shut(t);
});

document.addEventListener('click', e => {
    if (e.target.closest('#start')) { startBtn.classList.toggle('on', menu.classList.toggle('open')); return; }
    menu.classList.remove('open'); startBtn.classList.remove('on');
    const pj = e.target.closest('[data-pj]');
    if (pj) { C.projects(); pick(+pj.dataset.pj, 'overview'); return; }
    const b = e.target.closest('[data-cmd]'); if (!b) return;
    e.preventDefault();
    const c = b.dataset.cmd, w = wins[c];
    if (b.closest('#dock') && w && w.classList.contains('top') && w.classList.contains('open') && !w.classList.contains('min')) {
        w.classList.add('min'); w.classList.remove('top'); syncDock(); return;
    }
    if (c === 'terminal') { openApp('terminal'); input.focus(); }
    else run(c);
});

function projectsView() {
    return `<div class="explorer"><ul class="tree">${P.map((p, i) => `<li><button type="button" data-p="${i}">▸ ${p.id}/</button></li>`).join('')}</ul><div id="pd"></div></div>`;
}
const TABS = ['overview', 'architecture', 'features', 'tech-stack', 'links'];
let cp = 0;
function pick(i, tab, layer) {
    cp = i; const p = P[i]; let body = '';
    if (tab === 'overview') body = `<h3>${p.name}</h3><span class="pill">${p.tag}</span><p>${p.desc}</p>`;
    if (tab === 'features') body = `<ul class="fl">${p.feat.map(f => `<li>${f}</li>`).join('')}</ul>`;
    if (tab === 'tech-stack') body = p.tech.length ? p.tech.map(t => `<span class="pill">${t}</span>`).join('') : '<p>Stack not listed in the portfolio yet.</p>';
    if (tab === 'links') body = `<div class="acts">${p.live ? `<a class="btn pri" href="${p.live}" target="_blank" rel="noopener">Live demo ↗</a>` : ''}${p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noopener">Source ↗</a>` : ''}</div>${p.live || p.repo ? '' : '<p>No public link yet.</p>'}${p.repo ? '' : '<p>Source: repository link not added yet.</p>'}`;
    if (tab === 'architecture') {
        const L = p.arch.map(a => a.split('|'));
        body = `<div class="flow">${L.map((l, n) => `${n ? '<span>↓</span>' : ''}<button class="btn ${layer === n ? 'on' : ''}" type="button" data-l="${n}">${l[0]}</button>`).join('')}</div><div class="note">${layer === undefined ? 'Click a layer to see what it does.' : `<b>${L[layer][0]}</b> — ${L[layer][1]}`}</div>`;
    }
    $('#pd').innerHTML = `<div class="tabs" role="tablist">${TABS.map(t => `<button class="btn ${t === tab ? 'on' : ''}" type="button" data-t="${t}">${t}</button>`).join('')}</div>${body}`;
    document.querySelectorAll('.tree button').forEach((b, n) => b.classList.toggle('on', n === i));
}

function aboutView() {
    return `<div class="prof"><div><img src="d.jpg" alt="Dhanush Kumar" onerror="this.style.display='none'"></div><pre class="json">${esc(JSON.stringify(PROFILE, null, 2))}</pre></div>`;
}

function expView() {
    return X.map(x => `<div class="log"><time>${x.t}</time><b>${x.r}</b><p>${x.c}</p><p>${x.d}</p>${x.k.map(k => `<span class="pill">${k}</span>`).join('')}</div>`).join('');
}

function skillsView() {
    return S.map((g, gi) => `<div class="grp"><h4>${g[0]}</h4>${g[1].map((s, si) => `<button class="btn" type="button" data-s="${gi},${si}">${s[0]}</button>`).join(' ')}</div>`).join('') + '<div class="note" id="sn">Select a technology to see where it has been used.</div>';
}

function contactView() {
    return `<p>$ connect dhanush — send a system request.</p><form class="req" id="req" novalidate>
<label for="from_name">Name</label><input id="from_name" name="from_name" required autocomplete="name">
<label for="from_email">Email</label><input id="from_email" name="from_email" type="email" required autocomplete="email">
<label for="phone">Mobile (optional)</label><input id="phone" name="phone" type="tel" autocomplete="tel">
<label for="subject">Subject</label><input id="subject" name="subject" required>
<label for="message">Message</label><textarea id="message" name="message" rows="5" required></textarea>
<div class="toast" id="toast" role="status"></div><button class="btn pri" type="submit" id="send">[ Send request ]</button></form>`;
}

function resumeView() {
    return `<p>Resume available from the system.</p><div class="acts"><a class="btn pri" href="${RESUME}" target="_blank" rel="noopener">[ View resume ]</a><a class="btn" href="${RESUME_DL}" target="_blank" rel="noopener">[ Download resume ]</a></div>`;
}

desk.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.p) pick(+b.dataset.p, 'overview');
    else if (b.dataset.t) pick(cp, b.dataset.t);
    else if (b.dataset.l) pick(cp, 'architecture', +b.dataset.l);
    else if (b.dataset.s) {
        const [g, s] = b.dataset.s.split(',').map(Number), it = S[g][1][s];
        $('#sn').innerHTML = `<b>${it[0]}</b> — ${it[1]}`;
    }
});

desk.addEventListener('submit', async e => {
    if (e.target.id !== 'req') return;
    e.preventDefault();
    const f = e.target, t = $('#toast'), btn = $('#send');
    if (!f.checkValidity()) { f.reportValidity(); return; }
    btn.disabled = true; btn.textContent = 'Transmitting…'; t.textContent = ''; t.className = 'toast';
    try {
        if (typeof emailjs === 'undefined') throw new Error('EmailJS not loaded');
        emailjs.init(EJS.key);
        await emailjs.sendForm(EJS.svc, EJS.tpl, f);
        t.className = 'toast ok'; t.textContent = '> Request transmitted successfully.'; f.reset();
    } catch (err) {
        console.error(err);
        t.className = 'toast err'; t.textContent = '> Failed. Email me directly at dhanushkumarr1508@gmail.com';
    } finally { btn.disabled = false; btn.textContent = '[ Send request ]'; }
});

function setTheme(t) {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('dk-theme', t); } catch (_) { }
}
try { const s = localStorage.getItem('dk-theme'); if (s) setTheme(s); } catch (_) { }



const BOOT = ['Starting Dhanush.OS...', 'Loading developer profile...', 'Loading projects...', 'Loading skills...', 'Loading experience...', 'System ready.'];
const boot = $('#boot'), log = $('#bootlog'); let timers = [], finished = false;

function ready(typed) {
    if (mobile()) { run('whoami', true); run('help', true); return; }
    C.welcome(); openApp('terminal');
    if (typed) typeCmd('whoami', () => setTimeout(() => typeCmd('help'), 300));
    else { run('whoami', true); run('help', true); }
}
function finish() {
    if (finished) return; finished = true;
    timers.forEach(clearTimeout);
    try { sessionStorage.setItem('dk-booted', '1'); } catch (_) { }
    boot.classList.add('done'); setTimeout(() => boot.remove(), 350);
    ready(true);
}

let seen = false;
try { seen = !!sessionStorage.getItem('dk-booted'); } catch (_) { }
if (seen || reduce) { boot.remove(); finished = true; ready(false); }
else {
    BOOT.forEach((l, i) => timers.push(setTimeout(() => { log.textContent += (i ? '\n' : '') + '> ' + l; }, i * 320)));
    timers.push(setTimeout(finish, BOOT.length * 320 + 250));
    $('#skip').addEventListener('click', finish);
    boot.addEventListener('click', finish);
    addEventListener('keydown', finish, { once: true });
}

const ticks = document.querySelectorAll('.tick'), hh = $('#hh'), mh = $('#mh');
function tick() {
    const d = new Date();
    ticks.forEach(x => { x.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); });
    hh.setAttribute('transform', `rotate(${(d.getHours() % 12) * 30 + d.getMinutes() / 2} 50 50)`);
    mh.setAttribute('transform', `rotate(${d.getMinutes() * 6} 50 50)`);
}
tick(); setInterval(tick, 30000);

function calendar() {
    const d = new Date(), first = new Date(d.getFullYear(), d.getMonth(), 1).getDay(), days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    let h = `<h5>${d.toLocaleString([], { month: 'long', year: 'numeric' })}</h5><div class="cg">` + 'SMTWTFS'.split('').map(c => `<b>${c}</b>`).join('');
    for (let i = 0; i < first; i++) h += '<i></i>';
    for (let i = 1; i <= days; i++) h += `<span${i === d.getDate() ? ' class="td"' : ''}>${i}</span>`;
    $('#cal').innerHTML = h + '</div>';
}
calendar();

const Q = [
    ['I take rough product ideas from Figma to production with code that is readable, testable, and easy to hand over.', 'Dhanush Kumar'],
    ['Talk is cheap. Show me the code.', 'Linus Torvalds'],
    ['Simplicity is prerequisite for reliability.', 'Edsger W. Dijkstra'],
    ['Make it work, make it right, make it fast.', 'Kent Beck']
];
let qi = 0;
function note() { $('#nq').textContent = Q[qi][0]; $('#na').textContent = '— ' + Q[qi][1]; }
$('#nn').addEventListener('click', () => { qi = (qi + 1) % Q.length; note(); });
note();
$('#pl').innerHTML = P.map((p, i) => `<button data-pj="${i}" type="button">${p.name.split(' — ')[0]}</button>`).join('');
