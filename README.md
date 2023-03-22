# Build JavaScript applications with Node.js
Trilha inicial de estudos da Microsoft Learn sobre Node.js, consistindo de 6 módulos para estudo, a qual estou utilizando por motivo de revisão e garantia de que tenho/terei uma base sólida em Node.js. 
> "É impossível para um homem aprender aquilo que ele acha que já sabe." (Epicteto)

# Módulos
## 1. Introduction to Node.js
### Introduction
Learning objectives:
- Explicar o que é o Node
- Descrever como funciona
- Identificar quando utilizar o Node
- Criar e rodar um script node a partir da linha de comando

### What is Node.js
É um ambiente server-side de Node;js, que permite rodar código JS através da sua engine V8 fora dos navegadores. 
Aplicaçoes que podem ser desenvolvidas com Node:
- Servidores web HTTP
- Microsserviços ou APIs backend serverless
- Drivers para acesso e consulta de banco de dados
- Interfaces de linha de comando (CLI)
- Aplicações Desktop
- Bibliotecas cliente e servidor para Internet das Coisas (IoT)
- Plugins para aplicações desktop
- Shells scripts para manipulação ou acesso de rede
- Bibliotecas e modelos de aprendizagem de máquina

### How Node.js works
Modelo arquitetural do Node.js: 
- O Node.js é baseado em um modelo de arquitetura de loop de eventos de única thread, ou seja, o node executa uma tarefa de cada vez.
- Operações de entrada/saída, leitura/escrita são chamadas de operações bloqueantes, ou seja, a tarefa atual bloqueia o prosseguimento das outras tarefas. O node passa a executar os próximos eventos uma vez que a tarefa atual estiver concluída.
- É a chamada arquitetura event-driven

Arquitetura:

