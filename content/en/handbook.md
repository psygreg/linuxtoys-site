# Developer Handbook

## I. Contribution Guidelines

Thank you for your interest in contributing to LinuxToys! This project aims to provide a collection of tools for Linux in a user-friendly way, making powerful functionality accessible to all users.

### Documentation

Before getting started, please review the [Developer Handbook](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook) for complete documentation on LinuxToys' libraries and development practices.

#### Development Priorities

When contributing to LinuxToys, please keep these core priorities in mind, listed in order of importance:

#### 1. Safety and Privacy First
- **User safety and privacy must always be the top priority**
- All scripts and tools should be thoroughly tested and reviewed
- Never implement features that could compromise user data or system security
- Clearly document any potential risks or system changes
- Follow secure coding practices and validate all user inputs

#### 2. User Friendliness and Accessibility
- Design with the average computer user in mind
- Provide clear, intuitive interfaces
- Include helpful descriptions and guidance for all features, while keeping it straight to the point
- Ensure accessibility for users with different technical skill levels
- Use plain language in user-facing text and error messages

#### 3. Reliability and Self-Sufficiency
- **All features must work as intended without requiring additional workarounds from the user**
- Tools should handle edge cases gracefully
- Provide clear error messages when something goes wrong
- Test across supported distributions and versions
- Ensure dependencies are properly managed and documented

#### 4. CLI Tool Restrictions
- **Command-line interfaces should be restricted to developer and sysadmin use cases**
- The average computer user doesn't know or want to deal with terminal emulators
- CLI-only features should be restricted to Developer and System Administration menus

### Lastly...

- All Pull Requests will be manually reviewed before approval
- Ensure your contributions align with the development priorities listed above
- Test your changes across different Linux distributions when possible
- Follow the existing code style and structure
- Document any new features or significant changes

### Getting Started

