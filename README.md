# FORGE — Always Sharpen

**Performance training app with squad accountability, goal-driven programs, and weekly streak tracking.**

Built as a PWA — installs to your home screen, works offline, no App Store required.

---

## Features

- **Goal-driven programs** — set a goal with a target date, build a phased program to reach it. The Programs tab shows the goal → program relationship: your target, countdown, and which phase you're in.
- **Streak tracking** — consecutive weeks of completed training, with milestones (1, 4, 10, 13, 20, 26, 39, 52, 100 weeks). Replaces the old Forge Score.
- **Type-aware workout logging** — the logger adapts to each exercise:
  - Warmups / cooldowns → single done-tap
  - Strength → reps + weight, prefilled from the prescription
  - Bodyweight → reps only
  - Cardio → timer + distance (rows, runs, treadmill)
  - FOR TIME → count-up stopwatch with save
  - AMRAP → countdown timer + rounds/reps
  - Circuits → per-round tracking
- **Squad feed** — share workouts with exercise detail, react with flex and fist bumps. Copy a formatted summary for your group chat.
- **Workout generator** — builds sessions from your location, equipment, and time.
- **Workout library** — save full routines to reuse later (dedup-protected).
- **Profile & cloud sync** — email-based identity. Your full history syncs to the cloud and restores on any device (or after clearing data) by re-entering your email.
- **Flexible setup** — start with the built-in Base program, build your own goal+program, or skip programs entirely and log day-to-day. Base can be hidden anytime.

---

## Deploy

Manual deploy via GitHub Pages — drop the files from `forge-deploy.zip` into the repo root:

- `index.html` — the app
- `landing.png` — landing-page artwork (required by index.html)
- `sw.js` — service worker (bump the cache version on each release)
- `manifest.json`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — PWA assets

UAT repo: `Forge-UAT` → https://dmvanblaircom.github.io/Forge-UAT/
Production: `Forge` → https://dmvanblaircom.github.io/Forge/

After dropping files, the bumped service worker cache makes installed devices pull the fresh build on next load.

---

## One-time Supabase setup

Run once in the Supabase SQL editor (powers squad feed + profile restore):

```sql
create table if not exists user_profiles (
  uuid text primary key,
  email text,
  display_name text,
  snapshot text,
  updated_at timestamptz default now()
);
alter table user_profiles enable row level security;
create policy "anon all" on user_profiles for all using (true) with check (true);

alter table workouts add column if not exists local_date text;
```

---

## Tech

- Single self-contained `index.html` — vanilla JS, no framework, no build step
- Data: localStorage (per-device) with Supabase cloud sync keyed by email-derived UUID
- Offline-first via service worker

---

*As iron sharpens iron, so one person sharpens another. — Proverbs 27:17*
