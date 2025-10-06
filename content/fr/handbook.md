# Manuel du Développeur

## I. Directives de Contribution

Merci pour votre intérêt à contribuer à LinuxToys ! Ce projet vise à fournir une collection d'outils pour Linux de manière conviviale, rendant les fonctionnalités puissantes accessibles à tous les utilisateurs.

### Documentation

Avant de commencer, veuillez consulter le [Manuel du Développeur](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook) pour une documentation complète sur les bibliothèques et pratiques de développement de LinuxToys.

#### Priorités de Développement

Lorsque vous contribuez à LinuxToys, veuillez garder à l'esprit ces priorités fondamentales, listées par ordre d'importance :

#### 1. Sécurité et Confidentialité d'abord
- **La sécurité et la confidentialité de l'utilisateur doivent toujours être la priorité absolue**
- Tous les scripts et outils doivent être testés et examinés minutieusement
- N'implémentez jamais de fonctionnalités qui pourraient compromettre les données utilisateur ou la sécurité du système
- Documentez clairement tous les risques potentiels ou changements système
- Suivez les pratiques de codage sécurisées et validez toutes les entrées utilisateur

#### 2. Convivialité et Accessibilité
- Concevez en pensant à l'utilisateur d'ordinateur moyen
- Fournissez des interfaces claires et intuitives
- Incluez des descriptions utiles et des conseils pour toutes les fonctionnalités, en restant direct
- Assurez l'accessibilité pour les utilisateurs avec différents niveaux de compétences techniques
- Utilisez un langage simple dans le texte orienté utilisateur et les messages d'erreur

#### 3. Fiabilité et Autonomie
- **Toutes les fonctionnalités doivent fonctionner comme prévu sans nécessiter de solutions de contournement supplémentaires de la part de l'utilisateur**
- Les outils doivent gérer les cas limites avec élégance
- Fournissez des messages d'erreur clairs quand quelque chose ne va pas
- Testez à travers les distributions et versions supportées
- Assurez-vous que les dépendances sont correctement gérées et documentées

#### 4. Restrictions des Outils CLI
- **Les interfaces en ligne de commande doivent être restreintes aux cas d'usage développeur et administrateur système**
- L'utilisateur d'ordinateur moyen ne connaît pas ou ne veut pas traiter avec les émulateurs de terminal
- Les fonctionnalités CLI uniquement doivent être restreintes aux menus Développeur et Administration Système

### Enfin...

- Toutes les Pull Requests seront examinées manuellement avant approbation
- Assurez-vous que vos contributions s'alignent avec les priorités de développement listées ci-dessus
- Testez vos changements à travers différentes distributions Linux quand possible
- Suivez le style de code existant et la structure
- Documentez toute nouvelle fonctionnalité ou changements significatifs

### Premiers Pas

