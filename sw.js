/* ══════════════════════════════════════════
   BUDGETSMART — CSS FINAL PROPRE
══════════════════════════════════════════ */
:root {
  --bg:#EFECEA; --card:#fff; --sid:#1A2332; --sh:#243348;
  --g:#2E7D5E; --gl:#3A9E78; --gp:#E6F4EE;
  --go:#C8922A; --gol:#E5B040; --gop:#FBF4E5;
  --bl:#1E5A9C; --or:#D4621A; --re:#C0392B; --rep:#FDECEA;
  --tx:#0D1117; --mid:#1E293B; --mu:#4B5563; --bo:#D4D0C8;
  --s1:0 2px 16px rgba(26,35,50,0.08);
  --s2:0 8px 36px rgba(26,35,50,0.13);
  --r:14px; --rs:9px; --sw:268px; --tr:0.2s ease;
  --ft:'Cormorant Garamond',Georgia,serif;
  --fb:'DM Sans',system-ui,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{font-size:16px;}
body{font-family:var(--fb);background:var(--bg);color:var(--tx);display:flex;min-height:100vh;}
a{text-decoration:none;color:inherit;}
button{cursor:pointer;border:none;font-family:var(--fb);font-weight:700;}
input,select{font-family:var(--fb);}

/* ── SIDEBAR ── */
.sidebar{position:fixed;left:0;top:0;bottom:0;width:var(--sw);background:var(--sid);display:flex;flex-direction:column;z-index:100;overflow-y:auto;transition:transform var(--tr);}
.sidebar-logo{display:flex;align-items:center;gap:11px;padding:18px 16px 14px;border-bottom:1px solid rgba(255,255,255,0.08);}
.logo-img{width:42px;height:42px;border-radius:10px;object-fit:cover;flex-shrink:0;}
.logo-text{font-family:var(--ft);font-size:1.35rem;font-weight:800;color:#fff;display:block;line-height:1.1;}
.logo-text em{color:var(--gol);font-style:normal;}
.logo-sub{font-size:0.6rem;color:rgba(255,255,255,0.32);margin-top:2px;}
.sp{display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(255,255,255,0.06);margin:8px 10px;border-radius:10px;cursor:pointer;transition:all var(--tr);}
.sp:hover{background:rgba(255,255,255,0.11);}
.sp-av{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--g),var(--go));display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.9rem;font-weight:800;flex-shrink:0;overflow:hidden;}
.sp-av img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
.sp-name{font-size:0.88rem;font-weight:700;color:#fff;}
.sp-plan{font-size:0.65rem;color:var(--gol);font-weight:600;margin-top:1px;}
.nav{list-style:none;padding:6px 0;flex:1;}
.nav li{margin:1px 8px;}
.ns{font-size:0.58rem;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.25);padding:12px 14px 3px;font-weight:800;margin:0!important;}
.ni{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:10px;font-size:0.88rem;font-weight:600;color:rgba(255,255,255,0.52);transition:all var(--tr);cursor:pointer;}
.ni:hover{background:var(--sh);color:rgba(255,255,255,0.9);}
.ni.active{background:var(--g);color:#fff;font-weight:700;}
.nb{font-size:0.58rem;background:rgba(200,146,42,0.22);color:var(--gol);padding:2px 7px;border-radius:8px;font-weight:800;text-transform:uppercase;}
.nav-admin{color:var(--gol)!important;}
.sb{padding:12px 16px;border-top:1px solid rgba(255,255,255,0.08);}
.sb-plan{font-size:0.7rem;color:var(--gol);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:6px;font-weight:800;}
.sb-up{font-size:0.85rem;color:rgba(255,255,255,0.42);display:block;font-weight:600;cursor:pointer;transition:color var(--tr);}
.sb-up:hover{color:var(--gol);}

/* ── MOBILE ── */
.mh{display:none;position:fixed;top:0;left:0;right:0;height:54px;background:var(--sid);align-items:center;justify-content:space-between;padding:0 16px;z-index:200;}
.mh button{background:none;color:#fff;font-size:1.3rem;padding:6px;}
.mh-logo{font-family:var(--ft);font-size:1.15rem;color:#fff;font-weight:800;}
.mh-logo em{color:var(--gol);font-style:normal;}
.mh-av{width:30px;height:30px;background:var(--g);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.82rem;font-weight:800;overflow:hidden;}
.mh-av img{width:100%;height:100%;object-fit:cover;border-radius:50%;}
.ov{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:99;}
.ov.show{display:block;}

/* ── MAIN ── */
.main{margin-left:var(--sw);flex:1;min-height:100vh;padding:28px 32px;}
.page{display:none;animation:fi 0.22s ease;}
.page.active{display:block;}
@keyframes fi{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}

/* ── PAGE HEADER ── */
.ph{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px;}
.pt{font-family:var(--ft);font-size:2.1rem;font-weight:800;color:var(--tx);line-height:1.1;}
.ps{font-size:0.92rem;color:var(--mid);margin-top:4px;}
.ph-date{font-size:0.82rem;color:var(--mu);background:var(--card);border:1.5px solid var(--bo);padding:7px 14px;border-radius:16px;white-space:nowrap;font-weight:600;}

/* ── PWA BANNER (HAUT) ── */
.pwa-banner{display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#1A2332,#2E7D5E);border-radius:var(--r);padding:14px 18px;margin-bottom:18px;border:2px solid var(--g);animation:pwa-pulse 2s ease-in-out infinite;}
@keyframes pwa-pulse{0%,100%{box-shadow:0 0 0 0 rgba(46,125,94,0.5);}50%{box-shadow:0 0 0 10px rgba(46,125,94,0);}}
.pwa-ico{font-size:2rem;flex-shrink:0;animation:pwa-bounce 1.5s ease-in-out infinite;}
@keyframes pwa-bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
.pwa-txt{flex:1;}
.pwa-t{font-family:var(--ft);font-size:1rem;font-weight:800;color:#fff;margin-bottom:2px;}
.pwa-s{font-size:0.74rem;color:rgba(255,255,255,0.55);}
.pwa-btn{background:#fff;color:var(--g);padding:9px 18px;border-radius:18px;font-size:0.88rem;font-weight:900;white-space:nowrap;animation:pwa-glow 1.5s ease-in-out infinite;}
@keyframes pwa-glow{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.5);}50%{box-shadow:0 0 0 8px rgba(255,255,255,0);}}
.pwa-btn:hover{transform:scale(1.05);}
.pwa-x{background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.7);width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.78rem;flex-shrink:0;}
.pwa-x:hover{background:rgba(255,255,255,0.25);color:#fff;}

/* ── KPI ── */
.kpi-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px;}
.kpi{background:var(--card);border-radius:var(--r);padding:18px 16px;border:1.5px solid var(--bo);box-shadow:var(--s1);position:relative;overflow:hidden;}
.kpi::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;border-radius:var(--r) var(--r) 0 0;}
.k-g::before{background:linear-gradient(90deg,var(--g),var(--gl));}
.k-b::before{background:linear-gradient(90deg,var(--bl),#3B82F6);}
.k-o::before{background:linear-gradient(90deg,var(--or),#F97316);}
.k-go::before{background:linear-gradient(90deg,var(--go),var(--gol));}
.kl{font-size:0.7rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--mu);margin-bottom:8px;font-weight:800;}
.kv{font-family:var(--ft);font-size:1.9rem;font-weight:800;color:var(--tx);line-height:1;margin-bottom:6px;}
.ks{font-size:0.8rem;color:var(--mu);font-weight:600;}
.ks.up{color:var(--g);}

/* ── ALERT ── */
.alert{background:var(--rep);border:1.5px solid #F5C6C0;border-left:4px solid var(--re);border-radius:var(--rs);padding:11px 15px;font-size:0.88rem;color:var(--re);font-weight:700;margin-bottom:16px;}

/* ── OBJECTIFS ── */
.obj-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:14px;}
.obj{background:var(--card);border-radius:var(--r);padding:18px;border:1.5px solid var(--bo);box-shadow:var(--s1);text-align:center;cursor:pointer;transition:transform var(--tr);position:relative;overflow:hidden;}
.obj::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;}
.ob-g::before{background:linear-gradient(90deg,var(--g),var(--gl));}
.ob-b::before{background:linear-gradient(90deg,var(--bl),#3B82F6);}
.ob-go::before{background:linear-gradient(90deg,var(--go),var(--gol));}
.obj:hover{transform:translateY(-2px);box-shadow:var(--s2);}
.ob-lock{position:absolute;top:9px;right:11px;font-size:0.82rem;opacity:0.4;}
.ob-ico{font-size:1.7rem;margin-bottom:6px;}
.ob-name{font-family:var(--ft);font-size:1rem;font-weight:800;color:var(--tx);margin-bottom:2px;}
.ob-val{font-family:var(--ft);font-size:1.4rem;font-weight:800;color:var(--g);margin-bottom:6px;}
.ob-sub{font-size:0.76rem;color:var(--mu);margin-bottom:6px;}
.ob-tag{display:inline-block;font-size:0.68rem;font-weight:800;text-transform:uppercase;padding:3px 10px;border-radius:9px;}
.ob-tag.free{background:var(--gp);color:var(--g);}
.ob-tag.prem{background:var(--gop);color:var(--go);}

/* ── COACHING CTA ── */
.co-cta{display:flex;align-items:center;justify-content:space-between;gap:14px;background:linear-gradient(135deg,#2C1654,#1A2332);border-radius:var(--r);padding:14px 18px;margin-bottom:14px;cursor:pointer;border:1px solid rgba(200,146,42,0.25);transition:transform var(--tr);}
.co-cta:hover{transform:translateY(-2px);}
.coc-t{font-family:var(--ft);font-size:0.97rem;color:#fff;font-weight:800;margin-bottom:2px;}
.coc-s{font-size:0.74rem;color:rgba(255,255,255,0.45);}
.coc-btn{white-space:nowrap;background:linear-gradient(135deg,var(--go),var(--gol));color:#fff;padding:9px 16px;border-radius:16px;font-size:0.82rem;font-weight:800;}

/* ── CHARTS ── */
.charts-row{display:grid;grid-template-columns:210px 1fr;gap:12px;margin-bottom:14px;}
.chart-card{background:var(--card);border-radius:var(--r);padding:18px;border:1.5px solid var(--bo);box-shadow:var(--s1);}
.chart-wide{}
.chart-title{font-family:var(--ft);font-size:1rem;font-weight:800;color:var(--tx);margin-bottom:12px;}
#donutLeg{margin-top:8px;}
.dl{display:flex;align-items:center;gap:5px;font-size:0.8rem;color:var(--mid);margin-bottom:3px;font-weight:600;}
.dd{width:8px;height:8px;border-radius:50%;flex-shrink:0;}

/* ── CARD ── */
.card{background:var(--card);border-radius:var(--r);padding:20px;border:1.5px solid var(--bo);box-shadow:var(--s1);margin-bottom:16px;}
.ct{font-family:var(--ft);font-size:1.1rem;font-weight:800;color:var(--tx);margin-bottom:13px;padding-bottom:11px;border-bottom:1.5px solid var(--bo);}

/* ── TRANSACTIONS ── */
.tx-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--rs);background:var(--bg);border:1.5px solid var(--bo);margin-bottom:6px;}
.tx-cat{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:0.95rem;background:var(--gp);flex-shrink:0;}
.tx-info{flex:1;}
.tx-date{font-size:0.74rem;color:var(--mu);font-weight:700;}
.tx-note{font-size:0.9rem;color:var(--tx);font-weight:700;}
.tx-amt{text-align:right;}
.tx-inc{font-size:0.86rem;color:var(--g);font-weight:800;}
.tx-exp{font-size:0.86rem;color:var(--or);font-weight:800;}
.tx-sav{font-size:0.78rem;color:var(--go);font-weight:700;}
.tx-del{background:none;color:var(--mu);font-size:0.76rem;padding:3px 7px;border-radius:4px;}
.tx-del:hover{background:var(--rep);color:var(--re);}

/* ── TIP / PAY STRIPS ── */
.tip-strip{background:linear-gradient(135deg,var(--gp),var(--gop));border:1.5px solid #C8E8DA;border-radius:var(--r);padding:14px 18px;font-size:0.92rem;color:var(--mid);font-weight:600;margin-bottom:12px;}
.pay-strip{display:flex;align-items:center;flex-wrap:wrap;gap:7px;background:var(--card);border-radius:var(--r);padding:12px 16px;border:1.5px solid var(--bo);margin-bottom:12px;}
.pay-lbl{font-size:0.88rem;font-weight:800;color:var(--tx);flex-shrink:0;}
.upsell{display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,var(--sid),#243348);border-radius:var(--r);padding:13px 18px;color:rgba(255,255,255,0.82);font-size:0.88rem;cursor:pointer;border:1px solid rgba(200,146,42,0.2);transition:transform var(--tr);margin-bottom:4px;}
.upsell:hover{transform:translateY(-2px);}
.upsell-cta{margin-left:auto;color:var(--gol);font-weight:800;font-size:0.8rem;border:1.5px solid var(--go);padding:5px 12px;border-radius:14px;white-space:nowrap;}

/* ── ACTIVE DEFIS DASHBOARD ── */
.ad-item{padding:10px 12px;border-radius:var(--rs);background:var(--bg);border:1.5px solid var(--bo);margin-bottom:6px;}
.ad-name{font-size:0.9rem;font-weight:800;color:var(--tx);margin-bottom:4px;}
.ad-bar{height:6px;background:#E8E5E0;border-radius:3px;overflow:hidden;margin-bottom:3px;}
.ad-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,var(--g),var(--go));}
.ad-meta{font-size:0.74rem;color:var(--mu);font-weight:700;}
.see-all{display:block;text-align:center;font-size:0.86rem;font-weight:800;color:var(--g);margin-top:9px;cursor:pointer;padding:7px;border-radius:var(--rs);transition:background var(--tr);}
.see-all:hover{background:var(--gp);}

/* ── FORM ── */
.fg2{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:14px;}
.fg{display:flex;flex-direction:column;gap:4px;}
.fg.full{grid-column:1/-1;}
.fg label{font-size:0.7rem;font-weight:800;color:var(--mu);text-transform:uppercase;letter-spacing:0.06em;}
.inp{padding:11px 13px;border:1.5px solid var(--bo);border-radius:var(--rs);background:var(--bg);color:var(--tx);font-size:0.92rem;font-weight:600;outline:none;transition:border-color var(--tr);width:100%;}
.inp:focus{border-color:var(--g);box-shadow:0 0 0 3px rgba(46,125,94,0.1);background:var(--card);}
.inp:disabled{opacity:0.55;}

/* ── BUTTONS ── */
.btn-g{background:var(--g);color:#fff;padding:11px 24px;border-radius:var(--rs);font-size:0.92rem;font-weight:800;transition:all var(--tr);}
.btn-g:hover{background:var(--gl);transform:translateY(-1px);}
.btn-gold{background:linear-gradient(135deg,var(--go),var(--gol));color:#fff;padding:11px 22px;border-radius:var(--rs);font-size:0.92rem;font-weight:800;transition:all var(--tr);}
.btn-gold:hover{transform:translateY(-1px);}
.btn-out{background:#E8E5E0;color:var(--tx);padding:10px 18px;border-radius:var(--rs);font-size:0.88rem;font-weight:700;border:1.5px solid var(--bo);transition:all var(--tr);}
.btn-out:hover{background:var(--gp);border-color:var(--g);color:var(--g);}
.btn-w{background:rgba(255,255,255,0.15);color:#fff;padding:9px 20px;border-radius:var(--rs);font-size:0.88rem;font-weight:700;border:1.5px solid rgba(255,255,255,0.3);transition:all var(--tr);}
.btn-w:hover{background:rgba(255,255,255,0.25);}
.btn-danger{background:var(--rep);color:var(--re);padding:10px 18px;border-radius:var(--rs);font-size:0.88rem;font-weight:700;border:1.5px solid #F5C6C0;transition:all var(--tr);}
.btn-card{background:var(--g);color:#fff;padding:12px 20px;border-radius:var(--rs);font-size:0.9rem;font-weight:800;transition:all var(--tr);flex:1;min-width:150px;}
.btn-card:hover{background:var(--gl);transform:translateY(-1px);}
.btn-pp{background:#003087;color:#fff;padding:12px 20px;border-radius:var(--rs);font-size:0.9rem;font-weight:800;transition:all var(--tr);flex:1;min-width:150px;}
.btn-pp:hover{background:#004DB3;transform:translateY(-1px);}
.pc-btns{display:flex;gap:10px;flex-wrap:wrap;}

/* ── BADGES ── */
.pb{font-size:0.8rem;font-weight:900;padding:4px 10px;border-radius:6px;text-transform:uppercase;display:inline-block;}
.visa{background:#1A1F71;color:#fff;} .mc{background:#EB001B;color:#fff;}
.pp{background:#003087;color:#fff;} .wave{background:#0066FF;color:#fff;}
.orange{background:#FF7900;color:#fff;} .mtn{background:#FFCC00;color:#1A1A1A;}
.mpesa{background:#00A651;color:#fff;} .airtel{background:#E40000;color:#fff;}
.soon{background:#F3F4F6;color:#6B7280;font-size:0.74rem!important;border:1.5px solid var(--bo);}

/* ── TOTALS ── */
.tot-row{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin-bottom:16px;}
.tot{background:var(--card);border-radius:var(--r);padding:16px;border:1.5px solid var(--bo);box-shadow:var(--s1);text-align:center;}
.tot-s{background:linear-gradient(135deg,var(--gp),var(--gop));}
.tl{font-size:0.7rem;color:var(--mu);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;font-weight:800;}
.tv{font-family:var(--ft);font-size:1.5rem;font-weight:800;color:var(--tx);}

/* ── GOALS ── */
.goals-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:16px;}
.goal-card{background:var(--card);border-radius:var(--r);padding:18px;border:1.5px solid var(--bo);box-shadow:var(--s1);position:relative;overflow:hidden;}
.goal-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--g),var(--go));}
.goal-hd{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:11px;}
.goal-name{font-family:var(--ft);font-size:1.05rem;font-weight:800;color:var(--tx);}
.goal-dt{font-size:0.74rem;color:var(--mu);font-weight:600;margin-top:2px;}
.goal-del{background:none;color:var(--mu);font-size:0.76rem;padding:3px 6px;border-radius:4px;}
.goal-del:hover{background:var(--rep);color:var(--re);}
.goal-amts{display:flex;justify-content:space-between;margin-bottom:9px;}
.goal-sv{font-family:var(--ft);font-size:1.25rem;font-weight:800;color:var(--g);}
.goal-tg{font-size:0.82rem;color:var(--mu);text-align:right;font-weight:600;}
.pb-bar{height:7px;background:#E8E5E0;border-radius:4px;overflow:hidden;margin-bottom:4px;}
.pb-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,var(--g),var(--go));transition:width 0.6s ease;}
.pb-pct{font-size:0.76rem;color:var(--mu);text-align:right;font-weight:700;}
.goal-add{width:100%;margin-top:10px;background:var(--gp);color:var(--g);padding:8px;border-radius:var(--rs);font-size:0.86rem;font-weight:800;border:1.5px solid transparent;cursor:pointer;transition:all var(--tr);}
.goal-add:hover{border-color:var(--g);}
.ug-row{display:grid;grid-template-columns:repeat(2,1fr);gap:11px;margin-top:16px;}
.ug{background:var(--card);border-radius:var(--r);padding:14px 16px;border:1.5px dashed var(--bo);display:flex;align-items:center;gap:11px;cursor:pointer;transition:all var(--tr);}
.ug:hover{border-color:var(--go);background:var(--gop);}
.ug div{flex:1;}
.ug strong{font-family:var(--ft);font-size:0.95rem;font-weight:800;color:var(--tx);display:block;}
.ug p{font-size:0.74rem;color:var(--mu);}
.ug span{font-size:0.78rem;font-weight:800;color:var(--go);white-space:nowrap;}

/* ── PROJECT ── */
.proj-card{background:linear-gradient(135deg,var(--sid),#243348);border-radius:var(--r);padding:20px;margin-bottom:16px;border:1px solid rgba(200,146,42,0.2);}
.proj-card h3{font-family:var(--ft);font-size:1.1rem;font-weight:800;color:#fff;margin-bottom:11px;}
.proj-feats{display:flex;flex-wrap:wrap;gap:7px;}
.proj-feats span{background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.88);padding:4px 12px;border-radius:12px;font-size:0.82rem;font-weight:700;border:1px solid rgba(255,255,255,0.15);}
.plan-lbl{font-size:0.95rem;font-weight:800;color:var(--mid);margin-bottom:14px;text-align:center;}
.pay-choice{background:var(--card);border-radius:var(--r);padding:20px;border:2px solid var(--g);box-shadow:var(--s2);margin-bottom:16px;animation:fi 0.3s ease;}
.pc-t{font-family:var(--ft);font-size:1.1rem;font-weight:800;color:var(--tx);margin-bottom:14px;text-align:center;}

/* ── PRICING ── */
.pricing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin-bottom:16px;}
.pr{background:var(--card);border-radius:var(--r);padding:20px 14px;border:1.5px solid var(--bo);box-shadow:var(--s1);text-align:center;position:relative;cursor:pointer;transition:all var(--tr);}
.pr:hover{transform:translateY(-2px);box-shadow:var(--s2);}
.pr.feat{border-color:var(--g);border-width:2px;background:linear-gradient(180deg,var(--gp) 0%,var(--card) 35%);transform:scale(1.02);box-shadow:var(--s2);}
.pr.sel{border-color:var(--g)!important;border-width:2.5px!important;box-shadow:0 0 0 4px rgba(46,125,94,0.15)!important;transform:scale(1.03)!important;}
.pr-badge{position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--g);color:#fff;font-size:0.68rem;font-weight:900;text-transform:uppercase;letter-spacing:0.06em;padding:2px 11px;border-radius:8px;}
.pr-name{font-family:var(--ft);font-size:1.2rem;font-weight:800;margin-bottom:7px;color:var(--tx);}
.pr-price{font-family:var(--ft);font-size:2rem;font-weight:800;color:var(--g);line-height:1;}
.pr-unit{font-size:0.88rem;color:var(--mu);font-weight:600;}
.pr-desc{font-size:0.8rem;color:var(--mu);margin:7px 0 11px;font-weight:600;}
.pr-feats{list-style:none;text-align:left;margin-bottom:16px;display:flex;flex-direction:column;gap:5px;}
.pr-feats li{font-size:0.84rem;color:var(--mid);display:flex;align-items:flex-start;gap:6px;font-weight:600;}
.pr-feats li::before{content:'✓';color:var(--g);font-weight:900;flex-shrink:0;}
.pr-btn{width:100%;padding:11px;border-radius:var(--rs);font-size:0.88rem;font-weight:800;background:#E8E5E0;color:var(--tx);border:1.5px solid var(--bo);cursor:pointer;transition:all var(--tr);}
.pr.feat .pr-btn,.pr.sel .pr-btn,.pr-btn:hover{background:var(--g);color:#fff;border-color:var(--g);}
.tog-row{display:flex;gap:7px;margin-bottom:13px;}
.tog{padding:8px 18px;border-radius:16px;font-size:0.88rem;font-weight:700;background:#E8E5E0;color:var(--mu);border:none;cursor:pointer;transition:all var(--tr);}
.tog.active{background:var(--g);color:#fff;}
.trial-bar{background:linear-gradient(135deg,var(--gp),var(--gop));border:1.5px solid #C8E8DA;border-radius:var(--rs);padding:11px 15px;font-size:0.92rem;color:var(--mid);margin-bottom:14px;text-align:center;font-weight:600;}
.sel-bar{display:flex;align-items:center;justify-content:space-between;gap:14px;background:linear-gradient(135deg,var(--gp),var(--gop));border:2px solid var(--g);border-radius:var(--r);padding:14px 20px;margin-bottom:16px;box-shadow:var(--s1);animation:fi 0.3s ease;flex-wrap:wrap;}
.sel-l{display:flex;align-items:center;gap:12px;font-size:0.94rem;font-weight:700;color:var(--mid);}
.sel-ck{width:32px;height:32px;border-radius:50%;background:var(--g);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:900;flex-shrink:0;}
.sel-l strong{color:var(--g);}
.pay-section{background:var(--card);border-radius:var(--r);padding:20px;border:1.5px solid var(--bo);box-shadow:var(--s1);margin-top:16px;}
.pay-sec-t{font-size:0.95rem;font-weight:800;color:var(--tx);margin-bottom:14px;text-align:center;}
.pay-groups{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:11px;}
.pay-gl{font-size:0.74rem;font-weight:800;color:var(--g);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:9px;}
.pay-gl.muted{color:var(--mu);}
.pay-row{display:flex;flex-wrap:wrap;gap:7px;}
.pay-item{display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 12px;background:var(--bg);border-radius:var(--rs);border:1.5px solid var(--bo);font-size:0.72rem;font-weight:700;color:var(--mu);transition:all var(--tr);}
.pay-item:hover{border-color:var(--g);background:var(--gp);}
.pay-item.op{opacity:0.55;}
.pay-item.op:hover{transform:none;border-color:var(--bo);}
.pay-secure{text-align:center;font-size:0.84rem;font-weight:600;color:var(--mu);}

/* ── TIPS ── */
.tip-hero{background:linear-gradient(135deg,var(--sid),#243348);border-radius:var(--r);padding:26px;color:#fff;margin-bottom:18px;box-shadow:var(--s2);}
.th-lbl{font-size:0.74rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--gol);margin-bottom:10px;font-weight:800;}
.th-txt{font-family:var(--ft);font-size:1.45rem;font-weight:700;line-height:1.55;color:rgba(255,255,255,0.95);margin-bottom:16px;}
.tips-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:11px;}
.tip-card{background:var(--card);border-radius:var(--r);padding:16px;border:1.5px solid var(--bo);box-shadow:var(--s1);}
.tip-cat{font-size:0.7rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--g);font-weight:900;margin-bottom:6px;}
.tip-txt{font-size:0.9rem;color:var(--mid);line-height:1.6;font-weight:600;}

/* ── DÉFIS ── */
.defis-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:13px;}
.defi-card{background:var(--card);border-radius:var(--r);padding:20px;border:1.5px solid var(--bo);box-shadow:var(--s1);position:relative;overflow:hidden;transition:transform var(--tr);}
.defi-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--g),var(--go));}
.defi-card.joined{border-color:var(--g);background:linear-gradient(180deg,var(--gp) 0%,var(--card) 22%);}
.defi-card.done{border-color:var(--go);background:linear-gradient(180deg,var(--gop) 0%,var(--card) 22%);}
.defi-name{font-family:var(--ft);font-size:1.1rem;font-weight:800;margin-bottom:5px;color:var(--tx);}
.defi-desc{font-size:0.86rem;color:var(--mu);margin-bottom:5px;line-height:1.5;font-weight:600;}
.defi-dur{font-size:0.76rem;color:var(--mu);margin-bottom:11px;font-weight:700;}
.defi-days{font-size:0.84rem;color:var(--mid);font-weight:700;margin-bottom:5px;}
.defi-days strong{color:var(--g);}
.dp{display:flex;align-items:center;gap:7px;margin-bottom:10px;}
.dp-bar{flex:1;height:7px;background:#E8E5E0;border-radius:4px;overflow:hidden;}
.dp-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,var(--g),var(--go));}
.dp-pct{font-size:0.76rem;font-weight:800;color:var(--g);min-width:32px;text-align:right;}

/* Trophée */
.defi-trophy{background:linear-gradient(135deg,var(--gop),#FFF8E6);border:2px solid var(--go);border-radius:var(--r);padding:16px;text-align:center;margin-bottom:11px;animation:fi 0.4s ease;}
.trophy-ico{font-size:2.5rem;animation:bounce 1s ease-in-out infinite;}
@keyframes bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
.trophy-t{font-family:var(--ft);font-size:1.2rem;font-weight:800;color:var(--go);margin-bottom:4px;}
.trophy-m{font-size:0.84rem;color:var(--mid);font-weight:600;}

/* Rappel / encouragement */
.defi-rappel{background:#FFF3E0;border:1.5px solid #FFB74D;border-radius:var(--rs);padding:9px 13px;font-size:0.82rem;font-weight:700;color:#E65100;margin-bottom:9px;text-align:center;}
.defi-enc{background:var(--gp);border:1.5px solid #C8E8DA;border-radius:var(--rs);padding:9px 13px;font-size:0.82rem;font-weight:600;color:var(--g);margin-bottom:9px;text-align:center;font-style:italic;}

/* Tracker */
.defi-tracker{background:var(--bg);border-radius:var(--rs);padding:13px;border:1.5px solid var(--bo);margin-bottom:11px;}
.dt-amounts{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:10px;}
.dt-box{text-align:center;padding:8px;background:var(--card);border-radius:var(--rs);border:1.5px solid var(--bo);}
.dt-box span{display:block;font-size:0.62rem;font-weight:800;color:var(--mu);text-transform:uppercase;margin-bottom:3px;}
.dt-box strong{font-family:var(--ft);font-size:1rem;font-weight:800;}
.dt-box.sv strong{color:var(--g);}
.dt-box.go strong{color:var(--tx);}
.dt-box.re strong{color:var(--go);}
.dt-hint{font-size:0.76rem;font-weight:700;color:var(--g);background:var(--gp);padding:6px 11px;border-radius:var(--rs);margin-bottom:9px;text-align:center;}
.dt-input{display:flex;gap:7px;}
.dt-input .inp{flex:1;padding:9px 11px;}
.dt-add{background:var(--g);color:#fff;padding:9px 14px;border-radius:var(--rs);font-size:0.86rem;font-weight:800;border:none;cursor:pointer;white-space:nowrap;transition:all var(--tr);}
.dt-add:hover{background:var(--gl);transform:translateY(-1px);}
.defi-btn{display:block;width:100%;padding:10px;border-radius:var(--rs);font-size:0.88rem;font-weight:800;background:var(--g);color:#fff;border:none;cursor:pointer;transition:all var(--tr);text-align:center;}
.defi-btn:hover{background:var(--gl);}
.defi-btn.quit{background:var(--rep);color:var(--re);}

/* ── GATE ── */
.gate{background:linear-gradient(135deg,var(--sid),#243348);border-radius:var(--r);padding:34px;color:#fff;text-align:center;margin-bottom:18px;box-shadow:var(--s2);border:1px solid rgba(200,146,42,0.22);}
.gate-ico{font-size:2.8rem;margin-bottom:11px;}
.gate h2{font-family:var(--ft);font-size:1.5rem;margin-bottom:10px;font-weight:800;}
.gate p{font-size:0.9rem;color:rgba(255,255,255,0.7);margin-bottom:13px;line-height:1.6;}
.gate-feats{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;margin-bottom:20px;}
.gate-feats span{background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.88);padding:4px 12px;border-radius:14px;font-size:0.84rem;font-weight:700;border:1px solid rgba(255,255,255,0.15);}
.gate-note{font-size:0.76rem;color:rgba(255,255,255,0.36);margin-top:11px;}

/* ── COACHING ── */
.steps-bar{display:flex;align-items:center;gap:7px;background:var(--card);border-radius:var(--r);padding:12px 18px;margin-bottom:18px;border:1.5px solid var(--bo);box-shadow:var(--s1);}
.step{display:flex;align-items:center;gap:6px;font-size:0.9rem;font-weight:700;color:var(--mu);flex:1;justify-content:center;}
.step.active{color:var(--g);}
.step.done{color:var(--go);}
.sn{width:24px;height:24px;border-radius:50%;background:#E8E5E0;color:var(--mu);display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:900;flex-shrink:0;}
.step.active .sn{background:var(--g);color:#fff;}
.step.done .sn{background:var(--go);color:#fff;}
.sa{color:var(--bo);font-size:0.95rem;}
.co-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;}
.co-card{background:var(--card);border-radius:var(--r);padding:22px 16px;border:1.5px solid var(--bo);box-shadow:var(--s1);text-align:center;position:relative;transition:transform var(--tr);}
.co-card:hover{transform:translateY(-2px);}
.co-feat{border-color:var(--go);border-width:2px;background:linear-gradient(180deg,var(--gop) 0%,var(--card) 30%);transform:scale(1.02);}
.co-badge{position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--go);color:#fff;font-size:0.68rem;font-weight:900;padding:2px 11px;border-radius:8px;text-transform:uppercase;}
.co-name{font-family:var(--ft);font-size:1.1rem;font-weight:800;margin-bottom:5px;color:var(--tx);}
.co-price{font-family:var(--ft);font-size:1.9rem;font-weight:900;color:var(--g);margin-bottom:3px;}
.co-dur{font-size:0.8rem;color:var(--mu);margin-bottom:11px;font-weight:700;}
.co-list{list-style:none;text-align:left;margin-bottom:14px;display:flex;flex-direction:column;gap:4px;}
.co-list li{font-size:0.86rem;color:var(--mid);display:flex;gap:5px;font-weight:600;}
.co-list li::before{content:'✓';color:var(--g);font-weight:900;}
.total-row{display:flex;justify-content:space-between;align-items:center;background:var(--gop);border:1.5px solid #E5C880;border-radius:var(--rs);padding:12px 15px;margin-bottom:13px;font-size:0.92rem;font-weight:700;color:var(--mid);}
.total-row strong{font-family:var(--ft);font-size:1.4rem;color:var(--g);}
.success-card{background:var(--card);border-radius:var(--r);padding:34px;text-align:center;border:2px solid var(--g);box-shadow:var(--s2);margin-bottom:16px;}
.sc-ico{font-size:3rem;margin-bottom:12px;}
.success-card h2{font-family:var(--ft);font-size:1.6rem;font-weight:800;margin-bottom:9px;}
.success-card p{font-size:0.9rem;color:var(--mu);margin-bottom:18px;font-weight:600;}
.sc-cal{background:linear-gradient(135deg,var(--gp),var(--gop));border-radius:var(--r);padding:22px;text-align:center;}
.sc-cal p{font-size:0.92rem;font-weight:700;color:var(--mid);margin-bottom:13px;}
.btn-cal{display:inline-block;background:linear-gradient(135deg,#C0392B,#E74C3C);color:#fff;padding:15px 30px;border-radius:var(--rs);font-size:0.97rem;font-weight:900;animation:cal-pulse 1.5s infinite;box-shadow:0 4px 16px rgba(192,57,43,0.4);}
@keyframes cal-pulse{0%{box-shadow:0 0 0 0 rgba(192,57,43,0.5);}70%{box-shadow:0 0 0 12px rgba(192,57,43,0);}100%{box-shadow:0 0 0 0 rgba(192,57,43,0);}}
.sc-note{font-size:0.78rem;color:var(--mu);margin-top:10px;}

/* ── PROFIL ── */
.photo-row{display:flex;align-items:center;gap:16px;margin-bottom:18px;padding-bottom:16px;border-bottom:1.5px solid var(--bo);}
.photo-circle{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,var(--g),var(--go));display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.8rem;font-weight:800;flex-shrink:0;overflow:hidden;}
.photo-circle img{width:100%;height:100%;object-fit:cover;border-radius:50%;}

/* ── PARTAGER ── */
.share-link-box{display:flex;gap:9px;align-items:center;background:var(--bg);border-radius:var(--rs);padding:12px;border:1.5px solid var(--bo);margin-bottom:4px;flex-wrap:wrap;}
.slb-url{flex:1;font-size:0.86rem;font-weight:700;color:var(--g);word-break:break-all;}
.share-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.shr-btn{display:flex;flex-direction:column;align-items:center;gap:7px;padding:14px 10px;border-radius:var(--r);border:1.5px solid var(--bo);cursor:pointer;font-size:0.86rem;font-weight:700;color:var(--tx);transition:all var(--tr);background:var(--card);}
.shr-btn:hover{transform:translateY(-2px);box-shadow:var(--s2);}
.shr-btn span{font-size:1.7rem;}
.shr-wa:hover{background:#E8FFF0;border-color:#25D366;color:#128C7E;}
.shr-fb:hover{background:#E8F0FF;border-color:#1877F2;color:#1877F2;}
.shr-ig:hover{background:#FFF0F5;border-color:#E1306C;color:#E1306C;}
.shr-tk:hover{background:#F0F0F0;border-color:#000;color:#000;}
.shr-em:hover{background:var(--gp);border-color:var(--g);color:var(--g);}
.shr-tw:hover{background:#E8F5FF;border-color:#1DA1F2;color:#1DA1F2;}
.share-msg{background:var(--bg);border-radius:var(--rs);padding:14px;border:1.5px solid var(--bo);font-size:0.86rem;font-weight:600;color:var(--mid);line-height:1.7;white-space:pre-line;}

/* ── PARAMÈTRES ── */
.set-item{display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--bo);cursor:pointer;transition:all var(--tr);}
.set-item:last-child{border-bottom:none;}
.set-item:hover{background:var(--bg);padding-left:6px;border-radius:var(--rs);}
.set-item.danger:hover{background:var(--rep);}
.si-ico{font-size:1.3rem;width:36px;text-align:center;flex-shrink:0;}
.si-inf{flex:1;}
.si-n{font-size:0.92rem;font-weight:700;color:var(--tx);}
.si-d{font-size:0.76rem;color:var(--mu);font-weight:500;margin-top:1px;}
.si-a{font-size:0.95rem;color:var(--mu);font-weight:700;}
.si-tog{width:44px;height:24px;border-radius:12px;background:#D4D0C8;position:relative;cursor:pointer;transition:all 0.3s ease;flex-shrink:0;}
.si-tog.on{background:var(--g);}
.tog-ball{width:20px;height:20px;border-radius:50%;background:white;position:absolute;top:2px;left:2px;transition:all 0.3s ease;box-shadow:0 1px 4px rgba(0,0,0,0.2);}
.si-tog.on .tog-ball{left:22px;}
.about-box{text-align:center;padding:18px 0;}
.about-logo{width:60px;height:60px;border-radius:14px;margin-bottom:9px;object-fit:cover;}
.about-name{font-family:var(--ft);font-size:1.4rem;font-weight:800;color:var(--tx);margin-bottom:4px;}
.about-ver{font-size:0.82rem;color:var(--mu);font-weight:600;margin-bottom:3px;}
.about-copy{font-size:0.76rem;color:var(--mu);}

/* ── ADMIN ── */
.admin-badge{background:linear-gradient(135deg,var(--go),var(--gol));color:#fff;padding:7px 16px;border-radius:18px;font-size:0.84rem;font-weight:800;}
.admin-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin-bottom:16px;}
.as{background:var(--card);border-radius:var(--r);padding:16px;border:1.5px solid var(--bo);box-shadow:var(--s1);text-align:center;}
.as-g{border-top:3px solid var(--g);} .as-b{border-top:3px solid var(--bl);}
.as-go{border-top:3px solid var(--go);} .as-o{border-top:3px solid var(--or);}
.as-ico{font-size:1.5rem;margin-bottom:6px;}
.as-l{font-size:0.7rem;color:var(--mu);text-transform:uppercase;letter-spacing:0.06em;font-weight:800;margin-bottom:5px;}
.as-v{font-family:var(--ft);font-size:1.45rem;font-weight:800;color:var(--tx);}
.admin-nav{display:grid;grid-template-columns:repeat(5,1fr);gap:9px;}
.anb{background:var(--bg);border:1.5px solid var(--bo);border-radius:var(--rs);padding:11px 7px;font-size:0.84rem;font-weight:700;color:var(--tx);cursor:pointer;transition:all var(--tr);text-align:center;}
.anb:hover{background:var(--gp);border-color:var(--g);color:var(--g);}

/* ── MODAL ── */
.modal{display:none;position:fixed;inset:0;background:rgba(13,17,23,0.75);z-index:1000;align-items:center;justify-content:center;}
.modal.open{display:flex;}
.modal-box{background:var(--card);border-radius:var(--r);padding:32px;max-width:390px;width:92%;text-align:center;box-shadow:var(--s2);animation:fi 0.25s ease;}
.modal-ico{font-size:2.2rem;margin-bottom:11px;}
.modal-title{font-family:var(--ft);font-size:1.35rem;font-weight:800;margin-bottom:9px;color:var(--tx);}
.modal-text{font-size:0.9rem;color:var(--mu);margin-bottom:18px;line-height:1.65;font-weight:600;}
.modal-close{display:block;margin:10px auto 0;background:none;font-size:0.82rem;color:var(--mu);text-decoration:underline;cursor:pointer;font-weight:600;}

/* ── TOAST & EMPTY ── */
#toast{position:fixed;bottom:22px;right:22px;z-index:9999;background:var(--sid);color:#fff;padding:11px 18px;border-radius:10px;font-size:0.88rem;box-shadow:0 4px 18px rgba(0,0,0,0.22);transform:translateY(80px);opacity:0;transition:all 0.3s ease;pointer-events:none;font-weight:700;}
.empty{text-align:center;color:var(--mu);font-size:0.9rem;padding:24px 18px;font-weight:600;}

/* ── RESPONSIVE ── */
@media(max-width:1200px){
  .kpi-row{grid-template-columns:repeat(2,1fr);}
  .pricing-grid{grid-template-columns:repeat(2,1fr);}
  .charts-row{grid-template-columns:1fr;}
  .defis-grid{grid-template-columns:repeat(2,1fr);}
  .tips-grid{grid-template-columns:repeat(2,1fr);}
  .obj-row{grid-template-columns:1fr;}
  .co-grid{grid-template-columns:1fr;}
  .admin-stats{grid-template-columns:repeat(2,1fr);}
}
@media(max-width:900px){
  .sidebar{transform:translateX(-100%);}
  .sidebar.open{transform:translateX(0);}
  .mh{display:flex;}
  .main{margin-left:0;padding:62px 12px 26px;}
  .goals-grid{grid-template-columns:1fr;}
  .tot-row{grid-template-columns:repeat(2,1fr);}
  .fg2{grid-template-columns:1fr;}
  .fg.full{grid-column:auto;}
  .pricing-grid{grid-template-columns:1fr;}
  .pr.feat{transform:none;}
  .ug-row{grid-template-columns:1fr;}
  .pc-btns{flex-direction:column;}
  .sel-bar{flex-direction:column;align-items:flex-start;}
  .pay-groups{grid-template-columns:1fr;}
  .admin-nav{grid-template-columns:repeat(3,1fr);}
  .share-grid{grid-template-columns:repeat(2,1fr);}
  .pwa-banner{flex-wrap:wrap;gap:10px;}
  .pwa-btn{width:100%;text-align:center;}
}
@media(max-width:600px){
  .kpi-row{grid-template-columns:1fr;}
  .tot-row{grid-template-columns:1fr;}
  .tips-grid{grid-template-columns:1fr;}
  .pt{font-size:1.75rem;}
  .charts-row{display:none;}
  .main{padding:58px 10px 22px;}
  .admin-stats{grid-template-columns:1fr;}
  .admin-nav{grid-template-columns:repeat(2,1fr);}
  .defis-grid{grid-template-columns:1fr;}
}

/* ══ AUTH SCREEN ══ */
.auth-screen{position:fixed;inset:0;background:linear-gradient(135deg,#1A2332,#243348);display:flex;align-items:center;justify-content:center;z-index:5000;padding:20px;}
.auth-box{background:#fff;border-radius:18px;padding:34px 30px;max-width:400px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.35);text-align:center;}
.auth-logo{width:56px;height:56px;border-radius:14px;margin-bottom:11px;object-fit:cover;}
.auth-title{font-family:var(--ft);font-size:1.7rem;font-weight:800;color:var(--tx);}
.auth-title em{color:var(--go);font-style:normal;}
.auth-sub{font-size:0.78rem;color:var(--mu);margin-bottom:20px;}
.auth-tabs{display:flex;gap:6px;background:var(--bg);border-radius:12px;padding:4px;margin-bottom:18px;}
.auth-tab{flex:1;padding:9px;border-radius:9px;font-size:0.86rem;font-weight:700;color:var(--mu);background:none;border:none;cursor:pointer;transition:all var(--tr);}
.auth-tab.active{background:var(--g);color:#fff;}
.auth-box .fg{text-align:left;margin-bottom:11px;}
.auth-error{background:var(--rep);border:1.5px solid #F5C6C0;border-radius:var(--rs);padding:9px 13px;font-size:0.82rem;color:var(--re);font-weight:700;margin-bottom:13px;text-align:left;}
.auth-forgot{display:block;text-align:center;font-size:0.8rem;color:var(--mu);margin-top:13px;text-decoration:underline;}
.auth-trial{font-size:0.78rem;color:var(--mu);margin-top:18px;font-weight:600;}
body.authed .auth-screen{display:none;}
body:not(.authed) .sidebar,body:not(.authed) .main,body:not(.authed) .mh{display:none!important;}
