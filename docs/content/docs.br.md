# Guia do Usuário do LinuxToys

O LinuxToys é uma coleção de ferramentas desenvolvida para facilitar a instalação, configuração, otimização e manutenção de software no Linux.

Em vez de exigir que você siga manualmente diferentes conjuntos de instruções no terminal para cada distribuição Linux, o LinuxToys oferece uma interface comum para as tarefas compatíveis. Ele detecta características relevantes do seu sistema e utiliza os procedimentos apropriados para sua distribuição Linux e hardware.

Este guia aborda os conceitos básicos que você deve conhecer como usuário do LinuxToys, incluindo:

* como o LinuxToys funciona;
* como instalar e remover recursos;
* o **Registro de Ações**;
* o uso de **arquivos de Manifesto**;
* como relatar problemas;
* considerações de privacidade ao enviar relatórios de erros;
* como usar o LinuxToys pela linha de comando.

---

## Como o LinuxToys funciona

A maioria das opções apresentadas pelo LinuxToys representa um procedimento de instalação, configuração, otimização ou manutenção.

Quando você seleciona uma delas, o LinuxToys cuida dos comandos Linux necessários. Dependendo da opção selecionada, isso pode envolver operações como:

* instalar ou remover pacotes;
* instalar aplicativos Flatpak;
* baixar e instalar software;
* habilitar repositórios;
* criar ou modificar arquivos de configuração;
* habilitar ou desabilitar serviços do sistema;
* aplicar configurações ao sistema;
* executar procedimentos de configuração específicos de determinados aplicativos.

O LinuxToys é compatível com várias distribuições Linux, portanto os comandos utilizados podem ser diferentes de um sistema para outro, mesmo quando a opção exibida na interface é a mesma.

Por exemplo, instalar um pacote no Fedora, Ubuntu e Arch Linux exige gerenciadores de pacotes diferentes. As bibliotecas do LinuxToys abstraem muitas dessas diferenças para que os recursos compatíveis possam utilizar automaticamente o método apropriado.

### Detecção de compatibilidade

Nem todos os recursos do LinuxToys são aplicáveis a todos os computadores.

O LinuxToys pode utilizar informações de compatibilidade para determinar se um recurso é apropriado para o sistema atual, incluindo fatores como a distribuição Linux, hardware, ambiente de desktop e se o LinuxToys está sendo executado dentro de um contêiner.

Por isso, as opções disponíveis em um computador podem não ser exatamente as mesmas exibidas em outro.

Isso é intencional: o LinuxToys procura evitar a apresentação ou execução de procedimentos que sabidamente não se aplicam ao sistema atual.

### Privilégios administrativos

Algumas operações modificam arquivos do sistema ou instalam software para todos os usuários e, portanto, exigem privilégios administrativos.

O LinuxToys solicitará autenticação quando realmente precisar de privilégios elevados. Você **não** precisa executar o aplicativo inteiro como root.

---

## Instalando recursos

A interface gráfica é a maneira mais simples de usar o LinuxToys.

Os recursos são organizados em categorias de acordo com sua finalidade. Ao selecionar um recurso, seu nome e descrição são exibidos para que você possa entender o que ele faz antes de executá-lo.

Alguns recursos são simples instalações de pacotes, enquanto outros realizam várias operações relacionadas. Por exemplo, um recurso pode precisar adicionar um repositório de software, instalar pacotes, configurar um serviço e criar arquivos de configuração como parte de um único procedimento.

Por esse motivo, é melhor pensar em um recurso do LinuxToys como uma **ação ou procedimento**, e não simplesmente como um pacote.

Durante a execução, o LinuxToys pode exibir um terminal para que você acompanhe o que está sendo feito. Alguns procedimentos também podem fazer perguntas quando uma decisão não puder ser tomada automaticamente de forma segura.

---

## O Registro de Ações

O LinuxToys possui um **Registro de Ações**, que mantém um histórico das alterações compatíveis realizadas através do LinuxToys.

**![Registro de Ações do LinuxToys](/docs/assets/action-registry-br.webp)**

O registro possui duas finalidades importantes:

1. fornecer um histórico das ações realizadas através do LinuxToys;
2. permitir que ações compatíveis sejam revertidas posteriormente.

Quando o LinuxToys executa um procedimento rastreável, suas bibliotecas podem registrar as operações realizadas. O registro associa essas operações ao recurso do LinuxToys que as executou.

Isso significa que, em muitos casos, o LinuxToys pode fazer muito mais do que simplesmente executar o procedimento original de instalação ao contrário.

