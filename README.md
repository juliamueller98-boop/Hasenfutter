# Hasenfutter

Eine Rezepte-Swipe-App als Hochzeitsgeschenk. Live unter `https://USERNAME.github.io/REPONAME/` nach Deployment.

## Was hier drin liegt

| Datei | Zweck |
|---|---|
| `index.html` | Die App selbst |
| `manifest.json` | PWA-Metadaten (Name, Icons, Farben) |
| `service-worker.js` | Offline-Cache, macht "Zum Home-Bildschirm hinzufügen" möglich |
| `rezepte-hasenfutter.csv` | Initialer Rezeptbestand (Fallback, falls das Sheet nicht erreichbar ist) |
| `robots.txt` | Sperrt Suchmaschinen-Indexierung |
| `images/` | Alle Rezeptbilder, Cover, App-Icons |
| `ANLEITUNG-Hasenfutter.md` | Schritt-für-Schritt Setup-Anleitung |
| `PFLEGEANLEITUNG-Hasenfutter.md` | Anleitung für deine Freundin (Sheet bedienen) |
| `BILDER-LISTE-Hasenfutter.txt` | Checkliste aller benötigten Bilddateien |
| `README.md` | Diese Datei |

Detaillierte Anleitung in `ANLEITUNG-Hasenfutter.md`.

## Datenschutz und Auffindbarkeit

