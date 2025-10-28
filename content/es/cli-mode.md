# Modo CLI

Este módulo proporciona funcionalidad de interfaz de línea de comandos para LinuxToys, permitiendo al personal de TI 
y técnicos automatizar instalaciones usando archivos de manifiesto, y uso completo de la aplicación sin la interfaz gráfica.

#### Características Principales:
- Detección automática e instalación de paquetes del sistema
- Detección automática e instalación de flatpaks
- Ejecución de scripts de LinuxToys
- Soporte para archivos de manifiesto personalizados con validación
- Soporte multiplataforma de gestores de paquetes (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## Uso del Modo CLI:
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### Opciones:
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: instala opciones seleccionadas (scripts, paquetes), el modo predeterminado
- `-s, --script`: instala scripts de LinuxToys especificados
- `-p, --package`: instala paquetes a través del gestor de paquetes de su sistema o flatpaks (debe proporcionarse el nombre correcto)

- `-h, --help`: muestra las opciones disponibles
- `-l, --list`: lista todos los scripts disponibles para su sistema operativo actual
- `-m, --manifest`: para usar manifiestos
- `-v, --version`: muestra información de versión
- `-y, --yes`: omite avisos de confirmación
- `update, upgrade`: comprueba actualizaciones e actualiza LinuxToys

Las opciones se pueden usar juntas de manera similar a `pacman` de Arch.
```
linuxtoys-cli -sy apparmor  # ejecuta el instalador de apparmor para Debian/Arch con confirmación automática
```

## Formato del Archivo de Manifiesto
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- La primera línea debe ser: `# LinuxToys Manifest File`
- Lista elementos uno por línea (scripts, paquetes o flatpaks)
- Los elementos pueden estar desordenados
- Las líneas que empiezan con `#` son comentarios
- Se ignoran las líneas vacías
- Prioridad del analizador: Scripts > Paquetes > Flatpaks
