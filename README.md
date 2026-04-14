# YuGames — Portfolio

Persönliche Portfolio-Website von Yusuf Sükün.  
Gebaut als Schüler im Bereich Game & Multimedia Entwicklung — zur Vorstellung meiner Projekte und als Bewerbung für ein Praktikum.

---

## Live

> https://yuschool.github.io/yugames

---

## Inhalt

- **Hero** — Animierter Slideshow-Bereich mit wechselnden Kategorien
- **Über mich** — Kurzvorstellung mit Info-Boxen
- **Skills & Technologien** — Skill-Balken in drei Bereichen: Programmierung, Design, Story & Narrative
- **Projekte** — Filterbarer Galerie-Bereich mit Favoriten-Tab
- **Angebot** — Was ich mitbringe
- **Kontakt** — Verlinkung zu E-Mail, LinkedIn, Itch.io, GitHub
- **Recruiter-Ansicht** — Separater View mit kompaktem Profil und PDF-Download

---

## Technologien

| Bereich | Technologie |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Logik | Vanilla JavaScript (ES5) |
| Hosting | GitHub Pages |

Keine Frameworks, keine Dependencies — reines HTML/CSS/JS.

---

## Projektstruktur

```
yugames/
├── index.html          # Haupt-HTML-Datei
├── style/
│   └── yugamesstyle.css    # Gesamtes Styling
├── scripts/
│   └── yugamesscript.js    # Slideshow, Filter, Recruiter-Toggle, Skill-Animationen
├── assets/             # Bilder, Icons, Portfolio-PDF
├── README.md
├── .gitignore
└── LICENSE
```

---

## Lokal öffnen

Kein Build-Prozess nötig. Einfach `index.html` im Browser öffnen:

```bash
git clone https://github.com/YuSchool/yugames.git
cd yugames
# index.html im Browser öffnen (Doppelklick oder über Live Server in VS Code)
```

---

## GitHub Pages aktivieren

1. Repo auf GitHub öffnen
2. **Settings** → **Pages**
3. Source: `Deploy from a branch` → Branch: `master` → Ordner: `/ (root)`
4. Speichern — nach wenigen Minuten ist die Seite live unter `https://YuSchool.github.io/yugames`

---

## Lizenz

© 2026 Yusuf Sükün — Alle Rechte vorbehalten.  
Siehe [LICENSE](LICENSE) für Details.
