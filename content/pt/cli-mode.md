# Modo CLI

Este módulo fornece funcionalidade de interface de linha de comando para LinuxToys, permitindo que funcionários de TI 
e técnicos automatizem instalações usando arquivos de manifesto.

#### Principais Recursos:
- Detecção automática e instalação de pacotes do sistema
- Detecção automática e instalação de flatpaks
- Execução de scripts LinuxToys
- Suporte a arquivos de manifesto personalizados com validação
- Suporte multiplataforma para gerenciadores de pacotes (`apt`, `dnf`, `pacman`, `zypper`, `rpm-ostree`)

## Uso do Modo CLI:
```
LT_MANIFEST=1 python3 run.py [opções]
```

#### Opções:
    <sem argumentos>        - Usa 'manifest.txt' padrão no diretório atual, fallback
    <caminho_manifesto>     - Usa arquivo de manifesto especificado
    check-updates           - Verifica atualizações do LinuxToys
    --help, -h              - Mostra informações de uso

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