- **Suchmaschinen:** Die Seite ist via `<meta name="robots" content="noindex">` und `robots.txt` von Indexierung ausgeschlossen. Wer den Link nicht hat, findet die App über Google & Co. nicht. Bösartige Bots ignorieren das, aber das ist hier nicht das Bedrohungsmodell.
- **Schriftarten:** Werden über [Bunny Fonts](https://fonts.bunny.net) geladen, einem DSGVO-konformen, EU-gehosteten (Slowenien) Drop-in-Ersatz für Google Fonts. Kein Tracking, kein IP-Logging.
- **Daten:** Die App speichert nur lokal im Browser, welche Rezepte heute schon gesehen wurden. Keine Server, kein Tracking, keine Cookies.
- **Maximale Sicherheit:** Falls du absolut keine externen Requests willst, kannst du die zwei Schriftarten (Caveat und Lora) selbst als `.woff2` ins Repo legen und die Bunny-Fonts-Zeilen in der `index.html` durch lokale `@font-face`-Regeln ersetzen. Beide Schriften sind SIL Open Font License, das ist erlaubt. Aufwand: ca. 15 Minuten.

## Setup-Schritte

### 1. GitHub-Repo anlegen

1. Auf [github.com](https://github.com) einloggen
2. Oben rechts `+` → `New repository`
3. Name vergeben (z.B. `hasenfutter`)
4. **Public** wählen (sonst geht GitHub Pages nicht kostenlos)
5. `Create repository`

### 2. Dateien hochladen

Es gibt zwei Wege. Empfehlung: **Drag-and-Drop**.

1. Im neuen leeren Repo auf `uploading an existing file` klicken (steht direkt da)
2. **Alle Dateien aus diesem Ordner** rüberziehen, inklusive `images/`-Ordner
3. Unten `Commit changes`

⚠️ **Wichtig:** Den `images/`-Ordner als Ganzes mit allen Bildern drin reinziehen, nicht die Dateien einzeln. GitHub erkennt die Ordnerstruktur dann automatisch.

### 3. GitHub Pages aktivieren

1. Im Repo auf `Settings` (oben rechts)
2. Links auf `Pages`
3. Bei `Source`: `Deploy from a branch`
4. Branch: `main`, Ordner: `/ (root)` → `Save`
5. 1-2 Minuten warten, dann ist die App live unter der angezeigten URL

### 4. Google Sheet einrichten

1. Neues Sheet anlegen (sheets.google.com)
2. `Datei → Importieren → Hochladen` → `rezepte.csv` hochladen
3. Beim Import: **Trennzeichen Komma**, **Text als UTF-8** wählen
4. Sheet umbenennen (z.B. "Hasenfutter Rezepte")
5. **Veröffentlichen:** `Datei → Teilen → Im Web veröffentlichen`
6. Format: `Kommagetrennte Werte (.csv)` → `Veröffentlichen`
7. Den angezeigten Link kopieren

### 5. App mit Sheet verbinden

1. `index.html` öffnen (im Editor deiner Wahl)
2. Diese Zeile suchen:
   ```js
   const SHEET_CSV_URL = ''; // <-- HIER URL EINFÜGEN
   ```
3. Den Sheet-Link zwischen die Anführungszeichen packen:
   ```js
   const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';
   ```
4. Datei speichern und auf GitHub hochladen (überschreibt die alte Version)

Ab jetzt zieht die App die Rezepte aus dem Sheet, und Änderungen darin werden live.

## Wie deine Freundin Bilder hochlädt

Da Google Sheets keine direkten Bilder bereitstellen kann, müssen Bilder ins GitHub-Repo. Es gibt zwei einsteigerfreundliche Wege:

### Weg A: GitHub direkt im Browser (kein Account-Zwang fürs Hochladen, aber Zugriff aufs Repo nötig)

1. Sie braucht **Einladung zum Repo** als Collaborator:
   - Du gehst auf `Settings → Collaborators → Add people` und gibst ihren GitHub-Usernamen ein
2. Sie loggt sich auf github.com ein und öffnet den Repo
3. Klickt auf den `images`-Ordner
4. Oben rechts `Add file → Upload files`
5. Bild reinziehen (am besten als `.jpg`, klein gerechnet auf max. 800px Breite)
6. Unten `Commit changes`
7. Dann ins Sheet: Dateiname im Feld `bild` eintragen

### Weg B: GitHub Mobile App (für vom Handy aus)

1. App "GitHub" aus dem App Store / Play Store installieren
2. Einmal einloggen
3. Repo öffnen → `images`-Ordner → `+` → Foto hochladen
4. Commit-Nachricht eingeben (z.B. "Foto Lasagne") → Commit

Beides macht sie 1x, dann ist es Routine.

## Bilder-Konvention

Damit der Workflow sauber bleibt:

- **Dateiname:** alles klein, mit `-` statt Leerzeichen, Endung `.jpg`
  - ✅ `linsen-curry.jpg`
  - ❌ `Linsen Curry.JPG`
- **Format:** `.jpg` bevorzugt (kleiner als PNG), max. 800px Breite reicht
- **Verhältnis:** quadratisch ist optimal, weil die Kartenansicht das schön zeigt

## Bilder, die du noch erstellen musst

Beim ersten Deploy sollten möglichst viele Bilder schon im `images/`-Ordner liegen. Eine vollständige Liste aller im Sheet referenzierten Dateinamen liegt in `BILDER-LISTE.txt`. Rezepte ohne Bild zeigen den Häschen-Platzhalter, das ist kein Drama.

## App-Icon

Damit das Icon beim "Zum Home-Bildschirm hinzufügen" passt, brauchst du zwei Dateien:
- `images/icon-192.png` (192x192 px)
- `images/icon-512.png` (512x512 px)

Am einfachsten: Cover quadratisch zuschneiden und in zwei Größen exportieren. Wenn die nicht da sind, funktioniert die App trotzdem, aber das Icon ist dann ein Browser-Default.

## Testen vor Deployment

`index.html` direkt im Browser zu öffnen funktioniert **nicht** (CORS blockiert das CSV-Laden). Lokal testen geht so:

```bash
cd /pfad/zum/ordner
python3 -m http.server 8000
```

Dann im Browser `http://localhost:8000` aufrufen.

Oder einfach gleich nach GitHub Pages deployen, dort funktioniert alles.

## Tag-Liste (für die Konsistenz)

Siehe `PFLEGEANLEITUNG.md`. Diese Liste sollte deine Freundin kennen, sonst wuchert der Filter.
