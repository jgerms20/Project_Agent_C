# Research Deep Dive

## When to Use
When the creator needs detailed research on a real agency, cultural event, industry trend, historical moment, or any real-world context that informs the show. Use this for substantive research, not quick lookups (use Haiku directly for those).

## Instructions

1. **Clarify the research topic** — ask the creator:
   - What specifically do you want to know?
   - Which agency era does this relate to? (GSP / W+K / TBWA / industry-wide)
   - Is this for a specific scene, character, or episode — or general background?
   - What do you already know that I should build on?

2. **Search the web** for relevant information:
   - Agency history, leadership changes, notable campaigns, controversies
   - Cultural events and their timelines (BLM, Covid, AI developments, industry consolidation)
   - Industry reporting (AdAge, AdWeek, Campaign, trade press)
   - City/setting context (Portland culture, SF tech scene, LA entertainment industry)
   - Real people who may inspire characters (public figures only, be mindful of legal)

3. **Synthesize findings** into the appropriate research file:
   - Agency-specific → `docs/research/agencies/[agency-name].md`
   - Cultural/industry context → create or update a file in `docs/research/` (e.g., `docs/research/ai-in-advertising.md`, `docs/research/blm-corporate-response.md`)
   - If a new research file is needed, follow the naming convention: `docs/research/[topic-slug].md`

4. **Separate what's useful for the show** from general background:
   - **Show fuel**: Facts, events, details, or dynamics that could directly inform scenes, characters, or themes. Mark these clearly.
   - **Background context**: Important for understanding but not directly dramatizable. Keep for reference.
   - **Legal flags**: Anything that raises legal concerns (real people's private lives, proprietary info, potential defamation). Flag explicitly.

5. **Connect to the series bible** — note how research findings relate to:
   - Specific themes from `docs/series-bible/03-themes.md`
   - Character development in `docs/series-bible/02-characters.md`
   - World-building in `docs/series-bible/01-world.md`
   - Season arcs in `docs/series-bible/04-season-arcs.md`

6. **Update the research.html page** on the GitHub Pages site using the `update-site` skill workflow

7. **Update the session log**

## Research File Template

```markdown
# [Research Topic]

**Date researched**: YYYY-MM-DD
**Related era(s)**: GSP / W+K / TBWA / Industry-wide
**Related themes**: [Which core themes this connects to]

## Key Findings

### Show Fuel (directly usable)
- [Finding 1 — with source]
- [Finding 2 — with source]

### Background Context
- [Context 1]
- [Context 2]

### Timeline
- [Date]: [Event]
- [Date]: [Event]

### Legal Flags
- [Any concerns about using this material]

## How This Connects to the Show
[2-3 sentences on how these findings could inform specific scenes, characters, or themes]

## Sources
- [Source 1 — URL or publication]
- [Source 2 — URL or publication]
```

## Research Topic Ideas (for proactive suggestions)
- Omnicom-IPG merger timeline and industry reaction
- MAIP program history and alumni network
- Agency layoff waves 2022-2024
- Portland's cultural identity shift
- AI tools adoption in creative agencies
- DEI programs in advertising — what launched post-2020, what survived
- Specific campaigns from each agency era (Got Milk?, Nike, Apple)

## Model Usage
- Use **Sonnet** for web research, synthesis, and writing up findings
- Use **Opus** for connecting research to story themes and evaluating narrative potential
- Use **Haiku** for quick fact-checking and source lookups