### Revertendo uma ação

Quando um recurso instalado oferece suporte à remoção, o LinuxToys pode utilizar a transação registrada para determinar o que precisa ser desfeito.

Por exemplo, dependendo do procedimento original, a reversão pode envolver:

* remover pacotes que foram instalados;
* restaurar arquivos de configuração;
* remover arquivos que foram criados;
* restaurar arquivos que foram substituídos ou modificados;
* desfazer outras operações registradas durante a instalação.

A reversão é baseada nas operações que foram efetivamente registradas durante aquela instalação. Internamente, essas operações são processadas em ordem inversa quando o LinuxToys constrói o procedimento de remoção.

Isso é especialmente útil para recursos mais complexos, nos quais simplesmente desinstalar um único pacote não desfaria todas as alterações realizadas.

### O registro não é um histórico completo do sistema

O Registro de Ações registra **operações compatíveis realizadas através do LinuxToys**. Ele não é um registro geral de auditoria de tudo o que acontece na sua instalação Linux.

Se você posteriormente modificar, substituir ou remover algo manualmente, o LinuxToys não necessariamente terá conhecimento dessa alteração externa.

Da mesma forma, alguns instaladores de terceiros realizam internamente operações que o LinuxToys não consegue rastrear individualmente.

Por isso, o Registro de Ações deve ser considerado um registro daquilo que o LinuxToys sabe que alterou, e não um snapshot ou backup de todo o seu sistema operacional.

---

<a id="manifest-files"></a>

## Arquivos de Manifesto

Arquivos de Manifesto permitem descrever um conjunto de softwares e recursos do LinuxToys que devem ser instalados juntos.

Eles são úteis para:

* configurar um computador novo;
* reinstalar um sistema;
* configurar vários computadores de maneira semelhante;
* manter uma lista reutilizável dos seus aplicativos e recursos favoritos do LinuxToys.

Um Manifesto é, propositalmente, um simples arquivo de texto.

### Formato básico

Todo Manifesto do LinuxToys deve começar com:

```text
# LinuxToys Manifest File
```

Depois disso, coloque um item em cada linha. Linhas vazias são ignoradas e linhas iniciadas com `#` podem ser utilizadas como comentários.

Por exemplo:

```text
# LinuxToys Manifest File

# Aplicativos
firefox
org.kde.kdenlive

# Recursos do LinuxToys
Meu Recurso do LinuxToys
```

Um Manifesto pode conter três tipos de itens:

* recursos do LinuxToys;
* pacotes disponíveis através do gerenciador de pacotes do sistema;
* IDs de aplicativos Flatpak.

Você **não** precisa colocar essas categorias em nenhuma ordem específica.

Por exemplo, isto é perfeitamente válido:

```text
# LinuxToys Manifest File

org.kde.kdenlive
Meu Recurso do LinuxToys
git
org.gimp.GIMP
Outro Recurso do LinuxToys
htop
```

O LinuxToys classifica e valida as entradas antes da instalação. Prefixos explícitos também são suportados caso você queira eliminar possíveis ambiguidades: `script:`, `package:`/`pkg:` e `flatpak:`.

Por exemplo:

```text
# LinuxToys Manifest File

script:Meu Recurso do LinuxToys
package:git
flatpak:org.kde.kdenlive
```

Na maioria dos Manifestos, esses prefixos são opcionais.

### Nomes de recursos do LinuxToys

Os recursos do LinuxToys podem ser identificados pelo seu nome interno/script normal quando aplicável, mas os Manifestos também aceitam o **nome apresentado ao usuário na interface do LinuxToys**.

Isso significa que você pode deixar um Manifesto mais fácil de ler:

```text
# LinuxToys Manifest File

Recursos para Jogos
Otimizações de Desempenho
org.kde.kdenlive
git
```

em vez de precisar conhecer os nomes de arquivos utilizados internamente pelo LinuxToys.

> **Dica:** Os nomes podem mudar entre traduções. Para um Manifesto que será compartilhado entre máquinas utilizando idiomas diferentes na interface, pode ser preferível utilizar o nome interno do recurso do LinuxToys quando aplicável.

### Pacotes

Nomes normais de pacotes podem ser incluídos diretamente:

```text
git
htop
vim
```

O LinuxToys verifica se cada pacote existe nos repositórios disponíveis para a distribuição atual antes de prosseguir.

Você também pode identificar explicitamente uma entrada como pacote quando necessário:

```text
package:git
```

ou:

```text
pkg:git
```

### Flatpaks

Flatpaks normalmente devem ser informados utilizando o ID do aplicativo:

