# LinuxToys User Guide

LinuxToys is a collection of tools designed to make installing, configuring, optimizing, and maintaining software on Linux easier.

Instead of requiring you to manually follow different sets of terminal instructions for different Linux distributions, LinuxToys provides a common interface for supported tasks. It detects relevant characteristics of your system and uses the appropriate procedures for your Linux distribution and hardware.

This guide covers the basic concepts you should know as a LinuxToys user, including:

* how LinuxToys works;
* installing and removing features;
* the **Action Registry**;
* using **Manifest files**;
* reporting problems;
* privacy considerations when sending bug reports;
* using LinuxToys from the command line.

---

## How LinuxToys works

Most options presented by LinuxToys represent an installation, configuration, optimization, or maintenance procedure.

When you select one, LinuxToys handles the underlying Linux commands for you. Depending on what you selected, this may involve operations such as:

* installing or removing packages;
* installing Flatpak applications;
* downloading and installing software;
* enabling repositories;
* creating or modifying configuration files;
* enabling or disabling system services;
* applying system settings;
* running application-specific setup procedures.

LinuxToys supports multiple Linux distributions, so the exact commands used may be different from one system to another even when the option shown in the interface is the same.

For example, installing a package on Fedora, Ubuntu and Arch Linux requires different package managers. LinuxToys' libraries abstract many of these differences so that supported features can use the appropriate method automatically.

### Compatibility detection

Not every LinuxToys feature applies to every computer.

LinuxToys can use compatibility information to determine whether a feature is appropriate for the current system, including factors such as the Linux distribution, hardware, desktop environment and whether LinuxToys is running inside a container.

Consequently, the options available on one computer may not be identical to those shown on another.

This is intentional: LinuxToys tries to avoid presenting or executing procedures known not to apply to the current system.

### Administrative privileges

Some operations modify system files or install system-wide software and therefore require administrator privileges.

LinuxToys will request authentication when it actually needs elevated privileges. You do **not** need to run the entire application as root.

---

## Installing features

The graphical interface is the easiest way to use LinuxToys.

Features are organized into categories according to their purpose. Selecting a feature displays its name and description so you can determine what it does before running it.

Some features are simple package installations, while others perform several related operations. For example, a feature may need to add a software repository, install packages, configure a service and create configuration files as part of one procedure.

For this reason, a LinuxToys feature should be thought of as an **action or procedure**, rather than simply as a package.

During execution, LinuxToys may display a terminal so that you can follow what it is doing. Some procedures may also ask questions when a decision cannot safely be made automatically.

---

## The Action Registry

LinuxToys includes an **Action Registry** that keeps track of supported changes performed through LinuxToys.

**![LinuxToys Action Registry](/docs/assets/action-registry.webp)**

The registry has two important purposes:

1. giving you a history of actions performed through LinuxToys;
2. allowing supported actions to be reversed later.

When LinuxToys performs a tracked procedure, its libraries can record the operations that were made. The registry associates those operations with the LinuxToys feature that performed them.

This means LinuxToys can often do considerably better than simply running the original installation procedure backwards.

### Reverting an action

When an installed feature supports removal, LinuxToys can use its recorded transaction to determine what needs to be undone.

For example, depending on the original procedure, reverting it may involve:

* removing packages that were installed;
* restoring configuration files;
* removing files that were created;
* restoring files that were replaced or modified;
* undoing other operations recorded during installation.

Reversion is based on the operations actually recorded for that installation. Internally, those operations are processed in reverse order when LinuxToys constructs the removal procedure.

This is especially useful for more complex features, where simply uninstalling one package would not undo everything that was changed.

### The registry is not a system-wide history

The Action Registry records **supported operations performed through LinuxToys**. It is not a general audit log of everything that happens on your Linux installation.

If you later modify, replace or remove something manually, LinuxToys cannot necessarily know about that external change.

Likewise, some third-party installers perform operations internally that LinuxToys cannot individually track.

For that reason, the Action Registry should be considered a record of what LinuxToys knows it changed, rather than a snapshot or backup of your entire operating system.

---

<a id="manifest-files"></a>

## Manifest files

