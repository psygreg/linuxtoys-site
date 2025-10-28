# CLI-modus

Deze module biedt opdrachtregelinterface functionaliteit voor LinuxToys, waardoor IT-personeel 
en technici installaties kunnen automatiseren met behulp van manifestbestanden, en volledige app-gebruik zonder de grafische interface.

#### Hoofdfuncties:
- Automatische detectie en installatie van systeempakketten
- Automatische detectie en installatie van flatpaks
- Uitvoering van LinuxToys scripts
- Ondersteuning voor aangepaste manifestbestanden met validatie
- Cross-platform pakketbeheerder ondersteuning (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## CLI-modus gebruik:
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### Opties:
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: installeert geselecteerde opties (scripts, pakketten), de standaardmodus
- `-s, --script`: installeert opgegeven LinuxToys-scripts
- `-p, --package`: installeert pakketten via uw systeempacketbeheerder of flatpaks (juiste naam moet gegeven worden)

- `-h, --help`: toont beschikbare opties
- `-l, --list`: geeft een lijst van alle beschikbare scripts voor uw huidige besturingssysteem
- `-m, --manifest`: voor manifest-gebruik
- `-v, --version`: toont versieinformatie
- `-y, --yes`: slaat bevestigingsprompts over
- `update, upgrade`: controleert op updates en werkt LinuxToys bij

Opties kunnen samen gebruikt worden op dezelfde manier als Arch's `pacman`.
```
linuxtoys-cli -sy apparmor  # voert apparmor-installatie voor Debian/Arch uit met automatische bevestiging
```

## Manifestbestand formaat
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- Eerste regel moet zijn: `# LinuxToys Manifest File`
- Lijst items één per regel (scripts, pakketten, of flatpaks)
- Items kunnen in willekeurige volgorde staan
- Regels die beginnen met `#` zijn opmerkingen
- Lege regels worden genegeerd
- Parser prioriteit: Scripts > Pakketten > Flatpaks