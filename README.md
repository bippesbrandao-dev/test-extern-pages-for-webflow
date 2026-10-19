# extern-cloud

Kleine Astro-App für **Webflow Cloud**. Sie lädt
`https://extern.bippesbrandao.de/test/` serverseitig und liefert sie als
fertiges HTML unter dem Mount-Path deiner Webflow-Site aus (z. B. `/extern-cloud`).

- kein CORS nötig, kein JavaScript beim Besucher
- Suchmaschinen sehen den Inhalt
- Quelle wird 5 Minuten zwischengespeichert

## Andere Quelle einstellen

In `src/pages/index.astro` die Zeile `EXTERN_URL` ändern, committen, pushen –
Webflow Cloud deployt automatisch neu.

## Deploy auf Webflow Cloud

1. Ordner in ein **GitHub-Repository** pushen (ohne `node_modules`).
2. In Webflow: **Site Settings → Webflow Cloud** → GitHub verbinden →
   **Create New Project**, das Repository auswählen.
3. **Environment anlegen:** Branch `main`, Mount-Path `/extern-cloud`.
4. **Deploy** klicken. Danach deployt jeder Push auf `main` automatisch.
5. Site in Webflow einmal **veröffentlichen**, damit der Mount-Path live geht.

Ergebnis: `https://arnes-supercool-site-3a8f5d.webflow.io/extern-cloud`

## Lokal testen

```bash
npm install
npm run dev        # http://localhost:4321
```