Manifest files let you describe a collection of software and LinuxToys features that should be installed together.

They are useful when:

* configuring a new computer;
* reinstalling a system;
* setting up several computers similarly;
* keeping a reusable list of your preferred applications and LinuxToys features.

A manifest is deliberately a simple text file.

### Basic format

Every LinuxToys manifest must begin with:

```text
# LinuxToys Manifest File
```

After that, put one item on each line. Empty lines are ignored, and lines beginning with `#` can be used as comments.

For example:

```text
# LinuxToys Manifest File

# Applications
firefox
org.kde.kdenlive

# LinuxToys features
My LinuxToys Feature
```

A manifest can contain three kinds of items:

* LinuxToys features;
* packages available through your system's package manager;
* Flatpak application IDs.

You do **not** have to put these categories in any particular order.

For example, this is perfectly valid:

```text
# LinuxToys Manifest File

org.kde.kdenlive
My LinuxToys Feature
git
org.gimp.GIMP
Another LinuxToys Feature
htop
```

LinuxToys classifies and validates the entries before installation. Explicit prefixes are also supported when you want to remove ambiguity: `script:`, `package:`/`pkg:`, and `flatpak:`.

For example:

```text
# LinuxToys Manifest File

script:My LinuxToys Feature
package:git
flatpak:org.kde.kdenlive
```

For most manifests, the prefixes are optional.

### LinuxToys feature names

LinuxToys features can be identified using their normal internal/script name where applicable, but manifests also accept the **user-facing name shown in the LinuxToys interface**.

The lookup used by manifest mode checks both the underlying filename and the parsed display name for regular LinuxToys features. Repository-provided entries can also be found by their displayed name.

This means you can make a manifest easier to read:

```text
# LinuxToys Manifest File

Gaming Essentials
Performance Tweaks
org.kde.kdenlive
git
```

instead of having to know the filenames LinuxToys uses internally.

> **Tip:** Names can change between translations. For a manifest intended to be shared between machines using different interface languages, using the underlying LinuxToys feature name may therefore be preferable where applicable.

### Packages

Normal package names can be included directly:

```text
git
htop
vim
```

LinuxToys checks whether each package exists in the repositories available for the current distribution before proceeding. The manifest implementation uses the appropriate package database for supported Debian/Ubuntu, Arch, Fedora/RHEL, openSUSE and Solus-based systems.

You can explicitly identify an entry as a package when necessary:

```text
package:git
```

or:

```text
pkg:git
```

### Flatpaks

Flatpaks should normally be written using their application ID:

```text
org.gimp.GIMP
org.kde.kdenlive
com.valvesoftware.Steam
```

You can also explicitly mark one:

```text
flatpak:org.kde.kdenlive
```

LinuxToys checks whether the requested Flatpak can be found before attempting the installation.

### Validation before installation

LinuxToys validates a manifest before carrying out its requested operations.

If an entry cannot be recognized as a LinuxToys feature, available package or Flatpak, manifest validation fails instead of silently ignoring the invalid item.

Likewise, LinuxToys applies its normal compatibility checks to LinuxToys features. An otherwise valid feature that is known not to be compatible with the current machine can be skipped.

This makes manifests safer to reuse between different machines.

For example, the same manifest may contain a LinuxToys feature intended only for certain hardware. A computer where that feature applies can use it, while LinuxToys can avoid executing it on an incompatible system.

### Loading a manifest from the graphical interface

LinuxToys can load a manifest directly from its graphical interface.

**![Loading Manifest from GUI](/docs/assets/demo-manifest.webp)**

Select the manifest option, choose your `.txt` manifest file, and review the detected items before proceeding.

This is generally the easiest way to use a manifest interactively.

Manifest mode is also available from the command line, which is useful for automation and system deployment.

---

## Reporting a problem

Linux systems vary enormously in distribution, version, hardware, drivers, desktop environments and configuration.

A procedure that works correctly on one system may expose a problem on another. LinuxToys therefore includes an integrated bug-reporting system designed to provide useful diagnostic information when something goes wrong.

When reporting a problem, try to describe **what you were attempting to do and what actually happened**.

A useful description might be:

