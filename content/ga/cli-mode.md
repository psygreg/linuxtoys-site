# Mód CLI

Soláthraíonn an modúl seo feidhmiúlacht chomhéadan líne na n-orduithe do LinuxToys, rud a ligeann d'fhoireann TF agus do theicneoirí suiteálacha a uathoibriú ag baint úsáide as comhaid manifeast.

#### Príomhghnéithe:
- Braiteacht agus suiteáil uathoibríoch pacáistí córais
- Braiteacht agus suiteáil uathoibríoch flatpak
- Rith scripteanna LinuxToys
- Tacaíocht do chomhaid manifeast saincheaptha le bailíochtú
- Tacaíocht do bhainisteoir pacáistí tras-ardán (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## Úsáid Mhód CLI:
```
LT_MANIFEST=1 python3 run.py [roghanna]
```

#### Roghanna:
    <gan argóintí>             - Úsáid 'manifest.txt' réamhshocraithe sa chomhadlann reatha, cúltaca
    <cosán_manifeast>          - Úsáid comhad manifeast sonraithe
    check-updates              - Seiceáil nuashonruithe LinuxToys
    --help, -h                 - Taispeáin faisnéis úsáide

## Formáid Chomhad Manifeast
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- Ní mór an chéad líne a bheith: `# LinuxToys Manifest File`
- Liostáil míreanna ceann in aghaidh na líne (scripteanna, pacáistí, nó flatpak)
- Is féidir míreanna a bheith as ord
- Is tráchtanna iad línte a thosaíonn le `#`
- Déantar neamhaird de línte folmha
- Tosaíocht parsálaí: Scripteanna > Pacáistí > Flatpak