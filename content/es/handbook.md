# Manual del Desarrollador

## I. Guías de Contribución

¡Gracias por tu interés en contribuir a LinuxToys! Este proyecto tiene como objetivo proporcionar una colección de herramientas para Linux de manera amigable para el usuario, haciendo la funcionalidad poderosa accesible para todos los usuarios.

### Documentación

Antes de comenzar, por favor revisa el [Manual del Desarrollador](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook) para documentación completa sobre las librerías de LinuxToys y prácticas de desarrollo.

#### Prioridades de Desarrollo

Al contribuir a LinuxToys, por favor mantén estas prioridades fundamentales en mente, listadas en orden de importancia:

#### 1. Seguridad y Privacidad Primero
- **La seguridad y privacidad del usuario debe ser siempre la máxima prioridad**
- Todos los scripts y herramientas deben ser probados y revisados exhaustivamente
- Nunca implementes características que puedan comprometer los datos del usuario o la seguridad del sistema
- Documenta claramente cualquier riesgo potencial o cambios del sistema
- Sigue prácticas de codificación segura y valida todas las entradas del usuario

#### 2. Amigabilidad y Accesibilidad del Usuario
- Diseña pensando en el usuario promedio de computadora
- Proporciona interfaces claras e intuitivas
- Incluye descripciones útiles y orientación para todas las características, manteniéndolo directo al punto
- Asegura accesibilidad para usuarios con diferentes niveles de habilidad técnica
- Usa lenguaje sencillo en texto orientado al usuario y mensajes de error

#### 3. Confiabilidad y Autosuficiencia
- **Todas las características deben funcionar como se pretende sin requerir soluciones adicionales del usuario**
- Las herramientas deben manejar casos extremos con gracia
- Proporciona mensajes de error claros cuando algo sale mal
- Prueba a través de distribuciones y versiones soportadas
- Asegura que las dependencias estén adecuadamente gestionadas y documentadas

#### 4. Restricciones de Herramientas CLI
- **Las interfaces de línea de comandos deben estar restringidas a casos de uso de desarrolladores y administradores del sistema**
- El usuario promedio de computadora no sabe o no quiere lidiar con emuladores de terminal
- Las características solo CLI deben estar restringidas a menús de Desarrollo y Administración del Sistema

### Por último...

- Todos los Pull Requests serán revisados manualmente antes de la aprobación
- Asegura que tus contribuciones se alineen con las prioridades de desarrollo listadas arriba
- Prueba tus cambios a través de diferentes distribuciones de Linux cuando sea posible
- Sigue el estilo de código existente y la estructura
- Documenta cualquier nueva característica o cambios significativos

### Primeros Pasos

