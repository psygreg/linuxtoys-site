# CLI-modus

Deze module biedt opdrachtregelinterface functionaliteit voor LinuxToys, waardoor IT-personeel 
en technici installaties kunnen automatiseren met behulp van manifestbestanden.

#### Hoofdfuncties:
- Automatische detectie en installatie van systeempakketten
- Automatische detectie en installatie van flatpaks
- Uitvoering van LinuxToys scripts
- Ondersteuning voor aangepaste manifestbestanden met validatie
- Cross-platform pakketbeheerder ondersteuning (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## CLI-modus gebruik:
```
LT_MANIFEST=1 python3 run.py [opties]
```

#### Opties:
    <geen argumenten>       - Gebruik standaard 'manifest.txt' in huidige map, fallback
    <manifest_pad>          - Gebruik gespecificeerd manifestbestand
    check-updates           - Controleer op LinuxToys updates
    --help, -h              - Toon gebruiksinformatie

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