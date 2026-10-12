# Übung: Exports

Die ganze Kontaktliste steckt in einer einzigen Datei: `src/components/App.tsx`. Types, Daten, Hilfsfunktionen und Komponenten liegen alle beisammen. Ziel der Übung ist, den Code mit `export` und `import` auf sinnvolle Module aufzuteilen. Die App sieht danach genau gleich aus wie vorher.

## Aufgabe

- `App.tsx` mit `export`/`import` in Module aufteilen
  - Types, Daten, Hilfsfunktionen und Komponenten in eigene Dateien
  - Named exports, ein default export und `import * as`
- Lösung im Branch `solution`

### Zielstruktur

Die `// TODO`-Kommentare in `App.tsx` zeigen, was wohin gehört:

```
src/
├─ types/contact.ts         Address, Contact
├─ data/contacts.ts         Kontaktdaten (default export)
├─ utils/format.ts          getInitials, formatPhone
├─ utils/sort.ts            sortByLastName
└─ components/
   ├─ App.tsx               nur noch App
   ├─ Avatar.tsx
   ├─ ContactCard.tsx
   └─ ContactList.tsx
```

- Komponenten, Types und Hilfsfunktionen als **named exports** exportieren.
- Die Kontaktdaten als **default export** exportieren.
- In `ContactCard.tsx` die Formatierungsfunktionen mit `import * as format from '../utils/format'` importieren.
- Types mit `import type { … }` importieren (verlangt `verbatimModuleSyntax` in `tsconfig.app.json`).
- `App.css` bleibt, wie sie ist.

### Prüfen

```bash
pnpm build
pnpm lint
```

Beide Befehle laufen ohne Fehler durch, und die App unter <http://localhost:5173> sieht aus wie vorher.

## Branches

| Branch     | Inhalt                             |
| ---------- | ---------------------------------- |
| `main`     | Ausgangslage: alles in `App.tsx`   |
| `solution` | Lösung: Code auf Module aufgeteilt |

Lösung anschauen, nachdem du die Übung gemacht hast:

```bash
git switch solution
```

Zurück zur eigenen Arbeit mit `git switch main`. Eigene Änderungen vorher committen oder mit `git stash` beiseitelegen.

## Voraussetzungen

- Node.js 24 (LTS)
- pnpm 12

Installation siehe Installationsanleitung zum Kurs.

## VS Code Extensions

```bash
code --install-extension oxc.oxc-vscode
code --install-extension esbenp.prettier-vscode
```

| Extension    | Nutzen                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Oxc**      | Zeigt Lint-Fehler von oxlint direkt beim Tippen im Editor an (z. B. fehlende Dependencies im `useEffect`). Gleiche Regeln wie `pnpm lint`. |
| **Prettier** | Formatiert den Code einheitlich. In den VS Code Settings _Format On Save_ aktivieren und Prettier als Standardformatierer wählen.          |

## Start

```bash
git clone https://github.com/web-lectures/exports-exercise.git
cd exports-exercise
pnpm install
pnpm dev
```

Die App läuft danach unter <http://localhost:5173>.

## Scripts

| Befehl              | Zweck                                                    |
| ------------------- | -------------------------------------------------------- |
| `pnpm dev`          | Entwicklungs-Server mit Hot Reload                       |
| `pnpm build`        | Typecheck (`tsc`) und Produktions-Build nach `dist/`     |
| `pnpm preview`      | Lokale Vorschau des Builds                               |
| `pnpm lint`         | Code mit oxlint prüfen                                   |
| `pnpm format`       | Code mit Prettier formatieren                            |
| `pnpm format:check` | Prüfen, ob alles formatiert ist (ohne Dateien zu ändern) |