![image](https://user-images.githubusercontent.com/67758151/226448865-bc2cf562-f9a2-481f-acbb-0ad385ebb2d2.png)


As fases principais de um loop de eventos são:
- Timers: Processa uma função callback agendada por `setTimeout()` ou `setInterval()`
- Callbacks: executa funções callback pendentes
- Poll: recupera eventos de E/S de entrada e executa callbacks relacionados a E/S.
- Check: permite a execução de callbacks após o término de um Poll
- Close Callbacks: fechamento de eventos, ex: `socket.destroy()`

### Why you might need Node.js
- É uma tecnologia multipropósito
- Possui comunidade ativa
- É opensource

### Try Node.js
O Node.js possui um modo interativo de console, denominado REPL(read-eval-print loop) que pode ser utilizado para experimentação rápida de código.
Funcionamento do REPL:
- Read: Faz a leitura do código input
- Eval: Valida o código
- Print: Printa o resultado do código
- Loop: Aguarda um novo input do usuário.
Para entrar no modo REPL, utilizar o comando `node` no terminal

## 2. Create a new Node.js project and work with dependencies
### Introduction
Learning objectives:
- Inicializar projetos Node.js
- Entender de que consiste o arquivo package.json e aprender a utilizá-lo em sua vantagem
- Adicionar pacotes e remover pacotes do seu projeto node
- Administrar as dependências e atualizá-las de forma previsível

### Configure the package.json
O arquivo package.json contém metadados do seu projeto Node, também administrando suas dependências e etc. 

Inicializar um package.json:
- Para inicializar, é utilizado o comando `init`

Conteúdos do package.json:
- Meta-informações: São metadados sobre o projeto, como nome, descrição, autor, palavras-chave e etc.
- Dependências: Dependências do projeto, podendo ser `dependencies` ou `devDependencies`
- Scripts: Scripts próprios do projeto.

Scripts para administrar o projeto:
`start`: Invoca o comando `node` juntamente do arquivo javascript que for especificado.
`build`: Descreve como fazer a build do projeto
`test`: Executa testes para o projeto.
`lint`: Invoca um linter como o ESLint. Um linter encontra inconsistências de código.

Exemplo prático de definição de scripts:
```
"scripts" : {
  "start" : "node ./dist/index.js", 
  "test": "jest", 
  "build": "tsc", 
  "lint": "eslint" 
}
```
### Exercise - Configure the package.json
Realizado e demonstrado em código, seguindo o que foi aprendido

### Add packages to your Node.js project
O node possui bibliotecas padrão para fazer o tratamento de dados, porém, existe uma grande quantidade de bibliotecas de terceiros, que podem ser instaladas em um projeto utilizando o npm (node package manager). Essas bibliotecas são chamadas de dependências quando estão instaladas em um projeto.

Como determinar se você precisa de uma dependência:
- Você precisa concluir uma tarefa ou parte de uma aplicação que possui muitos casos de uso e não deve possuir erros sob qualquer hipótese (como segurança)
- Poupar tempo
- Manutenibilidade

Como validar um pacote:
Antes de instalar uma dependência, é necessário observar alguns fatores e outras dependências das quais esse pacote utiliza.
- Observar o tamanho do pacote, em caso de limitações de banda ou hardware
- A licensa de alguns pacotes pode apresentar impecílios caso o seu projeto seja comercializado
- Observar se o pacote possui manutenção ativa dos seus contribuíntes

Instalação de pacotes: 
A instalação é feita utilizando a ferramenta de terminal `npm`. O comando de instalação padrão é `npm install <nome-pacote>`

Encontrar um pacote:
Pacotes podem ser encontrados em diferentes lugares, tais como:
- Registros globais como o npm registry
- Repositórios do GitHub por exemplo
- Arquivos locais
- Diretórios

Comandos NPM:
para listar todos os comandos npm, utilizar `npm --help`

Dependências de produção vs dependências de desenvolvimento
- Produção: São dependências que devem estar inclusas no projeto durante a fase de produção. No arquivo package.json, essas dependências ficam numa seção chamada `dependencies` 
- Desenvolvimento: São dependências que são necessárias somente para o desenvolvimento da aplicação, como bibliotecas de teste e etc. No arquivo package.json, essas dependências ficam numa seção chamada `devDependencies`. 
 
Durante a instalação dos pacotes, denotar no terminal com `-- production` instalará as dependências na seção de produção.

Como instalar um pacote:
Utilizando o comando `npm install <nome-pacote>` instala uma dependência normal. Para adicionar a dependência como dependência de desenvolvimento, adicionar a flag `--save-dev`.
Para instalar um pacote globalmente, utilizar a flag `-g` junto do comando `npm install`

Após a instalação:
Os pacotes instalados estarão referenciados no package.json, porém na pasta node_modules, não será instalado somente o pacote, mas também todas as outras dependências que esse pacote instalado utiliza.

Excluir dependências:
Existem duas maneiras:
- Desinstalar: Utilizando o comando `npm uninstall <nome-pacote>` você removerá o pacote do package.json e também da pasta node_modules.
- Prune: Utilizando `npm prune` você removerá quaisquer dependências na pasta node_modules que não estejam listadas no package.json.

### Exercise - Install packages
Demonstrado em código, o exercício tinha o objetivo de instalar o Jest, criar um script de teste para o jest, criar uma pasta de teste, com um arquivo de teste a ser usado pelo Jest para testar o arquivo address-parser.js

### Manage dependency updates in your Node.js project
Considerações a serem feitas antes de atualizar uma biblioteca:
- O tipo de atualização: Analisar o tipo de atualização, para que não venha a quebrar seu código.
- Se o projeto está configurado corretamente: É possível configurar um projeto node para ter somente o tipo de atualização especificado.
- Problemas de segurança: Analisa se algum pacote utilizado teve alguma vulnerabilidade detectada, e o atualizar assim que possível.

Versionamento semântico:
É um padrão de indústria que os desenvolvedores utilizam para indicar a versão e o tipo de atualização de um pacote. O número de versão é dividido em três seções:
- Versão principal: É o número mais a esquerda. Por exemplo, o número 1 em 1.0.0. Uma mudança nesse número significa que você deve esperar mudanças que podem quebrar seu código.
- Versão secundária: É o número do meio. Por exemplo, o número 2 em 1.2.0. Uma mudança nesse número significa que foram adicionadas novas funcionalidades, então seu código deve continuar funcionando.
- Versão de correção: É o número mais a direita. Por exemplo, o número 3 em 1.2.3. Uma mudança nesse número significa que foi feita uma mudança que corrigiu algo em algum código que deveria estar funcionando, então costuma ser seguro aceitar esse tipo de atualização.

Atualizar um pacote com o NPM: 
O comando utilizado para atualizar pacotes é `npm update <nome-pacote>@<argumento-opcional-com-numero-da-versao>`

A atualização depende de duas condições:
- Se o argumento de versão é especificado como parte do comando de atualização
- O que está definido no package.json: Caso esteja definida alguma regra para como a dependência deva ser atualizada. Ex: `"<nome-dependência>" : "1.1.x"`. O npm respeita o padrão imposto pela regra e tenta atualizar a dependência de acordo.

Abordagem de atualização:
Para atualizar uma dependência, pensar sempre nos riscos:
- Versão principal: Ao aceitar essa att, aceitar o fato de talvez ter que refatorar código.
- Versão secundária: Aceitar novas funcionalidades, desde que não quebre nada.
- Versão de correção: Aceitar apenas correções de bug.

### Configurar o package.json para atualizações
Antes de atualizar dependências, é boa prática configurar o package.json para que o comportamento do mesmo seja previsível ao utilizar o comando de atualização. O Node possui um conjunto de símbolos para a definição do comportamento das atualizações de pacotes.
Adicionar prefixos junto da dependência no package.json é o processo utilizado.

Padrões para configurar versões principais/secundárias/corretivas:

|**Padrão**|**Nível de atualização**|
|---|---|
|x.0.0 ou \*\|Atualizar para a maior versão principal|
|1.x.1 ou \^\|Atualizar para somente a versão secundária|
|1.1.x ou \~\|Atualizar para a última versão de correção|

## 3. Interactively debug Node.js apps with the built-in and Visual Studio debuggers
## 4. Work with files and directories in a Node.js app
## 5. Build a web API with Node.js and Express
## 6. Introduction to route management in Node.js with Javascript 