```text
org.gimp.GIMP
org.kde.kdenlive
com.valvesoftware.Steam
```

Você também pode identificá-los explicitamente:

```text
flatpak:org.kde.kdenlive
```

O LinuxToys verifica se o Flatpak solicitado pode ser encontrado antes de tentar instalá-lo.

### Validação antes da instalação

O LinuxToys valida um Manifesto antes de realizar as operações solicitadas.

Se uma entrada não puder ser reconhecida como um recurso do LinuxToys, pacote disponível ou Flatpak, a validação do Manifesto falhará em vez de simplesmente ignorar silenciosamente o item inválido.

Da mesma forma, o LinuxToys aplica suas verificações normais de compatibilidade aos recursos do LinuxToys. Um recurso válido que sabidamente não seja compatível com a máquina atual pode ser ignorado.

Isso torna os Manifestos mais seguros para reutilização em máquinas diferentes.

Por exemplo, o mesmo Manifesto pode conter um recurso do LinuxToys destinado apenas a determinado hardware. Um computador no qual esse recurso seja aplicável poderá utilizá-lo, enquanto o LinuxToys poderá evitar sua execução em um sistema incompatível.

### Carregando um Manifesto pela interface gráfica

O LinuxToys pode carregar um Manifesto diretamente pela sua interface gráfica.

**![Carregando um Manifesto](/docs/assets/demo-manifest-br.webp)**

Selecione a opção de Manifesto, escolha seu arquivo `.txt` e revise os itens detectados antes de prosseguir.

Essa geralmente é a maneira mais simples de utilizar um Manifesto de forma interativa.

O modo Manifesto também está disponível pela linha de comando, o que é útil para automação e implantação de sistemas.

---

## Relatando um problema

Sistemas Linux variam enormemente em distribuição, versão, hardware, drivers, ambientes de desktop e configurações.

Um procedimento que funciona corretamente em um sistema pode apresentar um problema em outro. Por isso, o LinuxToys possui um sistema integrado de relatórios de erros, desenvolvido para fornecer informações de diagnóstico úteis quando algo dá errado.

Ao relatar um problema, tente descrever **o que você estava tentando fazer e o que realmente aconteceu**.

Uma descrição útil seria:

> Tentei instalar o recurso. A instalação chegou à etapa de instalação do pacote, mas o gerenciador de pacotes informou que o pacote solicitado não foi encontrado.

Isso é muito mais útil do que:

> Não funciona.

Se você percebeu algo incomum imediatamente antes do problema ocorrer, mencione isso também.

### Selecionando o aplicativo afetado

Quando aplicável, o LinuxToys pode permitir que você identifique um aplicativo distribuído oficialmente como o assunto do relatório.

Utilize essa opção quando o problema estiver relacionado àquele aplicativo, e não ao próprio LinuxToys.

Isso ajuda a diferenciar problemas relacionados à instalação ou integração realizada pelo LinuxToys de problemas que podem pertencer ao próprio aplicativo, além de ajudar desenvolvedores upstream oficialmente suportados a receber feedback útil de usuários reais.

Se o problema estiver relacionado ao LinuxToys de maneira geral, você não precisa selecionar um aplicativo.

### Informações de diagnóstico

Um bom relatório de erro no Linux frequentemente precisa de mais informações do que apenas uma mensagem de erro.

Informações relevantes sobre o sistema podem ajudar a identificar problemas que dependem de fatores como:

* distribuição Linux e versão;
* kernel;
* CPU;
* hardware de GPU detectado;
* ambiente de desktop ou gerenciador de janelas;
* outras características do sistema relevantes para a operação que falhou.

O sistema de relatórios do LinuxToys foi desenvolvido para fornecer contexto técnico útil sem exigir que o usuário descubra manualmente cada detalhe relevante do sistema antes de enviar um relatório.

---

### Privacidade e relatórios de erros

Informações de diagnóstico são úteis, mas isso não significa que seja necessário expor informações pessoais desnecessariamente.

O sistema de relatórios do LinuxToys é desenvolvido com foco na coleta de **informações técnicas relevantes para diagnosticar o problema**, e não na criação de um inventário geral do computador do usuário.

Antes de enviar um relatório, você ainda deve evitar inserir manualmente informações sensíveis na descrição. Em particular, não inclua senhas, tokens de autenticação, chaves privadas, documentos pessoais ou outros segredos.

Quando logs estão envolvidos, o LinuxToys aplica um tratamento voltado à privacidade, com o objetivo de evitar que informações comuns capazes de identificar pessoalmente o usuário sejam incluídas desnecessariamente em um relatório.

