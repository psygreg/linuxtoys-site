# Manual do Desenvolvedor

## I. Diretrizes de Contribuição

Obrigado pelo seu interesse em contribuir para o LinuxToys! Este projeto visa fornecer uma coleção de ferramentas para Linux de forma amigável ao usuário, tornando funcionalidades poderosas acessíveis a todos os usuários.

### Documentação

Antes de começar, por favor revise o [Manual do Desenvolvedor](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook) para documentação completa sobre as bibliotecas e práticas de desenvolvimento do LinuxToys.

#### Prioridades de Desenvolvimento

Ao contribuir para o LinuxToys, por favor mantenha essas prioridades centrais em mente, listadas em ordem de importância:

#### 1. Segurança e Privacidade em Primeiro Lugar
- **A segurança e privacidade do usuário devem sempre ser a prioridade máxima**
- Todos os scripts e ferramentas devem ser cuidadosamente testados e revisados
- Nunca implemente recursos que possam comprometer dados do usuário ou segurança do sistema
- Documente claramente quaisquer riscos potenciais ou mudanças no sistema
- Siga práticas de codificação segura e valide todas as entradas do usuário

#### 2. Facilidade de Uso e Acessibilidade
- Projete pensando no usuário médio de computador
- Forneça interfaces claras e intuitivas
- Inclua descrições úteis e orientação para todos os recursos, mantendo-o direto ao ponto
- Garanta acessibilidade para usuários com diferentes níveis de habilidade técnica
- Use linguagem simples em textos voltados ao usuário e mensagens de erro

#### 3. Confiabilidade e Autossuficiência
- **Todos os recursos devem funcionar como pretendido sem exigir soluções adicionais do usuário**
- Ferramentas devem lidar graciosamente com casos extremos
- Forneça mensagens de erro claras quando algo der errado
- Teste através de distribuições e versões suportadas
- Garanta que dependências sejam adequadamente gerenciadas e documentadas

#### 4. Restrições de Ferramentas CLI
- **Interfaces de linha de comando devem ser restritas a casos de uso de desenvolvedores e administradores de sistema**
- O usuário médio de computador não sabe ou não quer lidar com emuladores de terminal
- Recursos exclusivos de CLI devem ser restritos aos menus de Desenvolvimento e Administração do Sistema

### Por último...

- Todos os Pull Requests serão revisados manualmente antes da aprovação
- Certifique-se de que suas contribuições se alinhem com as prioridades de desenvolvimento listadas acima
- Teste suas mudanças através de diferentes distribuições Linux quando possível
- Siga o estilo de código existente e a estrutura
- Documente quaisquer novos recursos ou mudanças significativas

### Primeiros Passos

1. Revise o [Manual do Desenvolvedor](https://github.com/psygreg/linuxtoys/wiki/Developer-Handbook)
2. Faça fork do repositório e crie uma branch de recurso
3. Faça suas mudanças seguindo as prioridades de desenvolvimento
4. Teste minuciosamente através de sistemas suportados
5. Envie um Pull Request com uma descrição clara de suas mudanças

Apreciamos suas contribuições para tornar o Linux mais acessível e amigável para todos!

## II. Recursos e Uso do LinuxToys

### Estrutura de Script e Metadados

#### Template Básico de Script

Todos os scripts LinuxToys seguem uma estrutura padronizada com cabeçalhos de metadados:

```bash
#!/bin/bash
# name: Human Readable Name (ou placeholder para tradução)
# version: 1.0
# description: description_key_or_text
# icon: icon-name
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

- **`# name:`** - Nome de exibição mostrado na UI
- **`# version:`** - Versão do script (tipicamente "1.0")
- **`# description:`** - Chave de descrição para traduções ou texto direto
- **`# icon:`** - Identificador de ícone para a UI - *não obrigatório em menus de checklist*

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

### Bibliotecas Principais

#### linuxtoys.lib

A biblioteca principal fornece funções essenciais para operações de script:

**Gerenciamento de Pacotes**

```bash
# Declarar pacotes para instalar
_packages=(package1 package2 package3)
_install_
```

A função `_install_` automaticamente:
- Detecta o gerenciador de pacotes (apt, pacman, dnf, zypper, rpm-ostree)
- Verifica se os pacotes já estão instalados
- Instala pacotes faltantes usando o método apropriado
- Lida com sistemas rpm-ostree com pacotes em camadas
- Remove a variável `_packages` na conclusão, permitindo usá-la várias vezes no mesmo script se necessário

**Gerenciamento Flatpak**

```bash
# Declarar pacotes para instalar
_flatpaks=(package1 package2 package3)
_flatpak_
```

A função `_flatpak_` instala automaticamente cada flatpak dentro do array com parâmetros padrão (nível de usuário, repositório Flathub). Também removerá `_flatpaks` na conclusão, permitindo usá-la várias vezes no mesmo script se necessário.

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
zenity --question --text "$translation_key" --width 360 --height 300
```

### Melhores Práticas

#### Desenvolvimento de Scripts
1. **Sempre use cabeçalhos de metadados** para categorização e filtragem adequadas
2. **Teste compatibilidade** através de diferentes distribuições quando possível
3. **Trate erros graciosamente** com feedback apropriado ao usuário
4. **Use bibliotecas existentes** em vez de reimplementar funcionalidade comum
5. **Siga a estrutura de script padrão** para consistência

Este guia fornece a base para criar scripts robustos, compatíveis e amigáveis ao usuário dentro do ecossistema LinuxToys. Ao aproveitar as bibliotecas fornecidas e seguir essas convenções, desenvolvedores podem criar scripts que funcionam perfeitamente através de múltiplas distribuições Linux enquanto fornecem uma experiência de usuário consistente.
