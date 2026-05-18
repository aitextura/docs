---
session: 2
date: 2026-05-07
scope: EN documentation sync (mirror freshly-updated RU side)
mode: non-interactive, 5 parallel sub-agents
---

# Session 2 — EN Documentation Sync Summary

## Outcome

**28 EN MDX files** created or modified across `en/guides/`, `en/channels/`, and `en/faq/`. EN side now mirrors the RU updates from Session 1.

`docs.json` already had the EN navigation structurally synchronized with RU (50 pages on each side, parallel order, English labels) — no changes required there.

## Files modified (28)

### `en/guides/` (19)
- `account-settings.mdx` — full rewrite: 7-tab structure incl. Notifications + Activity, expanded Agent commands table, frames 67–73
- `additional-settings.mdx` — full rewrite: PRO ElevenLabs voices, agent commands table, behavior toggles
- `ai-employees.mdx` — full rewrite: video `jsGSyJj9qN8`, Self-Learning informer, three creation paths, 12-tab list
- `auto-followup.mdx` — surgical: hero Frame `36-agent-followup.png`, secondary `<Note>`, CardGroup re-order
- `broadcast.mdx` — already in sync (verified)
- `chats.mdx` — full rewrite: hero Frame, info panel 83, status table, action menu (frames 86/87), Live chat 78, FAQ
- `dashboard.mdx` — full rewrite: video `KOc5gB76GxA`, Personal vs Organization context, AI Quality / Response Time / AI Efficiency widgets (Response Time v2.5.0)
- `finance.mdx` — full rewrite. **Tariffs synced**: Starter $100 / Pro $500 / Business $1000 (with word volumes 2M / 10M / 20M, `$1 = 100 ₽` rate)
- `knowledge.mdx` — surgical: video `gagkwzwHFXo`, four new Frames, Agent selector / Extended modes / Agent folders sections
- `notifications.mdx` — full rewrite: video `JNFaKV8LzCQ`, three trigger templates, Bitrix24 routing iframe `9IsmdbQ7Dfc`
- `organization.mdx` — **NEW** (~230 lines): context switcher, Org vs Personal, roles, billing, members, FAQ
- `persona.mdx` — surgical: CardGroup mirror, live-preview test-chat section + `80-agent-test-chat.png`
- `profiles.mdx` — full rewrite: video `KOc5gB76GxA`, KPI cards, Saved views, drag-and-drop column order (v2.1.0)
- `quick-answers.mdx` — surgical: added `qNRnekKcBFU` iframe to "Transfer to another AI"
- `quickstart.mdx` — already in sync (verified)
- `referral.mdx` — surgical: hero `58-partner-program.png`, CardGroup updated
- `rules-hub.mdx` — surgical: frames 54/55, full AI TEXTURA preset catalog (Role/Tone/Instruction)
- `support.mdx` — full rewrite: top CardGroup, frame 59, Support access toggle (v2.5.0), thumbs-down flow with `I6ovIko1GNQ` iframe, frames 45/46/47/48
- `talents.mdx` — full rewrite: 30+ catalog by category, Bitrix24 dual-paths Tabs, full Custom MCP section
- `versions.mdx` — surgical: hero `34-agent-versions.png`, CardGroup re-order, `Show chat` Tip
- `working-hours.mdx` — surgical: hero `39-agent-worktime.png`, CardGroup re-order

### `en/channels/` (6)
- `amocrm.mdx` — full rewrite: dual-path (channel + MCP talent), shared OAuth-bridge, "New connection" vs "Existing account", Kommo subsection, FAQ
- `bittrix24.mdx` — full rewrite: dual-path, permission tables, "Assigning responsible managers" with `d8ZT_BM2K0A` iframe, "Notifications via Bitrix24" with `9IsmdbQ7Dfc` iframe
- `index.mdx` — rewritten: hero Frame, 10-platform support table, Channel-vs-Talent comparison, deprecation Note, expanded settings table (incl. Auto-clear history), 8 FAQ accordions
- `messengers.mdx` — full rewrite: 7-platform matrix (Wazzup leads, Jivo + HelpDeskEddy added), per-platform overview accordions, decision matrix
- `pms.mdx` — **NEW** (~225 lines): 6 PMS systems (MEWS, Travelline, Bnovo, RealtyCalendar, Bronirui Online, MeHotel), connection params, video walkthrough, hotel-chain setup, FAQ
- `telegram.mdx` — full rewrite: hero Frame, customization Step 3, Personal vs Group channel types, AI inline buttons / Message buffer / Auto-clear history settings, FAQ

### `en/faq/` (1)
- `ai-behavior.mdx` — surgical: added `EOwEEmcnepI` video walkthrough

## Files NOT modified (intentional)

- `en/channels/whatsapp.mdx`, `avito.mdx`, `website-widget.mdx` — already removed on both RU and EN; deprecation now reflected in `en/channels/index.mdx` (Note + FAQ) and `en/channels/messengers.mdx` (WhatsApp via Wazzup).
- Other `en/faq/*.mdx` pages — line-count and structural diff against RU show parity; no updates needed.
- `docs.json` — EN navigation already mirrored RU navigation when read; 50-page parity confirmed via programmatic comparison; JSON validity verified.

## Issues / Notes

All issues logged in `_reports/QUESTIONS.md` under headings:
- `## EN Translation Issues — Sub-Agent 1` — Travelline region values (`RU`/`BY`/`WORLD`) flagged for UI verification; PMS page first card uses `/en/channels` (no `/index`)
- `## EN Sync Issues — Sub-Agent 2 (guides+faq) — 2026-05-07` — anchor slug translations (e.g. `#bitrix24-2-puti-podklyucheniya` → `#bitrix24-two-connection-paths`); cross-page anchor references that Sub-Agent 3 should match
- `## EN Sync Issues — Sub-Agent 3 (channels+chats+services) — 2026-05-07` — scope clarification: paths in original brief (`en/services/billing.mdx`, `en/finance.mdx`) actually live under `en/guides/`; "Open Channels" casing decisions; "Connect new" sub-tab label
- `## EN Sync Issues — Sub-Agent 5 (cleanup guides) — 2026-05-07` — none encountered

No blockers, no broken cross-references, no `ru/` modifications, no screenshots taken, no Playwright usage.

## Verification

- `find en -type f -name "*.mdx" -newer _reports/MISSION.md` → **28 files** (target was ≥20)
- `python3 -m json.tool docs.json` → valid JSON, 50-page parity in EN ↔ RU navigation
- All Mintlify components preserved (`<Frame>`, `<Note>`, `<Tip>`, `<Warning>`, `<Steps>`, `<Card>`, `<CardGroup>`, `<Accordion>`, `<Tabs>`, `<iframe>`)
- All `/public/screenshots/` paths kept as-is
- All YouTube `<iframe>` embeds copied verbatim from RU sources

## Sub-agent execution

| Sub-agent | Scope | Files | Duration |
|---|---|---|---|
| 1 | New translations (4 pages) | 2 created (organization, pms); 2 already in sync (quickstart, broadcast) | ~3 min |
| 2 | `en/guides/` + `en/faq/` updates | 13 modified | ~12 min |
| 3 | `en/channels/` + non-`guides` content | 5 modified (channels) + 1 verified (pms) | ~8 min |
| 4 | `docs.json` EN nav | 0 (already in sync) | ~1 min |
| 5 | Cleanup: 6 missed `en/guides/` files (chats, support, finance, dashboard, profiles, account-settings) | 6 modified | ~10 min |

Sub-agents 1–4 ran concurrently; sub-agent 5 was spawned afterward to fix a scope miss between sub-agents 2 and 3.
