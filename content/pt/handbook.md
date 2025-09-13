# Manual do Desenvolvedor

## I. Diretrizes de Contribuição

Obrigado pelo seu interesse em contribuir para o LinuxToys! Este projeto tem como objetivo fornecer uma coleção de ferramentas para Linux de forma user-friendly, tornando funcionalidades poderosas acessíveis a todos os usuários.

### Documentação

Antes de começar, por favor revise o [Manual do Desenvolvedor](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook) para documentação completa sobre as bibliotecas e práticas de desenvolvimento do LinuxToys.

#### Prioridades de Desenvolvimento

Ao contribuir para o LinuxToys, tenha em mente essas prioridades principais, listadas em ordem de importância:

#### 1. Segurança e Privacidade em Primeiro Lugar
- **A segurança e privacidade do usuário deve sempre ser a prioridade máxima**
- Todos os scripts e ferramentas devem ser testados e revisados minuciosamente
- Nunca implemente recursos que possam comprometer dados do usuário ou segurança do sistema
- Documente claramente quaisquer riscos potenciais ou mudanças no sistema
- Siga práticas de codificação segura e valide todas as entradas do usuário

#### 2. Facilidade de Uso e Acessibilidade
- Projete pensando no usuário médio de computador
- Forneça interfaces claras e intuitivas
- Inclua descrições úteis e orientações para todos os recursos, mantendo-as diretas ao ponto
- Garanta acessibilidade para usuários com diferentes níveis de habilidade técnica
- Use linguagem simples em textos voltados ao usuário e mensagens de erro

#### 3. Confiabilidade e Autossuficiência
- **Todos os recursos devem funcionar como pretendido sem exigir soluções adicionais do usuário**
- Ferramentas devem lidar com casos extremos graciosamente
- Forneça mensagens de erro claras quando algo der errado
- Teste em distribuições e versões suportadas
- Garanta que dependências sejam gerenciadas e documentadas adequadamente

#### 4. Restrições de Ferramentas CLI
- **Interfaces de linha de comando devem ser restritas a casos de uso de desenvolvedores e administradores de sistema**
- O usuário médio de computador não conhece ou quer lidar com emuladores de terminal
- Recursos exclusivos de CLI devem ser restritos aos menus de Desenvolvedor e Administração do Sistema

### Por último...

- Todos os Pull Requests serão revisados manualmente antes da aprovação
- Garanta que suas contribuições estejam alinhadas com as prioridades de desenvolvimento listadas acima
- Teste suas mudanças em diferentes distribuições Linux quando possível
- Siga o estilo de código e estrutura existentes
- Documente quaisquer novos recursos ou mudanças significativas

### Começando

