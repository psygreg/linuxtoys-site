# CLI-Modus

Dieses Modul bietet Befehlszeilenschnittstellen-Funktionalität für LinuxToys und ermöglicht IT-Personal 
und Technikern die Automatisierung von Installationen mit Hilfe von Manifest-Dateien sowie die vollständige App-Nutzung ohne die grafische Benutzeroberfläche.

#### Hauptfunktionen:
- Automatische Erkennung und Installation von Systempaketen
- Automatische Erkennung und Installation von Flatpaks
- Ausführung von LinuxToys-Skripten
- Unterstützung für benutzerdefinierte Manifest-Dateien mit Validierung
- Plattformübergreifende Paketmanager-Unterstützung (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## CLI-Modus Verwendung:
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### Optionen:
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: installiert ausgewählte Optionen (Skripte, Pakete), der Standardmodus
- `-s, --script`: installiert angegebene LinuxToys-Skripte
- `-p, --package`: installiert Pakete über den Paketmanager Ihres Systems oder Flatpaks (korrekte Bezeichnung erforderlich)

- `-h, --help`: zeigt die verfügbaren Optionen an
- `-l, --list`: listet alle verfügbaren Skripte für Ihr aktuelles Betriebssystem auf
- `-m, --manifest`: für Manifest-Verwendung
- `-v, --version`: zeigt Versionsinformationen an
- `-y, --yes`: überspringt Bestätigungsaufforderungen
- `update, upgrade`: prüft auf Updates und aktualisiert LinuxToys

Optionen können ähnlich wie bei Arch's `pacman` zusammen verwendet werden.
```
linuxtoys-cli -sy apparmor  # führt apparmor-Installer für Debian/Arch mit automatischer Bestätigung aus
```

## Manifest-Dateiformat
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- Erste Zeile muss sein: `# LinuxToys Manifest File`
- Listen Sie Elemente einzeln pro Zeile auf (Skripte, Pakete oder Flatpaks)
- Elemente können in beliebiger Reihenfolge stehen
- Zeilen, die mit `#` beginnen, sind Kommentare
- Leere Zeilen werden ignoriert
- Parser-Priorität: Skripte > Pakete > Flatpaks