> I tried to install the feature. The installation reached the package installation step, but the package manager reported that the requested package could not be found.

This is much more useful than:

> It doesn't work.

If you noticed anything unusual immediately before the problem occurred, mention that as well.

### Selecting the affected application

When applicable, LinuxToys can allow you to identify an officially distributed application as the subject of the report.

Use this option when the problem concerns that application rather than LinuxToys itself.

This helps distinguish problems with LinuxToys' installation or integration from problems that may belong to the application itself, and can help supported upstream developers receive useful real-world feedback.

If the problem is with LinuxToys generally, you do not need to select an application.

### Diagnostic information

A good Linux bug report often needs more information than an error message alone.

Relevant system information can make it possible to identify problems that depend on factors such as:

* Linux distribution and version;
* kernel;
* CPU;
* detected GPU hardware;
* desktop environment or window manager;
* other system characteristics relevant to the failed operation.

LinuxToys' reporting system is designed to provide useful technical context so that users do not have to manually discover every relevant system detail before submitting a report.

---

### Privacy and bug reports

Diagnostic information is useful, but it should not require unnecessarily exposing personal information.

LinuxToys' bug-reporting workflow is designed around collecting **technical information relevant to diagnosing the problem**, rather than creating a general-purpose inventory of the user's computer.

Before submitting a report, you should still avoid manually entering sensitive information into the description. In particular, do not include passwords, authentication tokens, private keys, personal documents or other secrets.

When logs are involved, LinuxToys applies privacy-oriented handling intended to prevent common personally identifying information from being unnecessarily included in a report.

The objective is simple:

> **A bug report should describe the computer well enough to diagnose the technical problem without identifying the person using it.**

You should nevertheless treat any diagnostic report as information that may become visible to the developers handling the issue. If you manually add terminal output or other information to your description, review it before submission.

---

## Using LinuxToys from the command line

LinuxToys also provides a CLI for users who prefer the terminal or want to automate common operations.

You can see the current command reference with:

```bash
linuxtoys --help
```

The CLI supports installing LinuxToys features, packages and Flatpaks, removing LinuxToys features and packages, listing available LinuxToys features, processing manifests, checking for updates, and displaying the installed LinuxToys version.

### Listing LinuxToys features

To see the LinuxToys features available to the CLI:

```bash
linuxtoys --list
```

The list includes both the underlying feature identifier and its displayed name, making it easier to determine what name can be used from the command line.

### Installing a LinuxToys feature

Use:

```bash
linuxtoys --install --script feature-name
```

Multiple features can be provided:

```bash
linuxtoys --install --script feature-one feature-two
```

The shorter forms are also available:

```bash
linuxtoys -i -s feature-name
```

### Installing packages

Packages from your distribution can be installed with:

```bash
linuxtoys --install --package git htop
```

or:

```bash
linuxtoys -i -p git htop
```

### Installing Flatpaks

Use the Flatpak application ID:

```bash
linuxtoys --install --flatpak org.kde.kdenlive
```

or:

```bash
linuxtoys -i -f org.kde.kdenlive
```

### Smart install mode

You do not necessarily need to specify what kind of item you are installing.

For example:

```bash
linuxtoys --install git org.kde.kdenlive feature-name
```

activates the CLI's **smart mode**, which attempts to classify the supplied items as LinuxToys features, packages or Flatpaks.

For scripts, LinuxToys searches its available features by name. Packages and Flatpaks are checked against their respective available sources before installation.

When writing scripts or automation where ambiguity would be undesirable, using `--script`, `--package` or `--flatpak` explicitly is preferable.

### Removing software and LinuxToys actions

LinuxToys features can be removed with:

```bash
linuxtoys --uninstall --script feature-name
```

or:

```bash
linuxtoys -u -s feature-name
```

For a LinuxToys feature, CLI removal uses the same registry-based removal mechanism used to reverse recorded LinuxToys actions. A removable registry entry must exist for that feature.

Packages can be removed with:

```bash
linuxtoys --uninstall --package package-name
```

Smart removal is also supported:

```bash
linuxtoys --uninstall item-name
```

In smart removal mode, LinuxToys first checks whether the item corresponds to a LinuxToys feature; otherwise it treats it as a package.

