'use strict';

const STRIPE   = 'https://buy.stripe.com/3cI28r0nRbNva7J3VyaEE00';
const PAYPAL   = 'https://www.paypal.me/Misswaxbeautycare';
const CALENDLY = 'https://calendly.com/missnyungedigitalservices/echange-projet-digital-ecommerce';
const ADMIN_PWD = 'Budgetsmart20@131690-25';
const COLORS = ['#2E7D5E','#1E5A9C','#C8922A','#D4621A','#7B3DB5','#B53051','#4AAB9B'];
const CATS = {nourriture:'🥗',transport:'🚌',loyer:'🏠',factures:'💡',shopping:'🛍',sante:'💊',enfants:'👶',business:'💼',loisirs:'🎭',epargne:'💰',dettes:'📉',autre:'📦'};

const TIPS = [
  {cat:'Budget',txt:'La règle 50/30/20 : 50% besoins, 30% envies, 20% épargne.'},
  {cat:'Épargne',txt:'Automatisez votre épargne dès le jour de votre salaire.'},
  {cat:'Dépenses',txt:'Attendez 48h avant tout achat non essentiel.'},
  {cat:'Mindset',txt:'Chaque euro économisé aujourd\'hui est une liberté gagnée demain.'},
  {cat:'Alimentation',txt:'Cuisinez à la maison 3 fois cette semaine. Économisez 20 à 50 €.'},
  {cat:'Abonnements',txt:'Faites le bilan de vos abonnements inutilisés ce mois-ci.'},
  {cat:'Investissement',txt:'50 € par mois à 5% donnent 76 000 € en 30 ans.'},
  {cat:'Dettes',txt:'Remboursez d\'abord la dette avec le taux d\'intérêt le plus élevé.'},
  {cat:'Urgences',txt:'Constituez un fonds d\'urgence de 3 mois de dépenses.'},
  {cat:'Business',txt:'Séparez finances personnelles et professionnelles dès le 1er jour.'},
  {cat:'Famille',txt:'Impliquez vos enfants dans le budget familial dès 8 ans.'},
  {cat:'Couple',txt:'Parlez d\'argent avec votre partenaire chaque mois.'},
  {cat:'Shopping',txt:'Faites une liste avant chaque course et respectez-la.'},
];

const DEFIS = [
  {name:'Défi 1 € par jour',           desc:'Économisez 1 € de plus chaque jour pendant 30 jours.',  dur:'30 jours',  obj:30},
  {name:'7 jours sans dépense inutile', desc:'Zéro restaurant, zéro shopping, zéro achat impulsif.',  dur:'7 jours',   obj:50},
  {name:'Défi 30 jours épargne',        desc:'Épargnez chaque jour et atteignez 465 € en 30 jours.',  dur:'30 jours',  obj:465},
  {name:'Défi rentrée scolaire',        desc:'Préparez le budget rentrée semaine par semaine.',        dur:'8 semaines',obj:160},
  {name:'Défi business',                desc:'Mettez de côté chaque mois pour lancer votre activité.',dur:'12 mois',   obj:600},
  {name:'Défi famille',                 desc:'Objectif commun pour toute la famille.',                 dur:'3 mois',    obj:300},
];

const PLANS = {
  eu:[
    {name:'Gratuit', price:'0',    unit:'€/mois',feats:['Tableau de bord','Fiche quotidienne (7j essai)','1 objectif personnel','Conseils basiques','3 défis épargne'],cta:'Plan actuel'},
    {name:'Basic',   price:'2,99', unit:'€/mois',feats:['Objectifs illimités','Graphiques mensuels','Tous les défis','Catégories personnalisées','Résumé mensuel'],cta:'Choisir Basic'},
    {name:'Premium', price:'5,99', unit:'€/mois',feats:['Tout Basic inclus','Projet Business','Projet Couple','Conseils personnalisés','Export PDF','Mode famille','Alertes'],cta:'Choisir Premium',feat:true,badge:'Populaire'},
    {name:'Business',price:'9,99', unit:'€/mois',feats:['Tout Premium inclus','Plusieurs profils','Budget familial','Rapports avancés','Export Excel','Assistance'],cta:'Choisir Business'},
  ],
  af:[
    {name:'Gratuit', price:'0',  unit:'$/mois',feats:['Tableau de bord','Fiche quotidienne (7j essai)','1 objectif','Conseils basiques'],cta:'Plan actuel'},
    {name:'Basic',   price:'2',  unit:'$/mois',feats:['Objectifs illimités','Graphiques mensuels','Tous les défis','Catégories perso'],cta:'Choisir Basic — 2$/mois'},
    {name:'Premium', price:'3',  unit:'$/mois',feats:['Tout Basic inclus','Projet Business','Projet Couple','Export PDF','Mode famille','Alertes'],cta:'Choisir Premium — 3$/mois',feat:true,badge:'Populaire'},
    {name:'Business',price:'5',  unit:'$/mois',feats:['Tout Premium inclus','Plusieurs profils','Budget familial','Rapports avancés','Export Excel'],cta:'Choisir Business — 5$/mois'},
  ],
};

let mode = 'eu';
let coOffer = null;

