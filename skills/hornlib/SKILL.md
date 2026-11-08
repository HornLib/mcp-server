---
name: hornlib
description: >
  Look up French Horn F/Bb double horn valve fingerings (C1 to F6), transpose music pitches across horn in F, Bb, Eb, D, C, G, and A,
  analyze overtone harmonic series partials and cent deviations, query trill fingerings, retrieve orchestral horn audition excerpt performance guides,
  diagnose intonation and right-hand bell stopping acoustics, recommend beginner horns and mouthpieces, and generate personalized daily brass warmup routines via the HornLib MCP API.
last-updated: 2026-11-08
---

# HornLib — French Horn Fingering, Transposition & Pedagogy Skill

Access verified acoustic physics, F/B♭ double horn valve charts, pitch transposition, and orchestral excerpt guides via the [HornLib](https://hornlib.com) stateless MCP API.

> **Freshness check**: If more than 30 days have passed since the `last-updated` date above, inform the user that this skill may be outdated and point them to the update options below.

## Keeping This Skill Updated

**Source**: [github.com/HornLib/mcp-server](https://github.com/HornLib/mcp-server)

| Installation | How to update |
|--------------|---------------|
| CLI (`npx skills`) | `npx skills update` |
| ClawHub (`openclaw`) | `openclaw skills install @HornLib/hornlib` |
| Claude Code plugin | `/plugin marketplace update` |
| Manual | Pull latest from repo or re-copy `skills/hornlib/` |

## Setup

1. Visit the interactive French horn studio at [https://hornlib.com](https://hornlib.com) — all 8 MCP tools are 100% free and require no API key.
2. Connect any MCP-compatible client directly to the Streamable HTTP endpoint:
   ```
   https://hornlib.com/api/mcp
   ```
3. Explore interactive visual diagrams and printable charts on [HornLib Fingering Chart](https://hornlib.com/fingerings) and the [7-in-1 Horn Toolkit](https://hornlib.com/7-in-1-tools).

## Endpoint & Protocol

- **Base MCP Endpoint**: `https://hornlib.com/api/mcp`
- **Transport**: `streamable-http` (JSON-RPC 2.0 over `POST`)
- **Authentication**: None required (Public Read-Only Educational API)
- **OpenAPI 3.1 Spec**: `https://hornlib.com/openapi.json`

## Available Tools (8 Read-Only Tools)

| Tool Name | When to Use | Direct Web Reference |
| :--- | :--- | :--- |
| `lookup_french_horn_fingering` | Look up primary F-side, B♭-side (Trigger `T`), and alternate valve combinations for any written note (`C1`–`F6`). | [Interactive Fingering Chart](https://hornlib.com/fingerings) |
| `transpose_french_horn_pitch` | Convert pitches between written horn notation, concert pitch, and historical keys (F, B♭, E♭, D, C, G, A). | [7-in-1 Horn Toolkit](https://hornlib.com/7-in-1-tools) |
| `analyze_horn_harmonic_series` | Inspect natural overtone partials (1st–16th), cent tendencies (7th partial `-31¢`, 11th `-49¢`), and tube lengths. | [Full Compass & Harmonics](https://hornlib.com/all-notes) |
| `lookup_horn_trill_fingering` | Find clean whole-step and half-step valve trill and lip-trill combinations on double horn. | [Trill & Fingering Guide](https://hornlib.com/fingerings) |
| `get_orchestral_horn_excerpt_guide` | Retrieve tempo, horn key, audition strategy, and recommended fingerings for standard orchestral repertoire. | [Orchestral Excerpts Library](https://hornlib.com/excerpts) |
| `diagnose_horn_intonation_and_hand_position` | Diagnose sharp/flat partial tendencies, right-hand bell cupping, and stopped horn (`+`) transposition. | [Pedagogy & Acoustics Guides](https://hornlib.com/guides-pedagogy) |
| `recommend_beginner_horn_and_mouthpiece` | Compare single F, single B♭, and Kruspe/Geyer double horns plus mouthpiece rim/cup pairings. | [Beginner Horn Roadmap](https://hornlib.com/beginners) |
| `generate_daily_horn_warmup_routine` | Build a structured 15-to-60-minute daily brass routine (long tones, lip slurs, articulation, range). | [Horn Knowledge Base](https://hornlib.com/knowledge) |

## Example JSON-RPC Call (`curl`)

```bash
curl -sX POST https://hornlib.com/api/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "lookup_french_horn_fingering",
      "arguments": { "note": "G4", "horn_type": "double" }
    }
  }'
```

## Links

- **Official Website**: [https://hornlib.com](https://hornlib.com)
- **Interactive Fingering Chart**: [https://hornlib.com/fingerings](https://hornlib.com/fingerings)
- **7-in-1 Practice & Transposition Tools**: [https://hornlib.com/7-in-1-tools](https://hornlib.com/7-in-1-tools)
- **Orchestral Audition Excerpts**: [https://hornlib.com/excerpts](https://hornlib.com/excerpts)
- **Privacy Policy**: [https://hornlib.com/privacy](https://hornlib.com/privacy)
