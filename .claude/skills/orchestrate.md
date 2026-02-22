# Orchestrate

## When to Use
When a task is complex enough to benefit from parallel sub-agents, or when cost optimization matters. If a task has two or more independent workstreams — or if it involves both heavy creative work AND routine filing — delegation across multiple agents is almost always better than doing everything in a single sequential thread.

Trigger this skill when you hear phrases like:
- "Let's build out the whole [X]"
- "Can you do all of [A], [B], and [C]?"
- "Process these voice memos and update the bible"
- "Rebuild the docs / site from scratch"
- Any task that would take a single agent more than a few minutes

---

## Model Roles

### Opus — Orchestrator (one instance only)
Big-picture thinking, story architecture, thematic analysis, planning, arc consistency, and coordinating sub-agents. Opus is the showrunner of the AI team. It should never be doing busywork.

**Use for**: Session planning, reviewing episode outlines for arc fit, analyzing ensemble character dynamics, evaluating thematic coherence across the series bible, high-stakes creative decisions.

**Never use for**: Formatting, filing, simple lookups, template-filling, updating session logs, converting files.

### Sonnet — The Workhorse (use 2+ in parallel for heavy tasks)
Writing, research, character development, scene work, drafting, building complex documents, synthesizing captures into series bible sections. Sonnet is the writer's room.

**Use for**: Drafting or rewriting series bible sections, character profile development, episode outlines, research on real agencies and cultural context, building HTML pages or structured docs, integrating multiple captures into coherent narrative material.

**Never use for**: Tasks Haiku can handle. If it's just formatting, tagging, filing, or a simple lookup — that's Haiku work.

### Haiku — Quick Tasks (use 2+ in parallel for lightweight work)
Filing, formatting, small edits, lookups, simple conversions, tagging raw captures, updating logs, build scripts, verification. Haiku is the production coordinator.

**Use for**: Saving raw captures to the right folder, tagging content, updating `planning/session-log.md`, updating `planning/open-questions.md`, reformatting a doc, checking if a file exists, simple find-and-replace, converting voice memo transcripts into the capture template.

**Never use for**: Anything requiring creative judgment, thematic analysis, or substantial writing.

---

## Delegation Patterns

### 1. Research Swarm
Launch multiple Haiku agents to read and search different parts of the codebase simultaneously, then pass results to a Sonnet agent for synthesis.

**Best for**: "What do we have on [character/theme/era]?" or "Audit the series bible for consistency."

**Setup**:
- Haiku Agent A: Read `docs/series-bible/02-characters.md`, extract all info on target character
- Haiku Agent B: Search `capture/` folders for any raw mentions of target character
- Haiku Agent C: Read `planning/open-questions.md` for related open questions
- Sonnet Agent: Receive all three outputs, synthesize into a full picture, draft any updates

---

### 2. Parallel Build
Launch multiple Sonnet agents to build independent files simultaneously. Each agent owns one file or section end-to-end.

**Best for**: Building out multiple series bible sections at once, creating several episode outlines in one session, generating multiple agency research docs.

**Setup**:
- Sonnet Agent A: Draft `docs/series-bible/01-world.md`
- Sonnet Agent B: Draft `docs/series-bible/02-characters.md`
- Sonnet Agent C: Draft `docs/series-bible/03-themes.md`
- (All three run simultaneously; Opus reviews outputs for coherence after)

---

### 3. Draft and Polish
Haiku drafts rough scaffolding or fills in a template; Sonnet polishes, expands, and integrates.

**Best for**: High-volume content where structure matters more than prose initially — episode templates, character lists, research outlines.

**Setup**:
- Haiku: Fill in the episode outline template with bare facts and placeholders from raw notes
- Sonnet: Receive Haiku's draft, flesh out scenes, sharpen logline, add thematic depth, cross-reference with themes doc

---

### 4. Deep Dive
Opus plans and defines the creative problem. Sonnet researches and writes. Haiku formats and files the output.

**Best for**: Complex story architecture work — season structure, ensemble dynamics, thematic mapping across eras.

**Setup**:
- Opus: Articulate the creative question, define scope, identify which series bible sections are affected, give Sonnet the framing
- Sonnet: Research (if needed), draft the content, present options
- Haiku: Format the final output, update the session log, file to correct location

---

### 5. Capture Processing
When multiple voice memos or text dumps come in at once. Haiku handles filing and tagging in parallel; Sonnet handles synthesis and integration.

**Best for**: End-of-week dump sessions, after a creative breakthrough, whenever `capture/` is getting full.

**Setup**:
- Haiku Agent A: Process voice memo 1 — save raw, apply template, tag, note routing
- Haiku Agent B: Process voice memo 2 — same
- Haiku Agent C: Process voice memo 3 — same
- Sonnet Agent: Receive all tagged captures, synthesize key insights, update relevant series bible sections
- Haiku Agent D: Update session log and open questions with anything new that surfaced

---

## Cost Optimization Rules

- Never use Opus for formatting, filing, updating logs, or simple edits. That is burning money on busywork.
- Never use Sonnet for tasks Haiku can handle — simple lookups, template-filling, reformatting.
- Double up agents when tasks are independent. Parallel is almost always better than sequential.
- Minimum agent count per session: 1 Opus (orchestrator) + 1 Sonnet + 1 Haiku.
- Target for complex sessions: 6+ sub-agents.
- When in doubt, ask: "Can a Haiku do this?" If yes, don't send it to Sonnet.
- Batch filing tasks. Don't spin up a Haiku agent for each individual file — give one Haiku agent a cluster of related filing tasks.