1. Revise o [Manual do Desenvolvedor](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. Faça um fork do repositório e crie uma branch de recurso
3. Faça suas mudanças seguindo as prioridades de desenvolvimento
4. Teste minuciosamente em sistemas suportados
5. Envie um Pull Request com uma descrição clara de suas mudanças

Apreciamos suas contribuições para tornar o Linux mais acessível e user-friendly para todos!

## II. Recursos e Uso do LinuxToys

### Estrutura de Scripts e Metadados

#### Template Básico de Script

Todos os scripts do LinuxToys seguem uma estrutura padronizada com cabeçalhos de metadados:

```bash
#!/bin/bash
# name: Nome Legível Humano (ou placeholder para tradução)
# version: 1.0
# description: chave_descrição_ou_texto
# icon: nome-do-ícone
# compat: ubuntu, debian, fedora, arch, cachy, suse, ostree, ublue
# reboot: no|yes|ostree
# noconfirm: yes
# localize: en, pt...
# nocontainer

# --- Início do código do script ---
. /etc/os-release
SCRIPT_DIR="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"
source "$SCRIPT_DIR/../../libs/linuxtoys.lib"
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"
source "$SCRIPT_DIR/../../libs/helpers.lib"

# Sua lógica de script aqui
```

#### Cabeçalhos de Metadados

**Cabeçalhos Obrigatórios**

- **`# name:`** - Nome de exibição mostrado na interface
- **`# version:`** - Versão do script (tipicamente "1.0")
- **`# description:`** - Chave de descrição para traduções ou texto direto
- **`# icon:`** - Identificador de ícone para a interface - *não obrigatório em menus de checklist*

**Cabeçalhos Opcionais**

- **`# compat:`** - Lista separada por vírgulas de distribuições compatíveis
- **`# reboot:`** - Requisito de reinicialização: `no` (padrão), `yes`, ou `ostree`
- **`# noconfirm:`** - Pular diálogo de confirmação se definido como `yes`
- **`# localize:`** - Lista separada por vírgulas de locales suportados
- **`# nocontainer:`** - Ocultar script em ambientes containerizados

#### Sistema de Compatibilidade

LinuxToys suporta múltiplas distribuições Linux através de um sistema de chaves de compatibilidade:

**Distribuições Suportadas**

- **`ubuntu`** - Ubuntu e derivados
- **`debian`** - Debian e derivados  
- **`fedora`** - Fedora e sistemas baseados em RHEL
- **`arch`** - Arch Linux (excluindo CachyOS)
- **`cachy`** - CachyOS especificamente
- **`suse`** - openSUSE e sistemas SUSE
- **`ostree`** - sistemas baseados em rpm-ostree
- **`ublue`** - imagens Universal Blue (Bazzite, Bluefin, Aurora)

#### Requisitos de Reinicialização
- **`no`** - Nenhuma reinicialização necessária (padrão)
- **`yes`** - Sempre requer reinicialização
- **`ostree`** - Requer reinicialização apenas em sistemas ostree/ublue

#### Detecção de contêiner

A aplicação é capaz de detectar se está sendo executada de dentro de um contêiner e ocultar ou exibir certas opções se for o caso, dependendo do cabeçalho correspondente. Isso também é compatível com as chaves `compat`.

**Exemplos**

- **`# nocontainer`** - Oculta script em ambientes containerizados
- **`# nocontainer: ubuntu, debian`** - Oculta script apenas em contêineres Ubuntu e Debian
- **`# nocontainer: invert`** - Exibe script **apenas** em ambientes containerizados
- **`# nocontainer: invert, debian`** - Exibe script apenas em contêineres Debian

### Bibliotecas Principais

#### linuxtoys.lib

A biblioteca principal fornece funções essenciais para operações de script:

**Gerenciamento de Pacotes**

```bash
# Declare pacotes para instalar
_packages=(pacote1 pacote2 pacote3)
_install_
```

A função `_install_` automaticamente:
- Detecta o gerenciador de pacotes (apt, pacman, dnf, zypper, rpm-ostree)
- Verifica se os pacotes já estão instalados
- Instala pacotes faltantes usando o método apropriado
- Lida com sistemas rpm-ostree com pacotes em camadas
- Remove a variável `_packages` na conclusão, permitindo que seja usada várias vezes no mesmo script se necessário

**Gerenciamento de Flatpak**

```bash
# Declare pacotes para instalar
_flatpaks=(pacote1 pacote2 pacote3)
_flatpak_
```

A função `_flatpak_` instala automaticamente cada flatpak dentro do array com parâmetros padrão (nível de usuário, repositório Flathub). Também removerá `_flatpaks` na conclusão, permitindo que você use várias vezes no mesmo script se necessário.

**Funções de Interface do Usuário**

```bash
# Solicitar senha sudo com GUI
sudo_rq

# Exibir diálogo de informação
zeninf "Mensagem de informação"

# Exibir diálogo de aviso  
zenwrn "Mensagem de aviso"

# Exibir erro e sair
fatal "Mensagem de erro fatal"

# Exibir erro mas continuar
nonfatal "Mensagem de erro não fatal"
```

**Detecção de Idioma**

```bash
# Detectar idioma do sistema e definir arquivo de tradução
_lang_
# Isso define a variável $langfile (ex: "en", "pt")
```

#### helpers.lib

Fornece funções auxiliares especializadas para tarefas comuns:

**Gerenciamento de Flatpak**

```bash
# Configurar repositório Flatpak e Flathub
flatpak_in_lib
# Então instalar aplicações Flatpak:
flatpak install --or-update --user --noninteractive app.id
```

A função `flatpak_in_lib`:
- Instala Flatpak se não estiver presente
- Adiciona remote Flathub para usuário e sistema
- Lida com diferentes gerenciadores de pacotes automaticamente
- Fornece tratamento de erro e verificação

**Gerenciamento de Repositórios**

```bash
# Habilitar repositório multilib em sistemas Arch
multilib_chk

# Adicionar repositório Chaotic-AUR em sistemas Arch  
chaotic_aur_lib

# Instalar repositórios RPMFusion em sistemas Fedora
rpmfusion_chk
```

### Idioma e Localização

#### Sistema de Tradução

LinuxToys suporta múltiplos idiomas através de arquivos de tradução JSON:

**Estrutura de Arquivos de Idioma**

```
p3/libs/lang/
├── en.json    # Inglês (fallback)
├── pt.json    # Português
└── ...
```

#### Uso de Tradução
```bash
# Carregar detecção de idioma
_lang_
source "$SCRIPT_DIR/../../libs/lang/${langfile}.lib"

# Usar traduções em diálogos zenity
zenity --question --text "$chave_tradução" --width 360 --height 300
```

Existem algumas chaves de mensagem padrão que você pode usar para diálogos simples.
- `$finishmsg`: "_Operações concluídas._"
- `$rebootmsg`: "_Instalação concluída. Reinicie para que as mudanças tenham efeito._"
- `$cancelmsg`: "_Cancelar_"
- `$incompatmsg`: "_Seu sistema operacional não é compatível._"
- `$abortmsg`: "_Operação cancelada pelo usuário._"
- `$notdomsg`: "_Nada a fazer._"

**Diálogo de remoção padrão**
- `$rmmsg`: "_Você já tem `$LT_PROGRAM` instalado. Deseja removê-lo?_"

Requer definir uma variável `LT_PROGRAM` anteriormente. 

**Adicionando Traduções**

1. Adicione chaves de tradução a todos os arquivos JSON de idioma
2. Use chaves de tradução em descrições de script: `# description: app_desc`
3. Referencie chaves em diálogos e mensagens

#### Controle de Localização
```bash
# Restringir script a locales específicos
# localize: pt
# Este script só será mostrado para usuários de língua portuguesa
```

### Compatibilidade de Contêiner

#### Detecção de Contêiner

LinuxToys detecta automaticamente ambientes containerizados e pode filtrar scripts adequadamente.

#### Restrições de Contêiner
```bash
# Ocultar script em todos os contêineres
# nocontainer

# Ocultar script apenas em contêineres de distribuições específicas
# nocontainer: debian, ubuntu
```

**Filtragem Automática**

Scripts usando `flatpak_in_lib` são automaticamente ocultados em contêineres a menos que explicitamente permitidos com cabeçalhos `nocontainer` especificando sistemas compatíveis.

### Recursos Avançados

#### Modo de Desenvolvimento

LinuxToys inclui um modo de desenvolvimento para teste e depuração:

#### Variáveis de Ambiente
- **`DEV_MODE=1`** - Habilitar modo desenvolvedor
- **`COMPAT=distro`** - Substituir detecção de compatibilidade
- **`CONTAINER=1`** - Simular ambiente de contêiner  
- **`OPTIMIZER=1/0`** - Simular estado de otimização

#### Substituições de Desenvolvedor
```bash
# Mostrar todos os scripts independente de compatibilidade
DEV_MODE=1 ./run.py

# Testar script em distribuição específica
DEV_MODE=1 COMPAT=arch ./run.py

# Testar comportamento de contêiner
DEV_MODE=1 CONTAINER=1 ./run.py

# Testar toggle de otimização padrão
DEV_MODE=1 OPTIMIZER=1 ./run.py
```

### Gerenciamento de Reinicialização

LinuxToys fornece tratamento abrangente de reinicialização:

#### Detecção de Reinicialização
```bash
# Verificar se script requer reinicialização
script_requires_reboot(script_path, system_compat_keys)

# Verificar implantações ostree pendentes
check_ostree_pending_deployments()
```

**Diálogos de Reinicialização**

- Diálogos automáticos de aviso de reinicialização
- Escolha do usuário entre "Reiniciar Agora" e "Reiniciar Depois"
- Fechamento gracioso da aplicação ao requisito de reinicialização
- Tratamento especial para implantações ostree pendentes

### Tratamento de Erro

#### Melhores Práticas
```bash
# Verificar sucesso do comando
if ! comando_que_pode_falhar; then
    nonfatal "Comando falhou, continuando..."
    return 1
fi

# Falha crítica
if ! comando_crítico; then
    fatal "Operação crítica falhou"
fi

# Tratamento de erro silencioso  
comando_com_saída 2>/dev/null || true
```

### Categorias de Script

#### Estrutura de Organização
```
p3/scripts/
├── office/          # Aplicações de Escritório e Trabalho
├── game/           # Ferramentas de jogos e launchers
├── devs/           # Ferramentas de desenvolvedor
├── utils/          # Utilitários do sistema
├── drivers/        # Drivers de hardware
├── repos/          # Gerenciamento de repositórios
├── extra/          # Ferramentas experimentais/adicionais
├── pdefaults.sh    # Otimizações do sistema
└── psypicks.sh     # Seleção curada de software
```

#### Informações da Categoria

Cada categoria pode ter um arquivo `category-info.txt`:
```
name: Nome de Exibição da Categoria
description: chave de descrição da categoria
icon: nome-do-ícone-da-pasta
mode: menu
```

### Melhores Práticas

#### Desenvolvimento de Script
1. **Sempre use cabeçalhos de metadados** para categorização e filtragem adequadas
2. **Teste compatibilidade** em diferentes distribuições quando possível
3. **Trate erros graciosamente** com feedback apropriado ao usuário
4. **Use bibliotecas existentes** em vez de reimplementar funcionalidade comum
5. **Siga a estrutura padrão de script** para consistência

#### Gerenciamento de Pacotes
1. **Declare pacotes em arrays** antes de chamar `_install_`
2. **Verifique disponibilidade de pacotes** para diferentes distribuições
3. **Trate sistemas rpm-ostree** apropriadamente (evite pacotes não essenciais)
4. **Use Flatpak para aplicações GUI** quando possível

#### Experiência do Usuário
1. **Forneça descrições claras** nos idiomas fornecidos
2. **Use ícones apropriados** para identificação visual
3. **Trate requisitos de reinicialização** adequadamente
4. **Mostre progresso e feedback** durante operações longas
5. **Respeite escolhas do usuário** em diálogos de confirmação

#### Localização
1. **Use chaves de tradução** em vez de texto hardcoded
2. **Forneça traduções** para todos os idiomas suportados
3. **Teste com diferentes locales** para garantir funcionalidade adequada
4. **Use restrições de locale** quando scripts são específicos de região

Este guia fornece a base para criar scripts robustos, compatíveis e user-friendly dentro do ecossistema LinuxToys. Ao aproveitar as bibliotecas fornecidas e seguir essas convenções, desenvolvedores podem criar scripts que funcionam perfeitamente em múltiplas distribuições Linux enquanto fornecem uma experiência de usuário consistente.