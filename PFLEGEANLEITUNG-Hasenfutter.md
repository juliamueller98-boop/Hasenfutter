# Pflegeanleitung Hasenfutter 🐰

So fügst du neue Rezepte hinzu, ohne den Code anzufassen.

## Wo lebt was

- **Rezepte (Texte, Zutaten, Schritte, Tags):** im Google Sheet
- **Bilder:** im GitHub-Repo, Ordner `images/`

Das Sheet weiß durch den **Dateinamen** im Feld `bild`, welches Bild zu welchem Rezept gehört. Wichtig: Dateiname muss exakt übereinstimmen, alles kleingeschrieben, keine Leerzeichen, am besten mit `-` statt Leerzeichen.

## Ein neues Rezept hinzufügen (ohne Bild)

1. Google Sheet öffnen
2. Neue Zeile unten anhängen
3. Spalten ausfüllen:

| Spalte | Was rein gehört | Beispiel |
|---|---|---|
| `name` | Name des Rezepts | Linsen-Curry |
| `tags` | Tags mit `;` getrennt | vegetarisch; schnell; asiatisch |
| `zeit_minuten` | Zahl (Minuten) | 25 |
| `portionen` | meist 2 | 2 |
| `zutaten` | Zutaten mit `\|` getrennt | 200g Linsen \| 1 Zwiebel \| 2 EL Currypaste |
| `schritte` | Schritte mit `\|` getrennt | Zwiebel würfeln. \| Anbraten. \| ... |
| `bild` | Dateiname oder leer | linsen-curry.jpg |
| `tipps` | Optional, kurz | Mit Naan servieren. |
| `original_url` | Link, falls vorhanden | https://... |
| `original_quelle` | Name der Quelle | Gaumenfreundin |

4. Speichern. Die App lädt das neue Rezept beim nächsten Öffnen automatisch.

**Wichtig zu den Trennzeichen:**
- Tags: Semikolon `;`
- Zutaten und Schritte: senkrechter Strich `|` (auf der Tastatur meistens `Alt Gr` + `<` oder `Shift` + `\`)

## Ein neues Rezept mit Bild hinzufügen

1. Erst das Bild ins GitHub-Repo hochladen (siehe unten)
2. Dann ins Sheet die neue Zeile schreiben und im Feld `bild` den **exakten Dateinamen** eintragen
3. Fertig

## Häufige Fehler

- **Komma im Text:** kein Problem, Google Sheets klammert das automatisch beim CSV-Export
- **Trennzeichen vergessen:** Wenn statt `|` ein anderes Zeichen drin ist, kommt alles in einer Zeile
- **Bild lädt nicht:** Dateiname im Sheet stimmt nicht 1:1 mit dem Dateinamen im Repo überein (Groß-/Kleinschreibung beachten!)
- **Tag-Liste wuchert:** Halte dich an die etablierten Tags, sonst wird der Filter unübersichtlich

## Etablierte Tag-Liste

**Ernährung:** vegetarisch, vegan, mit-fleisch, mit-fisch
**Zeit:** schnell, mittel, aufwendig
**Anlass:** alltag, für-gäste, romantisch
**Art:** pasta, suppe, salat, bowl, ofengericht, dessert, frühstück, flammkuchen, gnocchi, onepot, gebacken
**Küche:** italienisch, asiatisch, deutsch, indisch, mediterran
**Hauptzutat (optional):** lachs, garnelen, halloumi, spargel

## Tagesreset

Die App merkt sich, welche Rezepte du heute schon weggewischt hast. Um Mitternacht wird das automatisch zurückgesetzt. Du kannst auch jederzeit auf den ↺-Button drücken.