---

## Compute Cost Estimates

These are rough estimates per agent invocation, not per session:

| Task | Model | Est. Cost |
|------|-------|-----------|
| Simple lookup, filing, tag, log update | Haiku | ~$0.01–0.03 |
| Template fill, short formatting task | Haiku | ~$0.02–0.05 |
| Character profile draft | Sonnet | ~$0.05–0.10 |
| Episode outline draft | Sonnet | ~$0.08–0.15 |
| Series bible section (moderate) | Sonnet | ~$0.10–0.20 |
| Series bible section (full, heavy) | Sonnet | ~$0.15–0.40 |
| Full HTML page or structured doc build | Sonnet | ~$0.15–0.40 |
| Arc review / thematic analysis | Opus | ~$0.20–0.60 |
| Full session orchestration (planning + review) | Opus | ~$0.50–2.00 |
| **Typical session (6 sub-agents, mixed)** | **Mixed** | **~$1.00–3.00** |
| **Heavy build session (10+ agents, full docs)** | **Mixed** | **~$2.00–5.00** |

Use these to decide whether a task warrants spinning up a new agent or whether it can be bundled into an existing one's work.

---

## Tips for the Creator

**Voice memos** → Haiku to file and tag raw captures, Sonnet to synthesize into bible sections. Never skip the raw save.

**Character deep-dives** → Sonnet for the profile work, Opus only when analyzing how the character fits the full ensemble or intersects multiple themes.

**Episode outlines** → Sonnet drafts the outline using the template, Opus reviews for arc consistency and thematic alignment with the season. Haiku files and updates the log.

**Quick idea capture** → Haiku only. Don't spin up Sonnet just to save a note.

**Series bible sections (writing from scratch)** → Sonnet, ideally 2-3 agents in parallel on different sections. Opus reviews the whole after.

**Season structure work** → This is Opus territory. The shape of the show, the pacing across eras, which story beats land in which season — Opus should lead this.

**Site / doc rebuilds** → Multiple Sonnet agents in parallel, one per major section or page. Haiku for any final formatting pass.

**Session reviews** → Haiku updates logs and open questions, Sonnet synthesizes the session into a summary, Opus only if the session produced decisions that affect the whole arc.

**Research sprints** → Sonnet for substantive research (agency histories, cultural timelines, comp show analysis). Haiku for quick fact-checks and lookups.

**Ensemble character mapping** → Opus for the relationships and dynamics analysis, Sonnet for writing the actual profiles.

---

## Template: Launching a Delegation Round

Use this structure when kicking off a multi-agent work session. Fill in the specifics and pass it to the orchestrator.

```markdown
# Delegation Round - [Date] - [Session Goal]

## Objective
[1-2 sentences: what are we trying to accomplish in this delegation round?]

## Opus Instructions (Orchestrator)
- Review: [which docs to read before directing]
- Decide: [what creative/strategic questions need Opus input before work begins]
- Direct: [specific framing or parameters to pass to Sonnet agents]
- Review after: [which outputs to evaluate for arc/thematic fit]

## Sonnet Agent A - [Task Name]
- Goal: [what this agent is building or writing]
- Inputs: [which files to read, what context to use]
- Output: [what file to write or update, what format]
- Dependencies: [any Opus framing or Haiku output this agent needs first]

## Sonnet Agent B - [Task Name]
- Goal:
- Inputs:
- Output:
- Dependencies:

## Haiku Agent A - [Task Name]
- Goal: [what this agent is filing, tagging, or formatting]
- Inputs: [what raw material to work with]
- Output: [which file to update, what the entry looks like]
- Dependencies: [none, or specify]

## Haiku Agent B - [Task Name]
- Goal:
- Inputs:
- Output:
- Dependencies:

## Sequencing
[Are all agents running in parallel? Or does anything depend on another completing first?]
- Parallel: [Agent A + Agent B + Haiku A can all run simultaneously]
- Sequential: [Sonnet C needs Opus framing before starting]

## Success Criteria
- [ ] [What does "done" look like for this round?]
- [ ] [Which files should be updated?]
- [ ] [Any decisions that need creator sign-off before we proceed?]
```

---

## Project-Specific Delegation Notes

### Series Bible Sections
The bible is the primary deliverable. When working on it, prefer parallel Sonnet builds with an Opus review pass rather than one agent building sequentially. Each section has a natural owner:

- `00-overview.md` — Sonnet drafts, Opus reviews for show pitch clarity
- `01-world.md` — Sonnet writes (with research), Opus connects to themes
- `02-characters.md` — Sonnet writes profiles, Opus reviews ensemble dynamics
- `03-themes.md` — Opus-adjacent work; Sonnet can write but Opus should frame
- `04-season-arcs.md` — Opus leads, Sonnet executes
- `05-tone-and-style.md` — Sonnet writes, creator has final word
- `06-pilot-outline.md` — Sonnet drafts using episode-outline skill, Opus reviews

### The Three Eras
Each era has its own research doc and distinct vibe. When building out an era:
- Haiku: Pull all existing notes and captures tagged with that agency
- Sonnet: Draft or update the research doc (`docs/research/agencies/`)
- Sonnet: Update the relevant series bible sections with era-specific world details
- Opus: Review how the era fits the overall arc (Awakening → Cult → Reckoning)

### Open Questions
`planning/open-questions.md` is a living document. Any delegation round that touches story decisions should include a Haiku step to update it. Don't let answered questions linger or new questions go unfiled.