1. Review the [Developer Handbook](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. Fork the repository and create a feature branch
3. Make your changes following the development priorities
4. Test thoroughly across supported systems
5. Submit a Pull Request with a clear description of your changes

We appreciate your contributions to making Linux more accessible and user-friendly for everyone!

## II. LinuxToys' Features and Usage

### Script Structure and Metadata

#### Basic Script Template

All LinuxToys scripts follow a standardized structure with metadata headers:

```bash
#!/bin/bash
# name: Human Readable Name (or placeholder for translation)
# version: 1.0
# description: description_key_or_text
# icon: icon-name
# compat: ubuntu, debian, fedora, arch, cachy, suse, ostree, ublue
# reboot: no|yes|ostree
# noconfirm: yes
# localize: en, pt...
# nocontainer
# repo: https://repo.url

# --- Start of the script code ---
source "$SCRIPT_DIR/libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/libs/helpers.lib"

# Your script logic here
```

#### Metadata Headers

**Required Headers**

- **`# name:`** - Display name shown in the UI
- **`# version:`** - Script version (typically "1.0")
- **`# description:`** - Description key for translations or direct text
- **`# icon:`** - Icon identifier for the UI - *not required in checklist menus*

**Optional Headers**

- **`# compat:`** - Comma-separated list of compatible distributions
- **`# reboot:`** - Reboot requirement: `no` (default), `yes`, or `ostree`
- **`# noconfirm:`** - Skip confirmation dialog if set to `yes`
- **`# localize:`** - Comma-separated list of supported locales
- **`# nocontainer:`** - Hide script in containerized environments
- **`# gpu:`** - Only displays script for select GPU vendors, valid entries `Amd`, `Intel`, `Nvidia`. Can have more than one vendor.
- **`# desktop:`** - Only displays script for select desktop environments, valid entries `gnome`, `plasma` and `other`.
- **`#repo:`** - Makes the script name clickable in confirmation dialogs. Should allow the user to quickly reach the original repository of the corresponding feature.

#### Compatibility System

LinuxToys supports multiple Linux distributions through a compatibility key system:

**Supported Distributions**

- **`ubuntu`** - Ubuntu and derivatives
- **`debian`** - Debian and derivatives  
- **`fedora`** - Fedora and RHEL-based systems
- **`arch`** - Arch Linux (excluding CachyOS)
- **`cachy`** - CachyOS specifically
- **`suse`** - openSUSE and SUSE systems
- **`ostree`** - rpm-ostree based systems
- **`ublue`** - Universal Blue images (Bazzite, Bluefin, Aurora)

#### Reboot Requirements
- **`no`** - No reboot required (default)
- **`yes`** - Always requires reboot
- **`ostree`** - Requires reboot only on ostree/ublue systems

#### Container detection

The application is capable of detecting if it's being executed from within a container and hide or display certain options if that's the case depending on the corresponding header. This is also compatible with the `compat` keys.

**Examples**

- **`# nocontainer`** - Hides script in containerized environments
- **`# nocontainer: ubuntu, debian`** - Hides script only in Ubuntu and Debian containers
- **`# nocontainer: invert`** - Displays script **only** in containerized environments
- **`# nocontainer: invert, debian`** - Displays script only in Debian containers

### Core Libraries

#### linuxtoys.lib

The main library provides essential functions for script operations:

**Package Management**

```bash
# Declare packages to install
_packages=(package1 package2 package3)
_install_
```

The `_install_` function automatically:
- Detects the package manager (apt, pacman, dnf, zypper, rpm-ostree)
- Checks if packages are already installed
- Installs missing packages using the appropriate method
- Handles rpm-ostree systems with layered packages
- Unsets the `_packages` variable on completion, allowing it to be used multiple times in the same script if needed

**Flatpak Management**

```bash
# Declare packages to install
_flatpaks=(package1 package2 package3)
_flatpak_
```

The `_flatpak_` function automatically installs each flatpak within the array with standard parameters (user level, Flathub repository). It will also unset `_flatpaks` on completion, allowing you to use it multiple times in the same script if needed.

**User Interface Functions**

```bash
# Request sudo password with GUI
sudo_rq

# Display information dialog
zeninf "Information message"

# Display warning dialog  
zenwrn "Warning message"

# Display error and exit
fatal "Fatal error message"

# Display error but continue
nonfatal "Non-fatal error message"
```

**Language Detection**

```bash
# Detect system language and set translation file
_lang_
# This sets the $langfile variable (e.g., "en", "pt")
```

#### helpers.lib

Provides specialized helper functions for common tasks:

**Flatpak Management**

```bash
# Setup Flatpak and Flathub repository
flatpak_in_lib
# Then install Flatpak applications:
flatpak install --or-update --user --noninteractive app.id
```

The `flatpak_in_lib` function:
- Installs Flatpak if not present
- Adds Flathub remote for user and system
- Handles different package managers automatically
- Provides error handling and verification

**Repository Management**

```bash
# Enable multilib repository on Arch systems
multilib_chk

# Add Chaotic-AUR repository on Arch systems  
chaotic_aur_lib

# Install RPMFusion repositories on Fedora systems
rpmfusion_chk
```

### Language and Localization

#### Translation System

LinuxToys supports multiple languages through JSON translation files:

**Language Files Structure**

```
p3/libs/lang/
├── en.json    # English (fallback)
├── pt.json    # Portuguese
└── ...
```

#### Translation Usage
```bash
# Load language detection
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"

# Use translations in zenity dialogs
zenity --question --text "$translation_key" --width 360 --height 300
```

There are some standard message keys that you can use for simple dialogs.
- `$finishmsg`: "_Operations completed._"
- `$rebootmsg`: "_Installation complete. Reboot for changes to take effect._"
- `$cancelmsg`: "_Cancel_"
- `$incompatmsg`: "_Your operating system is not compatible._"
- `$abortmsg`: "_Operation cancelled by the user._"
- `$notdomsg`: "_Nothing to do._"

**Standard removal dialog**
- `$rmmsg`: "_You already have `$LT_PROGRAM` installed. Do you wish to remove it?_"

Requires setting a `LT_PROGRAM` variable beforehand. 

**Adding Translations**

1. Add translation keys to all language JSON files
2. Use translation keys in script descriptions: `# description: app_desc`
3. Reference keys in dialogs and messages

#### Localization Control
```bash
# Restrict script to specific locales
# localize: pt
# This script will only show for Portuguese-speaking users
```

### Container Compatibility

#### Container Detection

LinuxToys automatically detects containerized environments and can filter scripts accordingly.

#### Container Restrictions
```bash
# Hide script in all containers
# nocontainer

# Hide script only in specific distribution containers
# nocontainer: debian, ubuntu
```

**Automatic Filtering**

Scripts using `flatpak_in_lib` are automatically hidden in containers unless explicitly allowed with `nocontainer` headers specifying compatible systems.

### Advanced Features

#### Development Mode

LinuxToys includes a development mode for testing and debugging:

#### Environment Variables
- **`DEV_MODE=1`** - Enable developer mode
- **`COMPAT=distro`** - Override compatibility detection
- **`CONTAINER=1`** - Simulate container environment  
- **`OPTIMIZER=1/0`** - Simulate optimization state

#### Developer Overrides
```bash
# Show all scripts regardless of compatibility
DEV_MODE=1 ./run.py

# Test script on specific distribution
DEV_MODE=1 COMPAT=arch ./run.py

# Test container behavior
DEV_MODE=1 CONTAINER=1 ./run.py

# Test default optimization toggle
DEV_MODE=1 OPTIMIZER=1 ./run.py
```

#### Checks performed
- Basic bash syntax
- Proper `sudo` elevation method through `sudo_rq`
- Proper library sourcing
- Header element checks (warnings only, since some are not mandatory)

### Reboot Management

LinuxToys provides comprehensive reboot handling:

#### Reboot Detection
```bash
# Check if script requires reboot
script_requires_reboot(script_path, system_compat_keys)

# Check for pending ostree deployments
check_ostree_pending_deployments()
```

**Reboot Dialogs**

- Automatic reboot warning dialogs
- User choice between "Reboot Now" and "Reboot Later"
- Graceful application closure on reboot requirement
- Special handling for ostree pending deployments

### Error Handling

#### Best Practices
```bash
# Check command success
if ! command_that_might_fail; then
    nonfatal "Command failed, continuing..."
    return 1
fi

# Critical failure
if ! critical_command; then
    fatal "Critical operation failed"
fi

# Silent error handling  
command_with_output 2>/dev/null || true
```

### Script Categories

#### Organization Structure
```
p3/scripts/
├── office/          # Office & Work applications
├── game/           # Gaming tools and launchers
├── devs/           # Developer tools
├── utils/          # System utilities
├── drivers/        # Hardware drivers
├── repos/          # Repository management
├── extra/          # Experimental/additional tools
├── pdefaults.sh    # System optimizations
└── psypicks.sh     # Curated software selection
```

#### Category Information

Each category can have a `category-info.txt` file:
```
name: Category Display Name
description: Category description key
icon: folder-icon-name
mode: menu
```

### Best Practices

#### Script Development
1. **Always use metadata headers** for proper categorization and filtering
2. **Test compatibility** across different distributions when possible
3. **Handle errors gracefully** with appropriate user feedback
4. **Use existing libraries** instead of reimplementing common functionality
5. **Follow the standard script structure** for consistency

#### Package Management
1. **Declare packages in arrays** before calling `_install_`
2. **Check package availability** for different distributions
3. **Handle rpm-ostree systems** appropriately (avoid non-essential packages)
4. **Use Flatpak for GUI applications** when possible

#### User Experience
1. **Provide clear descriptions** in the provided languages
2. **Use appropriate icons** for visual identification
3. **Handle reboot requirements** properly
4. **Show progress and feedback** during long operations
5. **Respect user choices** in confirmation dialogs

#### Localization
1. **Use translation keys** instead of hardcoded text
2. **Provide translations** for all supported languages
3. **Test with different locales** to ensure proper functionality
4. **Use locale restrictions** when scripts are region-specific

This guide provides the foundation for creating robust, compatible, and user-friendly scripts within the LinuxToys ecosystem. By leveraging the provided libraries and following these conventions, developers can create scripts that work seamlessly across multiple Linux distributions while providing a consistent user experience.

## III. AI Coding Agents

With the usage of AI tools becoming more prevalent every day, it is important to establish some guidelines for their usage in the development of LinuxToys. We believe they can be very helpful tools and help developers to be more efficient, if employed in a moderate, responsible way.

### Permitted Models

Based on testing, we will allow *only* the following models for code assistance:
- **Grok Code Fast** - a speedy, cost-effective model, ideal for usage as an 'autocomplete on steroids'
- **Claude Sonnet 4** - advanced model, suitable for complex code analysis and work, but also more expensive
- **Qwen Coder 3** - well-balanced model, providing good performance for a variety of coding tasks while maintaining good accuracy and cost-efficiency

All other models tested failed to provide satisfactory results long-term, many times producing incorrect or even dangerous code in out-of-control hallucinations. 

### Usage Guidelines

1. **Supplement, Don't Replace**: AI tools should be used to assist and enhance human coding efforts, never to replace them entirely.
2. **Code Review**: All code generated by AI in any capacity must be thoroughly reviewed and tested to ensure it meets our high quality, security, and functionality standards, as any code would.
3. **Security Awareness**: Be vigilant about potential security vulnerabilities in AI-generated code. AI may not always follow best security practices.

### AI Usage on Translations

We understand having LinuxToys available in people's native languages is highly important, as this makes the software more accessible, which is a key factor for our success. However, it's also a very time-consuming task, and far larger projects than us have struggled to find volunteers to help with this, so we do use AI tools to generate translations. Any inaccuracies or mistakes in translation should be reported on our [GitHub issues page](https://github.com/psygreg/linuxtoys/issues).

The model currently used for our translations is **Claude Sonnet 4**, as it has shown the best results in our tests, without deviations from the original meaning.