O objetivo é simples:

> **Um relatório de erro deve descrever o computador com detalhes suficientes para diagnosticar o problema sem identificar a pessoa que o utiliza.**

Ainda assim, você deve tratar qualquer relatório de diagnóstico como informação que poderá se tornar visível para os desenvolvedores responsáveis pelo problema. Caso adicione manualmente saídas do terminal ou outras informações à descrição, revise-as antes do envio.

---

## Usando o LinuxToys pela linha de comando

O LinuxToys também oferece uma CLI para usuários que preferem o terminal ou desejam automatizar operações comuns.

Você pode consultar a referência atual de comandos com:

```bash
linuxtoys --help
```

A CLI permite instalar recursos do LinuxToys, pacotes e Flatpaks, remover recursos do LinuxToys e pacotes, listar os recursos disponíveis, processar Manifestos, verificar atualizações e exibir a versão instalada do LinuxToys.

### Listando recursos do LinuxToys

Para visualizar os recursos do LinuxToys disponíveis pela CLI:

```bash
linuxtoys --list
```

A lista inclui tanto o identificador interno do recurso quanto seu nome de exibição, facilitando a identificação do nome que pode ser utilizado pela linha de comando.

### Instalando um recurso do LinuxToys

Utilize:

```bash
linuxtoys --install --script nome-do-recurso
```

Vários recursos podem ser informados:

```bash
linuxtoys --install --script recurso-um recurso-dois
```

As formas abreviadas também estão disponíveis:

```bash
linuxtoys -i -s nome-do-recurso
```

### Instalando pacotes

Pacotes da sua distribuição podem ser instalados com:

```bash
linuxtoys --install --package git htop
```

ou:

```bash
linuxtoys -i -p git htop
```

### Instalando Flatpaks

Utilize o ID do aplicativo Flatpak:

```bash
linuxtoys --install --flatpak org.kde.kdenlive
```

ou:

```bash
linuxtoys -i -f org.kde.kdenlive
```

### Modo de instalação inteligente

Você não precisa necessariamente especificar o tipo de item que deseja instalar.

Por exemplo:

```bash
linuxtoys --install git org.kde.kdenlive nome-do-recurso
```

ativa o **modo inteligente** da CLI, que tenta classificar os itens fornecidos como recursos do LinuxToys, pacotes ou Flatpaks.

Para recursos, o LinuxToys pesquisa as opções disponíveis pelo nome. Pacotes e Flatpaks são verificados em suas respectivas fontes disponíveis antes da instalação.

Ao escrever scripts ou automações em que uma possível ambiguidade seja indesejável, é preferível utilizar `--script`, `--package` ou `--flatpak` explicitamente.

### Removendo software e ações do LinuxToys

Recursos do LinuxToys podem ser removidos com:

```bash
linuxtoys --uninstall --script nome-do-recurso
```

ou:

```bash
linuxtoys -u -s nome-do-recurso
```

Para um recurso do LinuxToys, a remoção pela CLI utiliza o mesmo mecanismo baseado no Registro de Ações utilizado para reverter ações registradas. Uma entrada removível precisa existir no registro para aquele recurso.

Pacotes podem ser removidos com:

```bash
linuxtoys --uninstall --package nome-do-pacote
```

A remoção inteligente também está disponível:

```bash
linuxtoys --uninstall nome-do-item
```

No modo de remoção inteligente, o LinuxToys primeiro verifica se o item corresponde a um recurso do LinuxToys. Caso contrário, ele é tratado como um pacote.

### Ignorando confirmações

Para operações automatizadas ou não interativas, adicione:

```bash
--yes
```

ou:

```bash
-y
```

Por exemplo:

```bash
linuxtoys --install --package git htop --yes
```

Isso ignora as solicitações de confirmação, portanto deve ser utilizado apenas quando você já sabe o que o LinuxToys fará.

### Verificando atualizações do LinuxToys

Utilize:

```bash
linuxtoys update
```

ou:

```bash
linuxtoys upgrade
```

Outras formas de verificação, como `--check-updates`, também são suportadas.

### Verificando a versão instalada

```bash
linuxtoys --version
```

ou:

```bash
linuxtoys -v
```

---

### Usando Manifestos pela CLI

O modo Manifesto pode ser iniciado com:

```bash
linuxtoys --manifest /caminho/para/manifest.txt
```

ou:

```bash
linuxtoys -m /caminho/para/manifest.txt
```

O Manifesto é validado antes que seu conteúdo seja instalado.

