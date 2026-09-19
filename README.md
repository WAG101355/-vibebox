# VibeBox + Supabase

## 1. Install
```bash
npm install
npm run dev
```

## 2. Environment
Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

Do NOT use or expose a `sb_secret_...` key in the browser.

## 3. Database
In Supabase Dashboard → SQL Editor, paste and run:
`supabase/schema.sql`

This creates:
- profiles
- favorites
- mood_history
- Row Level Security policies
- automatic profile creation after signup

## 4. Current features
- Real Supabase email/password signup
- Real Supabase login
- Session-aware protected profile page
- Database schema for profiles, favorites and mood history
- RLS policies

Next step: connect Discover cards to TMDB/game/music APIs and make favorites fully interactive.
