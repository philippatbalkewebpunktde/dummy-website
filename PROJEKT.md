## Überblick
Das Projekt ist eine Webanwendung, die die Startseite durch ein gelegentlich animiertes Einhorn-Gif unterhaltsamer gestaltet. Die Animation erfolgt zufällig und ist konfigurierbar.

## Konventionen & Entscheidungen
- **Wahrscheinlichkeit der Gif-Anzeige**: Bei jedem Seitenaufruf besteht eine 10%ige Wahrscheinlichkeit, dass das Gif angezeigt wird.
- **Grafikgröße**: Die Einhorn-Grafik ist ca. 30x30 Pixel groß.
- **Grafikquelle**: Die Grafik ist lizenzfrei und wird aus dem Internet verlinkt, nicht lokal gespeichert.
- **Konfigurierbarkeit**: Die URL der Grafik ist über eine JSON-Konfigurationsdatei konfigurierbar.

## Etabliertes Verhalten / Fachlogik
- Bei jedem Seitenaufruf entscheidet ein JavaScript-Modul zufällig, ob das Einhorn-Gif angezeigt wird.
- Wenn die Grafik nicht geladen werden kann, wird die Seite ohne Animation geladen.
- Bei fehlender Internetverbindung wird kein Gif angezeigt.
- Wenn keine Einhorn-Grafik gefunden wird, wird ein rosa Viereck mit 30x30 Pixeln angezeigt.

## Landkarte — wo finde ich was
- **Anforderungen**: `requirements.md`
- **Architektur**: `architecture.md`
- **Konfiguration**: `config.json` (URL der Einhorn-Grafik)
- **HTML-Struktur**: `index.html`
- **JavaScript-Logik**: `script.js`
- **CSS-Animation**: `styles.css`
