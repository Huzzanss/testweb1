/* ═══════════════════════════════════════════════════
   FIREBASE CONFIG — chat-angkatan-16
   ═══════════════════════════════════════════════════ */
const firebaseConfig = {
  apiKey: "AIzaSyBY-wq2_0z8eUe88IOngPls_LpY055Ndyg",
  authDomain: "chat-angkatan-16.firebaseapp.com",
  databaseURL: "https://chat-angkatan-16-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-angkatan-16",
  storageBucket: "chat-angkatan-16.firebasestorage.app",
  messagingSenderId: "47699501502",
  appId: "1:47699501502:web:0d09e69d0b3ff39a7359ef"
};

firebase.initializeApp(firebaseConfig);
const db      = firebase.database();
const storage = firebase.storage();

/* ═══════════════════════════════════════════════════
   STUDENT DATA
   ═══════════════════════════════════════════════════ */
const STUDENTS = [
  {n:"Abdullah Raziq Hanan",c:"k",cl:"VI Kahayan"},
  {n:"Aditya Narendra Pambudi",c:"k",cl:"VI Kahayan"},
  {n:"Ahmad Abdullah Hafi Munaji",c:"k",cl:"VI Kahayan"},
  {n:"Alesha Zevanna Annayla Alfian",c:"k",cl:"VI Kahayan"},
  {n:"Alisha Nur Afiyah",c:"k",cl:"VI Kahayan"},
  {n:"Azim Evano Rahman",c:"k",cl:"VI Kahayan"},
  {n:"Deeandra Mikhailla Hariyadi",c:"k",cl:"VI Kahayan"},
  {n:"Faqih Hamizan Rahman",c:"k",cl:"VI Kahayan"},
  {n:"Gavin Ahmad Farisakha Sahilin",c:"k",cl:"VI Kahayan"},
  {n:"Hana Aish Sumayyah",c:"k",cl:"VI Kahayan"},
  {n:"Javier Al Majid",c:"k",cl:"VI Kahayan"},
  {n:"Muhammad Alfindra Auvar Rahardja",c:"k",cl:"VI Kahayan"},
  {n:"Muhammad Asyraf Al Farisi",c:"k",cl:"VI Kahayan"},
  {n:"Muhammad Hafiz Faad Abqory",c:"k",cl:"VI Kahayan"},
  {n:"Nuhammad Rezky Tri Ramadhan",c:"k",cl:"VI Kahayan"},
  {n:"Nayhan Abqari",c:"k",cl:"VI Kahayan"},
  {n:"Samytha Larisa Azzalea",c:"k",cl:"VI Kahayan"},
  {n:"Zahratu Syifa",c:"k",cl:"VI Kahayan"},
  {n:"Ahmad Faezya Rafa",c:"p",cl:"VI Kapuas"},
  {n:"Ahmad Hamdan Nurzati",c:"p",cl:"VI Kapuas"},
  {n:"Alkhalifi Hasyimi",c:"p",cl:"VI Kapuas"},
  {n:"Andra Alghifari",c:"p",cl:"VI Kapuas"},
  {n:"Angelina Natalia Tennes",c:"p",cl:"VI Kapuas"},
  {n:"Arsenio Al Fattan Wibowo",c:"p",cl:"VI Kapuas"},
  {n:"Chaerul Risyad Ferdansyah",c:"p",cl:"VI Kapuas"},
  {n:"Devan Rafandra Pratama",c:"p",cl:"VI Kapuas"},
  {n:"Ghaisan Adib Mubasyir",c:"p",cl:"VI Kapuas"},
  {n:"Kanaya Lubna Janitra Hafizah",c:"p",cl:"VI Kapuas"},
  {n:"Keisha Pratiwi Syahrizal",c:"p",cl:"VI Kapuas"},
  {n:"Muhammad Ahza Farezell",c:"p",cl:"VI Kapuas"},
  {n:"Muhammad Zaki Raditya",c:"p",cl:"VI Kapuas"},
  {n:"Muhammad Zamzam Zidna Fahn",c:"p",cl:"VI Kapuas"},
  {n:"Nada Fajriah Salsabilla",c:"p",cl:"VI Kapuas"},
  {n:"Nur Aisyah",c:"p",cl:"VI Kapuas"},
  {n:"Nurul Farhana Aqilah Chandra",c:"p",cl:"VI Kapuas"},
  {n:"Shazia Amira Zhafirah",c:"p",cl:"VI Kapuas"},
  {n:"Super Novel Hardian",c:"p",cl:"VI Kapuas"},
  {n:"Syaqila Marwa Putri Deandra",c:"p",cl:"VI Kapuas"},
  {n:"Syrenia Carrisa Althafunnisa",c:"p",cl:"VI Kapuas"},
  {n:"Muhammad Mezameru Arsyada",c:"p",cl:"VI Kapuas"},
  {n:"Shidqia Nabila Azzahra",c:"p",cl:"VI Kapuas"},
  {n:"Adelia Felicia",c:"m",cl:"VI Mahakam"},
  {n:"Afiqah Humayra Arresky",c:"m",cl:"VI Mahakam"},
  {n:"Alexandra Shavira Kaysa",c:"m",cl:"VI Mahakam"},
  {n:"Alisya Zella Naura Saputro",c:"m",cl:"VI Mahakam"},
  {n:"Alita Admiral",c:"m",cl:"VI Mahakam"},
  {n:"Aqillah Khayyirah",c:"m",cl:"VI Mahakam"},
  {n:"Azima Zafeera Khairiya",c:"m",cl:"VI Mahakam"},
  {n:"Azka Aisy Muhammad Firdaus",c:"m",cl:"VI Mahakam"},
  {n:"Farrel Azka Firlana",c:"m",cl:"VI Mahakam"},
  {n:"Fattah Altaf Qusyairi",c:"m",cl:"VI Mahakam"},
  {n:"Giovanny Syahputra",c:"m",cl:"VI Mahakam"},
  {n:"Gusti Muhammad An-Nafis",c:"m",cl:"VI Mahakam"},
  {n:"Hilmi Muhammad Nidho Mudhin",c:"m",cl:"VI Mahakam"},
  {n:"Khalika Ismatullah Assahla",c:"m",cl:"VI Mahakam"},
  {n:"Muhammad Abdurrahman Dzaki",c:"m",cl:"VI Mahakam"},
  {n:"Muhammad El Junot Razqal",c:"m",cl:"VI Mahakam"},
  {n:"Muhammad Fahri Ardani",c:"m",cl:"VI Mahakam"},
  {n:"Muhammad Hafidz Setiadi",c:"m",cl:"VI Mahakam"},
  {n:"Muhammad Juna Defa Alfarizie",c:"m",cl:"VI Mahakam"},
  {n:"Muhammad Zharif Syatir",c:"m",cl:"VI Mahakam"},
  {n:"Syifa Fathiyah Zahra",c:"m",cl:"VI Mahakam"},
];

