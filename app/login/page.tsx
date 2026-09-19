"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setError(error.message);
    window.location.href = "/discover";
  }

  return <main className="auth">
    <Link className="brand" href="/"><span className="brand-mark">V</span><span>Vibe<span className="accent">Box</span></span></Link>
    <div className="auth-card">
      <label>HOŞ GELDİN</label><h1>Tekrar görüşmek güzel.</h1>
      <p>VibeBox hesabına giriş yap ve keşfe devam et.</p>
      <form onSubmit={submit}>
        <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="E-posta adresin"/>
        <input type="password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Şifren"/>
        {error && <p className="error">{error}</p>}
        <button className="btn primary" disabled={loading}>{loading ? "Giriş yapılıyor..." : "Giriş yap →"}</button>
      </form>
      <div className="divider">ve</div>
      <Link className="outline" href="/signup">Hesabın yok mu? <b>Kayıt ol</b></Link>
    </div>
  </main>
}
