/* ══════════════════════════════════════════
   FIREBASE CONFIGURATION
   Ganti dengan config dari Firebase Console kamu:
   https://console.firebase.google.com/
   Project Settings > General > Your apps > Firebase SDK snippet > Config
   ══════════════════════════════════════════ */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

/* ── Firebase init ── */
let db = null, storage = null, firebaseReady = false;

try {
  firebase.initializeApp(firebaseConfig);
  db = firebase.database();
  storage = firebase.storage();
  firebaseReady = firebaseConfig.apiKey !== "YOUR_API_KEY";
} catch(e) {
  console.warn('Firebase init failed:', e);
}

if (!firebaseReady) {
  document.getElementById('fb-banner').classList.add('show');
}

/* ══════════════════════════════════════════
   STUDENT DATA
   ══════════════════════════════════════════ */
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
const CLS_COLOR = {k:'cls-gold',p:'cls-rose',m:'cls-teal'};

/* ══════════════════════════════════════════
   STUDENT GALLERY (nama)
   ══════════════════════════════════════════ */
function buildGal(){
  const g = document.getElementById('gal');
  STUDENTS.forEach((s,i) => {
    const init = s.n.split(' ').slice(0,2).map(w=>w[0]).join('');
    const ph = PH[i % PH.length];
    const q = QUOTES[i % QUOTES.length];
    const el = document.createElement('div');
    el.className = 'gal-card rev';
    el.dataset.c = s.c;
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

/* ══════════════════════════════════════════
   PHOTO GALLERY — Firebase Storage + RTDB
   ══════════════════════════════════════════ */
let totalPhotos = 0;

function triggerUpload() {
  if (!firebaseReady) {
    alert('Firebase belum dikonfigurasi! Isi firebaseConfig dulu ya.');
    return;
  }
  document.getElementById('fileInput').click();
}

async function handleUpload(event) {
  const files = Array.from(event.target.files);
  if (!files.length) return;

  const btn = document.getElementById('uploadBtn');
  btn.disabled = true;
  btn.textContent = 'Mengupload...';

  const toast = document.getElementById('uploadProgress');
  const bar = document.getElementById('uploadBar');
  const txt = document.getElementById('uploadProgressText');
  toast.classList.add('show');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    txt.textContent = `Mengupload ${i+1}/${files.length}: ${file.name}`;

    try {
      const filename = `gallery/${Date.now()}_${Math.random().toString(36).slice(2)}_${file.name}`;
      const ref = storage.ref(filename);

      await new Promise((resolve, reject) => {
        const task = ref.put(file);
        task.on('state_changed',
          snap => {
            const pct = (snap.bytesTransferred / snap.totalBytes * 100).toFixed(0);
            bar.style.width = pct + '%';
          },
          reject,
          resolve
        );
      });

      const url = await ref.getDownloadURL();
      await db.ref('gallery').push({
        url,
        filename,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        uploader: 'anonim'
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
  if (!firebaseReady) {
    document.getElementById('photo-count').textContent = '0 Foto';
    document.getElementById('photoEmpty').style.display = 'block';
    return;
  }

  const grid = document.getElementById('photoGrid');
  const empty = document.getElementById('photoEmpty');
  const countEl = document.getElementById('photo-count');

  db.ref('gallery').orderByChild('timestamp').on('value', snap => {
    // Clear existing photo items (keep empty placeholder)
    grid.querySelectorAll('.photo-item').forEach(el => el.remove());
    const photos = [];
    snap.forEach(child => {
      photos.push({ key: child.key, ...child.val() });
    });
    photos.reverse(); // newest first

    totalPhotos = photos.length;
    countEl.textContent = `${totalPhotos} Foto`;

    if (photos.length === 0) {
      empty.style.display = 'block';
    } else {
      empty.style.display = 'none';
      photos.forEach(p => addPhotoCard(p, grid));
    }
    observeReveal();
  });
}

function addPhotoCard(photo, grid) {
  const item = document.createElement('div');
  item.className = 'photo-item rev';
  item.dataset.key = photo.key;
  const date = photo.timestamp ? new Date(photo.timestamp).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}) : '';
  item.innerHTML = `
    <img src="${photo.url}" alt="Kenangan" loading="lazy" onerror="this.style.minHeight='120px'">
    <div class="photo-date">${date}</div>
  `;
  item.addEventListener('click', () => openLightbox(photo.url));
  grid.appendChild(item);
}

/* Lightbox */
function openLightbox(url) {
  document.getElementById('lightboxImg').src = url;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════
   ANONYMOUS CHAT — Firebase Realtime Database
   ══════════════════════════════════════════ */
const NICK_EMOJIS = ['🌸','🌟','🎓','🌻','🦋','🌈','⭐','🎨','🌙','🦄','🍀','🎵','🌺','🔥','💫','🎯','🌊','🎪'];
const NICK_NAMES = [
  'Bunga Kecil','Bintang Fajar','Sang Penjelajah','Angin Pagi','Embun Senja',
  'Cahaya Senja','Pejuang Muda','Sang Pemimpi','Awan Putih','Rembulan',
  'Sang Pejuang','Bintang Kecil','Langit Biru','Sang Juara','Mentari Pagi'
];

let myNickname = '';
let myEmoji = '';
let chatLoaded = false;

function initNickname() {
  let stored = sessionStorage.getItem('bb2026_nick');
  let storedEmoji = sessionStorage.getItem('bb2026_emoji');

  if (!stored || !storedEmoji) {
    const emoji = NICK_EMOJIS[Math.floor(Math.random() * NICK_EMOJIS.length)];
    const name = NICK_NAMES[Math.floor(Math.random() * NICK_NAMES.length)];
    sessionStorage.setItem('bb2026_nick', name);
    sessionStorage.setItem('bb2026_emoji', emoji);
    stored = name;
    storedEmoji = emoji;
  }

  myNickname = stored;
  myEmoji = storedEmoji;
  document.getElementById('myNickName').textContent = myEmoji + ' ' + myNickname;
  document.getElementById('myNickEmoji').textContent = myEmoji;
}

function loadChat() {
  if (!firebaseReady || chatLoaded) return;
  chatLoaded = true;

  const msgContainer = document.getElementById('chatMessages');
  msgContainer.innerHTML = '';

  // Load last 100 messages
  const chatRef = db.ref('chat/messages').limitToLast(100);

  chatRef.on('child_added', snap => {
    const msg = snap.val();
    renderMessage(msg, snap.key);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  });
}

function renderMessage(msg, key) {
  const container = document.getElementById('chatMessages');
  const isOwn = (msg.nickname === myNickname && msg.emoji === myEmoji);

  const div = document.createElement('div');
  div.className = `chat-msg${isOwn ? ' own' : ''}`;
  div.dataset.key = key;

  const time = msg.timestamp
    ? new Date(msg.timestamp).toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'})
    : '';

  div.innerHTML = `
    <div class="chat-avatar">${msg.emoji || '🌸'}</div>
    <div class="chat-bubble">
      <div class="chat-bubble-name">${escHtml(msg.emoji || '')} ${escHtml(msg.nickname || 'Anonim')}</div>
      <div class="chat-bubble-text">${escHtml(msg.text)}</div>
      <div class="chat-bubble-time">${time}</div>
    </div>
  `;
  container.appendChild(div);
}

function sendMessage() {
  if (!firebaseReady) {
    alert('Firebase belum dikonfigurasi!');
    return;
  }
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  if (text.length > 300) { alert('Pesan terlalu panjang (maks 300 karakter)'); return; }

  db.ref('chat/messages').push({
    text,
    nickname: myNickname,
    emoji: myEmoji,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });

  input.value = '';
  input.style.height = 'auto';
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

// Lazy-load chat when section is visible
const chatObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !chatLoaded) loadChat();
  });
}, { threshold: 0.1 });
chatObserver.observe(document.getElementById('chat'));

/* ══════════════════════════════════════════
   COUNTDOWN
   ══════════════════════════════════════════ */
const EVENTS = [
  {id:'cd1',ts:new Date('2026-05-13T08:00:00'),dc:'cd-done-gold'},
  {id:'cd2',ts:new Date('2026-05-30T08:00:00'),dc:'cd-done-rose'},
  {id:'cd3',ts:new Date('2026-06-02T08:00:00'),dc:'cd-done-teal'},
];
function tick(){
  const now = Date.now();
  EVENTS.forEach(ev => {
    const el = document.getElementById(ev.id); if (!el) return;
    const diff = ev.ts - now;
    if (diff <= 0) { el.innerHTML = `<div class="cd-done ${ev.dc}">✦ Sudah Berlangsung ✦</div>`; return; }
    const d = Math.floor(diff/864e5);
    const h = Math.floor((diff/36e5)%24);
    const m = Math.floor((diff/6e4)%60);
    const s = Math.floor((diff/1e3)%60);
    const u = (v,l) => `<div class="cd-unit"><div class="cd-num">${String(v).padStart(2,'0')}</div><div class="cd-unit-lbl">${l}</div></div>`;
    const sep = '<div class="cd-sep">:</div>';
    el.innerHTML = u(d,'Hari') + sep + u(h,'Jam') + sep + u(m,'Menit') + sep + u(s,'Detik');
  });
}
setInterval(tick, 1000); tick();

/* ══════════════════════════════════════════
   SCROLL PROGRESS
   ══════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const st = window.scrollY;
  const dh = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress').style.width = (st / dh * 100) + '%';
}, { passive: true });

/* ══════════════════════════════════════════
   REVEAL ANIMATION
   ══════════════════════════════════════════ */
function observeReveal(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: .1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.rev,.rev-l,.rev-s').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   NAV BURGER
   ══════════════════════════════════════════ */
function toggleBurger(){
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('nav-mob').classList.toggle('open');
}
function closeBurger(){
  document.getElementById('burger').classList.remove('open');
  document.getElementById('nav-mob').classList.remove('open');
}

/* ══════════════════════════════════════════
   LOADER
   ══════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('gone'), 2400);
});

/* ══════════════════════════════════════════
   INIT
   ══════════════════════════════════════════ */
buildGal();
initNickname();
loadPhotos();
observeReveal();
