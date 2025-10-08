# Ontwikkelaarshandboek

## I. Bijdrage Richtlijnen

Dank je voor je interesse in het bijdragen aan LinuxToys! Dit project heeft als doel een verzameling tools voor Linux te bieden op een gebruiksvriendelijke manier, waardoor krachtige functionaliteit toegankelijk wordt voor alle gebruikers.

### Documentatie

Voordat je begint, bekijk de [Ontwikkelaarshandboek](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook) voor volledige documentatie over LinuxToys' bibliotheken en ontwikkelingspraktijken.

#### Ontwikkelingsprioriteiten

Wanneer je bijdraagt aan LinuxToys, houd deze kernprioriteiten in gedachten, gerangschikt in volgorde van belangrijkheid:

#### 1. Veiligheid en Privacy Eerst
- **Gebruikersveiligheid en privacy moeten altijd de hoogste prioriteit hebben**
- Alle scripts en tools moeten grondig getest en beoordeeld worden
- Implementeer nooit functies die gebruikersgegevens of systeemveiligheid kunnen compromitteren
- Documenteer duidelijk eventuele potentiële risico's of systeemwijzigingen
- Volg veilige codeerpraktijken en valideer alle gebruikersinvoer

#### 2. Gebruiksvriendelijkheid en Toegankelijkheid
- Ontwerp met de gemiddelde computergebruiker in gedachten
- Bied duidelijke, intuïtieve interfaces
- Voeg behulpzame beschrijvingen en begeleiding toe voor alle functies, maar houd het to the point
- Zorg voor toegankelijkheid voor gebruikers met verschillende technische vaardigheidsniveaus
- Gebruik duidelijke taal in gebruikersgerichte tekst en foutmeldingen

#### 3. Betrouwbaarheid en Zelfredzaamheid
- **Alle functies moeten werken zoals bedoeld zonder dat de gebruiker extra workarounds nodig heeft**
- Tools moeten edge cases graceful afhandelen
- Bied duidelijke foutmeldingen wanneer iets misgaat
- Test over ondersteunde distributies en versies
- Zorg ervoor dat afhankelijkheden goed beheerd en gedocumenteerd zijn

#### 4. CLI Tool Restricties
- **Opdrachtregelinterfaces moeten beperkt worden tot ontwikkelaar en systeembeheerder use cases**
- De gemiddelde computergebruiker weet niet hoe of wil niet omgaan met terminalemulatoren
- CLI-only functies moeten beperkt worden tot Ontwikkelaar en Systeembeheer menu's

### Tot slot...

- Alle Pull Requests worden handmatig beoordeeld voor goedkeuring
- Zorg ervoor dat je bijdragen aansluiten bij de hierboven genoemde ontwikkelingsprioriteiten
- Test je wijzigingen over verschillende Linux distributies wanneer mogelijk
- Volg de bestaande codestijl en structuur
- Documenteer nieuwe functies of significante wijzigingen

### Aan de slag

