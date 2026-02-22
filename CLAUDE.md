# The Agency / Agency - Project CLAUDE.md

## Project Overview

**Title**: The Agency / Agency
**Creator**: J. Germs
**Format**: Half-hour hybrid (standalone episodes that build a larger arc)
**Genre**: Drama-forward with dark humor, episode-dependent tonal shifts
**Comps**: Mad Men x Atlanta x Industry
**Premise**: The disruption of the advertising industry, post-2020, from the outside in
**First Deliverable**: Series Bible
**Date Started**: 2025-08-31 (concept) | 2026-02-22 (active development)

---

## Working Agreements

### Always Do
- **Update markdown files** after every session - no knowledge should live only in chat
- **Track session progress** in `planning/session-log.md`
- **File captured ideas** from voice memos and text dumps into the appropriate docs
- **Keep the series bible current** as decisions are made
- **Use skills** for common workflows (capture, character profiles, episode outlines)
- **Review open questions** at the start of each session

### Model Usage
- **Opus**: Big-picture thinking, story architecture, thematic analysis, planning, orchestration
- **Sonnet**: Writing, research, character development, scene work, drafting
- **Haiku**: Quick tasks, filing, formatting, small edits, lookups

### Never Do
- Don't make story decisions without the creator's input
- Don't discard raw captures - always keep originals in `capture/`
- Don't skip updating the session log
- Don't over-polish rough ideas before they've been explored

---

## Project Structure

```
Advertising-Show/
├── CLAUDE.md                      # This file - project context and rules
├── docs/
│   ├── series-bible/              # THE deliverable
│   │   ├── 00-overview.md         # Logline, premise, format, tone, comps
│   │   ├── 01-world.md            # The advertising world, agencies, culture
│   │   ├── 02-characters.md       # All character profiles
│   │   ├── 03-themes.md           # Core themes and how they manifest
│   │   ├── 04-season-arcs.md      # Season-by-season structure
│   │   ├── 05-tone-and-style.md   # Tone, visual style, music, references
│   │   └── 06-pilot-outline.md    # Pilot episode outline
│   ├── research/
│   │   └── agencies/              # Real agency research and context
│   │       ├── goodby-silverstein.md
│   │       ├── wieden-kennedy.md
│   │       └── tbwa-chiat-day.md
│   └── references/
│       ├── comp-shows.md          # Analysis of comparable shows
│       └── playlist.md            # Music and mood references
├── capture/
│   ├── voice-memos/               # Raw voice memo transcripts
│   ├── text-dumps/                # Raw text dumps and notes
│   └── processed/                 # Processed and filed ideas
├── scripts/
│   ├── pilot/                     # Pilot script development
│   └── episodes/                  # Episode scripts
├── planning/
│   ├── session-log.md             # Running log of all sessions
│   ├── open-questions.md          # Unresolved decisions
│   └── next-steps.md              # Current priorities
└── .claude/
    └── skills/                    # Custom skills for common workflows
        ├── capture-idea.md
        ├── character-profile.md
        ├── episode-outline.md
        ├── session-review.md
        └── world-build.md
```

---

## Current State

### Decisions Made
- [x] Format: Half-hour hybrid
- [x] First deliverable: Series Bible
- [x] Tone: Drama-forward, dark humor, episode-dependent shifts
- [x] Protagonist arc: Outsider to disruptor
- [x] Timeline: Season-per-era with non-linear jumps
- [x] Seasons: 4-5+
- [x] AI thread: Slow burn Easter eggs → crescendo → protagonist catalyst
- [x] Race: Central/interwoven/subtext simultaneously, flexes by episode
- [x] Protagonist: Fictionalized creator as lead, ensemble POVs

### Open Decisions
- [ ] Character details (25+ named, need to flesh out top 5-10)
- [ ] MAIP's full role in the narrative (connective tissue + more)
- [ ] Fictionalized agency names
- [ ] Fictionalized character names and how closely they map to real people
- [ ] Specific season breakdowns (which eras get multiple seasons)
- [ ] Cold open style / episode structure
- [ ] Whether the show is set "in the past" (period piece) or told in present
- [ ] The protagonist's name
- [ ] Legal strategy for real people/places

---

## Key Themes (Confirmed)
1. **Cognitive Dissonance** - saying one thing, doing another (especially re: diversity)
2. **Cult-Like Buy-In** - the agency Kool-Aid, opt in or get out
3. **A Looming Apocalypse** - AI, cultural shifts, industry collapse
4. **Cultural + Societal Shifts** - post-2020 reckoning
5. **Reclamation** - taking back what's been co-opted
6. **First-Mover's Advantage** - who sees the future first
7. **Performativeness** - DEI theater, virtue signaling
8. **Allyship vs. Alliance** - the spectrum from fake to real
9. **Creativity vs. Capitalism** - the soul of advertising
10. **The Long Con** - the slow game being played on multiple levels

---

## Three Agency Eras

### Era 1: Goodby Silverstein & Partners (San Francisco, 2020-2023)
- **Show role**: The Awakening
- **Entry**: Through internship program (MAIP connection), brought on full-time
- **Vibe**: Sophisticated, academic, very smart
- **Conflict**: Peak performativeness during Covid + BLM. Says diversity, contradicts it.
- **Key moment**: Vaccination incident - denied office access
- **Protagonist role**: Junior Strategist (never promoted - that's a story)
- **Unique**: Entirely remote, never lived in SF

### Era 2: Wieden+Kennedy (Portland, 2023-2024)
- **Show role**: The Cult
- **Vibe**: Most famous agency in the world. Nike. Legendary work.
- **Conflict**: Height of cult-like buy-in. Corporate culture peak. "Keep Portland Weird."
- **Key moment**: Gets laid off
- **Protagonist role**: Senior / Comms & Media Supervisor
- **Unique**: First time in-person at an agency. Portland culture shock.

### Era 3: TBWA\Chiat\Day (Los Angeles, 2024-present)
- **Show role**: The Reckoning
- **Vibe**: Chill corporate America. LA energy.
- **Conflict**: Omnicom merger dynamics. Post-everything era.
- **Protagonist role**: Senior Connection Strategist
- **Unique**: Post-Covid, AI crescendo, industry consolidation

---

## Compute & Session Tips
- Start sessions by reviewing `planning/session-log.md` and `planning/open-questions.md`
- Use `/capture` skill for quick idea filing
- Use `/review` skill at end of sessions to update all docs
- Keep voice memo transcripts in `capture/voice-memos/` with date prefixes
- Process captured ideas into series bible sections regularly
- Use Haiku for quick formatting and filing tasks to conserve compute
