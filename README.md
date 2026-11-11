

[![mcptry](https://mcptry.com/badge/com.hornlib/mcp)](https://mcptry.com/servers/com.hornlib/mcp)

[![HornLib — Interactive French Horn Fingering Chart & Transposed Brass Sheet Music](./assets/cover.png)](https://hornlib.com)

[![MCPTry Score](https://mcptry.com/badge/com.hornlib/mcp)](https://www.mcptry.com/servers/com.hornlib/mcp)
[![Glama Grade A](https://glama.ai/mcp/connectors/com.hornlib/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.hornlib/mcp)
[![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-com.hornlib%2Fmcp_v1.0.3-emerald)](https://registry.modelcontextprotocol.io/v0.1/servers/com.hornlib%2Fmcp/versions/latest)
[![Official Platform](https://img.shields.io/badge/Official_Platform-hornlib.com-blue)](https://hornlib.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-slate)](./LICENSE)

> **Digital French horn fingering charts and transposed brass sheet music.**  
> **HornLib ([hornlib.com](https://hornlib.com))** provides interactive fingering charts for single F, single Bb, and full double horns (F/Bb trigger), natural overtone harmonic series tables, historical orchestral crook transposition, and orchestral audition excerpt guides — exposed to AI agents via a stateless `streamable-http` **Model Context Protocol (MCP)** server at `https://hornlib.com/api/mcp`.

---

## 🖥️ Interactive Web Studio Preview

[![HornLib Interactive Double Horn F/Bb Valve Diagram & Overtone Studio](./assets/screenshot.png)](https://hornlib.com/fingerings)

### Why Hornists & Brass Pedagogues Choose HornLib
1. **Interactive Double Horn Trigger Toggle**: Dynamically switches between single F horn, single Bb horn, and full double horn (F/Bb trigger) valve combinations across the instrument's four-octave compass (`C1`–`F6`).
2. **Harmonic Partial Intonation Deviation Charts**: Displays exact equal-temperament cent tendencies (e.g., `-14 cents` on the 5th partial, `-31 cents` on the 7th partial, `-49 cents` on the 11th partial) alongside alternate valve solutions.
3. **Historical Orchestral Crook Transposition**: Assists hornists reading classical and romantic orchestral parts in **Horn in F, Bb-alto, Bb-basso, Eb, D, C-basso, G, A, and E**.

---

## 🛠️ 8 Read-Only MCP Tools (`https://hornlib.com/api/mcp`)

All 8 tools are strictly **read-only** (`readOnlyHint: true`, `destructiveHint: false`, `idempotentHint: true`) and require **no sign-in and no API keys**:

| # | Tool Name | Capability & Music Theory Scope | Web Reference |
| :-: | :--- | :--- | :--- |
| 1 | `lookup_french_horn_fingering` | Look up F-side & Bb-trigger valve fingerings, concert pitch transposition, and intonation tendencies for any written note (`C1`–`F6`). | [Fingering Chart](https://hornlib.com/fingerings) |
| 2 | `transpose_french_horn_pitch` | Transpose orchestral horn parts from historical crooks (`F`, `Bb`, `Eb`, `D`, `C`, `G`, `A`, `E`) to modern Horn in F & Concert Pitch. | [7-in-1 Brass Tools](https://hornlib.com/7-in-1-tools) |
| 3 | `analyze_horn_harmonic_series` | Analyze natural overtone partials (1st–16th) for any F or Bb valve combination with cent deviations and tube lengths. | [All Notes & Harmonics](https://hornlib.com/all-notes) |
| 4 | `lookup_horn_trill_fingering` | Identify mechanical valve trills vs Viennese harmonic lip trills for whole-step and half-step ornaments. | [Trill Fingerings](https://hornlib.com/fingerings) |
| 5 | `get_orchestral_horn_excerpt_guide` | Audition preparation notes, crook shifts & fingerings for Mozart 4, Strauss *Till Eulenspiegel*, Tchaikovsky 5, Brahms & Mahler. | [Orchestral Excerpts](https://hornlib.com/excerpts) |
| 6 | `diagnose_horn_intonation_and_hand_position` | Acoustic diagnostic for Stopped Horn (`gestopft` `+1/2` step F-horn transposition) & right-hand bell cupping. | [Pedagogy Guides](https://hornlib.com/guides-pedagogy) |
| 7 | `recommend_beginner_horn_and_mouthpiece` | Compare Kruspe wrap (Conn 8D) vs Geyer wrap (Alexander 103 / Yamaha) & mouthpiece cup depths (Farkas, Laskey, Schilke). | [Beginner Guide](https://hornlib.com/beginners) |
| 8 | `generate_daily_horn_warmup_routine` | Generate structured daily warm-up routines covering Farkas long tones, harmonic lip slurs, tonguing & pedal tones. | [Knowledge Base](https://hornlib.com/knowledge) |

---

## ⚡ Install in Hermes Agent

This repository is a configuration-only **Agent Plugins v1** package (`plugin.json`, `mcp.json`, and `skills/`) for [Hermes Agent](https://hermes-agent.nousresearch.com/).

```bash
hermes plugins install hornlib
```

Or install directly from GitHub:

```bash
hermes plugins install HornLib/mcp-server
```

### Example Prompts in Hermes
- *"Look up the primary and alternate F/Bb double horn valve fingerings for written high A5."*
- *"Transpose written G4 on Horn in Eb to modern Horn in F and concert pitch."*
- *"Compare the harmonic series partials and cent deviations for open F horn vs open Bb horn."*
- *"Give me the horn key, tempo, and practice tips for Strauss's Till Eulenspiegel opening horn call."*

---

## ⚡ Quick Setup (Claude Desktop / Claude Code / Cursor / Windsurf / Skills CLI)

### Install Agent Skill (`skills.sh`)
```bash
npx skills add HornLib/mcp-server
```

### Direct Remote `streamable-http` Connection
```json
{
  "mcpServers": {
    "hornlib": {
      "type": "streamable-http",
      "url": "https://hornlib.com/api/mcp"
    }
  }
}
```

### Claude Code CLI
```bash
claude mcp add --transport http hornlib https://hornlib.com/api/mcp
```

---

## 🔒 Security & Data Disclosure (Hermes Catalog Rule 13)

- **Hosted-only, configuration-only package**: This repository ships only static JSON manifests (`plugin.json`, `mcp.json`) and Markdown skills (`skills/`). It contains **no local executable code, no Python runtime, no shell hooks, no compiled binaries, no telemetry collectors, and no self-updater**.
- **Network**: Every MCP tool call connects over HTTPS (`streamable-http`) to HornLib's hosted endpoint at `https://hornlib.com/api/mcp` and sends only the musical query arguments (such as note name, horn key, or excerpt name). The remote tool inventory is served at runtime by `hornlib.com` and is not frozen by the pinned commit SHA.
- **No credentials or sign-in**: All 8 tools are public and free. No API keys, OAuth tokens, environment variables, or local files are read or stored.
- **Read-only & untrusted gate**: Every tool on `https://hornlib.com/api/mcp` is strictly read-only (`readOnlyHint: true`, `destructiveHint: false`). The package marks the server `trust: untrusted` in `plugin.json` (`extensions.com.nousresearch.hermes.servers.hornlib.trust = "untrusted"`), so Hermes enforces its approval gate if any non-read-only tool were ever advertised.
- **Privacy & Terms**: [Privacy Policy](https://hornlib.com/privacy) · [Terms of Use](https://hornlib.com/terms)

---

[![HornLib Editorial Brass Pedagogy](./assets/editorial.png)](https://hornlib.com)

## 🔗 Official Resources & Deep Links

- **[French Horn Fingering Chart (Interactive Studio)](https://hornlib.com)**
- **[Double Horn F/Bb Trigger Fingering Reference](https://hornlib.com/fingerings)**
- **[7-in-1 French Horn Transposition & Practice Suite](https://hornlib.com/7-in-1-tools)**
- **[Orchestral French Horn Audition Excerpts](https://hornlib.com/excerpts)**
- **[French Horn Beginner Guide & Mouthpiece Selector](https://hornlib.com/beginners)**
- **[LLMs.txt Structured AI Reference](https://hornlib.com/llms.txt)**

*Educational music resource curated by brass pedagogues. MIT License © [HornLib (hornlib.com)](https://hornlib.com).*
