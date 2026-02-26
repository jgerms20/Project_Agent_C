# Status Check

## When to Use
When the creator wants a quick snapshot of where the project stands — what's done, what's open, and what to work on next. Use at the start of sessions, when returning after a break, or anytime the creator asks "where are we?" Keep it concise and dashboard-style.

## Instructions

1. **Read all series bible sections** and assess completeness for each:
   - `docs/series-bible/00-overview.md` — Overview
   - `docs/series-bible/01-world.md` — World
   - `docs/series-bible/02-characters.md` — Characters
   - `docs/series-bible/03-themes.md` — Themes
   - `docs/series-bible/04-season-arcs.md` — Season Arcs
   - `docs/series-bible/05-tone-and-style.md` — Tone & Style
   - `docs/series-bible/06-pilot-outline.md` — Pilot Outline

   Rate each as: **Empty** | **Skeleton** | **In Progress** | **Solid Draft** | **Complete**

2. **Read `planning/session-log.md`** and pull the most recent session's decisions

3. **Read `planning/open-questions.md`** and list the top 3-5 highest-priority open questions

4. **Read `planning/next-steps.md`** and note current priorities

5. **Check for unprocessed captures** — scan `capture/voice-memos/` and `capture/text-dumps/` for anything not yet filed to `capture/processed/`

6. **Suggest the single most impactful next task** — the one thing that would move the series bible forward the most right now. Consider:
   - What's blocking the most downstream decisions?
   - What section is thinnest relative to its importance?
   - Is there a creative thread the creator was excited about that should be followed?

7. **Output the dashboard** using the template below — keep it tight, no fluff

## Status Dashboard Template

```
=== THE AGENCY — PROJECT STATUS ===
Date: [YYYY-MM-DD]

SERIES BIBLE COMPLETENESS
─────────────────────────
  Overview ........... [status]
  World .............. [status]
  Characters ......... [status]
  Themes ............. [status]
  Season Arcs ........ [status]
  Tone & Style ....... [status]
  Pilot Outline ...... [status]

RECENT DECISIONS
  - [Decision 1]
  - [Decision 2]
  - [Decision 3]

TOP OPEN QUESTIONS
  1. [Highest-impact question]
  2. [Second question]
  3. [Third question]

UNPROCESSED CAPTURES: [count] items

RECOMMENDED NEXT TASK
  [One clear, actionable suggestion with rationale]

===================================
```

## Model Usage
- Use **Haiku** for reading files and generating the dashboard — this should be fast and lightweight
- Escalate to **Sonnet** only if the recommendation requires analyzing thematic connections or story implications
