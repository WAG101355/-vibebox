import Link from "next/link";

const moods=[
  ["☾","Chill","Sakinleş, yavaşla.","chill"],
  ["ϟ","Enerjik","Harekete geç.","energy"],
  ["◎","Odak","Akışa gir.","focus"],
  ["✦","Macera","Yeni bir şey dene.","adventure"]
];

const cards=[
  ["01","MÜZİK","Night Drive","Gece yolculukları için.","cover1","♫"],
  ["02","FİLM","Neon City","Yağmurlu bir akşam için.","cover2","▶"],
  ["03","OYUN","Starfall","Kafanı dağıtmak için.","cover3","⌁"]
];

export default function Home(){
 return <main>
  <header className="header">
   <Link className="brand" href="/"><span className="brand-mark">V</span><span>Vibe<span className="accent">Box</span></span></Link>
   <nav><Link className="active" href="/">Ana Sayfa</Link><Link href="/discover">Keşfet</Link><Link href="/login">Giriş</Link></nav>
   <Link className="nav-cta" href="/signup">Hesap oluştur</Link>
  </header>

  <section className="hero">
   <div className="hero-copy">
    <div className="pill"><i/> BUGÜNÜN VİBE'I</div>
    <h1>Ne hissediyorsan,<br/><em>onu keşfet.</em></h1>
    <p>Ruh haline göre seçilmiş müzikler, filmler, oyunlar ve yeni deneyimler. Tek bir yerde, sana göre.</p>
    <div className="actions"><Link className="btn primary" href="/discover">Vibe'ını seç <span>→</span></Link><Link className="btn secondary" href="/signup">Ücretsiz başla <span>✦</span></Link></div>
    <div className="proof"><strong>12.8K+</strong> kişi bugün keşfediyor</div>
   </div>
   <div className="hero-art"><div className="glow"/><div className="ring r1"/><div className="ring r2"/><div className="orb"><span>✦</span><strong>GOOD<br/>VIBES</strong><small>YOUR MOOD · YOUR WORLD</small></div><div className="float-card fc1">♫ <div><small>ŞİMDİ ÇALIYOR</small><b>Midnight City</b></div></div><div className="float-card fc2">◎ <div><small>BUGÜNÜN SEÇİMİ</small><b>Deep Focus</b></div></div></div>
  </section>

  <section className="stats"><div><b>24/7</b><span>Yeni keşifler</span></div><div><b>4</b><span>Vibe kategorisi</span></div><div><b>∞</b><span>Olasılık</span></div><div><b>01</b><span>Senin deneyimin</span></div></section>

  <section className="section" id="moods">
   <div className="head"><div><label>SANA ÖZEL</label><h2>Bugün nasıl hissediyorsun?</h2></div><p>Bir vibe seç, gerisini bize bırak.</p></div>
   <div className="moods">{moods.map(([icon,title,desc,key])=><Link href={`/discover?mood=${key}`} className="mood" key={key}><span>{icon}</span><b>{title}</b><small>{desc}</small><i>→</i></Link>)}</div>
  </section>

  <section className="section">
   <div className="head"><div><label>ŞU AN POPÜLER</label><h2>Trend keşifler</h2></div><Link href="/discover">Tümünü gör →</Link></div>
   <div className="cards">{cards.map(c=><article className="card" key={c[0]}><div className={`cover ${c[4]}`}><small>{c[0]}</small><b>{c[2].split(" ").map((x,i)=><span key={i}>{x}<br/></span>)}</b><i>{c[5]}</i></div><div className="card-info"><div><label>{c[1]}</label><h3>{c[2]}</h3><p>{c[3]}</p></div><button>♡</button></div></article>)}</div>
  </section>

  <section className="banner"><div><label>VIBEBOX</label><h2>Her gün küçük bir <em>keşif.</em></h2><p>Merakını başlangıç noktası yap. VibeBox, ruh halini yeni deneyimlere dönüştürür.</p></div><Link className="btn primary" href="/signup">Hemen başla →</Link></section>
  <footer><Link className="brand" href="/"><span className="brand-mark">V</span><span>Vibe<span className="accent">Box</span></span></Link><span>Made for curious minds. © 2026</span><Link href="/discover">Keşfet ↑</Link></footer>
 </main>
}