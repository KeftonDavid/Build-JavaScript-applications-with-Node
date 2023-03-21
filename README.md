# Build JavaScript applications with Node.js
Trilha inicial de estudos da Microsoft Learn sobre Node.js, consistindo de 6 módulos para estudo, a qual estou utilizando por motivo de revisão e garantia de que tenho/terei uma base sólida em Node.js. "É impossível para um homem aprender aquilo que ele acha que já sabe." (Epicteto)

# Módulos
## Introduction to Node.js
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

## Create a new Node.js project and work with dependencies
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

## Interactively debug Node.js apps with the built-in and Visual Studio debuggers
## Work with files and directories in a Node.js app
## Build a web API with Node.js and Express
## Introduction to route management in Node.js with Javascript 
