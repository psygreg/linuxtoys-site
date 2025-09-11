# Mode CLI

Ce module fournit des fonctionnalités d'interface en ligne de commande pour LinuxToys, permettant au personnel informatique 
et aux techniciens d'automatiser les installations en utilisant des fichiers manifestes.

#### Fonctionnalités Principales :
- Détection automatique et installation des paquets système
- Détection automatique et installation des flatpaks
- Exécution des scripts LinuxToys
- Support des fichiers manifestes personnalisés avec validation
- Support multiplateforme des gestionnaires de paquets (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## Utilisation du Mode CLI :
```
LT_MANIFEST=1 python3 run.py [options]
```

#### Options :
    <aucun argument>        - Utilise 'manifest.txt' par défaut dans le répertoire courant, solution de repli
    <chemin_manifeste>      - Utilise le fichier manifeste spécifié
    check-updates           - Vérifie les mises à jour LinuxToys
    --help, -h              - Affiche les informations d'utilisation

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