const QUOTES = [
  "Langkah kecil untuk awal yang besar.",
  "Bintang terbaik yang pernah bersinar.",
  "Masa depan ada di tanganmu.",
  "Mimpi besar, kerja keras.",
  "Jadilah cahaya di mana pun kamu berada.",
  "Keberanian adalah awal dari segalanya.",
  "Terbang tinggi, tetap rendah hati.",
  "Senyummu adalah kekuatanmu.",
  "Perjalanan jauh dimulai satu langkah.",
  "Kamu lebih kuat dari yang kamu kira.",
  "Biarkan impianmu lebih besar dari ketakutanmu.",
  "Setiap akhir adalah awal yang baru.",
  "Kamu adalah keajaiban yang nyata.",
  "Dunia menunggumu untuk bersinar.",
  "Perjuangan hari ini, kejayaan esok hari.",
  "Jadilah versi terbaikmu setiap hari.",
  "Waktu berlalu, kenangan tinggal.",
  "Bersama kita kuat, bersama kita bisa.",
  "Cinta, tawa, dan kenangan abadi.",
  "Percaya diri adalah kunci segalanya.",
  "Ilmu yang bermanfaat, akhlak yang mulia.",
  "Rendah hati, tinggi semangat.",
];

const PH = ['ph-1','ph-2','ph-3','ph-4','ph-5','ph-6','ph-7','ph-8','ph-9','ph-10','ph-11','ph-12'];
const CLS_COLOR = {k:'cls-gold', p:'cls-rose', m:'cls-teal'};

/* ═══════════════════════════════════════════════════
   STUDENT GALLERY (nama + initial)
   ═══════════════════════════════════════════════════ */