A menos que a confirmação seja explicitamente desabilitada, o LinuxToys exibe o que pretende executar ou instalar e solicita:

```text
Continue? [y/N]:
```

antes de prosseguir.

Para uma implantação não interativa:

```bash
linuxtoys --manifest /caminho/para/manifest.txt --yes
```

O processamento do Manifesto agrupa internamente as solicitações validadas: pacotes são instalados primeiro, seguidos pelos Flatpaks e, por último, pelos recursos do LinuxToys. Portanto, a ordem em que esses diferentes tipos de entrada aparecem no Manifesto **não** precisa seguir a ordem de execução.

É por isso que um Manifesto pode ser escrito pensando na legibilidade, em vez de precisar reproduzir a sequência interna de instalação do LinuxToys.

---

## O que acontece quando algo falha?

O LinuxToys possui mecanismos de proteção destinados a reduzir as consequências de procedimentos que falham durante a execução.

Para ações compatíveis do LinuxToys, as operações realizadas durante a execução podem ser rastreadas para que o LinuxToys saiba o que foi alterado, e uma reversão automática será feita se possível.

Isso não significa que todo instalador externo ou comando possa sempre ser perfeitamente revertido. A eficácia da reversão depende de as operações relevantes terem sido rastreadas.

Caso uma instalação falhe, leia o erro exibido antes de tentar executá-la repetidamente. Se o motivo não for evidente, esse é um bom momento para utilizar o sistema de relatórios de erros.

---

## Boas práticas

O LinuxToys foi desenvolvido para automatizar a administração do Linux, mas as ações executadas por ele ainda são operações reais no sistema.

Alguns hábitos tornam seu uso consideravelmente mais simples:

* **Leia as descrições dos recursos.** Não instale uma otimização ou modificação do sistema apenas porque ela está disponível.
* **Mantenha o LinuxToys atualizado.** Distribuições Linux e softwares de terceiros mudam com frequência.
* **Reinicie quando o LinuxToys informar que uma reinicialização é necessária.** Isso é especialmente importante quando implantações ou componentes importantes do sistema foram alterados.
* **Utilize o Registro de Ações para remover recursos do LinuxToys.** Desfazer manualmente parte de uma instalação rastreada pode tornar uma reversão automática posterior menos completa.
* **Utilize Manifestos para configurações reproduzíveis.** Eles são muito mais fáceis de manter do que uma longa coleção de comandos de instalação.
* **Utilize `--yes` com cuidado.** As solicitações de confirmação são especialmente úteis ao executar comandos manualmente.
* **Relate problemas reproduzíveis.** Explique o que você selecionou, o que esperava que acontecesse e o que aconteceu de fato.

---

## Referência rápida

### Interface gráfica

Utilize a interface normal do LinuxToys para instalações e configurações interativas.

Utilize o **Registro de Ações** para consultar e reverter ações compatíveis realizadas anteriormente.

Utilize **Carregar Manifesto** quando quiser que o LinuxToys processe uma lista reutilizável de instalações.

### Linha de comando

```bash
# Ajuda
linuxtoys --help

# Listar recursos do LinuxToys
linuxtoys --list

# Instalar um recurso do LinuxToys
linuxtoys --install --script nome-do-recurso

# Instalar pacotes
linuxtoys --install --package git htop

# Instalar um Flatpak
linuxtoys --install --flatpak org.kde.kdenlive

# Instalação inteligente
linuxtoys --install nome-do-recurso git org.kde.kdenlive

# Reverter um recurso do LinuxToys
linuxtoys --uninstall --script nome-do-recurso

# Remover um pacote
linuxtoys --uninstall --package nome-do-pacote

# Processar um Manifesto
linuxtoys --manifest manifest.txt

# Processar um Manifesto sem confirmação
linuxtoys --manifest manifest.txt --yes

# Verificar atualizações
linuxtoys update

# Exibir a versão do LinuxToys
linuxtoys --version
```

---

## Obtendo ajuda

Se algo não funcionar como esperado, primeiro verifique o erro exibido pelo LinuxToys. Muitos erros, especialmente aqueles provenientes do gerenciador de pacotes, já explicam a causa imediata do problema.

Se o problema aparentar ser um erro do LinuxToys, utilize o sistema integrado de relatórios e inclua uma explicação breve e clara sobre o que você estava fazendo quando o problema ocorreu.

Bons relatórios ajudam os desenvolvedores do LinuxToys e de aplicativos oficialmente suportados a identificar problemas específicos de determinados sistemas que, de outra forma, seriam difíceis de reproduzir.