1. Bekijk de [Ontwikkelaarshandboek](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. Fork de repository en maak een feature branch
3. Maak je wijzigingen volgens de ontwikkelingsprioriteiten
4. Test grondig over ondersteunde systemen
5. Dien een Pull Request in met een duidelijke beschrijving van je wijzigingen

We waarderen je bijdragen om Linux toegankelijker en gebruiksvriendelijker te maken voor iedereen!

## II. LinuxToys' Functies en Gebruik

### Script Structuur en Metadata

#### Basis Script Template

Alle LinuxToys scripts volgen een gestandaardiseerde structuur met metadata headers:

```bash
#!/bin/bash
# name: Menselijk Leesbare Naam (of placeholder voor vertaling)
# version: 1.0
# description: description_key_or_text
# icon: icon-name
# compat: ubuntu, debian, fedora, arch, cachy, suse, ostree, ublue
# reboot: no|yes|ostree
# noconfirm: yes
# localize: en, pt...
# nocontainer
# repo: https://repo.url
# negates: onescript, twoscript

# --- Start van de script code ---
source "$SCRIPT_DIR/libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/libs/helpers.lib"

# Je script logica hier
```

#### Metadata Headers

**Vereiste Headers**

- **`# name:`** - Weergavenaam getoond in de UI
- **`# version:`** - Script versie (typisch "1.0")
- **`# description:`** - Beschrijving key voor vertalingen of directe tekst
- **`# icon:`** - Icon identifier voor de UI - *niet vereist in checklist menu's*

**Optionele Headers**

- **`# compat:`** - Komma-gescheiden lijst van compatibele distributies
- **`# reboot:`** - Herstart vereiste: `no` (standaard), `yes`, of `ostree`
- **`# noconfirm:`** - Sla bevestigingsdialoog over als ingesteld op `yes`
- **`# localize:`** - Komma-gescheiden lijst van ondersteunde locales
- **`# nocontainer:`** - Verberg script in gecontaineriseerde omgevingen
- **`# gpu:`** - Toont script alleen voor geselecteerde GPU leveranciers, geldige entries `Amd`, `Intel`, `Nvidia`. Kan meer dan één leverancier hebben.
- **`# desktop:`** - Toont script alleen voor geselecteerde desktop omgevingen, geldige entries `gnome`, `plasma` en `other`.
- **`# repo:`** - Maakt de scriptnaam klikbaar in bevestigingsdialogen. Moet de gebruiker in staat stellen om snel de originele repository van de corresponderende functie te bereiken.
- **`# negates:`** - Verbergt de volgende scripts als het script met deze header compatibel blijkt te zijn met de machine van de gebruiker. Kan meerdere scripts hebben gescheiden door komma's, zonder de `.sh` extensie.

#### Compatibiliteit Systeem

LinuxToys ondersteunt meerdere Linux distributies door een compatibiliteit key systeem:

**Ondersteunde Distributies**

- **`ubuntu`** - Ubuntu en derivaten
- **`debian`** - Debian en derivaten  
- **`fedora`** - Fedora en RHEL-gebaseerde systemen
- **`arch`** - Arch Linux (exclusief CachyOS)
- **`cachy`** - CachyOS specifiek
- **`suse`** - openSUSE en SUSE systemen
- **`ostree`** - rpm-ostree gebaseerde systemen
- **`ublue`** - Universal Blue images (Bazzite, Bluefin, Aurora)

#### Herstart Vereisten
- **`no`** - Geen herstart vereist (standaard)
- **`yes`** - Vereist altijd herstart
- **`ostree`** - Vereist herstart alleen op ostree/ublue systemen

#### Container detectie

De applicatie is in staat om te detecteren of het wordt uitgevoerd vanuit een container en bepaalde opties te verbergen of tonen afhankelijk van de corresponderende header. Dit is ook compatibel met de `compat` keys.

**Voorbeelden**

- **`# nocontainer`** - Verbergt script in gecontaineriseerde omgevingen
- **`# nocontainer: ubuntu, debian`** - Verbergt script alleen in Ubuntu en Debian containers
- **`# nocontainer: invert`** - Toont script **alleen** in gecontaineriseerde omgevingen
- **`# nocontainer: invert, debian`** - Toont script alleen in Debian containers

### Kern Bibliotheken

#### linuxtoys.lib

De hoofdbibliotheek biedt essentiële functies voor script operaties:

**Pakketbeheer**

```bash
# Declareer pakketten om te installeren
_packages=(package1 package2 package3)
_install_
```

De `_install_` functie automatisch:
- Detecteert de pakketbeheerder (apt, pacman, dnf, zypper, rpm-ostree)
- Controleert of pakketten al geïnstalleerd zijn
- Installeert ontbrekende pakketten met de juiste methode
- Handelt rpm-ostree systemen af met gelaagde pakketten
- Unset de `_packages` variabele bij voltooiing, waardoor het meerdere keren gebruikt kan worden in hetzelfde script indien nodig

**Flatpak Beheer**

```bash
# Declareer pakketten om te installeren
_flatpaks=(package1 package2 package3)
_flatpak_
```

De `_flatpak_` functie installeert automatisch elke flatpak binnen de array met standaard parameters (gebruiker niveau, Flathub repository). Het zal ook `_flatpaks` unset bij voltooiing, waardoor je het meerdere keren kunt gebruiken in hetzelfde script indien nodig.

**Gebruikersinterface Functies**

```bash
# Vraag sudo wachtwoord met GUI
sudo_rq

# Toon informatie dialoog
zeninf "Informatie bericht"

# Toon waarschuwing dialoog  
zenwrn "Waarschuwing bericht"

# Toon fout en exit
fatal "Fatale fout bericht"

# Toon fout maar ga door
nonfatal "Niet-fatale fout bericht"
```

**Taal Detectie**

```bash
# Detecteer systeemtaal en stel vertaalbestand in
_lang_
# Dit stelt de $langfile variabele in (bijv. "en", "pt")
```

**Systeem Detectie**

```bash
# voor fedora en rpm-ostree gebaseerde systemen
if is_fedora || is_ostree; then
    # commando
# alleen voor debian
elif is_debian; then
    # commando
# voor elk systeem behalve Arch-gebaseerde systemen die geen CachyOS zijn
elif ! is_arch; then
    # commando
fi
```

We bieden een set bibliotheken voor vereenvoudigde systeemdetectie. Deze kunnen worden gebruikt in if-statements en vrijwel alles dat van STDOUT kan lezen, en werken precies zoals je zou verwachten. Ondersteunde sleutels:
- `is_fedora`: Fedora, CentOS, RHEL
- `is_ostree`: elke Atomic Fedora-gebaseerde distributie
- `is_arch`: elk Arch-gebaseerd systeem, behalve CachyOS
- `is_cachy`: CachyOS specifiek
- `is_debian`: Debian specifiek
- `is_ubuntu`: elk Debian/Ubuntu-gebaseerd systeem
- `is_suse`: elk OpenSUSE-gebaseerd systeem

#### helpers.lib

Biedt gespecialiseerde helper functies voor veelvoorkomende taken:

**Flatpak Beheer**

```bash
# Setup Flatpak en Flathub repository
flatpak_in_lib
# Installeer vervolgens Flatpak applicaties:
flatpak install --or-update --user --noninteractive app.id
```

De `flatpak_in_lib` functie:
- Installeert Flatpak als niet aanwezig
- Voegt Flathub remote toe voor gebruiker en systeem
- Handelt verschillende pakketbeheerders automatisch af
- Biedt foutafhandeling en verificatie

**Repository Beheer**

```bash
# Schakel multilib repository in op Arch systemen
multilib_chk

# Voeg Chaotic-AUR repository toe op Arch systemen  
chaotic_aur_lib

# Installeer RPMFusion repositories op Fedora systemen
rpmfusion_chk
```

### Taal en Localisatie

#### Vertaling Systeem

LinuxToys ondersteunt meerdere talen door JSON vertaalbestanden:

**Taalbestanden Structuur**

```
p3/libs/lang/
├── en.json    # Engels (fallback)
├── pt.json    # Portugees
└── ...
```

#### Vertaling Gebruik
```bash
# Laad taaldetectie
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"

# Gebruik vertalingen in zenity dialogen
zenity --question --text "$translation_key" --width 360 --height 300
```

Er zijn enkele standaard bericht keys die je kunt gebruiken voor eenvoudige dialogen.
- `$finishmsg`: "_Operaties voltooid._"
- `$rebootmsg`: "_Installatie voltooid. Herstart voor wijzigingen van kracht._"
- `$cancelmsg`: "_Annuleren_"
- `$incompatmsg`: "_Je besturingssysteem is niet compatibel._"
- `$abortmsg`: "_Operatie geannuleerd door de gebruiker._"
- `$notdomsg`: "_Niets te doen._"

**Standaard verwijderingsdialoog**
- `$rmmsg`: "_Je hebt `$LT_PROGRAM` al geïnstalleerd. Wil je het verwijderen?_"

Vereist het vooraf instellen van een `LT_PROGRAM` variabele. 

**Vertalingen Toevoegen**

1. Voeg vertaling keys toe aan alle taal JSON bestanden
2. Gebruik vertaling keys in script beschrijvingen: `# description: app_desc`
3. Refereer keys in dialogen en berichten

#### Localisatie Controle
```bash
# Beperk script tot specifieke locales
# localize: pt
# Dit script zal alleen tonen voor Portugees-sprekende gebruikers
```

### Container Compatibiliteit

#### Container Detectie

LinuxToys detecteert automatisch gecontaineriseerde omgevingen en kan scripts dienovereenkomstig filteren.

#### Container Restricties
```bash
# Verberg script in alle containers
# nocontainer

# Verberg script alleen in specifieke distributie containers
# nocontainer: debian, ubuntu
```

**Automatisch Filteren**

Scripts die `flatpak_in_lib` gebruiken worden automatisch verborgen in containers tenzij expliciet toegestaan met `nocontainer` headers die compatibele systemen specificeren.

### Geavanceerde Functies

#### Ontwikkelings Modus

LinuxToys bevat een ontwikkelings modus voor testen en debuggen:

#### Omgevingsvariabelen
- **`DEV_MODE=1`** - Schakel ontwikkelaar modus in
- **`COMPAT=distro`** - Override compatibiliteit detectie
- **`CONTAINER=1`** - Simuleer container omgeving  
- **`OPTIMIZER=1/0`** - Simuleer optimalisatie status

#### Ontwikkelaar Overrides
```bash
# Toon alle scripts ongeacht compatibiliteit
DEV_MODE=1 ./run.py

# Test script op specifieke distributie
DEV_MODE=1 COMPAT=arch ./run.py

# Test container gedrag
DEV_MODE=1 CONTAINER=1 ./run.py

# Test standaard optimalisatie toggle
DEV_MODE=1 OPTIMIZER=1 ./run.py
```

#### Uitgevoerde controles
- Basis bash syntaxis
- Juiste `sudo` verheffingsmethode door `sudo_rq`
- Juiste bibliotheek sourcing
- Header element controles (alleen waarschuwingen, omdat sommige niet verplicht zijn)

### Herstart Beheer

LinuxToys biedt uitgebreid herstart behandeling:

#### Herstart Detectie
```bash
# Controleer of script herstart vereist
script_requires_reboot(script_path, system_compat_keys)

# Controleer voor wachtende ostree deployments
check_ostree_pending_deployments()
```

**Herstart Dialogen**

- Automatische herstart waarschuwingsdialogen
- Gebruikerskeuze tussen "Nu herstarten" en "Later herstarten"
- Graceful applicatie sluiting bij herstart vereiste
- Speciale behandeling voor ostree wachtende deployments

### Foutafhandeling

#### Best Practices
```bash
# Controleer commando succes
if ! command_that_might_fail; then
    nonfatal "Commando gefaald, doorgaan..."
    return 1
fi

# Kritieke fout
if ! critical_command; then
    fatal "Kritieke operatie gefaald"
fi

# Stille foutafhandeling  
command_with_output 2>/dev/null || true
```

### Script Categorieën

#### Organisatie Structuur
```
p3/scripts/
├── office/          # Kantoor & Werk applicaties
├── game/           # Gaming tools en launchers
├── devs/           # Ontwikkelaar tools
├── utils/          # Systeem hulpprogramma's
├── drivers/        # Hardware stuurprogramma's
├── repos/          # Repository beheer
├── extra/          # Experimentele/aanvullende tools
├── pdefaults.sh    # Systeem optimalisaties
└── psypicks.sh     # Gecureerde software selectie
```

#### Categorie Informatie

Elke categorie kan een `category-info.txt` bestand hebben:
```
name: Categorie Weergave Naam
description: Categorie beschrijving key
icon: folder-icon-name
mode: menu
```

### Best Practices

#### Script Ontwikkeling
1. **Gebruik altijd metadata headers** voor juiste categorisatie en filtering
2. **Test compatibiliteit** over verschillende distributies wanneer mogelijk
3. **Handel fouten graceful af** met passende gebruikersfeedback
4. **Gebruik bestaande bibliotheken** in plaats van gemeenschappelijke functionaliteit opnieuw implementeren
5. **Volg de standaard script structuur** voor consistentie

#### Pakketbeheer
1. **Declareer pakketten in arrays** voor het aanroepen van `_install_`
2. **Controleer pakket beschikbaarheid** voor verschillende distributies
3. **Handel rpm-ostree systemen** geschikt af (vermijd niet-essentiële pakketten)
4. **Gebruik Flatpak voor GUI applicaties** wanneer mogelijk

#### Gebruikerservaring
1. **Bied duidelijke beschrijvingen** in de ondersteunde talen
2. **Gebruik passende iconen** voor visuele identificatie
3. **Handel herstart vereisten** goed af
4. **Toon voortgang en feedback** tijdens lange operaties
5. **Respecteer gebruikerskeuzes** in bevestigingsdialogen

#### Localisatie
1. **Gebruik vertaling keys** in plaats van hardcoded tekst
2. **Bied vertalingen** voor alle ondersteunde talen
3. **Test met verschillende locales** om juiste functionaliteit te verzekeren
4. **Gebruik locale restricties** wanneer scripts regio-specifiek zijn

Deze gids biedt de basis voor het creëren van robuuste, compatibele en gebruiksvriendelijke scripts binnen het LinuxToys ecosysteem. Door gebruik te maken van de geboden bibliotheken en deze conventies te volgen, kunnen ontwikkelaars scripts creëren die naadloos werken over meerdere Linux distributies terwijl ze een consistente gebruikerservaring bieden.

## III. AI Coding Agents

Met het gebruik van AI tools dat elke dag meer voorkomend wordt, is het belangrijk om enkele richtlijnen vast te stellen voor hun gebruik in de ontwikkeling van LinuxToys. We geloven dat ze zeer behulpzame tools kunnen zijn en ontwikkelaars kunnen helpen efficiënter te zijn, als ze op een gematigde, verantwoordelijke manier gebruikt worden.

### Toegestane Modellen

Gebaseerd op testen, staan we *alleen* de volgende modellen toe voor code assistentie:
- **Grok Code Fast** - een snel, kosteneffectief model, ideaal voor gebruik als een 'autocomplete op steroïden'
- **Claude Sonnet 4** - geavanceerd model, geschikt voor complexe code analyse en werk, maar ook duurder
- **Qwen Coder 3** - goed gebalanceerd model, dat goede prestaties levert voor verschillende coderingstaken terwijl het goede nauwkeurigheid en kostenefficiëntie behoudt

Alle andere geteste modellen faalden om bevredigende resultaten op lange termijn te leveren, vaak producerend onjuiste of zelfs gevaarlijke code in ongecontroleerde hallucinaties. 

### Gebruiksrichtlijnen

1. **Aanvullen, Niet Vervangen**: AI tools moeten gebruikt worden om menselijke coderinspanningen te assisteren en verbeteren, nooit om ze volledig te vervangen.
2. **Code Review**: Alle code gegenereerd door AI in welke capaciteit dan ook moet grondig beoordeeld en getest worden om ervoor te zorgen dat het voldoet aan onze hoge kwaliteit, veiligheid en functionaliteitsstandaarden, zoals elke code zou moeten.
3. **Veiligheidsbewustzijn**: Wees waakzaam voor potentiële veiligheidskwetsbaarheden in AI-gegenereerde code. AI volgt misschien niet altijd de beste veiligheidspraktijken.

### AI Gebruik bij Vertalingen

We begrijpen dat het hebben van LinuxToys beschikbaar in mensen's moedertaal zeer belangrijk is, omdat dit de software toegankelijker maakt, wat een belangrijke factor is voor ons succes. Het is echter ook een zeer tijdrovende taak, en veel grotere projecten dan wij hebben moeite gehad om vrijwilligers te vinden om hiermee te helpen, dus gebruiken we AI tools om vertalingen te genereren. Eventuele onnauwkeurigheden of fouten in vertalingen moeten gemeld worden op onze [GitHub issues pagina](https://github.com/psygreg/linuxtoys/issues).

Het model dat momenteel gebruikt wordt voor onze vertalingen is **Claude Sonnet 4**, omdat het de beste resultaten heeft getoond in onze tests, zonder afwijkingen van de oorspronkelijke betekenis.