function buildGal() {
  const g = document.getElementById('gal');
  STUDENTS.forEach((s, i) => {
    const init = s.n.split(' ').slice(0,2).map(w => w[0]).join('');
    const ph   = PH[i % PH.length];
    const q    = QUOTES[i % QUOTES.length];
    const el   = document.createElement('div');
    el.className    = 'gal-card rev';
    el.dataset.c    = s.c;
    el.style.transitionDelay = (i % 6 * 0.06) + 's';
    el.innerHTML = `
      <div class="gal-photo ${ph}"><span class="gal-initial">${init}</span></div>
      <div class="gal-info">
        <div class="gal-name">${s.n}</div>
        <div class="gal-quote">${q}</div>
        <div class="gal-cls ${CLS_COLOR[s.c]}">${s.cl}</div>
      </div>`;
    g.appendChild(el);
  });
  observeReveal();
}

function doFilter(cls, btn) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.gal-card').forEach(c => {
    c.classList.toggle('hide', cls !== 'all' && c.dataset.c !== cls);
  });
}

/* ═══════════════════════════════════════════════════
   PHOTO GALLERY — Firebase Storage + RTDB (path: /gallery)
   ═══════════════════════════════════════════════════ */
function triggerUpload() {
  document.getElementById('fileInput').click();
}

