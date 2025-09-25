# Entwicklerhandbuch

## I. Beitragsleitlinien

Vielen Dank für Ihr Interesse, zu LinuxToys beizutragen! Dieses Projekt zielt darauf ab, eine Sammlung von Werkzeugen für Linux auf benutzerfreundliche Weise bereitzustellen und mächtige Funktionalität für alle Benutzer zugänglich zu machen.

### Dokumentation

Bevor Sie beginnen, überprüfen Sie bitte das [Entwicklerhandbuch](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook) für vollständige Dokumentation über LinuxToys' Bibliotheken und Entwicklungspraktiken.

#### Entwicklungsprioritäten

Beim Beitrag zu LinuxToys behalten Sie bitte diese Kernprioritäten im Hinterkopf, aufgelistet in Reihenfolge der Wichtigkeit:

#### 1. Sicherheit und Datenschutz zuerst
- **Benutzersicherheit und Datenschutz müssen immer die oberste Priorität haben**
- Alle Skripte und Werkzeuge sollten gründlich getestet und überprüft werden
- Implementieren Sie niemals Funktionen, die Benutzerdaten oder Systemsicherheit gefährden könnten
- Dokumentieren Sie deutlich alle potentiellen Risiken oder Systemänderungen
- Befolgen Sie sichere Programmierpraktiken und validieren Sie alle Benutzereingaben

#### 2. Benutzerfreundlichkeit und Zugänglichkeit
- Entwerfen Sie mit dem durchschnittlichen Computerbenutzer im Kopf
- Bieten Sie klare, intuitive Schnittstellen
- Schließen Sie hilfreiche Beschreibungen und Anleitungen für alle Funktionen ein, während Sie es prägnant halten
- Stellen Sie Zugänglichkeit für Benutzer mit unterschiedlichen technischen Fähigkeiten sicher
- Verwenden Sie einfache Sprache in benutzerseitigen Texten und Fehlermeldungen

#### 3. Zuverlässigkeit und Selbstständigkeit
- **Alle Funktionen müssen wie beabsichtigt funktionieren, ohne zusätzliche Workarounds vom Benutzer zu erfordern**
- Werkzeuge sollten Grenzfälle graceful handhaben
- Bieten Sie klare Fehlermeldungen, wenn etwas schief geht
- Testen Sie über unterstützte Distributionen und Versionen
- Stellen Sie sicher, dass Abhängigkeiten ordnungsgemäß verwaltet und dokumentiert sind

#### 4. CLI-Tool-Beschränkungen
- **Befehlszeilenschnittstellen sollten auf Entwickler- und Sysadmin-Anwendungsfälle beschränkt sein**
- Der durchschnittliche Computerbenutzer kennt nicht oder will nicht mit Terminal-Emulatoren umgehen
- CLI-only Funktionen sollten auf Entwickler- und Systemadministrations-Menüs beschränkt sein

### Abschließend...

- Alle Pull Requests werden manuell überprüft vor Genehmigung
- Stellen Sie sicher, dass Ihre Beiträge mit den oben aufgeführten Entwicklungsprioritäten übereinstimmen
- Testen Sie Ihre Änderungen über verschiedene Linux-Distributionen wenn möglich
- Befolgen Sie den bestehenden Code-Stil und die Struktur
- Dokumentieren Sie alle neuen Funktionen oder bedeutenden Änderungen

### Erste Schritte

