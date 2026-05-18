# SQUAD SETUP GUIDE — GRIND

This connects the app to a shared database so your squad can see each other's workouts.
Takes about 10 minutes. Free forever.

---

## STEP 1 — Create a Supabase account

1. Go to **supabase.com** in Safari
2. Tap **Start your project** → Sign up (GitHub login works great)
3. Tap **New Project**
4. Name it `grind` · pick any region · set a database password (save it somewhere)
5. Wait ~2 minutes for it to initialize

---

## STEP 2 — Create the workouts table

1. In your Supabase project, tap **SQL Editor** in the left sidebar
2. Tap **New query**
3. Paste this entire block and tap **Run**:

```sql
create table workouts (
  id uuid default gen_random_uuid() primary key,
  user_name text not null,
  user_gender text not null,
  workout_title text not null,
  phase_name text,
  duration_est integer,
  exercises jsonb,
  notes text,
  logged_at timestamptz default now()
);

-- Allow anyone with the URL to read and write (your squad)
alter table workouts enable row level security;
create policy "Squad read" on workouts for select using (true);
create policy "Squad write" on workouts for insert with check (true);
```

4. You should see "Success. No rows returned."

---

## STEP 3 — Get your API keys

1. In Supabase, go to **Project Settings** (gear icon) → **API**
2. You need two values:
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **anon public key** — long string starting with `eyJ...`

---

## STEP 4 — Update index.html

Open `index.html` in a text editor and find these three lines near the top of the `<script>` section:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
const APP_URL = 'YOUR_GITHUB_PAGES_URL';
```

Replace them with your actual values:

```js
const SUPABASE_URL = 'https://abcdefgh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIs...';
const APP_URL = 'https://yourusername.github.io/grind';
```

Save the file.

---

## STEP 5 — Redeploy to GitHub

1. Go to your repo on github.com
2. Tap `index.html` → pencil icon to edit → paste the updated content
   (Or: upload the new index.html via Add file → Upload files)
3. Commit the change

---

## STEP 6 — Share with your squad

Send them your GitHub Pages URL:
```
https://yourusername.github.io/grind
```

Each person opens it on their phone, creates their profile (name + gender), and they're in.
First launch shows the setup screen automatically.

---

## HOW THE SHARE TEXT WORKS

After logging a workout, tap **SAVE + SEND TO SQUAD**.
The app copies this to your clipboard:

```
🏋🏻‍♂️✅ David logged Upper Push
Foundation · Upper Push · ~45 min
https://yourusername.github.io/grind
```

Paste it into your group chat. The link opens the app where they can see the Squad feed.

---

## TROUBLESHOOTING

| Problem | Fix |
|---------|-----|
| Squad tab shows "SETUP REQUIRED" | You haven't updated the Supabase constants in index.html yet |
| "Could not reach squad feed" | Check your Supabase URL and anon key are correct |
| Workout posted but not appearing | Tap ↻ REFRESH on the Squad tab |
| Someone can't see workouts | Make sure they're on the same URL |

---

*The anon key is safe to include in the HTML — it only allows reading and writing to your workouts table. No admin access.*
