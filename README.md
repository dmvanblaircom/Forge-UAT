# GRIND — Reclaim Your Standard

**14-week personal training program. Built for a veteran reclaiming his standard.**

---

## WHAT THIS IS

A fully self-contained PWA (Progressive Web App) — no App Store, no account, no subscription.
Open it from your phone's home screen like any other app.
Your workout logs, protein tracking, SITREP data, and PT test records are stored locally on your device.

---

## DEPLOYMENT (Netlify — 5 minutes)

1. Go to **app.netlify.com** and log in
2. Tap your existing GRIND site (or create a new one if this is your first deploy)
3. Navigate to **Deploys**
4. Tap the upload zone — select the **entire `grind-deploy` folder** (or zip it first)
5. Netlify deploys in ~10 seconds. Your URL stays the same.

> **First time?** Go to netlify.com → Sign up → drag the `grind-deploy` folder onto the deploy zone on the Sites page.

---

## ADD TO HOME SCREEN (iPhone)

1. Open your Netlify URL in **Safari** (must be Safari — Chrome won't work)
2. Tap the **Share** button (box with arrow pointing up)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it **GRIND** → tap **Add**

The app icon (dog tags + barbell) will appear on your home screen.

> **Updating the icon?** iOS caches aggressively. After a redeploy:
> - Remove the old GRIND icon from your home screen (press + hold → Remove App)
> - Re-add it via Safari → Share → Add to Home Screen

---

## FILE STRUCTURE

```
grind-deploy/
├── index.html          ← The entire app (HTML + CSS + JS, self-contained)
├── manifest.json       ← PWA metadata — name, theme, icons
├── sw.js               ← Service worker — enables offline mode
├── icon-512.svg        ← App icon (large) — used in manifest
├── icon-192.svg        ← App icon (small) — used in manifest
├── apple-touch-icon.svg← iOS home screen icon
└── README.md           ← This file
```

---

## FEATURES

| Tab | What it does |
|-----|-------------|
| **TODAY** | Daily SITREP check-in · Mission Briefing · Today's workout · Protein bar |
| **PLAN** | Full 14-week plan across 5 phases · Proactive session rescheduling |
| **LOG** | Log sets, reps, and weight for every session |
| **CHOW** | Protein tracking · Quick-add food tiles · Timing guidance |
| **BUILD** | Offline workout generator · Home or away · Any duration |
| **INTEL** | Completion stats · History · PT benchmarks · Body metrics |

---

## THE PROGRAM

| Phase | Weeks | Focus |
|-------|-------|-------|
| 01 — REACTIVATION | 1–2 | Bodyweight only · 4 days/week · Build the habit |
| 02 — FOUNDATION | 3–5 | Dumbbells introduced · 5 days/week · Build the base |
| 03 — BUILD | 6–8 | Heavier loads · Conditioning intervals · Volume up |
| 04 — PROVE IT | 9–10 | Max effort · Benchmarks · No modifications |
| 05 — FINISH STRONG | 11–14 | Final push · End of July test on July 31 |

**July 31 Final Test:** Max push-ups · 2000m row · 100 thrusters for time · 1-mile run · Max plank hold.
Write down every number. That's your proof.

---

## YOUR DATA

All data lives in your phone's **local storage** — it never leaves your device.
- Workout logs persist across sessions
- Protein entries reset each day (by design)
- SITREP entries are stored by date
- PT tests and body metrics are stored permanently until you delete them

**Switching phones?** Your data doesn't auto-transfer. Before you switch:
1. Open INTEL → export or screenshot your PT test history and metrics
2. Redeploy the app on your new phone's browser

---

## PROGRAM SETTINGS

Tap **⚙ PROGRAM SETTINGS** at the bottom of the TODAY tab to:
- Change the program start date (all phase dates recalculate automatically)
- Adjust your daily protein target (default: 170g)

---

*Built April 2026. No ads. No tracking. No cloud. Just you and the work.*
