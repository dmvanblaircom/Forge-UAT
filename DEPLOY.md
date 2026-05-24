# FORGE — Deploy Guide

## Setup

1. Generate a GitHub personal access token (repo scope) at github.com/settings/tokens
2. Set it as an environment variable — never paste it into a file:

```cmd
# Windows
set GITHUB_TOKEN=ghp_yourtoken

# Mac/Linux
export GITHUB_TOKEN=ghp_yourtoken
```

## Deploy

```bash
# UAT (test first)
python deploy.py forge-uat "your message"

# Production
python deploy.py forge "your message"
```

## UAT URL
https://dmvanblaircom.github.io/Forge-UAT/

## Production URL
https://dmvanblaircom.github.io/Forge/

## Notes
- localStorage is scoped to origin — UAT and prod data never mix
- Users need to close and reopen the app to get updates (service worker)
- To force icon refresh: delete app from home screen and re-add
- Service worker cache is versioned (forge-v4) — bumps force fresh fetches
