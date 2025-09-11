# CLI Mode

This module provides command-line interface functionality for LinuxToys, allowing IT staff 
and technicians to automate installations using manifest files.

#### Key Features:
- Automatic detection and installation of system packages
- Automatic detection and installation of flatpaks
- Execution of LinuxToys scripts
- Custom manifest file support with validation
- Cross-platform package manager support (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## CLI Mode Usage:
```
LT_MANIFEST=1 python3 run.py [options]
```

#### Options:
    <no arguments>          - Use default 'manifest.txt' in current directory, fallback
    <manifest_path>         - Use specified manifest file
    check-updates           - Check for LinuxToys updates
    --help, -h              - Show usage information

## Manifest File Format
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