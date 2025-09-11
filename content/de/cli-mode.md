# CLI-Modus

Dieses Modul bietet Befehlszeilenschnittstellen-Funktionalität für LinuxToys und ermöglicht IT-Personal 
und Technikern die Automatisierung von Installationen mit Hilfe von Manifest-Dateien.

#### Hauptfunktionen:
- Automatische Erkennung und Installation von Systempaketen
- Automatische Erkennung und Installation von Flatpaks
- Ausführung von LinuxToys-Skripten
- Unterstützung für benutzerdefinierte Manifest-Dateien mit Validierung
- Plattformübergreifende Paketmanager-Unterstützung (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## CLI-Modus Verwendung:
```
LT_MANIFEST=1 python3 run.py [Optionen]
```

#### Optionen:
    <keine Argumente>       - Verwendet standardmäßig 'manifest.txt' im aktuellen Verzeichnis, Fallback
    <manifest_pfad>         - Verwendet angegebene Manifest-Datei
    check-updates           - Prüft auf LinuxToys-Updates
    --help, -h              - Zeigt Nutzungsinformationen an

## Manifest-Dateiformat
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- Erste Zeile muss sein: `# LinuxToys Manifest File`
- Listet Elemente einzeln pro Zeile auf (Skripte, Pakete oder Flatpaks)
- Elemente können in beliebiger Reihenfolge stehen
- Zeilen, die mit `#` beginnen, sind Kommentare
- Leere Zeilen werden ignoriert
- Parser-Priorität: Skripte > Pakete > Flatpaks
