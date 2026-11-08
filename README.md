# HornLib — Interactive French Horn F/Bb Double Horn Fingering & Harmonics MCP Server (`com.hornlib/mcp`)

[![mcptry](https://mcptry.com/badge/com.hornlib/mcp)](https://mcptry.com/servers/com.hornlib/mcp)
[![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-com.hornlib%2Fmcp-emerald)](https://registry.modelcontextprotocol.io/v0.1/servers/com.hornlib%2Fmcp/versions/latest)
[![Website](https://img.shields.io/badge/Website-hornlib.com-blue)](https://hornlib.com)

Official **Model Context Protocol (MCP)** remote `streamable-http` server and **Agent Skill** for [**HornLib (hornlib.com)**](https://hornlib.com) — the interactive F/Bb Double Horn fingering chart, harmonic series analyzer, and orchestral excerpt reference.

---

## 🛠️ Available MCP Tools

### `lookup_french_horn_fingering` (Read-Only)
Look up standard F-side and Bb-trigger valve fingerings, concert pitch transposition (down a perfect fifth), and harmonic intonation tendencies for any written French Horn note (`C4`, `F4`, `G4`, `Bb4`, `C5`, `F5`, etc.).

- **Remote Endpoint**: `https://hornlib.com/api/mcp` (`streamable-http`, zero API key required)
- **Annotations**: `readOnlyHint: true`, `destructiveHint: false`, `idempotentHint: true`

---

## ⚡ Quick Setup (Claude Desktop / Cursor / Windsurf / VS Code)

```json
{
  "mcpServers": {
    "hornlib": {
      "url": "https://hornlib.com/api/mcp"
    }
  }
}
```

Or via Claude Code CLI:
```bash
claude mcp add --transport http hornlib https://hornlib.com/api/mcp
```

---

## 🔗 Official Web Tools & Documentation

- **[Interactive F/Bb Double Horn Fingering Chart](https://hornlib.com)**
- **[Complete French Horn Chromatic Fingering Reference](https://hornlib.com/all-notes)**
- **[7-in-1 French Horn Practice, Tuner & Transposition Suite](https://hornlib.com/7-in-1-tools)**
- **[French Horn Beginner Guide & Harmonic Series Pedagogy](https://hornlib.com/beginners)**
- **[LLMs.txt Full Structured Knowledge Corpus](https://hornlib.com/llms.txt)**

---

## 📄 License
MIT © [HornLib (hornlib.com)](https://hornlib.com)
