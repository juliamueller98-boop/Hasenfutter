# Hasenfutter Setup - Schritt für Schritt

## Vor dem Start

Du brauchst:
- GitHub-Account (kostenlos auf github.com)
- Google-Account fürs Sheet
- Diesen Ordner mit allen Dateien

---

## Schritt 1: Bilder ergänzen (5 Minuten)

Im `images/` Ordner liegen schon:
- `spargelauflauf.jpg`
- `lasagne-bolognese.jpg`

Bevor du hochlädst, sollten noch da rein:
- **`cover.png`** - das Hasenfutter-Cover für den Splash-Screen
- **`icon-192.png`** und **`icon-512.png`** - App-Icons (Cover quadratisch zugeschnitten in 192x192 und 512x512 Pixel)

Alle anderen Rezeptbilder kannst du nach und nach ergänzen. Bis dahin zeigt die App das Häschen als Platzhalter. Die komplette Liste der erwarteten Dateinamen steht in `BILDER-LISTE-Hasenfutter.txt`.

---

## Schritt 2: GitHub-Repo anlegen (2 Minuten)

1. Auf [github.com](https://github.com) einloggen
2. Oben rechts `+` -> `New repository`
3. Name: `hasenfutter` (oder anderer, wie du magst)
4. **Public** anklicken (sonst geht GitHub Pages nicht kostenlos)
5. Beschreibung optional, KEINE README anhaken (haben wir schon)
6. `Create repository`

---

## Schritt 3: Dateien hochladen (3 Minuten)

1. Im leeren Repo siehst du den Link `uploading an existing file` - draufklicken
2. **Alle Dateien aus diesem Hasenfutter-Ordner** ins Browser-Fenster ziehen. Wichtig: den `images/` Unterordner als Ganzes mit reinziehen
3. Ganz unten: Commit-Nachricht eingeben, z.B. "App und Rezepte"
4. Auf `Commit changes` klicken

---

## Schritt 4: GitHub Pages aktivieren (1 Minute, dann 2 Minuten Wartezeit)

1. Im Repo oben rechts auf `Settings`
2. Links auf `Pages`
3. Bei "Source": `Deploy from a branch` wählen
4. Branch: `main`, Ordner: `/ (root)`
5. `Save`
6. 2 Minuten warten. Oben erscheint dann ein grüner Hinweis mit der URL deiner App. Format: `https://DEINUSERNAME.github.io/hasenfutter/`

**Kurz testen:** URL aufrufen. Die App sollte laden, du siehst den Splash und kannst durch die Rezepte swipen.

---

## Schritt 5: Google Sheet einrichten (5 Minuten)

1. [sheets.google.com](https://sheets.google.com) - Neues leeres Sheet anlegen
2. Datei -> Importieren -> Hochladen -> `rezepte-hasenfutter.csv` reinziehen
3. Einstellungen beim Import:
   - Importieren am Speicherort
   - Trennzeichen: **Komma**
   - Text in Zahlen umwandeln: **Nein**
4. Importieren klicken
5. Sheet umbenennen oben: "Hasenfutter Rezepte"
6. Datei -> Teilen -> **Im Web veröffentlichen**
7. Im Dialog: Format = `Kommagetrennte Werte (.csv)`
8. `Veröffentlichen` -> Link kopieren

---

## Schritt 6: Sheet mit App verbinden (3 Minuten)

1. Im Repo auf `index.html` klicken
2. Oben rechts auf das **Stift-Symbol** (Edit)
3. Diese Zeile suchen (etwa Zeile 350):
   ```
   const SHEET_CSV_URL = '';
   ```
4. Den Link aus Schritt 5 zwischen die Anführungszeichen einfügen:
   ```
   const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';
   ```
5. Unten auf `Commit changes`

Ab jetzt zieht die App ihre Rezepte aus dem Sheet. Wenn deine Freundin im Sheet ein Rezept hinzufügt, taucht es nach ein paar Minuten in der App auf.

---

## Schritt 7: PWA auf dem Handy installieren (1 Minute)

Damit die App wie eine echte App auf dem Home-Bildschirm liegt:

**iPhone (Safari):**
1. URL aufrufen
2. Teilen-Button (Quadrat mit Pfeil nach oben)
3. "Zum Home-Bildschirm" wählen

**Android (Chrome):**
1. URL aufrufen
2. Drei-Punkte-Menü oben rechts
3. "App installieren" oder "Zum Startbildschirm hinzufügen"

---

## Schritt 8: Deine Freundin onboarden

Schick ihr:
- Die App-URL
- Die `PFLEGEANLEITUNG-Hasenfutter.md` (oder kopier den Inhalt in eine Notiz/Mail)
- Den Link zum Google Sheet (mit Schreibrechten)
- Lade sie als Collaborator zum GitHub-Repo ein (Settings -> Collaborators), wenn sie selbst Bilder hochladen soll

**Wichtig fürs Bilder-Hochladen:** Empfehle ihr, die **GitHub Mobile App** zu installieren. Damit kann sie ein Foto direkt vom Handy in den `images/`-Ordner hochladen.

---

## Häufige Fehler und Lösungen

**"Hoppla, Rezepte konnten nicht geladen werden"**
- CSV-URL nicht eingetragen oder falsch formatiert. Check `index.html` Zeile mit `SHEET_CSV_URL`.
- Sheet nicht im Web veröffentlicht.

**Bild zeigt das Häschen statt eines Fotos**
- Dateiname im Sheet stimmt nicht 1:1 mit Datei im Repo überein. Groß-/Kleinschreibung beachten!
- Datei wurde nicht hochgeladen oder liegt nicht im `images/` Ordner.

**App lädt langsam beim ersten Aufruf**
- Normal, das ist der Service Worker, der den Cache aufbaut. Ab dem zweiten Aufruf ist es schnell.

**App lädt alte Rezepte trotz Änderungen im Sheet**
- Bis zu 5 Minuten Cache-Verzögerung von Google ist normal. Browser-Cache leeren oder Inkognito-Tab testen.
