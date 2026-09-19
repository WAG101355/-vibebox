import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Profile() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const name = user.user_metadata?.display_name || user.email?.split("@")[0] || "VibeBox kullanıcısı";

  return <main className="page">
    <nav className="nav"><Link className="brand" href="/"><span className="brand-mark">V</span><span>Vibe<span className="accent">Box</span></span></Link>
      <div className="nav-links"><Link href="/discover">Keşfet</Link><Link href="/profile">Profil</Link></div>
    </nav>
    <section className="container">
      <p className="eyebrow">PROFİL</p>
      <h1>{name}</h1>
      <p className="muted">{user.email}</p>
      <div className="profile-card">
        <h2>Hesabın hazır.</h2>
        <p>Supabase Auth bağlantısı çalışıyor. Bir sonraki adımda favoriler ve mood geçmişini ekleyebiliriz.</p>
        <Link className="btn primary" href="/discover">Keşfe git →</Link>
      </div>
    </section>
  </main>
}
