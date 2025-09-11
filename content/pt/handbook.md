# Manual do Desenvolvedor

## Bem-vindo ao Desenvolvimento do LinuxToys

Este manual irá guiá-lo através do processo de desenvolvimento de ferramentas e scripts do LinuxToys.

## Primeiros Passos

### Pré-requisitos

Antes de começar a desenvolver para o LinuxToys, certifique-se de ter:

- Um ambiente de desenvolvimento Linux
- Conhecimento básico de scripting em Bash
- Entendimento de gerenciamento de pacotes do Linux
- Git para controle de versão

### Configuração do Ambiente de Desenvolvimento

1. Clone o repositório do LinuxToys:
   ```bash
   git clone https://github.com/psygreg/linuxtoys.git
   cd linuxtoys
   ```

2. Instale as dependências de desenvolvimento:
   ```bash
   sudo apt install build-essential git curl
   ```

## Visão Geral da Arquitetura

O LinuxToys é construído com uma arquitetura modular que permite fácil extensão e manutenção.

### Componentes Principais

- **Motor de Scripts**: Gerencia a execução de ferramentas individuais
- **Sistema de Bibliotecas**: Funções e utilitários compartilhados
- **Framework GUI**: Componentes da interface do usuário
- **Modo CLI**: Interface de linha de comando para automação

### Estrutura de Diretórios

```
linuxtoys/
├── src/           # Código fonte
├── lib/           # Bibliotecas compartilhadas
├── tools/         # Scripts de ferramentas individuais
├── gui/           # Componentes GUI
└── tests/         # Suíte de testes
```

## Criando Novas Ferramentas

### Template de Ferramenta

Toda ferramenta do LinuxToys segue um template padrão:

```bash
#!/bin/bash
# Nome da Ferramenta: Nome da Sua Ferramenta
# Descrição: Breve descrição do que sua ferramenta faz
# Categoria: [devs|drivers|extra|game|office|repos|utils]
# Dependências: lista,de,dependências

source "$(dirname "$0")/../lib/common.sh"

function main() {
    # Lógica da sua ferramenta aqui
    log_info "Iniciando execução da ferramenta"
    
    # Implementação da ferramenta
    
    log_success "Ferramenta concluída com sucesso"
}

# Executar a ferramenta
main "$@"
```

### Melhores Práticas

1. **Tratamento de Erros**: Sempre inclua tratamento adequado de erros
2. **Logging**: Use as funções de logging do common.sh
3. **Feedback do Usuário**: Forneça feedback claro aos usuários
4. **Testes**: Escreva testes para suas ferramentas
5. **Documentação**: Inclua documentação clara

## Diretrizes de Teste

### Testes Unitários

Execute testes de ferramentas individuais:
```bash
./tests/run_tool_test.sh nome_da_sua_ferramenta
```

### Testes de Integração

Teste o fluxo completo:
```bash
./tests/run_integration_tests.sh
```

## Contribuindo

### Processo de Submissão

1. Faça um fork do repositório
2. Crie uma branch de feature
3. Implemente suas mudanças
4. Escreva testes
5. Submeta um pull request

### Revisão de Código

Todas as contribuições passam por um processo de revisão de código para garantir:
- Qualidade e padrões do código
- Considerações de segurança
- Impacto na performance
- Completude da documentação

---

*Última atualização: $(date)*
