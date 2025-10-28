# Mód CLI

Soláthraíonn an modúl seo feidhmiúlacht chomhéadan líne na n-orduithe do LinuxToys, rud a ligeann d'fhoireann TF agus do theicneoirí suiteálacha a uathoibriú ag baint úsáide as comhaid manifeast, agus úsáid iomlán an aip gan an comhéadan grafach.

#### Príomhghnéithe:
- Braiteacht agus suiteáil uathoibríoch pacáistí córais
- Braiteacht agus suiteáil uathoibríoch flatpak
- Rith scripteanna LinuxToys
- Tacaíocht do chomhaid manifeast saincheaptha le bailíochtú
- Tacaíocht do bhainisteoir pacáistí tras-ardán (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## Úsáid Mhód CLI:
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### Roghanna:
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: suiteálann roghanna roghnaithe (scripteanna, pacáistí), an mód réamhshocraithe
- `-s, --script`: suiteálann scripteanna LinuxToys a shonraítear
- `-p, --package`: suiteálann pacáistí trí bhainisteoirí pacáistí do chóras nó flatpaks (caithfear an t-ainm ceart a thabhairt)

- `-h, --help`: taispeáint na roghanna atá ar fáil
- `-l, --list`: liostáil gach script ar fáil do do chóras oibriúcháin reatha
- `-m, --manifest`: do úsáid manifeast
- `-v, --version`: taispeáint faisnéis an leagan
- `-y, --yes`: scip prompts deimhnithe
- `update, upgrade`: seiceáil do nuashonruithe agus uasghrádaigh LinuxToys

Is féidir roghanna a úsáid le chéile ar an gcaoi chéanna le `pacman` Arch.
```
linuxtoys-cli -sy apparmor  # rith suiteálaí apparmor do Debian/Arch le deimhniú uathoibríoch
```

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