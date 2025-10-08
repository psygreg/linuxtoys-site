# Lámhleabhar Forbróra

## I. Treoirlínte Ranníocaíochta

Go raibh maith agat as spéis a léiriú i ranníocaíocht le LinuxToys! Tá sé de chuspóir ag an tionscadal seo bailiúchán uirlisí do Linux a sholáthar ar bhealach atá éasca le húsáid, ag déanamh feidhmiúlachta chumhachtacha inrochtana do gach úsáideoir.

### Doiciméadúchán

Sula dtosaíonn tú, le do thoil athbhreithnigh an [Lámhleabhar Forbróra](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook) le haghaidh doiciméadúchán iomlán ar leabharlanna LinuxToys agus cleachtais forbartha.

#### Tosaíochtaí Forbartha

Nuair a dhéanann tú ranníocaíocht le LinuxToys, coinnigh na príomhthosaíochtaí seo i gcuimhne, liostaithe in ord tábhachta:

#### 1. Sábháilteacht agus Príobháideacht ar Dtús
- **Caithfidh sábháilteacht agus príobháideacht úsáideora a bheith mar an phríomhthosaíocht i gcónaí**
- Ba cheart scripteanna agus uirlisí go léir a thástáil agus a athbhreithniú go críochnúil
- Ná cuir gnéithe i bhfeidhm riamh a d'fhéadfadh sonraí úsáideora nó slándáil córais a chur i mbaol
- Doiciméadaigh go soiléir aon rioscaí nó athruithe córais a d'fhéadfadh a bheith ann
- Lean cleachtais chódála slána agus bailíochtaigh gach ionchur úsáideora

#### 2. Cairdiúlacht agus Inrochtaineacht Úsáideora
- Déan dearadh agus an gnáthúsáideoir ríomhaire san áireamh
- Soláthair comhéadain shoiléire, intuigineacha
- Cuir tuairiscí agus treoir chabhrach san áireamh do gach gné, agus coinnigh go díreach chuig an bpointe é
- Cinntigh inrochtaineacht d'úsáideoirí le leibhéil scileanna teicniúla éagsúla
- Úsáid teanga shimplí i dtéacs atá dírithe ar úsáideoirí agus i dteachtaireachtaí earráide

#### 3. Iontaofacht agus Féinsásúlacht
- **Ní mór do gach gné oibriú mar atá beartaithe gan gá le réitigh bhreise ón úsáideoir**
- Ba cheart go láimhseálann uirlisí cásanna imeallach go galánta
- Soláthair teachtaireachtaí earráide soiléire nuair a théann rudaí mícheart
- Tástáil trasna dháileachtaí agus leaganacha tacaithe
- Cinntigh go bhfuil spleáchais bhainistithe agus doiciméadaithe i gceart

#### 4. Srianta Uirlise CLI
- **Ba cheart comhéadain líne na n-orduithe a theorannú le cásanna úsáide forbróra agus riarthóra córais**
- Ní fios don ghnáthúsáideoir ríomhaire nó ní theastaíonn uaidh déileáil le haithriseoirí teirminéal
- Ba cheart gnéithe CLI amháin a theorannú le biachláir Forbróir agus Riarachán Córais

### Ar deireadh...

- Déanfar athbhreithniú láimhe ar gach Iarratas Tarraing roimh fhaomhadh
- Cinntigh go bhfuil do ranníocaíochtaí ag teacht leis na tosaíochtaí forbartha atá liostaithe thuas
- Tástáil d'athruithe trasna dháileachtaí Linux éagsúla nuair is féidir
- Lean stíl agus struchtúr an chóid atá ann cheana
- Doiciméadaigh gnéithe nua nó athruithe suntasacha ar bith

### Tús a Chur leis

