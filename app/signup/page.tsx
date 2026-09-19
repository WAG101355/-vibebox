"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(""); setMessage(""); setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: name } }
    });
    setLoading(false);
    if (error) return setError(error.message);
    setMessage("Kayıt başarılı. E-posta doğrulaması açıksa gelen kutunu kontrol et.");
  }

  return <main className="auth">
    <Link className="brand" href="/"><span className="brand-mark">V</span><span>Vibe<span className="accent">Box</span></span></Link>
    <div className="auth-card">
      <label>VIBEBOX'A KATIL</label><h1>Kendi dünyanı keşfet.</h1>
      <p>Ücretsiz hesabını oluştur. Favorilerini ve kişisel keşiflerini sakla.</p>
      <form onSubmit={submit}>
        <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Adın"/>
        <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="E-posta adresin"/>
        <input required minLength={6} type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Şifre oluştur"/>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <button className="btn primary" disabled={loading}>{loading ? "Hesap oluşturuluyor..." : "Hesap oluştur →"}</button>
      </form>
      <p className="legal">Devam ederek kullanım koşullarını kabul etmiş olursun.</p>
      <Link className="outline" href="/login">Zaten hesabın var mı? <b>Giriş yap</b></Link>
    </div>
  </main>
}
