## Überblick
Das Projekt ist eine Webanwendung, die die Startseite durch ein gelegentlich animiertes Einhorn-Gif unterhaltsamer gestaltet. Zusätzlich wird die aktuelle Uhrzeit angezeigt und eine passende Begrüßung basierend auf der Tageszeit ausgegeben. Die Animation erfolgt zufällig und ist konfigurierbar.

## Konventionen & Entscheidungen
- **Wahrscheinlichkeit der Gif-Anzeige**: Bei jedem Seitenaufruf besteht eine 10%ige Wahrscheinlichkeit, dass das Gif angezeigt wird.
- **Grafikgröße**: Die Einhorn-Grafik ist ca. 30x30 Pixel groß.
- **Grafikquelle**: Die Grafik ist lizenzfrei und wird aus dem Internet verlinkt, nicht lokal gespeichert.
- **Konfigurierbarkeit**: Die URL der Grafik ist über eine JSON-Konfigurationsdatei konfigurierbar.
- **Tageszeiten**: 
  - Nacht: 22:00–04:59
  - Morgen: 05:00–10:59
  - Tag: 11:00–17:59
  - Abend: 18:00–21:59

## Etabliertes Verhalten / Fachlogik
- Bei jedem Seitenaufruf entscheidet ein JavaScript-Modul zufällig, ob das Einhorn-Gif angezeigt wird.
- Wenn die Grafik nicht geladen werden kann, wird die Seite ohne Animation geladen.
- Bei fehlender Internetverbindung wird kein Gif angezeigt.
- Wenn keine Einhorn-Grafik gefunden wird, wird ein rosa Viereck mit 30x30 Pixeln angezeigt.
- Die aktuelle Uhrzeit wird von einem externen Zeit-API-Dienst abgerufen und im UTC-Format angezeigt.
- Eine Begrüßung wird basierend auf der aktuellen UTC-Zeit angezeigt: "Gute Nacht", "Guten Morgen", "Guten Tag" oder "Guten Abend".
- Bei einem Fehler beim Abrufen der Uhrzeit wird eine Fehlermeldung angezeigt.

## Landkarte — wo finde ich was
- **Anforderungen**: `requirements.md`
- **Architektur**: `architecture.md`
- **Konfiguration**: `config.json` (URL der Einhorn-Grafik)
- **HTML-Struktur**: `index.html`
- **JavaScript-Logik**: `script.js`, `time.js`
- **CSS-Animation**: `styles.css`