/* ═══ INIT ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  nav(); mobilemenu(); btns();
  loadProfile(); loadPhoto();
  setDate(); setEntryDate();
  renderDash(); renderEntries(); renderGoals();
  renderTips(); renderDefis();
  renderPricingAll();
  coachingInit();
  adminInit();
  notifInit();
  pwaInit();
});

/* ═══ NAVIGATION ════════════════════════════════════ */
function nav() {
  document.querySelectorAll('.ni').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      go(el.dataset.p);
      closeSidebar();
    });
  });
  // Sidebar profile → profil page
  const sp = document.getElementById('sp');
  if (sp) sp.addEventListener('click', () => { go('profile'); closeSidebar(); });
  // Sidebar upgrade
  document.querySelectorAll('.sb-up').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); go('pricing'); closeSidebar(); });
  });
}

function go(page) {
  if (!page) return;
  document.querySelectorAll('.ni').forEach(i => i.classList.toggle('active', i.dataset.p === page));
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === 'p-' + page));
  window.scrollTo(0,0);
  if (page === 'admin' && localStorage.getItem('bs_admin') === ADMIN_PWD) renderAdmin();
  if (page !== 'pricing') { const b = document.getElementById('selBar'); if (b) b.style.display = 'none'; }
}

function mobilemenu() {
  const btn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const ov = document.getElementById('ov');
  if (btn) btn.addEventListener('click', () => { sidebar.classList.toggle('open'); ov.classList.toggle('show'); });
  if (ov) ov.addEventListener('click', closeSidebar);
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('ov').classList.remove('show');
}

/* ═══ BUTTONS ═══════════════════════════════════════ */
function btns() {
  const b = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener('click', fn); };
  // Dashboard
  b('coachBar',     () => go('coaching'));
  b('upsellBar',    () => go('pricing'));
  b('objPersonal',  () => go('goals'));
  b('objBusiness',  () => go('business'));
  b('objCouple',    () => go('couple'));
  // Daily
  b('btnAddEntry',  addEntry);
  // Goals
  b('btnAddGoal',   addGoal);
  b('ugBusiness',   () => go('business'));
  b('ugCouple',     () => go('couple'));
  // Tips
  b('btnNewTip',    newTip);
  // Family
  b('btnFamCard',   () => window.open(STRIPE, '_blank'));
  b('btnFamPP',     () => window.open(PAYPAL, '_blank'));
  // Pricing toggles
  b('togEU', () => { mode='eu'; document.getElementById('togEU').classList.add('active'); document.getElementById('togAF').classList.remove('active'); renderPricingMain(); });
  b('togAF', () => { mode='af'; document.getElementById('togAF').classList.add('active'); document.getElementById('togEU').classList.remove('active'); renderPricingMain(); });
  // Pricing payment
  b('selCard', () => window.open(STRIPE, '_blank'));
  b('selPP',   () => window.open(PAYPAL, '_blank'));
  // Business project payment
  b('pcBCard', () => window.open(STRIPE, '_blank'));
  b('pcBPP',   () => window.open(PAYPAL, '_blank'));
  // Couple project payment
  b('pcCCard', () => window.open(STRIPE, '_blank'));
  b('pcCPP',   () => window.open(PAYPAL, '_blank'));
  // Modal
  b('mCard',  () => { closeModal(); window.open(STRIPE, '_blank'); });
  b('mPP',    () => { closeModal(); window.open(PAYPAL, '_blank'); });
  b('mClose', closeModal);
  const modal = document.getElementById('modal');
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  // Profile
  b('btnSaveProfile', saveProfile);
  b('btnExport',      exportData);
  b('btnClear',       clearData);
  b('btnInstall',     pwaInstall);
  b('btnAdmin',       adminLogin);
  b('btnLogout',      adminLogout);
  // Photo
  const pi = document.getElementById('photoInput');
  if (pi) pi.addEventListener('change', handlePhoto);
  // Admin nav
  document.querySelectorAll('.anb').forEach(btn => btn.addEventListener('click', () => go(btn.dataset.p)));
}

