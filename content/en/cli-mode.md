# CLI Mode

This module provides command-line interface functionality for LinuxToys, allowing IT staff and technicians to automate installations using manifest files, and full app usage without the graphical interface.

#### Key Features:
- Automatic detection and installation of system packages
- Automatic detection and installation of flatpaks
- Execution of LinuxToys scripts
- Custom manifest file support with validation
- Cross-platform package manager support (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## CLI Mode Usage:
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### Options:
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: install selected options (scripts, packages), the default mode
- `-s, --script`: install specified LinuxToys scripts
- `-p, --package`: install packages your system's package manager or flatpaks (proper name must be given)

- `-h, --help`: shows the available options
- `-l, --list`: lists all available scripts for your current operating system
- `-m, --manifest`: for manifest usage
- `-v, --version`: show version information
- `-y, --yes`: skip confirmation prompts
- `update, upgrade`: check for updates and upgrade LinuxToys

Options can be used together in a similar fashion to Arch's `pacman`.
```
linuxtoys-cli -sy apparmor  # run apparmor installer for Debian/Arch with automatic confirmation
```

## Manifest File Formatting
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- First line must be: `# LinuxToys Manifest File`
- List items one per line (scripts, packages, or flatpaks)
- Items can be out of order
- Lines starting with `#` are comments
- Empty lines are ignored
- Parser priority: Scripts > Packages > Flatpaks