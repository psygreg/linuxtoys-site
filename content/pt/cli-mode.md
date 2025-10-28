# Modo CLI

Este módulo fornece funcionalidade de interface de linha de comando para LinuxToys, permitindo que funcionários de TI 
e técnicos automatizem instalações usando arquivos de manifesto, e uso completo do aplicativo sem a interface gráfica.

#### Principais Recursos:
- Detecção automática e instalação de pacotes do sistema
- Detecção automática e instalação de flatpaks
- Execução de scripts LinuxToys
- Suporte a arquivos de manifesto personalizados com validação
- Suporte multiplataforma para gerenciadores de pacotes (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## Uso do Modo CLI:
```
linuxtoys-cli [Option] <item1> <item2> ...
```

#### Opções:
```
linuxtoys-cli [Option] <item1> <item2> ...
```
- `-i, --install`: instala opções selecionadas (scripts, pacotes), o modo padrão
- `-s, --script`: instala scripts LinuxToys especificados
- `-p, --package`: instala pacotes através do gerenciador de pacotes do seu sistema ou flatpaks (o nome correto deve ser fornecido)

- `-h, --help`: mostra as opções disponíveis
- `-l, --list`: lista todos os scripts disponíveis para seu sistema operacional atual
- `-m, --manifest`: para uso de manifesto
- `-v, --version`: mostra informações de versão
- `-y, --yes`: pula prompts de confirmação
- `update, upgrade`: verifica atualizações e atualiza o LinuxToys

As opções podem ser usadas juntas de maneira similar ao `pacman` do Arch.
```
linuxtoys-cli -sy apparmor  # executa o instalador de apparmor para Debian/Arch com confirmação automática
```

## Formato do Arquivo de Manifesto
```
# LinuxToys Manifest File

vim
org.mozilla.firefox
pdefaults
```

- A primeira linha deve ser: `# LinuxToys Manifest File`
- Lista itens um por linha (scripts, pacotes ou flatpaks)
- Itens podem estar fora de ordem
- Linhas começando com `#` são comentários
- Linhas vazias são ignoradas
- Prioridade do parser: Scripts > Pacotes > Flatpaks
