 "use client";
import {useMemo,useState} from "react";
import Link from "next/link";
const data:any={
 chill:{title:"Chill",sub:"Sakinleş, yavaşla.",items:["Afterglow","Midnight Café","Slow Sunday"]},
 energy:{title:"Enerjik",sub:"Harekete geç.",items:["Pulse Run","Electric Nights","Fast Lane"]},
 focus:{title:"Odak",sub:"Akışa gir.",items:["Deep Focus","Clear Mind","Late Study"]},
 adventure:{title:"Macera",sub:"Yeni bir şey dene.",items:["Unknown Route","Starfall","Wild Side"]}
};
export default function Discover(){
 const [mood,setMood]=useState("chill");
 const d=useMemo(()=>data[mood],[mood]);
 return <main className="app-shell">
  <header className="header"><Link className="brand" href="/"><span className="brand-mark">V</span><span>Vibe<span className="accent">Box</span></span></Link><nav><Link href="/">Ana Sayfa</Link><Link className="active" href="/discover">Keşfet</Link><Link href="/login">Giriş</Link></nav><Link className="nav-cta" href="/signup">Hesap oluştur</Link></header>
  <section className="discover-page"><label>KEŞFET</label><h1>Vibe'ını seç.</h1><p>Bir ruh hali seç. Sana uygun keşifleri anında oluşturalım.</p>
   <div className="mood-tabs">{Object.entries(data).map(([key,v]:any)=><button className={mood===key?"selected":""} onClick={()=>setMood(key)} key={key}>{v.title}</button>)}</div>
   <div className="recommend"><div className="big-icon">✦</div><div><label>BUGÜN SENİN İÇİN</label><h2>{d.items[0]}</h2><p>{d.sub} Bu öneri {d.title.toLowerCase()} moduna göre seçildi.</p></div><button className="save">♡ Kaydet</button></div>
   <div className="mini-grid">{d.items.map((x:string,i:number)=><div className="mini" key={x}><span>0{i+1}</span><b>{x}</b><small>{i===0?"Öne çıkan öneri":"Sana uygun keşif"}</small></div>)}</div>
  </section>
 </main>
}