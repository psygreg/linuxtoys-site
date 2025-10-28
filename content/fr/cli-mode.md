# Mode CLI

Ce module fournit des fonctionnalités d'interface en ligne de commande pour LinuxToys, permettant au personnel informatique 
et aux techniciens d'automatiser les installations en utilisant des fichiers manifestes, et une utilisation complète de l'application sans l'interface graphique.

#### Fonctionnalités Principales :
- Détection automatique et installation des paquets système
- Détection automatique et installation des flatpaks
- Exécution des scripts LinuxToys
- Support des fichiers manifestes personnalisés avec validation
- Support multiplateforme des gestionnaires de paquets (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## Utilisation du Mode CLI :
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### Options :
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: installe les options sélectionnées (scripts, paquets), le mode par défaut
- `-s, --script`: installe les scripts LinuxToys spécifiés
- `-p, --package`: installe les paquets via le gestionnaire de paquets de votre système ou les flatpaks (le nom correct doit être fourni)

- `-h, --help`: affiche les options disponibles
- `-l, --list`: répertorie tous les scripts disponibles pour votre système d'exploitation actuel
- `-m, --manifest`: pour l'utilisation des manifestes
- `-v, --version`: affiche les informations de version
- `-y, --yes`: ignore les invites de confirmation
- `update, upgrade`: vérifie les mises à jour et met à jour LinuxToys

Les options peuvent être utilisées ensemble de manière similaire à `pacman` d'Arch.
```
linuxtoys-cli -sy apparmor  # exécute l'installateur d'apparmor pour Debian/Arch avec confirmation automatique
```

## Format du Fichier Manifeste
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- La première ligne doit être : `# LinuxToys Manifest File`
- Liste les éléments un par ligne (scripts, paquets ou flatpaks)
- Les éléments peuvent être dans le désordre
- Les lignes commençant par `#` sont des commentaires
- Les lignes vides sont ignorées
- Priorité de l'analyseur : Scripts > Paquets > Flatpaks