1. Revisa el [Manual del Desarrollador](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. Haz fork del repositorio y crea una rama de característica
3. Haz tus cambios siguiendo las prioridades de desarrollo
4. Prueba exhaustivamente a través de sistemas soportados
5. Envía un Pull Request con una descripción clara de tus cambios

¡Apreciamos tus contribuciones para hacer Linux más accesible y amigable para todos!

## II. Características y Uso de LinuxToys

### Estructura de Scripts y Metadatos

#### Plantilla Básica de Script

Todos los scripts de LinuxToys siguen una estructura estandarizada con encabezados de metadatos:

```bash
#!/bin/bash
# name: Human Readable Name (o marcador de posición para traducción)
# version: 1.0
# description: description_key_or_text
# icon: icon-name
# compat: ubuntu, debian, fedora, arch, cachy, suse, ostree, ublue
# reboot: no|yes|ostree
# noconfirm: yes
# localize: en, pt...
# nocontainer

# --- Inicio del código del script ---
. /etc/os-release
SCRIPT_DIR="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"
source "$SCRIPT_DIR/../../libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/../../libs/helpers.lib"

# Tu lógica de script aquí
```

#### Encabezados de Metadatos

**Encabezados Requeridos**

- **`# name:`** - Nombre de visualización mostrado en la UI
- **`# version:`** - Versión del script (típicamente "1.0")
- **`# description:`** - Clave de descripción para traducciones o texto directo
- **`# icon:`** - Identificador de icono para la UI - *no requerido en menús de lista de verificación*

**Encabezados Opcionales**

- **`# compat:`** - Lista separada por comas de distribuciones compatibles
- **`# reboot:`** - Requisito de reinicio: `no` (predeterminado), `yes`, o `ostree`
- **`# noconfirm:`** - Omitir diálogo de confirmación si se establece en `yes`
- **`# localize:`** - Lista separada por comas de locales soportados
- **`# nocontainer:`** - Ocultar script en entornos containerizados

#### Sistema de Compatibilidad

LinuxToys soporta múltiples distribuciones de Linux a través de un sistema de claves de compatibilidad:

**Distribuciones Soportadas**

- **`ubuntu`** - Ubuntu y derivados
- **`debian`** - Debian y derivados  
- **`fedora`** - Fedora y sistemas basados en RHEL
- **`arch`** - Arch Linux (excluyendo CachyOS)
- **`cachy`** - CachyOS específicamente
- **`suse`** - openSUSE y sistemas SUSE
- **`ostree`** - sistemas basados en rpm-ostree
- **`ublue`** - imágenes Universal Blue (Bazzite, Bluefin, Aurora)

#### Requisitos de Reinicio
- **`no`** - No se requiere reinicio (predeterminado)
- **`yes`** - Siempre requiere reinicio
- **`ostree`** - Requiere reinicio solo en sistemas ostree/ublue

#### Detección de contenedores

La aplicación es capaz de detectar si se está ejecutando desde dentro de un contenedor y ocultar o mostrar ciertas opciones si ese es el caso dependiendo del encabezado correspondiente. Esto también es compatible con las claves `compat`.

**Ejemplos**

- **`# nocontainer`** - Oculta script en entornos containerizados
- **`# nocontainer: ubuntu, debian`** - Oculta script solo en contenedores Ubuntu y Debian
- **`# nocontainer: invert`** - Muestra script **solo** en entornos containerizados
- **`# nocontainer: invert, debian`** - Muestra script solo en contenedores Debian

### Librerías Principales

#### linuxtoys.lib

La librería principal proporciona funciones esenciales para operaciones de scripts:

**Gestión de Paquetes**

```bash
# Declarar paquetes a instalar
_packages=(package1 package2 package3)
_install_
```

La función `_install_` automáticamente:
- Detecta el gestor de paquetes (apt, pacman, dnf, zypper, rpm-ostree)
- Verifica si los paquetes ya están instalados
- Instala paquetes faltantes usando el método apropiado
- Maneja sistemas rpm-ostree con paquetes en capas
- Desestablece la variable `_packages` al completarse, permitiendo su uso múltiple en el mismo script si es necesario

**Gestión de Flatpak**

```bash
# Declarar paquetes a instalar
_flatpaks=(package1 package2 package3)
_flatpak_
```

La función `_flatpak_` instala automáticamente cada flatpak dentro del array con parámetros estándar (nivel de usuario, repositorio Flathub). También desestablecerá `_flatpaks` al completarse, permitiendo usarlo múltiples veces en el mismo script si es necesario.

**Funciones de Interfaz de Usuario**

```bash
# Solicitar contraseña sudo con GUI
sudo_rq

# Mostrar diálogo de información
zeninf "Mensaje de información"

# Mostrar diálogo de advertencia
zenwrn "Mensaje de advertencia"

# Mostrar error y salir
fatal "Mensaje de error fatal"

# Mostrar error pero continuar
nonfatal "Mensaje de error no fatal"
```

**Detección de Idioma**

```bash
# Detectar idioma del sistema y establecer archivo de traducción
_lang_
# Esto establece la variable $langfile (ej. "en", "pt")
```

#### helpers.lib

Proporciona funciones de ayuda especializadas para tareas comunes:

**Gestión de Flatpak**

```bash
# Configurar Flatpak y repositorio Flathub
flatpak_in_lib
# Luego instalar aplicaciones Flatpak:
flatpak install --or-update --user --noninteractive app.id
```

La función `flatpak_in_lib`:
- Instala Flatpak si no está presente
- Añade remoto Flathub para usuario y sistema
- Maneja diferentes gestores de paquetes automáticamente
- Proporciona manejo de errores y verificación

**Gestión de Repositorios**

```bash
# Habilitar repositorio multilib en sistemas Arch
multilib_chk

# Añadir repositorio Chaotic-AUR en sistemas Arch
chaotic_aur_lib

# Instalar repositorios RPMFusion en sistemas Fedora
rpmfusion_chk
```

### Idioma y Localización

#### Sistema de Traducción

LinuxToys soporta múltiples idiomas a través de archivos de traducción JSON:

**Estructura de Archivos de Idioma**

```
p3/libs/lang/
├── en.json    # Inglés (respaldo)
├── pt.json    # Portugués
└── ...
```

#### Uso de Traducción
```bash
# Cargar detección de idioma
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"

# Usar traducciones en diálogos zenity
zenity --question --text "$translation_key" --width 360 --height 300
```

Hay algunas claves de mensaje estándar que puedes usar para diálogos simples.
- `$finishmsg`: "_Operaciones completadas._"
- `$rebootmsg`: "_Instalación completa. Reinicia para que los cambios surtan efecto._"
- `$cancelmsg`: "_Cancelar_"
- `$incompatmsg`: "_Tu sistema operativo no es compatible._"
- `$abortmsg`: "_Operación cancelada por el usuario._"
- `$notdomsg`: "_Nada que hacer._"

**Diálogo estándar de eliminación**
- `$rmmsg`: "_Ya tienes `$LT_PROGRAM` instalado. ¿Deseas eliminarlo?_"

Requiere establecer una variable `LT_PROGRAM` de antemano.

**Añadiendo Traducciones**

1. Añadir claves de traducción a todos los archivos JSON de idioma
2. Usar claves de traducción en descripciones de scripts: `# description: app_desc`
3. Referenciar claves en diálogos y mensajes

#### Control de Localización
```bash
# Restringir script a locales específicos
# localize: pt
# Este script solo se mostrará para usuarios de habla portuguesa
```

### Compatibilidad de Contenedores

#### Detección de Contenedores

LinuxToys detecta automáticamente entornos containerizados y puede filtrar scripts en consecuencia.

#### Restricciones de Contenedores
```bash
# Ocultar script en todos los contenedores
# nocontainer

# Ocultar script solo en contenedores de distribución específicos
# nocontainer: debian, ubuntu
```

**Filtrado Automático**

Scripts que usan `flatpak_in_lib` se ocultan automáticamente en contenedores a menos que se permitan explícitamente con encabezados `nocontainer` especificando sistemas compatibles.

### Características Avanzadas

#### Modo de Desarrollo

LinuxToys incluye un modo de desarrollo para pruebas y depuración:

#### Variables de Entorno
- **`DEV_MODE=1`** - Habilitar modo desarrollador
- **`COMPAT=distro`** - Anular detección de compatibilidad
- **`CONTAINER=1`** - Simular entorno de contenedor  
- **`OPTIMIZER=1/0`** - Simular estado de optimización

#### Anulaciones de Desarrollador
```bash
# Mostrar todos los scripts independientemente de compatibilidad
DEV_MODE=1 ./run.py

# Probar script en distribución específica
DEV_MODE=1 COMPAT=arch ./run.py

# Probar comportamiento de contenedor
DEV_MODE=1 CONTAINER=1 ./run.py

# Probar alternancia de optimización predeterminada
DEV_MODE=1 OPTIMIZER=1 ./run.py
```

### Gestión de Reinicio

LinuxToys proporciona manejo integral de reinicio:

#### Detección de Reinicio
```bash
# Verificar si el script requiere reinicio
script_requires_reboot(script_path, system_compat_keys)

# Verificar despliegues ostree pendientes
check_ostree_pending_deployments()
```

**Diálogos de Reinicio**

- Diálogos automáticos de advertencia de reinicio
- Elección del usuario entre "Reiniciar Ahora" y "Reiniciar Más Tarde"
- Cierre elegante de aplicación en requisito de reinicio
- Manejo especial para despliegues ostree pendientes

### Manejo de Errores

#### Mejores Prácticas
```bash
# Verificar éxito del comando
if ! command_that_might_fail; then
    nonfatal "Comando falló, continuando..."
    return 1
fi

# Fallo crítico
if ! critical_command; then
    fatal "Operación crítica falló"
fi

# Manejo silencioso de errores
command_with_output 2>/dev/null || true
```

### Categorías de Scripts

#### Estructura de Organización
```
p3/scripts/
├── office/          # Aplicaciones de Oficina y Trabajo
├── game/           # Herramientas de juegos y lanzadores
├── devs/           # Herramientas de desarrollador
├── utils/          # Utilidades del sistema
├── drivers/        # Controladores de hardware
├── repos/          # Gestión de repositorios
├── extra/          # Herramientas experimentales/adicionales
├── pdefaults.sh    # Optimizaciones del sistema
└── psypicks.sh     # Selección curada de software
```

#### Información de Categoría

Cada categoría puede tener un archivo `category-info.txt`:
```
name: Nombre de Visualización de Categoría
description: clave de descripción de categoría
icon: folder-icon-name
mode: menu
```

### Mejores Prácticas

#### Desarrollo de Scripts
1. **Siempre usa encabezados de metadatos** para categorización y filtrado apropiados
2. **Prueba compatibilidad** a través de diferentes distribuciones cuando sea posible
3. **Maneja errores con gracia** con retroalimentación apropiada del usuario
4. **Usa librerías existentes** en lugar de reimplementar funcionalidad común
5. **Sigue la estructura estándar de scripts** para consistencia

#### Gestión de Paquetes
1. **Declara paquetes en arrays** antes de llamar `_install_`
2. **Verifica disponibilidad de paquetes** para diferentes distribuciones
3. **Maneja sistemas rpm-ostree** apropiadamente (evita paquetes no esenciales)
4. **Usa Flatpak para aplicaciones GUI** cuando sea posible

#### Experiencia del Usuario
1. **Proporciona descripciones claras** en los idiomas proporcionados
2. **Usa iconos apropiados** para identificación visual
3. **Maneja requisitos de reinicio** apropiadamente
4. **Muestra progreso y retroalimentación** durante operaciones largas
5. **Respeta las elecciones del usuario** en diálogos de confirmación

#### Localización
1. **Usa claves de traducción** en lugar de texto codificado
2. **Proporciona traducciones** para todos los idiomas soportados
3. **Prueba con diferentes locales** para asegurar funcionalidad apropiada
4. **Usa restricciones de locale** cuando los scripts son específicos de región

Esta guía proporciona la base para crear scripts robustos, compatibles y amigables al usuario dentro del ecosistema LinuxToys. Al aprovechar las librerías proporcionadas y seguir estas convenciones, los desarrolladores pueden crear scripts que funcionen sin problemas a través de múltiples distribuciones de Linux mientras proporcionan una experiencia de usuario consistente.