async function handleUpload(event) {
  const files = Array.from(event.target.files);
  if (!files.length) return;

  const btn  = document.getElementById('uploadBtn');
  const toast = document.getElementById('uploadProgress');
  const bar   = document.getElementById('uploadBar');
  const txt   = document.getElementById('uploadProgressText');

  btn.disabled = true;
  toast.classList.add('show');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    txt.textContent = `Mengupload ${i+1}/${files.length}: ${file.name}`;

    try {
      const filename = `gallery/${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const ref      = storage.ref(filename);

      await new Promise((res, rej) => {
        const task = ref.put(file);
        task.on('state_changed',
          snap => { bar.style.width = (snap.bytesTransferred / snap.totalBytes * 100).toFixed(0) + '%'; },
          rej, res
        );
      });

      const url = await ref.getDownloadURL();
      await db.ref('gallery').push({
        url,
        filename,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });
    } catch(err) {
      console.error('Upload error:', err);
      alert('Gagal upload: ' + err.message);
    }
  }

  setTimeout(() => toast.classList.remove('show'), 1500);
  btn.disabled = false;
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload Foto`;
  event.target.value = '';
}

function loadPhotos() {
  const grid    = document.getElementById('photoGrid');
  const empty   = document.getElementById('photoEmpty');
  const countEl = document.getElementById('photo-count');

  db.ref('gallery').orderByChild('timestamp').on('value', snap => {
    grid.querySelectorAll('.photo-item').forEach(el => el.remove());
    const photos = [];
    snap.forEach(child => {
      const val = child.val();
      // Accept entries that have either url (Storage) or data (base64)
      if (val && (val.url || val.data)) {
        photos.push({ key: child.key, ...val });
      }
    });
    photos.reverse(); // newest first

    countEl.textContent = `${photos.length} Foto`;
    empty.style.display = photos.length === 0 ? 'block' : 'none';

    // Render in small batches to avoid blocking the main thread
    let i = 0;
    function renderBatch() {
      const end = Math.min(i + 6, photos.length);
      for (; i < end; i++) addPhotoCard(photos[i], grid);
      if (i < photos.length) requestAnimationFrame(renderBatch);
    }
    renderBatch();
  });
}

function addPhotoCard(photo, grid) {
  // Support both old format (base64 in `data` field) and new format (Storage URL in `url` field)
  const src = photo.url || photo.data || '';
  if (!src) return; // skip entries with no image

  const item = document.createElement('div');
  item.className   = 'photo-item';
  item.dataset.key = photo.key;

  const date = photo.timestamp
    ? new Date(photo.timestamp).toLocaleDateString('id-ID', {day:'numeric', month:'long', year:'numeric'})
    : '';

  item.innerHTML = `
    <img src="${src}" alt="Kenangan" loading="lazy">
    <div class="photo-date">${date}</div>`;
  item.addEventListener('click', () => openLightbox(src));
  grid.appendChild(item);
}

function openLightbox(url) {
  document.getElementById('lightboxImg').src = url;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════
   KALENDER KEGIATAN
   ═══════════════════════════════════════════════════ */
// category → CSS class
const CAT_CLASS = {
  akademik:   'cat-akademik',
  keagamaan:  'cat-keagamaan',
  gladi:      'cat-gladi',
  wisuda:     'cat-wisuda',
  perpisahan: 'cat-perpisahan',
};

// Master event list
const EVENTS_DATA = [
  // April
  { title: "Pra Munaqasyah",              date: "2026-04-01", endDate: "2026-04-01", cat: "akademik" },
  { title: "UK 2",                         date: "2026-04-02", endDate: "2026-04-30", cat: "akademik" },
  { title: "Pintar 2 Kelas 6",            date: "2026-04-10", endDate: "2026-04-11", cat: "akademik" },
  { title: "Munaqosah",                    date: "2026-04-15", endDate: "2026-04-15", cat: "keagamaan" },
  { title: "TKA di Lab Komputer",          date: "2026-04-22", endDate: "2026-04-23", cat: "akademik" },
  { title: "Pengambilan Nilai Praktik",    date: "2026-04-27", endDate: "2026-04-29", cat: "akademik" },
  { title: "Istighosah / Doa Bersama",     date: "2026-04-30", endDate: "2026-04-30", cat: "keagamaan" },
  // Mei
  { title: "AAJ / Ujian Sekolah Kelas 6", date: "2026-05-04", endDate: "2026-05-08", cat: "akademik" },
  { title: "Gladi Wisuda Akbar",           date: "2026-05-11", endDate: "2026-05-12", cat: "gladi" },
  { title: "Wisuda Akbar",                 date: "2026-05-13", endDate: "2026-05-13", cat: "wisuda" },
  { title: "Imtihan Al-Quran (Munaqosah)", date: "2026-05-25", endDate: "2026-05-25", cat: "keagamaan" },
  { title: "Perpisahan",                   date: "2026-05-30", endDate: "2026-05-30", cat: "perpisahan" },
  // Juni
  { title: "Pengumuman Kelulusan",         date: "2026-06-02", endDate: "2026-06-02", cat: "akademik" },
];

function buildCalendar() {
  const grid = document.getElementById('calGrid');
  const MONTHS = [
    { year: 2026, month: 3,  label: 'April',  labelEm: '2026' },
    { year: 2026, month: 4,  label: 'Mei',    labelEm: '2026' },
    { year: 2026, month: 5,  label: 'Juni',   labelEm: '2026' },
  ];
  const today = new Date();

  MONTHS.forEach(m => {
    const card = document.createElement('div');
    card.className = 'cal-month-card rev';
    card.innerHTML = buildMonthCard(m, today);
    grid.appendChild(card);
  });
  observeReveal();
}

function buildMonthCard({ year, month, label, labelEm }, today) {
  const firstDay  = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMon = new Date(year, month + 1, 0).getDate();
  const DAY_LABELS = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];

  // Collect events for this month
  const monthEvents = EVENTS_DATA.filter(ev => {
    const s = new Date(ev.date);
    const e = new Date(ev.endDate);
    return (s.getFullYear() === year && s.getMonth() === month) ||
           (e.getFullYear() === year && e.getMonth() === month);
  });

  // Map day→categories
  const dayMap = {};
  monthEvents.forEach(ev => {
    const s = new Date(ev.date);
    const e = new Date(ev.endDate);
    for (let d = new Date(s); d <= e; d.setDate(d.getDate()+1)) {
      if (d.getFullYear() === year && d.getMonth() === month) {
        const k = d.getDate();
        if (!dayMap[k]) dayMap[k] = [];
        if (!dayMap[k].includes(ev.cat)) dayMap[k].push(ev.cat);
      }
    }
  });

  // Build day-header row
  const dayHeaders = DAY_LABELS.map(d => `<span>${d}</span>`).join('');

  // Build day cells
  let dayCells = '';
  for (let i = 0; i < firstDay; i++) dayCells += `<div class="cal-day empty"></div>`;
  for (let d = 1; d <= daysInMon; d++) {
    const isToday = (today.getFullYear() === year && today.getMonth() === month && today.getDate() === d);
    const cats    = dayMap[d] || [];
    const hasCat  = cats.length > 0;
    const multi   = cats.length > 1;
    const catCls  = multi ? 'multi-event' : (hasCat ? CAT_CLASS[cats[0]] : '');
    const todayCls = isToday ? 'today' : '';
    const hasCls  = hasCat ? 'has-event' : '';
    dayCells += `<div class="cal-day ${todayCls} ${hasCls} ${catCls}">${d}</div>`;
  }

  // Build events list — only events starting this month, ordered by date
  const sorted = [...monthEvents].sort((a,b) => new Date(a.date) - new Date(b.date));
  const isPast = ev => new Date(ev.endDate) < today;

  const eventRows = sorted.map(ev => {
    const s = new Date(ev.date);
    const e = new Date(ev.endDate);
    const sameDay = ev.date === ev.endDate;
    const dateStr = sameDay
      ? `${s.getDate()} ${label}`
      : `${s.getDate()}–${e.getDate()} ${label}`;
    const done = isPast(ev) ? `<span class="cal-event-done">✓ Selesai</span>` : '';
    return `
      <div class="cal-event-row">
        <div class="cal-event-dot-col"><div class="cal-event-dot ${CAT_CLASS[ev.cat]}"></div></div>
        <div class="cal-event-body">
          <div class="cal-event-date-lbl">${dateStr}</div>
          <div class="cal-event-title">${ev.title} ${done}</div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="cal-month-header">
      <div class="cal-month-name">${label} <em>${labelEm}</em></div>
    </div>
    <div class="cal-mini">
      <div class="cal-mini-header">${dayHeaders}</div>
      <div class="cal-mini-days">${dayCells}</div>
    </div>
    <div class="cal-events">${eventRows || '<div style="font-size:.8rem;color:var(--muted);padding:.5rem 0">Tidak ada kegiatan</div>'}</div>`;
}

/* ═══════════════════════════════════════════════════
   MADING ONLINE — Firebase RTDB path: /mading/posts
   ═══════════════════════════════════════════════════ */
let madingType   = 'post';
let madingFilter = 'all';
let madingUnsub  = null;

// Voting: track voted polls per session
const VOTED_KEY = 'bb2026_voted';
function getVoted() {
  try { return JSON.parse(sessionStorage.getItem(VOTED_KEY) || '{}'); } catch { return {}; }
}
function setVoted(postKey, optIdx) {
  const v = getVoted(); v[postKey] = optIdx; sessionStorage.setItem(VOTED_KEY, JSON.stringify(v));
}

function selectMadingType(type, btn) {
  madingType = type;
  document.querySelectorAll('.mtype-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('pollCreator').style.display = type === 'polling' ? 'flex' : 'none';
  document.getElementById('madingText').placeholder =
    type === 'pengumuman' ? 'Tulis pengumuman...' :
    type === 'polling'    ? 'Pertanyaan polling...' :
    'Tulis sesuatu untuk angkatan XVI...';
}

function filterMading(type, btn) {
  madingFilter = type;
  document.querySelectorAll('.mtab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  loadMading();
}

function loadMading() {
  const feed = document.getElementById('madingFeed');
  feed.innerHTML = '<div class="mading-loading">Memuat mading...</div>';

  if (madingUnsub) { madingUnsub(); madingUnsub = null; }

  const ref = db.ref('mading/posts').limitToLast(80);

  const handler = ref.on('value', snap => {
    const posts = [];
    snap.forEach(child => posts.push({ key: child.key, ...child.val() }));
    posts.sort((a, b) => (b.ts || 0) - (a.ts || 0));

    const filtered = madingFilter === 'all'
      ? posts
      : posts.filter(p => p.type === madingFilter);

    feed.innerHTML = '';

    if (filtered.length === 0) {
      feed.innerHTML = '<div class="mading-empty">📌 Belum ada postingan. Jadilah yang pertama!</div>';
      return;
    }

    filtered.forEach(p => {
      try {
        const card = buildMadingCard(p);
        if (card) feed.appendChild(card);
      } catch(err) {
        console.warn('Skip post', p.key, err.message);
      }
    });
  });

  madingUnsub = () => ref.off('value', handler);
}

function buildMadingCard(post) {
  const el = document.createElement('div');
  el.className   = 'mading-card';
  el.dataset.key = post.key || '';

  const text      = post.text  != null ? String(post.text)  : '';
  const name      = post.name  != null ? String(post.name)  : 'Anonim';
  const avatarStr = post.Avatar || post.avatar || '\u{1F338}';
  const type      = post.type  || 'post';
  const timeAgo   = post.ts ? getTimeAgo(Number(post.ts)) : '';

  const badgeMap   = { post:'badge-post', pengumuman:'badge-pengumuman', polling:'badge-polling' };
  const labelMap   = { post:'Post', pengumuman:'\u{1F4E2} Pengumuman', polling:'\u{1F4CA} Polling' };
  const badgeClass = badgeMap[type] || 'badge-post';
  const typeLabel  = labelMap[type] || 'Post';

  let body = '<div class="mading-card-text">' + escHtml(text) + '</div>';

  // Polling
  if (type === 'polling' && post.options) {
    const optionsArr = Array.isArray(post.options)
      ? post.options
      : Object.keys(post.options).sort((a,b) => Number(a)-Number(b)).map(k => post.options[k]);

    if (optionsArr.length >= 2) {
      const voted    = getVoted();
      const myVote   = voted[post.key] !== undefined ? Number(voted[post.key]) : -1;
      const hasVoted = myVote >= 0;
      const votesObj = post.votes || {};
      const total    = Object.values(votesObj).reduce((s,v) => s + Number(v), 0);
      const maxVotes = total > 0 ? Math.max(...Object.values(votesObj).map(Number)) : 0;

      const optHtml = optionsArr.map((opt, i) => {
        const count    = Number(votesObj[i] || 0);
        const pct      = total > 0 ? Math.round(count / total * 100) : 0;
        const isVoted  = myVote === i;
        const isLead   = hasVoted && count === maxVotes && count > 0;
        const barStyle = hasVoted ? 'transform:scaleX(' + (pct/100) + ')' : 'transform:scaleX(0)';
        return '<button class="poll-option-btn' + (isVoted ? ' voted' : '') + (isLead && !isVoted ? ' leading' : '') + '"'
          + ' onclick="votePoll(\'' + post.key + '\', ' + i + ')"'
          + (hasVoted ? ' disabled' : '') + '>'
          + '<div class="poll-bar-bg" style="' + barStyle + '"></div>'
          + '<div class="poll-option-content">'
          + '<span>' + escHtml(String(opt)) + '</span>'
          + (hasVoted ? '<span class="poll-pct">' + pct + '%</span>' : '')
          + '</div></button>';
      }).join('');

      body += '<div class="poll-options">' + optHtml + '</div>'
            + '<div class="poll-total">' + total + ' suara</div>';
    }
  }

  const likeCount = post.likes || 0;
  const isLiked   = (getLiked()[post.key] === true);

  el.innerHTML =
    '<div class="mading-card-header">'
      + '<div class="mading-card-avatar">' + avatarStr + '</div>'
      + '<div class="mading-card-meta">'
        + '<div class="mading-card-name">' + escHtml(name) + '</div>'
        + '<div class="mading-card-time">' + timeAgo + '</div>'
      + '</div>'
      + '<span class="mading-badge ' + badgeClass + '">' + typeLabel + '</span>'
    + '</div>'
    + body
    + '<div class="mading-card-actions">'
      + '<button class="mading-action-btn' + (isLiked ? ' liked' : '') + '" onclick="likePost(\'' + post.key + '\', this)">'
        + '<svg viewBox="0 0 24 24" fill="' + (isLiked ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
        + '<span id="like-count-' + post.key + '">' + likeCount + '</span>'
      + '</button>'
    + '</div>';

  return el;
}


function votePoll(postKey, optIdx) {
  const voted = getVoted();
  if (voted[postKey] !== undefined) return;
  setVoted(postKey, optIdx);

  const ref = db.ref(`mading/posts/${postKey}/votes/${optIdx}`);
  ref.transaction(cur => (cur || 0) + 1);
}

function submitMading() {
  const text = document.getElementById('madingText').value.trim();
  if (!text) { alert('Tulis isi postingan dulu!'); return; }
  if (text.length > 300) { alert('Terlalu panjang (maks 300 karakter)'); return; }

  const btn = document.querySelector('.mading-post-btn');
  btn.disabled = true;
  btn.textContent = 'Memposting...';

  const payload = {
    text,
    type:   madingType,
    name:   myNickname  || 'Anonim',
    Avatar: myEmoji     || '\u{1F338}',
    avatar: myEmoji     || '\u{1F338}',
    uid:    myUID       || 'guest',
    ts:     firebase.database.ServerValue.TIMESTAMP,
  };

  if (madingType === 'polling') {
    const opts = [0,1,2,3]
      .map(i => document.getElementById('pollOpt' + i).value.trim())
      .filter(Boolean);
    if (opts.length < 2) {
      alert('Polling perlu minimal 2 pilihan!');
      btn.disabled = false;
      btn.textContent = 'Posting';
      return;
    }
    payload.options = opts;
    payload.votes   = {};
    opts.forEach((_, i) => { payload.votes[i] = 0; });
  }

  db.ref('mading/posts').push(payload)
    .then(() => {
      document.getElementById('madingText').value = '';
      [0,1,2,3].forEach(i => {
        const el = document.getElementById('pollOpt' + i);
        if (el) el.value = '';
      });
      document.getElementById('madingCharCount').textContent = '0 / 300';
      btn.textContent = '\u2713 Terposting!';
      setTimeout(() => { btn.disabled = false; btn.textContent = 'Posting'; }, 1500);
    })
    .catch(err => {
      console.error('Mading error:', err);
      alert('Gagal posting: ' + err.message + '\n\nPastikan Firebase Rules: mading/posts = true');
      btn.disabled = false;
      btn.textContent = 'Posting';
    });
}

// Character counter
document.addEventListener('DOMContentLoaded', () => {
  const ta = document.getElementById('madingText');
  if (ta) ta.addEventListener('input', () => {
    document.getElementById('madingCharCount').textContent = `${ta.value.length} / 300`;
  });
});

/* ═══════════════════════════════════════════════════
   ANONYMOUS CHAT — Firebase RTDB path: /messages
   ═══════════════════════════════════════════════════ */
const NICK_EMOJIS = [''];
const NICK_NAMES  = ['Aku','Kamu','Dia'];

let myNickname = '';
let myEmoji    = '';
let myUID      = '';
let chatLoaded = false;

function initNickname() {
  let nick  = sessionStorage.getItem('bb2026_nick');
  let emoji = sessionStorage.getItem('bb2026_emoji');
  let uid   = sessionStorage.getItem('bb2026_uid');

  if (!nick || !emoji || !uid) {
    emoji = NICK_EMOJIS[Math.floor(Math.random() * NICK_EMOJIS.length)];
    nick  = NICK_NAMES[Math.floor(Math.random() * NICK_NAMES.length)];
    uid   = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('bb2026_nick',  nick);
    sessionStorage.setItem('bb2026_emoji', emoji);
    sessionStorage.setItem('bb2026_uid',   uid);
  }

  myNickname = nick;
  myEmoji    = emoji;
  myUID      = uid;

  document.getElementById('myNickName').textContent  = emoji + ' ' + nick;
  document.getElementById('myNickEmoji').textContent  = emoji;
  document.getElementById('madingAvatar').textContent = emoji;
  document.getElementById('madingMyName').textContent = nick;
}

function loadChat() {
  if (chatLoaded) return;
  chatLoaded = true;

  const container = document.getElementById('chatMessages');
  container.innerHTML = '';

  // Path: /messages (matches DB structure in screenshot)
  db.ref('messages').limitToLast(100).on('child_added', snap => {
    const msg = snap.val();
    renderMessage(msg, snap.key);
    container.scrollTop = container.scrollHeight;
  });
}

function renderMessage(msg, key) {
  const container = document.getElementById('chatMessages');
  const isOwn = msg.userId === myUID;

  const div  = document.createElement('div');
  div.className  = `chat-msg${isOwn ? ' own' : ''}`;
  div.dataset.key = key;

  // DB uses: text, timestamp, userId  (from screenshot)
  const time = msg.timestamp
    ? new Date(msg.timestamp).toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'})
    : '';

  // Support both old format (name field) and new uid-based
  const displayName = msg.nickname || msg.name || 'Anonim';
  const displayEmoji = msg.emoji || '💬';

  div.innerHTML = `
    <div class="chat-avatar">${displayEmoji}</div>
    <div class="chat-bubble">
      <div class="chat-bubble-name">${displayEmoji} ${escHtml(displayName)}</div>
      <div class="chat-bubble-text">${escHtml(msg.text)}</div>
      <div class="chat-bubble-time">${time}</div>
    </div>`;

  container.appendChild(div);
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text  = input.value.trim();
  if (!text) return;
  if (text.length > 300) { alert('Pesan terlalu panjang (maks 300 karakter)'); return; }

  // Save with structure compatible with existing DB
  db.ref('messages').push({
    text,
    nickname:  myNickname,
    emoji:     myEmoji,
    userId:    myUID,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  });

  input.value = '';
  input.style.height = 'auto';
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

// Lazy-load chat when section scrolls into view
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !chatLoaded) loadChat();
}, { threshold: 0.1 }).observe(document.getElementById('chat'));

/* ═══════════════════════════════════════════════════
   COUNTDOWN
   ═══════════════════════════════════════════════════ */
const CD_EVENTS = [
  { id:'cd1', ts: new Date('2026-05-13T08:00:00'), dc:'cd-done-gold' },
  { id:'cd2', ts: new Date('2026-05-30T08:00:00'), dc:'cd-done-rose' },
  { id:'cd3', ts: new Date('2026-06-02T08:00:00'), dc:'cd-done-teal' },
];

function tick() {
  const now = Date.now();
  CD_EVENTS.forEach(ev => {
    const el   = document.getElementById(ev.id); if (!el) return;
    const diff = ev.ts - now;
    if (diff <= 0) { el.innerHTML = `<div class="cd-done ${ev.dc}">✦ Sudah Berlangsung ✦</div>`; return; }
    const d = Math.floor(diff / 864e5);
    const h = Math.floor((diff / 36e5) % 24);
    const m = Math.floor((diff / 6e4) % 60);
    const s = Math.floor((diff / 1e3) % 60);
    const u = (v, l) => `<div class="cd-unit"><div class="cd-num">${String(v).padStart(2,'0')}</div><div class="cd-unit-lbl">${l}</div></div>`;
    const sep = '<div class="cd-sep">:</div>';
    el.innerHTML = u(d,'Hari') + sep + u(h,'Jam') + sep + u(m,'Menit') + sep + u(s,'Detik');
  });
}
setInterval(tick, 1000); tick();

/* ═══════════════════════════════════════════════════
   SCROLL PROGRESS
   ═══════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const dh = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress').style.width = (window.scrollY / dh * 100) + '%';
}, { passive: true });

/* ═══════════════════════════════════════════════════
   REVEAL ANIMATION
   ═══════════════════════════════════════════════════ */
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.rev:not(.in)').forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════════════════
   NAV BURGER
   ═══════════════════════════════════════════════════ */
function toggleBurger() {
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('nav-mob').classList.toggle('open');
}
function closeBurger() {
  document.getElementById('burger').classList.remove('open');
  document.getElementById('nav-mob').classList.remove('open');
}


/* ═══════════════════════════════════════════════════
   MADING HELPERS
   ═══════════════════════════════════════════════════ */
function getTimeAgo(ts) {
  const diff = Date.now() - ts;
  const s = Math.floor(diff / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0)  return d + 'h lalu';
  if (h > 0)  return h + 'j lalu';
  if (m > 0)  return m + 'm lalu';
  return 'Baru saja';
}

const LIKED_KEY = 'bb2026_liked';
function getLiked() {
  try { return JSON.parse(localStorage.getItem(LIKED_KEY) || '{}'); } catch { return {}; }
}
function likePost(postKey, btn) {
  const liked = getLiked();
  if (liked[postKey]) return; // already liked
  liked[postKey] = true;
  localStorage.setItem(LIKED_KEY, JSON.stringify(liked));

  btn.classList.add('liked');
  btn.querySelector('svg').setAttribute('fill', 'currentColor');

  const ref = db.ref('mading/posts/' + postKey + '/likes');
  ref.transaction(cur => (cur || 0) + 1, (err, committed, snap) => {
    if (!err && committed) {
      const el = document.getElementById('like-count-' + postKey);
      if (el) el.textContent = snap.val();
    }
  });
}

/* ═══════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════ */
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ═══════════════════════════════════════════════════
   LOADER
   ═══════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('gone'), 2200);
});

/* ═══════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════ */
buildGal();
initNickname();
buildCalendar();
loadPhotos();
loadMading();
observeReveal();