1. Athbhreithnigh an [Lámhleabhar Forbróra](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. Déan forc den stór agus cruthaigh brainse gnéithe
3. Déan d'athruithe ag leanúint na dtosaíochtaí forbartha
4. Tástáil go críochnúil trasna córas tacaithe
5. Cuir Iarratas Tarraing isteach le tuairisc shoiléir ar d'athruithe

Táimid buíoch as do ranníocaíochtaí chun Linux a dhéanamh níos inrochtana agus níos éasca le húsáid do gach duine!

## II. Gnéithe agus Úsáid LinuxToys

### Struchtúr Script agus Meiteashonraí

#### Teimpléad Bunscript

Leanann scripteanna LinuxToys go léir struchtúr caighdeánaithe le ceanntásca meiteashonraí:

```bash
#!/bin/bash
# name: Ainm Inléite ag Daoine (nó ionadach le haghaidh aistriúcháin)
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

# --- Tús chód an script ---
source "$SCRIPT_DIR/libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/libs/helpers.lib"

# Do loighic script anseo
```

#### Ceanntásca Meiteashonraí

**Ceanntásca Riachtanacha**

- **`# name:`** - Ainm taispeána a thaispeántar sa UI
- **`# version:`** - Leagan script (de ghnáth "1.0")
- **`# description:`** - Eochair tuairiscithe le haghaidh aistriúchán nó téacs díreach
- **`# icon:`** - Aitheantóir deilbhín don UI - *ní gá i mbiachláir seicliosta*

**Ceanntásca Roghnacha**

- **`# compat:`** - Liosta scartha le camóga de dháileachtaí comhoiriúnacha
- **`# reboot:`** - Riachtanas atosaithe: `no` (réamhshocrú), `yes`, nó `ostree`
- **`# noconfirm:`** - Gabh thar dhialóg dhearbhaithe má tá sé socraithe go `yes`
- **`# localize:`** - Liosta scartha le camóga de logchaighdeáin tacaithe
- **`# nocontainer:`** - Folaigh script i dtimpeallachtaí coimeádáin
- **`# gpu:`** - Ní thaispeánann script ach do dhíoltóirí GPU roghnaithe, iontrálacha bailí `Amd`, `Intel`, `Nvidia`. Is féidir níos mó ná díoltóir amháin a bheith ann.
- **`# desktop:`** - Ní thaispeánann script ach do thimpeallachtaí deisce roghnaithe, iontrálacha bailí `gnome`, `plasma` agus `other`.
- **`# repo:`** - Déanann sé ainm an scripte incliceáilte i ndialóga dearbhaithe. Ba cheart go gceadódh sé don úsáideoir an stórlann bunaidh den ghné chomhfhreagrach a bhaint amach go tapa.
- **`# negates:`** - Folaíonn sé na scripteanna seo a leanas má aimsítear go bhfuil an script leis an gceanntásc seo comhoiriúnach le meaisín an úsáideora. Is féidir scripteanna iolracha a bheith ann scartha le camóga, gan an iarmhír `.sh`.

#### Córas Comhoiriúnachta

Tacaíonn LinuxToys le dháileachtaí Linux iolracha trí chóras eochrach comhoiriúnachta:

**Dáileachtaí Tacaithe**

- **`ubuntu`** - Ubuntu agus díorthóirí
- **`debian`** - Debian agus díorthóirí  
- **`fedora`** - Córais Fedora agus bunaithe ar RHEL
- **`arch`** - Arch Linux (gan CachyOS a áireamh)
- **`cachy`** - CachyOS go sonrach
- **`suse`** - Córais openSUSE agus SUSE
- **`ostree`** - Córais bunaithe ar rpm-ostree
- **`ublue`** - Íomhánna Universal Blue (Bazzite, Bluefin, Aurora)

#### Riachtanais Atosaithe
- **`no`** - Gan ghá le hatosú (réamhshocrú)
- **`yes`** - Teastaíonn atosú i gcónaí
- **`ostree`** - Teastaíonn atosú ar chórais ostree/ublue amháin

#### Braiteacht Coimeádán

Tá an feidhmchlár in ann a bhrath má tá sé á rith ó laistigh de choimeádán agus roghanna áirithe a cheilt nó a thaispeáint más é sin an cás ag brath ar an gceanntásc comhfhreagrach. Tá sé seo comhoiriúnach leis na heochracha `compat` freisin.

**Samplaí**

- **`# nocontainer`** - Folaíonn script i dtimpeallachtaí coimeádáin
- **`# nocontainer: ubuntu, debian`** - Folaíonn script i gcoimeádáin Ubuntu agus Debian amháin
- **`# nocontainer: invert`** - Taispeánann script **i gcoimeádáin amháin**
- **`# nocontainer: invert, debian`** - Taispeánann script i gcoimeádáin Debian amháin

### Leabharlanna Bunúsacha

#### linuxtoys.lib

Soláthraíonn an phríomhleabharlann feidhmeanna riachtanacha d'oibríochtaí script:

**Bainistiú Pacáiste**

```bash
# Dearbhaigh pacáistí le suiteáil
_packages=(package1 package2 package3)
_install_
```

Déanann an fheidhm `_install_` go huathoibríoch:
- Braitheann an bainisteoir pacáistí (apt, pacman, dnf, zypper, rpm-ostree)
- Seiceálann má tá pacáistí suiteáilte cheana
- Suiteálann pacáistí atá ar iarraidh ag baint úsáide as an modh cuí
- Láimhseálann córais rpm-ostree le pacáistí cisealaithe
- Díshocraíonn an athróg `_packages` ar chomhlánú, ag ceadú a úsáid arís sa script céanna más gá

**Bainistiú Flatpak**

```bash
# Dearbhaigh pacáistí le suiteáil
_flatpaks=(package1 package2 package3)
_flatpak_
```

Suiteálann an fheidhm `_flatpak_` gach flatpak laistigh den eagar go huathoibríoch le paraiméadair chaighdeánacha (leibhéal úsáideora, stór Flathub). Díshocróidh sé `_flatpaks` freisin ar chomhlánú, ag ceadú duit é a úsáid arís sa script céanna más gá.

**Feidhmeanna Comhéadan Úsáideora**

```bash
# Iarr pasfhocal sudo le GUI
sudo_rq

# Taispeáin dialóg faisnéise
zeninf "Teachtaireacht faisnéise"

# Taispeáin dialóg rabhaidh
zenwrn "Teachtaireacht rabhaidh"

# Taispeáin earráid agus scoir
fatal "Teachtaireacht earráide mharfach"

# Taispeáin earráid ach lean ar aghaidh
nonfatal "Teachtaireacht earráide neamh-mharfach"
```

**Braiteacht Teanga**

```bash
# Braith teanga an chórais agus socraigh comhad aistriúcháin
_lang_
# Socraíonn sé seo an athróg $langfile (m.sh., "en", "pt")
```

**Braiteacht Córais**

```bash
# do fedora agus córais bunaithe ar rpm-ostree
if is_fedora || is_ostree; then
    # ordú
# do debian amháin
elif is_debian; then
    # ordú
# d'aon chóras seachas córais bunaithe ar Arch nach CachyOS iad
elif ! is_arch; then
    # ordú
fi
```

Soláthraímid sraith leabharlann le haghaidh braiteacht chórais shimplithe. Is féidir iad seo a úsáid i ráitis if agus beagnach aon rud a léann ó STDOUT, agus oibreoidh siad díreach mar a bheifá ag súil. Eochracha tacaithe:
- `is_fedora`: Fedora, CentOS, RHEL
- `is_ostree`: aon dáileadh Adamhach bunaithe ar Fedora
- `is_arch`: aon chóras bunaithe ar Arch, ach amháin CachyOS
- `is_cachy`: CachyOS go sonrach
- `is_debian`: Debian go sonrach
- `is_ubuntu`: aon chóras bunaithe ar Debian/Ubuntu
- `is_suse`: aon chóras bunaithe ar OpenSUSE

#### helpers.lib

Soláthraíonn feidhmeanna cúnta speisialaithe do thascanna coitianta:

**Bainistiú Flatpak**

```bash
# Socraigh Flatpak agus stór Flathub
flatpak_in_lib
# Ansin suiteáil feidhmchláir Flatpak:
flatpak install --or-update --user --noninteractive app.id
```

Déanann an fheidhm `flatpak_in_lib`:
- Suiteálann Flatpak mura bhfuil sé ann
- Cuireann cianitheach Flathub le haghaidh úsáideora agus córais
- Láimhseálann bainisteorí pacáistí éagsúla go huathoibríoch
- Soláthraíonn láimhseáil earráide agus fíorú

**Bainistiú Stórais**

```bash
# Cumasaigh stór multilib ar chórais Arch
multilib_chk

# Cuir stór Chaotic-AUR le córais Arch
chaotic_aur_lib

# Suiteáil stórais RPMFusion ar chórais Fedora
rpmfusion_chk
```

### Teanga agus Logánú

#### Córas Aistriúcháin

Tacaíonn LinuxToys le teangacha iolracha trí chomhaid aistriúcháin JSON:

**Struchtúr Comhaid Teanga**

```
p3/libs/lang/
├── en.json    # Béarla (cúltaca)
├── pt.json    # Portaingéilis
└── ...
```

#### Úsáid Aistriúcháin
```bash
# Luchtaigh braiteacht teanga
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"

# Úsáid aistriúcháin i ndialóga zenity
zenity --question --text "$translation_key" --width 360 --height 300
```

Tá roinnt eochracha teachtaireachta caighdeánacha ann ar féidir leat úsáid a bhaint astu do dhialóga simplí.
- `$finishmsg`: "_Oibríochtaí críochnaithe._"
- `$rebootmsg`: "_Suiteáil críochnaithe. Atosaigh chun athruithe a chur i bhfeidhm._"
- `$cancelmsg`: "_Cealaigh_"
- `$incompatmsg`: "_Níl do chóras oibriúcháin comhoiriúnach._"
- `$abortmsg`: "_Oibríocht cealaithe ag an úsáideoir._"
- `$notdomsg`: "_Tada le déanamh._"

**Dialóg caighdeánach bainteach**
- `$rmmsg`: "_Tá `$LT_PROGRAM` suiteáilte agat cheana. An mian leat é a bhaint?_"

Teastaíonn athróg `LT_PROGRAM` a shocrú roimh ré.

**Aistriúcháin a Chur Leis**

1. Cuir eochracha aistriúcháin le gach comhad JSON teanga
2. Úsáid eochracha aistriúcháin i dtuairiscí script: `# description: app_desc`
3. Déan tagairt d'eochracha i ndialóga agus teachtaireachtaí

#### Rialú Logánaithe
```bash
# Srianta script do logchaighdeáin sonracha
# localize: pt
# Ní thaispeánfar an script seo ach d'úsáideoirí Portaingéilise
```

### Comhoiriúnacht Coimeádán

#### Braiteacht Coimeádán

Braitheann LinuxToys timpeallachtaí coimeádáin go huathoibríoch agus is féidir leis scripteanna a scagadh dá réir.

#### Srianta Coimeádán
```bash
# Folaigh script i ngach coimeádán
# nocontainer

# Folaigh script i gcoimeádáin dáileachta sonracha amháin
# nocontainer: debian, ubuntu
```

**Scagadh Uathoibríoch**

Folaítear scripteanna a úsáideann `flatpak_in_lib` go huathoibríoch i gcoimeádáin mura gceadaítear go sainráite iad le ceanntásca `nocontainer` a shonraíonn córais chomhoiriúnacha.

### Gnéithe Chun Cinn

#### Mód Forbartha

Áiríonn LinuxToys mód forbartha le haghaidh tástáil agus dífhabhtaithe:

#### Athróga Timpeallachta
- **`DEV_MODE=1`** - Cumasaigh mód forbróra
- **`COMPAT=distro`** - Sáraigh braiteacht comhoiriúnachta
- **`CONTAINER=1`** - Déan aithris ar thimpeallacht coimeádán
- **`OPTIMIZER=1/0`** - Déan aithris ar staid optamaithe

#### Sáruithe Forbróra
```bash
# Taispeáin gach script beag beann ar chomhoiriúnacht
DEV_MODE=1 ./run.py

# Tástáil script ar dháileachta sonrach
DEV_MODE=1 COMPAT=arch ./run.py

# Tástáil iompar coimeádán
DEV_MODE=1 CONTAINER=1 ./run.py

# Tástáil scoránaithe optamaithe réamhshocraithe
DEV_MODE=1 OPTIMIZER=1 ./run.py
```

#### Seiceálacha a rinneadh
- Comhréir bash bunúsach
- Modh ardaithe `sudo` ceart trí `sudo_rq`
- Foinsiú leabharlainne ceart
- Seiceálacha eiliminte ceanntásc (rabhaidh amháin, ós rud é nach bhfuil cuid acu éigeantach)

### Bainistiú Atosaithe

Soláthraíonn LinuxToys láimhseáil chuimsitheach atosaithe:

#### Braiteacht Atosaithe
```bash
# Seiceáil an dteastaíonn atosú ón script
script_requires_reboot(script_path, system_compat_keys)

# Seiceáil le haghaidh imscaradh ostree ar feitheamh
check_ostree_pending_deployments()
```

**Dialóga Atosaithe**

- Dialóga rabhaidh atosaithe uathoibríocha
- Rogha úsáideora idir "Atosaigh Anois" agus "Atosaigh Níos Déanaí"
- Dúnadh galánta feidhmchláir ar riachtanas atosaithe
- Láimhseáil speisialta d'imscaradh ostree ar feitheamh

### Láimhseáil Earráide

#### Dea-Chleachtais
```bash
# Seiceáil rathúlacht ordaithe
if ! command_that_might_fail; then
    nonfatal "Theip ar ordú, ag leanúint ar aghaidh..."
    return 1
fi

# Teip ríthábhachtach
if ! critical_command; then
    fatal "Theip ar oibríocht ríthábhachtach"
fi

# Láimhseáil earráide ciúin
command_with_output 2>/dev/null || true
```

### Catagóirí Script

#### Struchtúr Eagrúcháin
```
p3/scripts/
├── office/          # Feidhmchláir Oifige & Oibre
├── game/           # Uirlisí cluichíochta agus seoltóirí
├── devs/           # Uirlisí forbróra
├── utils/          # Fóntais córais
├── drivers/        # Tiománaithe crua-earraí
├── repos/          # Bainistiú stórais
├── extra/          # Uirlisí turgnamhacha/breise
├── pdefaults.sh    # Optamuithe córais
└── psypicks.sh     # Roghnú bogearraí curtha in eagar
```

#### Faisnéis Catagóire

Is féidir le gach catagóir comhad `category-info.txt` a bheith aige:
```
name: Ainm Taispeána Catagóire
description: Eochair tuairiscithe catagóire
icon: folder-icon-name
mode: menu
```

### Dea-Chleachtais

#### Forbairt Script
1. **Úsáid ceanntásca meiteashonraí i gcónaí** le haghaidh catagóirithe agus scagtha ceart
2. **Tástáil comhoiriúnacht** trasna dháileachtaí éagsúla nuair is féidir
3. **Déileáil le hearráidí go galánta** le haiseolas cuí úsáideora
4. **Úsáid leabharlanna atá ann** in ionad feidhmiúlacht choitianta a athchur
5. **Lean struchtúr caighdeánach script** le haghaidh comhsheasmhachta

#### Bainistiú Pacáiste
1. **Dearbhaigh pacáistí in eagair** roimh `_install_` a ghlaogh
2. **Seiceáil infhaighteacht pacáiste** do dháileachtaí éagsúla
3. **Láimhseáil córais rpm-ostree** i gceart (seachain pacáistí neamhriachtanacha)
4. **Úsáid Flatpak d'fheidhmchláir GUI** nuair is féidir

#### Taithí Úsáideora
1. **Soláthair tuairiscí soiléire** sna teangacha atá ar fáil
2. **Úsáid deilbhíní cuí** le haghaidh aitheantais amhairc
3. **Láimhseáil riachtanais atosaithe** i gceart
4. **Taispeáin dul chun cinn agus aiseolas** le linn oibríochtaí fada
5. **Meas roghanna úsáideora** i ndialóga dearbhaithe

#### Logánú
1. **Úsáid eochracha aistriúcháin** in ionad téacs crua-chódaithe
2. **Soláthair aistriúcháin** do gach teanga tacaithe
3. **Tástáil le logchaighdeáin éagsúla** chun feidhmiúlacht cheart a chinntiú
4. **Úsáid srianta logchaighdeáin** nuair a bhaineann scripteanna le réigiún sonrach

Soláthraíonn an treoir seo an bunús chun scripteanna láidre, comhoiriúnacha agus cairdiúla úsáideora a chruthú laistigh d'éiceachóras LinuxToys. Trí úsáid a bhaint as na leabharlanna atá ar fáil agus na coinbhinsiúin seo a leanúint, is féidir le forbróirí scripteanna a chruthú a oibríonn go seamless trasna dháileachtaí Linux iolracha agus a sholáthraíonn taithí úsáideora chomhsheasmhach.

## III. Gníomhairí Códála AI

Le húsáid uirlisí AI ag éirí níos coitianta gach lá, tá sé tábhachtach roinnt treoirlínte a bhunú dá n-úsáid i bhforbairt LinuxToys. Creidimid gur féidir leo a bheith ina n-uirlisí an-chabhrach agus cabhrú le forbróirí a bheith níos éifeachtaí, má úsáidtear iad ar bhealach measartha, freagrach.

### Samhlacha Ceadaithe

Bunaithe ar thástáil, ní cheadóimid ach na samhlacha seo a leanas le haghaidh cúnta cóid:
- **Grok Code Fast** - samhail tapa, cost-éifeachtach, idéalach le húsáid mar 'uathchríochnú ar stéaróidí'
- **Claude Sonnet 4** - samhail chun cinn, oiriúnach d'anailís chóid chasta agus obair, ach níos costasaí freisin
- **Qwen Coder 3** - samhail mhaith cothromaíochta, ag soláthar feidhmíocht mhaith le haghaidh tascanna códála éagsúla agus cruinneas agus cost-éifeachtúlacht mhaith á gcoimeád

Theip ar gach samhail eile a tástáladh torthaí sásúla a sholáthar san fhadtéarma, go minic ag táirgeadh cóid mícheart nó fiú contúirteach in hallúcinadóireachtaí as smacht.

### Treoirlínte Úsáide

1. **Forlíonadh, Ní Ionadú**: Ba cheart uirlisí AI a úsáid chun iarrachtaí códála daonna a chuidiú agus a fheabhsú, ní chun iad a ionadú ar fad riamh.
2. **Athbhreithniú Cóid**: Caithfear gach cód a ghineann AI in aon cháil a athbhreithniú agus a thástáil go críochnúil chun a chinntiú go gcomhlíonann sé ár gcaighdeáin arda cáilíochta, slándála agus feidhmiúlachta, mar a dhéanfadh aon chód.
3. **Feasacht Slándála**: Bí airdeallach faoi leochaileachtaí slándála a d'fhéadfadh a bheith i gcód arna ghiniúint ag AI. B'fhéidir nach leanfaidh AI na dea-chleachtais slándála i gcónaí.

### Úsáid AI ar Aistriúcháin

Tuigimid go bhfuil sé an-tábhachtach go mbeadh LinuxToys ar fáil i dteangacha dúchasacha daoine, mar go ndéanann sé seo an bogearra níos inrochtana, rud atá ina phríomhfhactor dár rathúlacht. Mar sin féin, is tasc an-am-íditheach é freisin, agus tá tionscadail i bhfad níos mó ná muid tar éis streachailt le hoibrithe deonacha a aimsiú chun cabhrú leis seo, mar sin úsáidimid uirlisí AI chun aistriúcháin a ghiniúint. Ba cheart aon neamhchruinneas nó botúin in aistriúchán a thuairisciú ar ár [leathanach saincheisteanna GitHub](https://github.com/psygreg/linuxtoys/issues).

Is é **Claude Sonnet 4** an tsamhail a úsáidtear faoi láthair dár gcuid aistriúchán, mar gur thaispeáin sé na torthaí is fearr inár dtástálacha, gan diall ón mbunbhrí.