### Skipping confirmations

For unattended or scripted operation, add:

```bash
--yes
```

or:

```bash
-y
```

For example:

```bash
linuxtoys --install --package git htop --yes
```

This skips confirmation prompts, so it should only be used when you already know what LinuxToys is going to do.

### Checking for LinuxToys updates

Use:

```bash
linuxtoys update
```

or:

```bash
linuxtoys upgrade
```

Update-check aliases such as `--check-updates` are also supported.

### Checking the installed version

```bash
linuxtoys --version
```

or:

```bash
linuxtoys -v
```

---

### Using manifests from the CLI

Manifest mode can be invoked with:

```bash
linuxtoys --manifest /path/to/manifest.txt
```

or:

```bash
linuxtoys -m /path/to/manifest.txt
```

The manifest is validated before its contents are installed.

Unless confirmation is explicitly skipped, LinuxToys shows what it intends to execute or install and asks:

```text
Continue? [y/N]:
```

before proceeding.

For unattended deployment:

```bash
linuxtoys --manifest /path/to/manifest.txt --yes
```

Manifest processing groups the validated requests internally: packages are installed first, then Flatpaks, followed by LinuxToys feature scripts. Therefore, the order in which these different kinds of entries appear in the manifest does **not** need to follow that execution order.

This is why a manifest can be written for readability instead of having to match LinuxToys' internal installation sequence.

---

## What happens when something fails?

LinuxToys includes safeguards intended to reduce the consequences of failed procedures.

For most actions, operations performed during execution can be tracked so that LinuxToys knows what changed and an automatic reversion will be attempted on failure.

This does not mean that every possible external installer or command can always be perfectly reversed. The effectiveness of reversion depends on whether the relevant operations could be tracked.

If an installation fails, read the displayed error before retrying repeatedly. If the reason is not obvious, that is a good time to use the bug-reporting system.

---

## Good practices

LinuxToys is designed to automate Linux administration, but the actions it performs are still real system operations.

A few habits make it considerably easier to use:

* **Read feature descriptions.** Do not install an optimization or system modification simply because it is available.
* **Keep LinuxToys updated.** Linux distributions and third-party software change frequently.
* **Reboot when LinuxToys tells you a reboot is required.** This is particularly important when system deployments or major system components have changed.
* **Use the Action Registry to remove LinuxToys features.** Manually undoing part of a tracked installation can make later automatic reversion less complete.
* **Use manifests for repeatable setups.** They are much easier to maintain than a long collection of installation commands.
* **Use `--yes` carefully.** Confirmation prompts are especially useful when manually running commands.
* **Report reproducible problems.** Explain what you selected, what you expected, and what happened instead.

---

## Quick reference

### Graphical interface

Use the normal LinuxToys interface for interactive installation and configuration.

Use the **Action Registry** to inspect and reverse supported previously performed actions.

Use **Load Manifest** when you want LinuxToys to process a reusable installation list.

### Command line

```bash
# Help
linuxtoys --help

# List LinuxToys features
linuxtoys --list

# Install a LinuxToys feature
linuxtoys --install --script feature-name

# Install packages
linuxtoys --install --package git htop

# Install a Flatpak
linuxtoys --install --flatpak org.kde.kdenlive

# Smart installation
linuxtoys --install feature-name git org.kde.kdenlive

# Reverse a LinuxToys feature
linuxtoys --uninstall --script feature-name

# Remove a package
linuxtoys --uninstall --package package-name

# Process a manifest
linuxtoys --manifest manifest.txt

# Process a manifest without confirmation
linuxtoys --manifest manifest.txt --yes

# Check for updates
linuxtoys update

# Show LinuxToys version
linuxtoys --version
```

---

## Getting help

If something does not work as expected, first check the error displayed by LinuxToys. Many errors, particularly package-manager errors, already explain the immediate cause of the problem.

If the problem appears to be a LinuxToys bug, use the integrated bug-reporting system and include a concise explanation of what you were doing when it happened.

Good reports help LinuxToys and officially supported application developers identify system-specific problems that would otherwise be difficult to reproduce.
