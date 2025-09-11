# Modo CLI

Este módulo proporciona funcionalidad de interfaz de línea de comandos para LinuxToys, permitiendo al personal de TI 
y técnicos automatizar instalaciones usando archivos de manifiesto.

#### Características Principales:
- Detección automática e instalación de paquetes del sistema
- Detección automática e instalación de flatpaks
- Ejecución de scripts de LinuxToys
- Soporte para archivos de manifiesto personalizados con validación
- Soporte multiplataforma de gestores de paquetes (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## Uso del Modo CLI:
```
LT_MANIFEST=1 python3 run.py [opciones]
```

#### Opciones:
    <sin argumentos>        - Usa 'manifest.txt' por defecto en el directorio actual, respaldo
    <ruta_manifiesto>       - Usa el archivo de manifiesto especificado
    check-updates           - Comprueba actualizaciones de LinuxToys
    --help, -h              - Muestra información de uso

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