1. Überprüfen Sie das [Entwicklerhandbuch](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. Forken Sie das Repository und erstellen Sie einen Feature-Branch
3. Machen Sie Ihre Änderungen entsprechend den Entwicklungsprioritäten
4. Testen Sie gründlich über unterstützte Systeme
5. Reichen Sie einen Pull Request mit einer klaren Beschreibung Ihrer Änderungen ein

Wir schätzen Ihre Beiträge, Linux für alle zugänglicher und benutzerfreundlicher zu machen!

## II. LinuxToys' Funktionen und Verwendung

### Skriptstruktur und Metadaten

#### Grundlegende Skriptvorlage

Alle LinuxToys-Skripte folgen einer standardisierten Struktur mit Metadaten-Headern:

```bash
#!/bin/bash
# name: Human Readable Name (oder Platzhalter für Übersetzung)
# version: 1.0
# description: description_key_or_text
# icon: icon-name
# compat: ubuntu, debian, fedora, arch, cachy, suse, ostree, ublue
# reboot: no|yes|ostree
# noconfirm: yes
# localize: en, pt...
# nocontainer

# --- Start des Skriptcodes ---
source "$SCRIPT_DIR/libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/libs/helpers.lib"

# Ihre Skriptlogik hier
```

#### Metadaten-Header

**Erforderliche Header**

- **`# name:`** - Anzeigename, der in der UI gezeigt wird
- **`# version:`** - Skriptversion (typischerweise "1.0")
- **`# description:`** - Beschreibungsschlüssel für Übersetzungen oder direkter Text
- **`# icon:`** - Icon-Identifikator für die UI - *nicht erforderlich in Checklisten-Menüs*

**Optionale Header**

- **`# compat:`** - Komma-getrennte Liste kompatibler Distributionen
- **`# reboot:`** - Neustart-Anforderung: `no` (Standard), `yes`, oder `ostree`
- **`# noconfirm:`** - Bestätigungsdialog überspringen wenn auf `yes` gesetzt
- **`# localize:`** - Komma-getrennte Liste unterstützter Locales
- **`# nocontainer:`** - Skript in containerisierten Umgebungen verstecken
- **`# gpu:`** - Nur Skript für ausgewählte GPU-Hersteller anzeigen, gültige Einträge `Amd`, `Intel`, `Nvidia`. Kann mehr als einen Hersteller haben.
- **`# desktop:`** - Nur Skript für ausgewählte Desktop-Umgebungen anzeigen, gültige Einträge `gnome`, `plasma` und `other`.

#### Kompatibilitätssystem

LinuxToys unterstützt mehrere Linux-Distributionen durch ein Kompatibilitätsschlüssel-System:

**Unterstützte Distributionen**

- **`ubuntu`** - Ubuntu und Derivate
- **`debian`** - Debian und Derivate  
- **`fedora`** - Fedora und RHEL-basierte Systeme
- **`arch`** - Arch Linux (ausgenommen CachyOS)
- **`cachy`** - CachyOS spezifisch
- **`suse`** - openSUSE und SUSE-Systeme
- **`ostree`** - rpm-ostree basierte Systeme
- **`ublue`** - Universal Blue Images (Bazzite, Bluefin, Aurora)

#### Neustart-Anforderungen
- **`no`** - Kein Neustart erforderlich (Standard)
- **`yes`** - Immer Neustart erforderlich
- **`ostree`** - Neustart nur auf ostree/ublue-Systemen erforderlich

#### Container-Erkennung

Die Anwendung ist in der Lage zu erkennen, ob sie aus einem Container heraus ausgeführt wird und bestimmte Optionen entsprechend dem entsprechenden Header zu verstecken oder anzuzeigen. Dies ist auch kompatibel mit den `compat`-Schlüsseln.

**Beispiele**

- **`# nocontainer`** - Versteckt Skript in containerisierten Umgebungen
- **`# nocontainer: ubuntu, debian`** - Versteckt Skript nur in Ubuntu- und Debian-Containern
- **`# nocontainer: invert`** - Zeigt Skript **nur** in containerisierten Umgebungen an
- **`# nocontainer: invert, debian`** - Zeigt Skript nur in Debian-Containern an

### Kernbibliotheken

#### linuxtoys.lib

Die Hauptbibliothek bietet wesentliche Funktionen für Skriptoperationen:

**Paketverwaltung**

```bash
# Pakete zum Installieren deklarieren
_packages=(package1 package2 package3)
_install_
```

Die `_install_`-Funktion automatisch:
- Erkennt den Paketmanager (apt, pacman, dnf, zypper, rpm-ostree)
- Überprüft, ob Pakete bereits installiert sind
- Installiert fehlende Pakete mit der entsprechenden Methode
- Behandelt rpm-ostree-Systeme mit geschichteten Paketen
- Deaktiviert die `_packages`-Variable bei Abschluss, ermöglicht mehrfache Verwendung im gleichen Skript

**Flatpak-Verwaltung**

```bash
# Pakete zum Installieren deklarieren
_flatpaks=(package1 package2 package3)
_flatpak_
```

Die `_flatpak_`-Funktion installiert automatisch jedes Flatpak im Array mit Standardparametern (Benutzerebene, Flathub-Repository). Sie wird auch `_flatpaks` bei Abschluss deaktivieren, ermöglicht mehrfache Verwendung im gleichen Skript.

**Benutzeroberflächen-Funktionen**

```bash
# Sudo-Passwort mit GUI anfordern
sudo_rq

# Informationsdialog anzeigen
zeninf "Informationsnachricht"

# Warnungsdialog anzeigen
zenwrn "Warnungsnachricht"

# Fehler anzeigen und beenden
fatal "Fataler Fehlermessage"

# Fehler anzeigen aber fortfahren
nonfatal "Nicht-fatale Fehlermessage"
```

**Spracherkennung**

```bash
# Systemsprache erkennen und Übersetzungsdatei setzen
_lang_
# Dies setzt die $langfile-Variable (z.B. "en", "pt")
```

#### helpers.lib

Bietet spezialisierte Hilfsfunktionen für häufige Aufgaben:

**Flatpak-Verwaltung**

```bash
# Flatpak und Flathub-Repository einrichten
flatpak_in_lib
# Dann Flatpak-Anwendungen installieren:
flatpak install --or-update --user --noninteractive app.id
```

Die `flatpak_in_lib`-Funktion:
- Installiert Flatpak falls nicht vorhanden
- Fügt Flathub-Remote für Benutzer und System hinzu
- Behandelt verschiedene Paketmanager automatisch
- Bietet Fehlerbehandlung und Verifikation

**Repository-Verwaltung**

```bash
# Multilib-Repository auf Arch-Systemen aktivieren
multilib_chk

# Chaotic-AUR-Repository auf Arch-Systemen hinzufügen
chaotic_aur_lib

# RPMFusion-Repositories auf Fedora-Systemen installieren
rpmfusion_chk
```

### Sprache und Lokalisierung

#### Übersetzungssystem

LinuxToys unterstützt mehrere Sprachen durch JSON-Übersetzungsdateien:

**Sprachdateien-Struktur**

```
p3/libs/lang/
├── en.json    # Englisch (Fallback)
├── pt.json    # Portugiesisch
└── ...
```

#### Übersetzungsverwendung
```bash
# Spracherkennung laden
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"

# Übersetzungen in Zenity-Dialogen verwenden
zenity --question --text "$translation_key" --width 360 --height 300
```

Es gibt einige Standard-Nachrichtenschlüssel, die Sie für einfache Dialoge verwenden können.
- `$finishmsg`: "_Operationen abgeschlossen._"
- `$rebootmsg`: "_Installation abgeschlossen. Neustart für Änderungen erforderlich._"
- `$cancelmsg`: "_Abbrechen_"
- `$incompatmsg`: "_Ihr Betriebssystem ist nicht kompatibel._"
- `$abortmsg`: "_Operation vom Benutzer abgebrochen._"
- `$notdomsg`: "_Nichts zu tun._"

**Standard-Entfernungsdialog**
- `$rmmsg`: "_Sie haben bereits `$LT_PROGRAM` installiert. Möchten Sie es entfernen?_"

Erfordert vorheriges Setzen einer `LT_PROGRAM`-Variable.

**Übersetzungen hinzufügen**

1. Übersetzungsschlüssel zu allen Sprach-JSON-Dateien hinzufügen
2. Übersetzungsschlüssel in Skriptbeschreibungen verwenden: `# description: app_desc`
3. Schlüssel in Dialogen und Nachrichten referenzieren

#### Lokalisierungskontrolle
```bash
# Skript auf spezifische Locales beschränken
# localize: pt
# Dieses Skript wird nur für portugiesischsprachige Benutzer angezeigt
```

### Container-Kompatibilität

#### Container-Erkennung

LinuxToys erkennt automatisch containerisierte Umgebungen und kann Skripte entsprechend filtern.

#### Container-Beschränkungen
```bash
# Skript in allen Containern verstecken
# nocontainer

# Skript nur in spezifischen Distributions-Containern verstecken
# nocontainer: debian, ubuntu
```

**Automatische Filterung**

Skripte, die `flatpak_in_lib` verwenden, werden automatisch in Containern versteckt, es sei denn, sie werden explizit mit `nocontainer`-Headern erlaubt, die kompatible Systeme spezifizieren.

### Erweiterte Funktionen

#### Entwicklungsmodus

LinuxToys enthält einen Entwicklungsmodus zum Testen und Debuggen:

#### Umgebungsvariablen
- **`DEV_MODE=1`** - Entwicklermodus aktivieren
- **`COMPAT=distro`** - Kompatibilitätserkennung überschreiben
- **`CONTAINER=1`** - Container-Umgebung simulieren  
- **`OPTIMIZER=1/0`** - Optimierungsstatus simulieren

#### Entwickler-Overrides
```bash
# Alle Skripte unabhängig von Kompatibilität anzeigen
DEV_MODE=1 ./run.py

# Skript auf spezifischer Distribution testen
DEV_MODE=1 COMPAT=arch ./run.py

# Container-Verhalten testen
DEV_MODE=1 CONTAINER=1 ./run.py

# Standard-Optimierungs-Toggle testen
DEV_MODE=1 OPTIMIZER=1 ./run.py
```

#### Durchgeführte Prüfungen
- Grundlegende Bash-Syntax
- Richtige `sudo`-Erhebungsmethode durch `sudo_rq`
- Richtige Bibliotheksquellen
- Header-Element-Prüfungen (nur Warnungen, da einige nicht obligatorisch sind)

### Neustart-Verwaltung

LinuxToys bietet umfassende Neustart-Behandlung:

#### Neustart-Erkennung
```bash
# Überprüfen, ob Skript Neustart erfordert
script_requires_reboot(script_path, system_compat_keys)

# Auf ausstehende Ostree-Deployments prüfen
check_ostree_pending_deployments()
```

**Neustart-Dialoge**

- Automatische Neustart-Warnungsdialoge
- Benutzerauswahl zwischen "Jetzt neu starten" und "Später neu starten"
- Graceful Anwendungsschließung bei Neustart-Anforderung
- Spezielle Behandlung für ausstehende Ostree-Deployments

### Fehlerbehandlung

#### Best Practices
```bash
# Kommando-Erfolg überprüfen
if ! command_that_might_fail; then
    nonfatal "Kommando fehlgeschlagen, fortfahren..."
    return 1
fi

# Kritischer Fehler
if ! critical_command; then
    fatal "Kritische Operation fehlgeschlagen"
fi

# Stille Fehlerbehandlung
command_with_output 2>/dev/null || true
```

### Skriptkategorien

#### Organisationsstruktur
```
p3/scripts/
├── office/          # Büro & Arbeitsanwendungen
├── game/           # Gaming-Tools und Launcher
├── devs/           # Entwicklertools
├── utils/          # Systemutilities
├── drivers/        # Hardware-Treiber
├── repos/          # Repository-Verwaltung
├── extra/          # Experimentelle/zusätzliche Tools
├── pdefaults.sh    # Systemoptimierungen
└── psypicks.sh     # Kuratierte Software-Auswahl
```

#### Kategorieinformationen

Jede Kategorie kann eine `category-info.txt`-Datei haben:
```
name: Kategorie-Anzeigename
description: Kategoriebeschreibungsschlüssel
icon: folder-icon-name
mode: menu
```

### Best Practices

#### Skriptentwicklung
1. **Verwenden Sie immer Metadaten-Header** für ordnungsgemäße Kategorisierung und Filterung
2. **Testen Sie Kompatibilität** über verschiedene Distributionen wenn möglich
3. **Behandeln Sie Fehler graceful** mit angemessenem Benutzerfeedback
4. **Verwenden Sie bestehende Bibliotheken** anstatt häufige Funktionalität neu zu implementieren
5. **Befolgen Sie die Standard-Skriptstruktur** für Konsistenz

#### Paketverwaltung
1. **Deklarieren Sie Pakete in Arrays** vor dem Aufruf von `_install_`
2. **Überprüfen Sie Paketverfügbarkeit** für verschiedene Distributionen
3. **Behandeln Sie rpm-ostree-Systeme** angemessen (vermeiden Sie nicht-essentielle Pakete)
4. **Verwenden Sie Flatpak für GUI-Anwendungen** wenn möglich

#### Benutzererfahrung
1. **Bieten Sie klare Beschreibungen** in den bereitgestellten Sprachen
2. **Verwenden Sie angemessene Icons** zur visuellen Identifikation
3. **Behandeln Sie Neustart-Anforderungen** ordnungsgemäß
4. **Zeigen Sie Fortschritt und Feedback** während langer Operationen
5. **Respektieren Sie Benutzerentscheidungen** in Bestätigungsdialogen

#### Lokalisierung
1. **Verwenden Sie Übersetzungsschlüssel** anstatt hartcodiertem Text
2. **Bieten Sie Übersetzungen** für alle unterstützten Sprachen
3. **Testen Sie mit verschiedenen Locales** um ordnungsgemäße Funktionalität sicherzustellen
4. **Verwenden Sie Locale-Beschränkungen** wenn Skripte regionsspezifisch sind

Dieser Leitfaden bietet die Grundlage für die Erstellung robuster, kompatibler und benutzerfreundlicher Skripte innerhalb des LinuxToys-Ökosystems. Durch die Nutzung der bereitgestellten Bibliotheken und das Befolgen dieser Konventionen können Entwickler Skripte erstellen, die nahtlos über mehrere Linux-Distributionen funktionieren und dabei eine konsistente Benutzererfahrung bieten.

## III. KI-Coding-Agenten

Da die Nutzung von KI-Tools jeden Tag immer verbreiteter wird, ist es wichtig, Richtlinien für ihre Verwendung in der Entwicklung von LinuxToys zu etablieren. Wir glauben, dass sie sehr hilfreiche Werkzeuge sein können und Entwicklern helfen können, effizienter zu sein, wenn sie auf moderate, verantwortungsvolle Weise eingesetzt werden.

### Erlaubte Modelle

Basierend auf Tests werden wir *nur* die folgenden Modelle für Codehilfe zulassen:
- **Grok Code Fast** - ein schnelles, kosteneffektives Modell, ideal für die Nutzung als 'Autovervollständigung auf Steroiden'
- **Claude Sonnet 4** - fortgeschrittenes Modell, geeignet für komplexe Codeanalyse und -arbeit, aber auch teurer
- **Qwen Coder 3** - ausgewogenes Modell, das gute Leistung für eine Vielzahl von Codierungsaufgaben bietet und dabei gute Genauigkeit und Kosteneffizienz beibehält

Alle anderen getesteten Modelle konnten langfristig keine zufriedenstellenden Ergebnisse liefern und produzierten oft falschen oder sogar gefährlichen Code in unkontrollierten Halluzinationen.

### Nutzungsrichtlinien

1. **Ergänzen, nicht Ersetzen**: KI-Tools sollten verwendet werden, um menschliche Codierungsbemühungen zu unterstützen und zu verbessern, niemals um sie vollständig zu ersetzen.
2. **Code-Review**: Jeder von KI in jeder Kapazität generierte Code muss gründlich überprüft und getestet werden, um sicherzustellen, dass er unsere hohen Qualitäts-, Sicherheits- und Funktionalitätsstandards erfüllt, wie jeder Code.
3. **Sicherheitsbewusstsein**: Seien Sie wachsam gegenüber potenziellen Sicherheitslücken in KI-generiertem Code. KI folgt möglicherweise nicht immer den besten Sicherheitspraktiken.

### KI-Nutzung bei Übersetzungen

Wir verstehen, dass LinuxToys in den Muttersprachen der Menschen verfügbar zu haben sehr wichtig ist, da dies die Software zugänglicher macht, was ein Schlüsselfaktor für unseren Erfolg ist. Es ist jedoch auch eine sehr zeitaufwändige Aufgabe, und weitaus größere Projekte als wir haben Schwierigkeiten, Freiwillige zu finden, die dabei helfen, also verwenden wir KI-Tools zur Generierung von Übersetzungen. Ungenauigkeiten oder Fehler in der Übersetzung sollten auf unserer [GitHub Issues-Seite](https://github.com/psygreg/linuxtoys/issues) gemeldet werden.

Das Modell, das derzeit für unsere Übersetzungen verwendet wird, ist **Claude Sonnet 4**, da es in unseren Tests die besten Ergebnisse gezeigt hat, ohne Abweichungen von der ursprünglichen Bedeutung.