/* ═══ UTILS ═════════════════════════════════════════ */
function setDate() { const el = document.getElementById('phDate'); if (el) el.textContent = new Date().toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long',year:'numeric'}); }
function setEntryDate() { const el = document.getElementById('eDate'); if (el) el.value = new Date().toISOString().slice(0,10); }
function ld(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }
function sv(k,v) { localStorage.setItem(k, JSON.stringify(v)); }
function fmt(v, c='€') { return v.toLocaleString('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2})+' '+c; }
function txt(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }
function toast(msg) {
  const t = document.getElementById('toast'); if (!t) return;
  t.textContent = msg; t.style.transform = 'translateY(0)'; t.style.opacity = '1';
  clearTimeout(t._t); t._t = setTimeout(() => { t.style.transform = 'translateY(80px)'; t.style.opacity = '0'; }, 3200);
}

/* ═══ DASHBOARD ════════════════════════════════════ */
function renderDash() {
  const entries = ld('entries', []);
  const now = new Date(), m = now.getMonth(), y = now.getFullYear();
  let inc=0, exp=0, sav=0; const cats = {};
  entries.forEach(e => {
    const d = new Date(e.date);
    if (d.getMonth()===m && d.getFullYear()===y) {
      inc += e.income||0; exp += e.expense||0; sav += e.saved||0;
      cats[e.cat] = (cats[e.cat]||0) + (e.expense||0);
    }
  });
  const p = ld('profile', {}), cur = p.currency||'€';
  txt('kBalance', fmt(inc-exp,cur));
  txt('kIncome',  fmt(inc,cur));
  txt('kExpense', fmt(exp,cur));
  txt('kSaved',   fmt(sav,cur));
  const ab = document.getElementById('alertBox');
  if (ab) { if (inc>0 && exp/inc>0.8) { ab.style.display='block'; txt('alertMsg','Attention : vos dépenses représentent '+Math.round(exp/inc*100)+'% de vos revenus ce mois-ci !'); } else ab.style.display='none'; }
  txt('objPersonalVal', fmt(ld('goals',[]).reduce((s,g)=>s+(g.saved||0),0), cur));
  drawDonut(cats, cur);
  drawBar(entries, cur);
  renderRecentTx(entries.slice(-5).reverse(), cur);
  renderActiveDefis();
  txt('dashTip', TIPS[Math.floor(Math.random()*TIPS.length)].txt);
}

/* ═══ CHARTS ════════════════════════════════════════ */
function drawDonut(cats, cur) {
  const cv = document.getElementById('donut'); if (!cv) return;
  const ctx = cv.getContext('2d'), cx=90, cy=90, R=75, r=48;
  ctx.clearRect(0,0,180,180);
  const ents = Object.entries(cats).filter(([,v])=>v>0);
  const tot = ents.reduce((s,[,v])=>s+v,0);
  const leg = document.getElementById('donutLeg'); if (leg) leg.innerHTML='';
  if (!tot) { ctx.strokeStyle='#D4D0C8'; ctx.lineWidth=27; ctx.beginPath(); ctx.arc(cx,cy,62,0,Math.PI*2); ctx.stroke(); return; }
  let ang = -Math.PI/2;
  ents.forEach(([cat,val],i) => {
    const sl=(val/tot)*Math.PI*2, col=COLORS[i%COLORS.length];
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,R,ang,ang+sl); ctx.closePath(); ctx.fillStyle=col; ctx.fill(); ang+=sl;
    if (leg) { const d=document.createElement('div'); d.className='dl'; d.innerHTML='<div class="dd" style="background:'+col+'"></div><span style="flex:1">'+(CATS[cat]||'')+' '+cat+'</span><span style="font-weight:800;color:#0D1117">'+fmt(val,cur)+'</span>'; leg.appendChild(d); }
  });
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill();
  ctx.fillStyle='#0D1117'; ctx.font='bold 11px DM Sans,sans-serif'; ctx.textAlign='center';
  ctx.fillText(fmt(tot,cur).split(' ')[0], cx, cy-2);
  ctx.fillStyle='#6B7280'; ctx.font='10px DM Sans,sans-serif'; ctx.fillText('total',cx,cy+12);
}

function drawBar(all, cur) {
  const cv = document.getElementById('bar'); if (!cv) return;
  const ctx = cv.getContext('2d'), W=cv.width, H=cv.height, now=new Date();
  ctx.clearRect(0,0,W,H);
  const months = [];
  for (let i=5;i>=0;i--) { const d=new Date(now.getFullYear(),now.getMonth()-i,1); months.push({lbl:d.toLocaleDateString('fr-FR',{month:'short'}),m:d.getMonth(),y:d.getFullYear(),inc:0,exp:0,sav:0}); }
  all.forEach(e => { const d=new Date(e.date),mm=months.find(x=>x.m===d.getMonth()&&x.y===d.getFullYear()); if(mm){mm.inc+=e.income||0;mm.exp+=e.expense||0;mm.sav+=e.saved||0;} });
  const pL=44,pR=10,pT=12,pB=26,cW=W-pL-pR,cH=H-pT-pB,max=Math.max(...months.flatMap(m=>[m.inc,m.exp,m.sav]),1);
  ctx.strokeStyle='#E8E5E0'; ctx.lineWidth=1;
  for (let i=0;i<=4;i++) { const y=pT+cH-(i/4)*cH; ctx.beginPath(); ctx.moveTo(pL,y); ctx.lineTo(pL+cW,y); ctx.stroke(); ctx.fillStyle='#6B7280'; ctx.font='9px DM Sans'; ctx.textAlign='right'; ctx.fillText(Math.round(max*i/4),pL-4,y+3); }
  const bw=cW/months.length,gw=bw*0.22,bwi=bw*0.2;
  months.forEach((mm,i) => {
    const x=pL+i*bw+gw;
    [['#2E7D5E',mm.inc],['#D4621A',mm.exp],['#C8922A',mm.sav]].forEach(([col,val],j) => {
      const bh=(val/max)*cH; ctx.fillStyle=col; ctx.beginPath(); ctx.roundRect(x+j*(bwi+2),pT+cH-bh,bwi,bh,[3,3,0,0]); ctx.fill();
    });
    ctx.fillStyle='#6B7280'; ctx.font='9px DM Sans'; ctx.textAlign='center'; ctx.fillText(mm.lbl,pL+i*bw+bw/2,H-6);
  });
  [['Revenus','#2E7D5E'],['Dépenses','#D4621A'],['Économies','#C8922A']].forEach(([lbl,col],i) => {
    const lx=W-210+i*72; ctx.fillStyle=col; ctx.fillRect(lx,3,9,9); ctx.fillStyle='#6B7280'; ctx.font='9px DM Sans'; ctx.textAlign='left'; ctx.fillText(lbl,lx+12,11);
  });
}

function renderRecentTx(entries, cur) {
  const el = document.getElementById('recentTx'); if (!el) return;
  if (!entries.length) { el.innerHTML='<div class="empty">Aucune transaction encore.</div>'; return; }
  el.innerHTML = entries.map(e => `
    <div class="tx">
      <div class="tx-cat">${CATS[e.cat]||'📦'}</div>
      <div class="tx-info"><div class="tx-date">${new Date(e.date).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div><div class="tx-note">${e.note||e.cat}</div></div>
      <div class="tx-amounts">
        ${e.income ? '<div class="tx-inc">+'+fmt(e.income,cur)+'</div>' : ''}
        ${e.expense ? '<div class="tx-exp">-'+fmt(e.expense,cur)+'</div>' : ''}
        ${e.saved ? '<div class="tx-sav">+'+fmt(e.saved,cur)+' épargne</div>' : ''}
      </div>
    </div>`).join('');
}

function renderActiveDefis() {
  const sec = document.getElementById('activeDefiCard');
  const lst = document.getElementById('activeDefiList');
  if (!sec||!lst) return;
  const joined = ld('joinedDefis', {});
  const savings = ld('defiSavings', {});
  const keys = Object.keys(joined);
  if (!keys.length) { sec.style.display='none'; return; }
  sec.style.display='block';
  lst.innerHTML = keys.map(i => {
    const d = DEFIS[parseInt(i)]; if (!d) return '';
    const saved = savings[i]||0;
    const pct = Math.min(100, Math.round((saved/d.obj)*100));
    return `<div class="ad-item">
      <div class="ad-name">${d.name}</div>
      <div class="ad-bar"><div class="ad-fill" style="width:${pct}%"></div></div>
      <div class="ad-meta">${fmt(saved)} économisé sur ${fmt(d.obj)} — ${pct}%</div>
    </div>`;
  }).join('');
}

/* ═══ DAILY ═════════════════════════════════════════ */
function addEntry() {
  const date = document.getElementById('eDate').value;
  const income = parseFloat(document.getElementById('eIncome').value)||0;
  const expense = parseFloat(document.getElementById('eExpense').value)||0;
  const cat = document.getElementById('eCat').value;
  const saved = parseFloat(document.getElementById('eSaved').value)||0;
  const note = document.getElementById('eNote').value.trim();
  if (!date) { toast('Sélectionnez une date.'); return; }
  if (!income && !expense) { toast('Saisissez un revenu ou une dépense.'); return; }
  const entries = ld('entries', []);
  entries.push({id:Date.now(),date,income,expense,cat,saved,note});
  sv('entries', entries);
  ['eIncome','eExpense','eSaved','eNote'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  renderEntries(); renderDash();
  toast('Fiche enregistrée !');
}

function renderEntries() {
  const entries = ld('entries', []), p = ld('profile', {}), cur = p.currency||'€';
  const now = new Date(), today = now.toISOString().slice(0,10);
  const wS = new Date(now); wS.setDate(now.getDate()-now.getDay());
  let dE=0,wE=0,mE=0,tS=0;
  entries.forEach(e => {
    if (e.date===today) dE+=e.expense||0;
    if (new Date(e.date)>=wS) wE+=e.expense||0;
    const d=new Date(e.date); if(d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()) mE+=e.expense||0;
    tS+=e.saved||0;
  });
  txt('tDay',fmt(dE,cur)); txt('tWeek',fmt(wE,cur)); txt('tMonth',fmt(mE,cur)); txt('tSaved',fmt(tS,cur));
  const lst = document.getElementById('entriesList'); if (!lst) return;
  if (!entries.length) { lst.innerHTML='<div class="empty">Aucune fiche encore.</div>'; return; }
  lst.innerHTML = [...entries].reverse().map(e => `
    <div class="tx">
      <div class="tx-cat">${CATS[e.cat]||'📦'}</div>
      <div class="tx-info"><div class="tx-date">${new Date(e.date).toLocaleDateString('fr-FR',{weekday:'short',day:'numeric',month:'short'})}</div><div class="tx-note">${e.note||e.cat}</div></div>
      <div class="tx-amounts">
        ${e.income ? '<div class="tx-inc">+'+fmt(e.income,cur)+'</div>' : ''}
        ${e.expense ? '<div class="tx-exp">-'+fmt(e.expense,cur)+'</div>' : ''}
        ${e.saved ? '<div class="tx-sav">'+fmt(e.saved,cur)+' épargne</div>' : ''}
      </div>
      <button class="tx-del" data-id="${e.id}">✕</button>
    </div>`).join('');
  lst.querySelectorAll('.tx-del').forEach(btn => btn.addEventListener('click', () => delEntry(+btn.dataset.id)));
}

function delEntry(id) { if (!confirm('Supprimer cette entrée ?')) return; sv('entries', ld('entries',[]).filter(e=>e.id!==id)); renderEntries(); renderDash(); }

/* ═══ GOALS ═════════════════════════════════════════ */
function addGoal() {
  const goals = ld('goals', []);
  if (goals.length >= 1) { showModal('🔒', 'Objectifs illimités', 'Le Plan Gratuit inclut 1 objectif. Passez au Plan Basic pour des objectifs illimités !'); return; }
  const name = document.getElementById('gCustom').value.trim() || document.getElementById('gName').value;
  const target = parseFloat(document.getElementById('gTarget').value)||0;
  const saved = parseFloat(document.getElementById('gSaved').value)||0;
  const date = document.getElementById('gDate').value;
  if (!target) { toast('Saisissez un montant cible.'); return; }
  goals.push({id:Date.now(),name,target,saved,date});
  sv('goals', goals);
  ['gCustom','gTarget','gSaved','gDate'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  renderGoals(); renderDash();
  toast('Objectif créé !');
}

function renderGoals() {
  const goals = ld('goals',[]), p = ld('profile',{}), cur = p.currency||'€';
  const lst = document.getElementById('goalsList'); if (!lst) return;
  if (!goals.length) { lst.innerHTML='<div class="empty">Aucun objectif. Commencez à rêver grand !</div>'; return; }
  lst.className = 'goals-grid';
  lst.innerHTML = goals.map(g => {
    const pct = Math.min(100, Math.round((g.saved/g.target)*100))||0;
    const dt = g.date ? new Date(g.date).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'}) : 'Date non définie';
    return `<div class="goal-card">
      <div class="goal-hd">
        <div><div class="goal-name">${g.name}</div><div class="goal-dt">Date cible : ${dt}</div></div>
        <button class="goal-del" data-id="${g.id}">✕</button>
      </div>
      <div class="goal-amts">
        <div><div style="font-size:0.7rem;color:#6B7280;font-weight:800;text-transform:uppercase;margin-bottom:2px">Économisé</div><div class="goal-sv">${fmt(g.saved,cur)}</div></div>
        <div class="goal-tg"><div style="font-size:0.7rem;color:#6B7280;font-weight:800;text-transform:uppercase;margin-bottom:2px">Objectif</div><strong style="font-family:'Cormorant Garamond',serif;font-size:1.1rem">${fmt(g.target,cur)}</strong></div>
      </div>
      <div class="pb"><div class="pf" style="width:${pct}%"></div></div>
      <div class="pp-pct">${pct}% atteint — Restant : ${fmt(Math.max(0,g.target-g.saved),cur)}</div>
      <button class="goal-add" data-id="${g.id}">+ Ajouter des économies aujourd'hui</button>
    </div>`;
  }).join('');
  lst.querySelectorAll('.goal-del').forEach(btn => btn.addEventListener('click', () => delGoal(+btn.dataset.id)));
  lst.querySelectorAll('.goal-add').forEach(btn => btn.addEventListener('click', () => addToGoal(+btn.dataset.id)));
}

function delGoal(id) { if (!confirm('Supprimer cet objectif ?')) return; sv('goals', ld('goals',[]).filter(g=>g.id!==id)); renderGoals(); renderDash(); }
function addToGoal(id) {
  const amt = parseFloat(prompt('Montant économisé aujourd\'hui (€) :'));
  if (!amt||isNaN(amt)||amt<=0) return;
  const goals = ld('goals',[]), g = goals.find(x=>x.id===id);
  if (g) { g.saved = Math.min(g.target, g.saved+amt); sv('goals',goals); renderGoals(); renderDash(); toast('Économies ajoutées !'); }
}

/* ═══ TIPS ══════════════════════════════════════════ */
function renderTips() {
  txt('tipText', TIPS[Math.floor(Math.random()*TIPS.length)].txt);
  const grid = document.getElementById('tipsGrid'); if (!grid) return;
  grid.innerHTML = TIPS.map(t => `<div class="tip-card"><div class="tip-cat">${t.cat}</div><div class="tip-txt">${t.txt}</div></div>`).join('');
}
function newTip() { txt('tipText', TIPS[Math.floor(Math.random()*TIPS.length)].txt); }

/* ═══ DÉFIS ═════════════════════════════════════════ */
function renderDefis() {
  const grid = document.getElementById('defiGrid'); if (!grid) return;
  const joined = ld('joinedDefis', {});
  const savings = ld('defiSavings', {});
  grid.innerHTML = DEFIS.map((d, i) => {
    const isJ = !!joined[i];
    const saved = savings[i]||0;
    const pct = Math.min(100, Math.round((saved/d.obj)*100));
    const elapsed = isJ ? Math.floor((new Date()-new Date(joined[i]))/(1000*60*60*24)) : 0;
    let tracker = '';
    if (isJ) {
      tracker = `
        <div class="defi-days">Jour <strong>${elapsed}</strong> — ${pct >= 100 ? 'Objectif atteint !' : 'En cours'}</div>
        <div class="dp"><div class="dp-bar"><div class="dp-fill" style="width:${pct}%"></div></div><div class="dp-pct">${pct}%</div></div>
        <div class="defi-tracker">
          <div class="dt-amounts">
            <div class="dt-box sv"><span>Économisé</span><strong>${fmt(saved)}</strong></div>
            <div class="dt-box go"><span>Objectif</span><strong>${fmt(d.obj)}</strong></div>
            <div class="dt-box re"><span>Restant</span><strong>${fmt(Math.max(0,d.obj-saved))}</strong></div>
          </div>
          <div class="dt-input">
            <input type="number" class="inp dt-inp" data-i="${i}" placeholder="Montant ajouté aujourd'hui (€)" min="0" step="0.01"/>
            <button class="dt-add" data-i="${i}">Ajouter</button>
          </div>
        </div>`;
    }
    return `<div class="defi-card ${isJ?'joined':''}" data-i="${i}">
      <div class="defi-name">${d.name}</div>
      <div class="defi-desc">${d.desc}</div>
      <div class="defi-dur">${d.dur} · Objectif : ${fmt(d.obj)}</div>
      ${tracker}
      <button class="defi-btn ${isJ?'quit':''}">${isJ?'Abandonner le défi':'Commencer ce défi'}</button>
    </div>`;
  }).join('');
  grid.querySelectorAll('.defi-btn').forEach(btn => btn.addEventListener('click', () => toggleDefi(+btn.closest('.defi-card').dataset.i)));
  grid.querySelectorAll('.dt-add').forEach(btn => btn.addEventListener('click', () => addDefiAmt(+btn.dataset.i)));
}

function toggleDefi(i) {
  let joined = ld('joinedDefis', {});
  if (joined[i]) { if (!confirm('Abandonner ce défi ?')) return; delete joined[i]; toast('Défi abandonné.'); }
  else { joined[i] = new Date().toISOString(); toast('Défi commencé ! Ajoutez votre premier montant.'); }
  sv('joinedDefis', joined);
  renderDefis(); renderActiveDefis();
}

function addDefiAmt(i) {
  const input = document.querySelector('.dt-inp[data-i="'+i+'"]');
  const amt = parseFloat(input?.value);
  if (!amt||isNaN(amt)||amt<=0) { toast('Saisissez un montant valide.'); return; }
  const savings = ld('defiSavings', {});
  savings[i] = (savings[i]||0) + amt;
  sv('defiSavings', savings);
  if (input) input.value = '';
  renderDefis(); renderActiveDefis();
  toast('Bien joué ! ' + fmt(amt) + ' ajouté au défi.');
}

/* ═══ PRICING ═══════════════════════════════════════ */
function makePR(plans, cols=4, showPayBox=false, payBoxId='') {
  return plans.map((p,i) => `
    <div class="pr ${p.feat?'feat':''}" data-i="${i}">
      ${p.badge?'<div class="pr-badge">'+p.badge+'</div>':''}
      <div class="pr-name">${p.name}</div>
      <div class="pr-price">${p.price}<span class="pr-unit"> ${p.unit}</span></div>
      <div class="pr-desc">${p.feat?'Le plus complet.':p.name==='Gratuit'?'Pour découvrir BudgetSmart.':'Pour aller plus loin.'}</div>
      <ul class="pr-feats">${p.feats.map(f=>'<li>'+f+'</li>').join('')}</ul>
      <button class="pr-btn">${p.cta}</button>
    </div>`).join('');
}

function renderPricingMain() {
  const el = document.getElementById('pgMain'); if (!el) return;
  const plans = PLANS[mode];
  el.style.gridTemplateColumns = 'repeat(4,1fr)';
  el.innerHTML = makePR(plans);
  el.querySelectorAll('.pr').forEach((card, i) => {
    card.addEventListener('click', () => {
      const plan = plans[i];
      if (plan.price === '0') { toast('Vous êtes sur le plan gratuit !'); return; }
      el.querySelectorAll('.pr').forEach(c => c.classList.remove('sel'));
      card.classList.add('sel');
      const bar = document.getElementById('selBar');
      if (bar) {
        bar.style.display = 'flex';
        txt('selName', plan.name);
        txt('selPrice', plan.price + ' ' + plan.unit);
        bar.scrollIntoView({behavior:'smooth',block:'center'});
      }
      toast('Plan ' + plan.name + ' sélectionné !');
    });
  });
}

function renderPricingProject(elId, payBoxId) {
  const el = document.getElementById(elId); if (!el) return;
  const plans = PLANS['eu'].slice(1);
  el.style.gridTemplateColumns = 'repeat(3,1fr)';
  el.innerHTML = makePR(plans);
  el.querySelectorAll('.pr').forEach((card,i) => {
    card.addEventListener('click', () => {
      el.querySelectorAll('.pr').forEach(c => c.classList.remove('sel'));
      card.classList.add('sel');
      const box = document.getElementById(payBoxId);
      if (box) { box.style.display='block'; box.scrollIntoView({behavior:'smooth',block:'center'}); }
      toast('Plan ' + plans[i].name + ' sélectionné !');
    });
  });
}

function renderPricingAll() {
  renderPricingMain();
  renderPricingProject('pgBusiness', 'pcBusiness');
  renderPricingProject('pgCouple', 'pcCouple');
}

/* ═══ COACHING ══════════════════════════════════════ */
function coachingInit() {
  document.querySelectorAll('.co-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      coOffer = {offer: btn.dataset.offer, price: btn.dataset.price};
      goStep(2);
    });
  });
  const b = (id,fn) => { const el=document.getElementById(id); if(el) el.addEventListener('click',fn); };
  b('coBack', () => goStep(1));
  b('coCard', () => payCoaching('card'));
  b('coPP',   () => payCoaching('paypal'));
}

function goStep(n) {
  [1,2,3].forEach(i => {
    const el = document.getElementById('cs'+i); if (el) el.style.display = i===n?'block':'none';
    const s = document.getElementById('st'+i); if (s) { s.classList.remove('active','done'); if(i===n)s.classList.add('active'); if(i<n)s.classList.add('done'); }
  });
  if (n===2 && coOffer) { txt('coOffer', coOffer.offer); txt('coPrice', coOffer.price); txt('coTotal', coOffer.price); }
  if (n===3 && coOffer) { txt('scDesc', 'Votre séance ' + coOffer.offer + ' (' + coOffer.price + ') est confirmée. Réservez maintenant votre créneau :'); }
}

function payCoaching(method) {
  const name = document.getElementById('coName')?.value.trim();
  const email = document.getElementById('coEmail')?.value.trim();
  if (!name||!email) { toast('Remplissez votre nom et email.'); return; }
  if (!coOffer) { toast('Sélectionnez une offre.'); return; }
  sv('coachingBooking', {name,email,phone:document.getElementById('coPhone')?.value,sit:document.getElementById('coSit')?.value,offer:coOffer,method,date:new Date().toISOString()});
  toast(method==='card'?'Redirection vers le paiement par carte…':'Redirection vers PayPal…');
  setTimeout(() => { window.open(method==='card'?STRIPE:PAYPAL,'_blank'); setTimeout(()=>goStep(3),2000); }, 800);
}

/* ═══ PROFILE ═══════════════════════════════════════ */
function loadProfile() {
  const p = ld('profile', {});
  const set = (id,v) => { const el=document.getElementById(id); if(el&&v!==undefined) el.value=v; };
  set('profName',p.name); set('profEmail',p.email); set('profCur',p.currency);
  set('profGoal',p.savingsGoal); set('profInc',p.income);
  const letter = p.name ? p.name.charAt(0).toUpperCase() : 'U';
  txt('spAv', letter); txt('mhAv', letter); txt('photoLetter', letter);
  if (p.name) txt('spName', p.name);
}

function saveProfile() {
  const p = {
    name:       document.getElementById('profName')?.value||'',
    email:      document.getElementById('profEmail')?.value||'',
    currency:   document.getElementById('profCur')?.value||'€',
    savingsGoal:parseFloat(document.getElementById('profGoal')?.value)||0,
    income:     parseFloat(document.getElementById('profInc')?.value)||0,
  };
  sv('profile',p); loadProfile(); renderDash(); renderEntries(); renderGoals();
  toast('Profil enregistré !');
}

/* ═══ PHOTO ═════════════════════════════════════════ */
function loadPhoto() {
  const data = localStorage.getItem('bs_photo');
  if (data) applyPhoto(data);
}
function handlePhoto(e) {
  const file = e.target.files[0]; if (!file) return;
  if (file.size > 2*1024*1024) { toast('Photo trop grande (max 2MB)'); return; }
  const reader = new FileReader();
  reader.onload = ev => { localStorage.setItem('bs_photo',ev.target.result); applyPhoto(ev.target.result); toast('Photo mise à jour !'); };
  reader.readAsDataURL(file);
}
function applyPhoto(data) {
  const img = document.getElementById('photoImg'), let_ = document.getElementById('photoLetter');
  if (img) { img.src=data; img.style.display='block'; } if (let_) let_.style.display='none';
  const av = document.getElementById('spAv');
  if (av) av.innerHTML = '<img src="'+data+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>';
  const mh = document.getElementById('mhAv');
  if (mh) mh.innerHTML = '<img src="'+data+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>';
}

/* ═══ DATA ══════════════════════════════════════════ */
function exportData() {
  const data = {entries:ld('entries',[]),goals:ld('goals',[]),joinedDefis:ld('joinedDefis',{}),defiSavings:ld('defiSavings',{}),profile:ld('profile',{}),date:new Date().toISOString()};
  const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href=url; a.download='budgetsmart-'+new Date().toISOString().slice(0,10)+'.json'; a.click();
  URL.revokeObjectURL(url); toast('Données exportées !');
}
function clearData() {
  if (!confirm('Effacer toutes les données ? Action irréversible.')) return;
  ['entries','goals','joinedDefis','defiSavings','profile','bs_photo','bs_admin'].forEach(k=>localStorage.removeItem(k));
  location.reload();
}

/* ═══ MODAL ═════════════════════════════════════════ */
function showModal(ico,title,text) {
  txt('modalIco',ico); txt('modalTitle',title); txt('modalText',text);
  document.getElementById('modal').classList.add('open');
}
function closeModal() { document.getElementById('modal').classList.remove('open'); }

/* ═══ ADMIN ═════════════════════════════════════════ */
function adminInit() {
  if (window.location.hash === '#admin') setTimeout(adminLogin, 500);
  const logo = document.querySelector('.sidebar-logo');
  if (logo) { let clicks=0; logo.addEventListener('click',()=>{clicks++;if(clicks>=3){clicks=0;adminLogin();}setTimeout(()=>{clicks=0;},1500);}); }
  if (localStorage.getItem('bs_admin') === ADMIN_PWD) activateAdmin();
}
function adminLogin() {
  const pwd = prompt('Mot de passe administrateur BudgetSmart :');
  if (pwd === ADMIN_PWD) { localStorage.setItem('bs_admin',ADMIN_PWD); activateAdmin(); toast('Mode Admin activé !'); go('admin'); }
  else if (pwd !== null) toast('Mot de passe incorrect.');
}
function activateAdmin() {
  document.getElementById('adminNav').style.display = 'block';
  document.getElementById('adminCard').style.display = 'block';
  txt('sbPlan','Admin — Accès Complet'); txt('spPlan','Propriétaire');
}
function renderAdmin() {
  const entries=ld('entries',[]),goals=ld('goals',[]),joined=ld('joinedDefis',{}),p=ld('profile',{}),cur=p.currency||'€';
  const now=new Date(),m=now.getMonth(),y=now.getFullYear();
  let monthExp=0,totalSaved=0;
  entries.forEach(e=>{const d=new Date(e.date);if(d.getMonth()===m&&d.getFullYear()===y)monthExp+=e.expense||0;totalSaved+=e.saved||0;});
  txt('adSaved',fmt(totalSaved,cur)); txt('adExp',fmt(monthExp,cur));
  txt('adGoals',goals.length.toString()); txt('adDefis',Object.keys(joined).length.toString());
  const gl = document.getElementById('adGoalsList');
  if (gl) gl.innerHTML = goals.length ? goals.map(g=>{const pct=Math.min(100,Math.round((g.saved/g.target)*100))||0;return`<div class="ad-item"><div class="ad-name">${g.name}</div><div class="ad-bar"><div class="ad-fill" style="width:${pct}%"></div></div><div class="ad-meta">${fmt(g.saved,cur)} / ${fmt(g.target,cur)} — ${pct}%</div></div>`;}).join('') : '<div class="empty">Aucun objectif.</div>';
  const el = document.getElementById('adEntries');
  if (el) el.innerHTML = [...entries].reverse().slice(0,5).map(e=>`<div class="tx"><div class="tx-cat">${CATS[e.cat]||'📦'}</div><div class="tx-info"><div class="tx-date">${new Date(e.date).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}</div><div class="tx-note">${e.note||e.cat}</div></div><div class="tx-amounts">${e.income?'<div class="tx-inc">+'+fmt(e.income,cur)+'</div>':''}${e.expense?'<div class="tx-exp">-'+fmt(e.expense,cur)+'</div>':''}</div></div>`).join('') || '<div class="empty">Aucune entrée.</div>';
}
function adminLogout() { if(!confirm('Quitter le mode Admin ?'))return; localStorage.removeItem('bs_admin'); location.reload(); }

/* ═══ NOTIFICATIONS ══════════════════════════════════ */
function notifInit() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'default') {
    Notification.requestPermission().then(p => { if (p==='granted') scheduleNotif(); });
  } else if (Notification.permission === 'granted') {
    scheduleNotif();
  }
}
function scheduleNotif() {
  const today = new Date().toISOString().slice(0,10);
  if (localStorage.getItem('bs_notif') === today) return;
  const joined = ld('joinedDefis',{});
  const goals = ld('goals',[]);
  if (Object.keys(joined).length > 0 || goals.length > 0) {
    setTimeout(() => {
      let msg = '';
      if (goals.length) msg += 'N\'oubliez pas d\'ajouter vos économies du jour. ';
      if (Object.keys(joined).length) msg += 'Vos défis d\'épargne vous attendent !';
      new Notification('BudgetSmart — Rappel', { body: msg.trim(), icon: './icons/icon-192.png' });
      localStorage.setItem('bs_notif', today);
    }, 4000);
  }
}

/* ═══ PWA ═══════════════════════════════════════════ */
function pwaInit() {
  if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); window._pwa=e; });
  window.addEventListener('appinstalled', ()=>toast('BudgetSmart installé avec succès !'));
}
function pwaInstall() {
  if (window._pwa) { window._pwa.prompt(); window._pwa.userChoice.then(r=>{if(r.outcome==='accepted')toast('Installation en cours…');window._pwa=null;}); }
  else { const iOS=/iPad|iPhone|iPod/.test(navigator.userAgent); alert(iOS?'Sur iPhone :\n1. Appuyez sur le bouton Partager\n2. "Sur l\'écran d\'accueil"\n3. "Ajouter"':'Sur Android :\n1. Ouvrez le menu Chrome (3 points)\n2. "Ajouter à l\'écran d\'accueil"\n3. "Ajouter"'); }
}