1. Consultez le [Manuel du Développeur](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. Forkez le dépôt et créez une branche de fonctionnalité
3. Faites vos changements en suivant les priorités de développement
4. Testez minutieusement à travers les systèmes supportés
5. Soumettez une Pull Request avec une description claire de vos changements

Nous apprécions vos contributions pour rendre Linux plus accessible et convivial pour tous !

## II. Fonctionnalités et Utilisation de LinuxToys

### Structure de Script et Métadonnées

#### Modèle de Script de Base

Tous les scripts LinuxToys suivent une structure standardisée avec des en-têtes de métadonnées :

```bash
#!/bin/bash
# name: Human Readable Name (ou placeholder pour traduction)
# version: 1.0
# description: description_key_or_text
# icon: icon-name
# compat: ubuntu, debian, fedora, arch, cachy, suse, ostree, ublue
# reboot: no|yes|ostree
# noconfirm: yes
# localize: en, pt...
# nocontainer
# repo: https://repo.url

# --- Début du code de script ---
source "$SCRIPT_DIR/libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/libs/helpers.lib"

# Votre logique de script ici
```

#### En-têtes de Métadonnées

**En-têtes Requis**

- **`# name:`** - Nom d'affichage montré dans l'UI
- **`# version:`** - Version du script (typiquement "1.0")
- **`# description:`** - Clé de description pour traductions ou texte direct
- **`# icon:`** - Identifiant d'icône pour l'UI - *non requis dans les menus de liste de vérification*

**En-têtes Optionnels**

- **`# compat:`** - Liste séparée par virgules des distributions compatibles
- **`# reboot:`** - Exigence de redémarrage : `no` (par défaut), `yes`, ou `ostree`
- **`# noconfirm:`** - Ignorer le dialogue de confirmation si défini à `yes`
- **`# localize:`** - Liste séparée par virgules des locales supportées
- **`# nocontainer:`** - Masquer le script dans les environnements conteneurisés
- **`# gpu:`** - Afficher uniquement le script pour les fournisseurs de GPU sélectionnés, entrées valides `Amd`, `Intel`, `Nvidia`. Peut avoir plus d'un fournisseur.
- **`# desktop:`** - Afficher uniquement le script pour les environnements de bureau sélectionnés, entrées valides `gnome`, `plasma` et `other`.
- **`#repo:`** - Rend le nom du script cliquable dans les dialogues de confirmation. Devrait permettre à l'utilisateur d'accéder rapidement au dépôt original de la fonctionnalité correspondante.

#### Système de Compatibilité

LinuxToys supporte plusieurs distributions Linux à travers un système de clés de compatibilité :

**Distributions Supportées**

- **`ubuntu`** - Ubuntu et dérivés
- **`debian`** - Debian et dérivés  
- **`fedora`** - Fedora et systèmes basés sur RHEL
- **`arch`** - Arch Linux (excluant CachyOS)
- **`cachy`** - CachyOS spécifiquement
- **`suse`** - openSUSE et systèmes SUSE
- **`ostree`** - systèmes basés sur rpm-ostree
- **`ublue`** - images Universal Blue (Bazzite, Bluefin, Aurora)

#### Exigences de Redémarrage
- **`no`** - Aucun redémarrage requis (par défaut)
- **`yes`** - Toujours nécessite un redémarrage
- **`ostree`** - Nécessite un redémarrage uniquement sur les systèmes ostree/ublue

#### Détection de conteneur

L'application est capable de détecter si elle s'exécute depuis un conteneur et masquer ou afficher certaines options selon l'en-tête correspondant. Ceci est aussi compatible avec les clés `compat`.

**Exemples**

- **`# nocontainer`** - Masque le script dans les environnements conteneurisés
- **`# nocontainer: ubuntu, debian`** - Masque le script uniquement dans les conteneurs Ubuntu et Debian
- **`# nocontainer: invert`** - Affiche le script **uniquement** dans les environnements conteneurisés
- **`# nocontainer: invert, debian`** - Affiche le script uniquement dans les conteneurs Debian

### Bibliothèques Principales

#### linuxtoys.lib

La bibliothèque principale fournit des fonctions essentielles pour les opérations de script :

**Gestion des Paquets**

```bash
# Déclarer les paquets à installer
_packages=(package1 package2 package3)
_install_
```

La fonction `_install_` automatiquement :
- Détecte le gestionnaire de paquets (apt, pacman, dnf, zypper, rpm-ostree)
- Vérifie si les paquets sont déjà installés
- Installe les paquets manquants en utilisant la méthode appropriée
- Gère les systèmes rpm-ostree avec des paquets en couches
- Désactive la variable `_packages` à la completion, permettant son utilisation multiple dans le même script si nécessaire

**Gestion Flatpak**

```bash
# Déclarer les paquets à installer
_flatpaks=(package1 package2 package3)
_flatpak_
```

La fonction `_flatpak_` installe automatiquement chaque flatpak dans le tableau avec des paramètres standards (niveau utilisateur, dépôt Flathub). Elle désactivera aussi `_flatpaks` à la completion, vous permettant de l'utiliser plusieurs fois dans le même script si nécessaire.

**Fonctions d'Interface Utilisateur**

```bash
# Demander le mot de passe sudo avec GUI
sudo_rq

# Afficher le dialogue d'information
zeninf "Message d'information"

# Afficher le dialogue d'avertissement
zenwrn "Message d'avertissement"

# Afficher l'erreur et quitter
fatal "Message d'erreur fatale"

# Afficher l'erreur mais continuer
nonfatal "Message d'erreur non fatale"
```

**Détection de Langue**

```bash
# Détecter la langue système et définir le fichier de traduction
_lang_
# Ceci définit la variable $langfile (ex. "en", "pt")
```

#### helpers.lib

Fournit des fonctions d'aide spécialisées pour les tâches communes :

**Gestion Flatpak**

```bash
# Configurer Flatpak et le dépôt Flathub
flatpak_in_lib
# Puis installer les applications Flatpak :
flatpak install --or-update --user --noninteractive app.id
```

La fonction `flatpak_in_lib` :
- Installe Flatpak s'il n'est pas présent
- Ajoute le remote Flathub pour utilisateur et système
- Gère différents gestionnaires de paquets automatiquement
- Fournit la gestion d'erreur et la vérification

**Gestion des Dépôts**

```bash
# Activer le dépôt multilib sur les systèmes Arch
multilib_chk

# Ajouter le dépôt Chaotic-AUR sur les systèmes Arch
chaotic_aur_lib

# Installer les dépôts RPMFusion sur les systèmes Fedora
rpmfusion_chk
```

### Langue et Localisation

#### Système de Traduction

LinuxToys supporte plusieurs langues à travers des fichiers de traduction JSON :

**Structure des Fichiers de Langue**

```
p3/libs/lang/
├── en.json    # Anglais (fallback)
├── pt.json    # Portugais
└── ...
```

#### Utilisation de Traduction
```bash
# Charger la détection de langue
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"

# Utiliser les traductions dans les dialogues zenity
zenity --question --text "$translation_key" --width 360 --height 300
```

Il y a quelques clés de message standard que vous pouvez utiliser pour des dialogues simples.
- `$finishmsg`: "_Opérations terminées._"
- `$rebootmsg`: "_Installation terminée. Redémarrer pour que les changements prennent effet._"
- `$cancelmsg`: "_Annuler_"
- `$incompatmsg`: "_Votre système d'exploitation n'est pas compatible._"
- `$abortmsg`: "_Opération annulée par l'utilisateur._"
- `$notdomsg`: "_Rien à faire._"

**Dialogue de suppression standard**
- `$rmmsg`: "_Vous avez déjà `$LT_PROGRAM` installé. Souhaitez-vous le supprimer ?_"

Nécessite de définir une variable `LT_PROGRAM` au préalable.

**Ajouter des Traductions**

1. Ajouter les clés de traduction à tous les fichiers JSON de langue
2. Utiliser les clés de traduction dans les descriptions de script : `# description: app_desc`
3. Référencer les clés dans les dialogues et messages

#### Contrôle de Localisation
```bash
# Restreindre le script à des locales spécifiques
# localize: pt
# Ce script ne s'affichera que pour les utilisateurs parlant portugais
```

### Compatibilité Conteneur

#### Détection de Conteneur

LinuxToys détecte automatiquement les environnements conteneurisés et peut filtrer les scripts en conséquence.

#### Restrictions de Conteneur
```bash
# Masquer le script dans tous les conteneurs
# nocontainer

# Masquer le script uniquement dans des conteneurs de distribution spécifiques
# nocontainer: debian, ubuntu
```

**Filtrage Automatique**

Les scripts utilisant `flatpak_in_lib` sont automatiquement masqués dans les conteneurs sauf s'ils sont explicitement autorisés avec des en-têtes `nocontainer` spécifiant des systèmes compatibles.

### Fonctionnalités Avancées

#### Mode Développement

LinuxToys inclut un mode développement pour les tests et le débogage :

#### Variables d'Environnement
- **`DEV_MODE=1`** - Activer le mode développeur
- **`COMPAT=distro`** - Remplacer la détection de compatibilité
- **`CONTAINER=1`** - Simuler l'environnement conteneur  
- **`OPTIMIZER=1/0`** - Simuler l'état d'optimisation

#### Remplacements Développeur
```bash
# Afficher tous les scripts indépendamment de la compatibilité
DEV_MODE=1 ./run.py

# Tester le script sur une distribution spécifique
DEV_MODE=1 COMPAT=arch ./run.py

# Tester le comportement conteneur
DEV_MODE=1 CONTAINER=1 ./run.py

# Tester le basculement d'optimisation par défaut
DEV_MODE=1 OPTIMIZER=1 ./run.py
```

#### Vérifications de Développement
- Vérification de la syntaxe de base de bash
- Méthode d'élévation `sudo` appropriée via `sudo_rq`
- Chargement correct des bibliothèques
- Vérifications des éléments d'en-tête (avertissements uniquement, certains ne sont pas obligatoires)

### Gestion des Redémarrages

LinuxToys fournit une gestion complète des redémarrages :

#### Détection de Redémarrage
```bash
# Vérifier si le script nécessite un redémarrage
script_requires_reboot(script_path, system_compat_keys)

# Vérifier les déploiements ostree en attente
check_ostree_pending_deployments()
```

**Dialogues de Redémarrage**

- Dialogues d'avertissement de redémarrage automatiques
- Choix utilisateur entre "Redémarrer Maintenant" et "Redémarrer Plus Tard"
- Fermeture élégante de l'application sur exigence de redémarrage
- Gestion spéciale pour les déploiements ostree en attente

### Gestion des Erreurs

#### Meilleures Pratiques
```bash
# Vérifier le succès de la commande
if ! command_that_might_fail; then
    nonfatal "Commande échouée, continuation..."
    return 1
fi

# Échec critique
if ! critical_command; then
    fatal "Opération critique échouée"
fi

# Gestion silencieuse d'erreur
command_with_output 2>/dev/null || true
```

### Catégories de Scripts

#### Structure d'Organisation
```
p3/scripts/
├── office/          # Applications Bureau & Travail
├── game/           # Outils de jeu et lanceurs
├── devs/           # Outils développeur
├── utils/          # Utilitaires système
├── drivers/        # Pilotes matériel
├── repos/          # Gestion des dépôts
├── extra/          # Outils expérimentaux/additionnels
├── pdefaults.sh    # Optimisations système
└── psypicks.sh     # Sélection de logiciels curatée
```

#### Information de Catégorie

Chaque catégorie peut avoir un fichier `category-info.txt` :
```
name: Nom d'Affichage de Catégorie
description: clé de description de catégorie
icon: folder-icon-name
mode: menu
```

### Meilleures Pratiques

#### Développement de Script
1. **Utilisez toujours les en-têtes de métadonnées** pour une catégorisation et un filtrage appropriés
2. **Testez la compatibilité** à travers différentes distributions quand possible
3. **Gérez les erreurs avec élégance** avec un feedback utilisateur approprié
4. **Utilisez les bibliothèques existantes** au lieu de ré-implémenter la fonctionnalité commune
5. **Suivez la structure de script standard** pour la cohérence

#### Gestion des Paquets
1. **Déclarez les paquets dans des tableaux** avant d'appeler `_install_`
2. **Vérifiez la disponibilité des paquets** pour différentes distributions
3. **Gérez les systèmes rpm-ostree** appropriément (évitez les paquets non essentiels)
4. **Utilisez Flatpak pour les applications GUI** quand possible

#### Expérience Utilisateur
1. **Fournissez des descriptions claires** dans les langues fournies
2. **Utilisez des icônes appropriées** pour l'identification visuelle
3. **Gérez les exigences de redémarrage** appropriément
4. **Affichez le progrès et le feedback** pendant les longues opérations
5. **Respectez les choix utilisateur** dans les dialogues de confirmation

#### Localisation
1. **Utilisez les clés de traduction** au lieu du texte codé en dur
2. **Fournissez des traductions** pour toutes les langues supportées
3. **Testez avec différentes locales** pour assurer une fonctionnalité appropriée
4. **Utilisez les restrictions de locale** quand les scripts sont spécifiques à une région

Ce guide fournit la base pour créer des scripts robustes, compatibles et conviviaux dans l'écosystème LinuxToys. En tirant parti des bibliothèques fournies et en suivant ces conventions, les développeurs peuvent créer des scripts qui fonctionnent de manière transparente à travers plusieurs distributions Linux tout en fournissant une expérience utilisateur cohérente.

## III. Agents de Codage IA

Avec l'utilisation des outils d'IA devenant de plus en plus répandue chaque jour, il est important d'établir des directives pour leur utilisation dans le développement de LinuxToys. Nous croyons qu'ils peuvent être des outils très utiles et aider les développeurs à être plus efficaces, s'ils sont employés de manière modérée et responsable.

### Modèles Autorisés

Basé sur les tests, nous autoriserons *seulement* les modèles suivants pour l'assistance au code :
- **Grok Code Fast** - un modèle rapide et rentable, idéal pour une utilisation comme 'autocomplétion sous stéroïdes'
- **Claude Sonnet 4** - modèle avancé, adapté pour l'analyse et le travail de code complexe, mais aussi plus coûteux
- **Qwen Coder 3** - modèle bien équilibré, fournissant de bonnes performances pour une variété de tâches de codage tout en maintenant une bonne précision et efficacité des coûts

Tous les autres modèles testés ont échoué à fournir des résultats satisfaisants à long terme, produisant souvent du code incorrect ou même dangereux dans des hallucinations hors de contrôle.

### Directives d'Utilisation

1. **Compléter, Ne Pas Remplacer** : Les outils d'IA doivent être utilisés pour assister et améliorer les efforts de codage humain, jamais pour les remplacer entièrement.
2. **Révision de Code** : Tout code généré par l'IA en quelque capacité que ce soit doit être soigneusement révisé et testé pour s'assurer qu'il répond à nos normes élevées de qualité, sécurité et fonctionnalité, comme tout code.
3. **Conscience de Sécurité** : Soyez vigilant concernant les vulnérabilités de sécurité potentielles dans le code généré par l'IA. L'IA peut ne pas toujours suivre les meilleures pratiques de sécurité.

### Utilisation de l'IA pour les Traductions

Nous comprenons qu'avoir LinuxToys disponible dans les langues natives des gens est très important, car cela rend le logiciel plus accessible, ce qui est un facteur clé pour notre succès. Cependant, c'est aussi une tâche très chronophage, et des projets bien plus importants que nous ont eu du mal à trouver des bénévoles pour aider avec cela, donc nous utilisons des outils d'IA pour générer des traductions. Toute inexactitude ou erreur dans la traduction devrait être signalée sur notre [page des issues GitHub](https://github.com/psygreg/linuxtoys/issues).

Le modèle actuellement utilisé pour nos traductions est **Claude Sonnet 4**, car il a montré les meilleurs résultats dans nos tests, sans déviations du sens original.
