# Build JavaScript applications with Node.js
Trilha inicial de estudos da Microsoft Learn sobre Node.js, consistindo de 6 módulos para estudo, a qual estou utilizando por motivo de revisão e garantia de que tenho/terei uma base sólida em Node.js. 
> "É impossível para um homem aprender aquilo que ele acha que já sabe." (Epicteto)

# Módulos
## 1. Introdução ao Node.js
### Introdução
#### Objetivos de aprendizagem:
- Explicar o que é o Node
- Descrever como funciona
- Identificar quando utilizar o Node
- Criar e rodar um script node a partir da linha de comando

### O que é o Node.js
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

### Como o node funciona
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

### Porque você talvez precise usar o Node.js
- É uma tecnologia multipropósito
- Possui comunidade ativa
- É opensource

### Usando Node.js
O Node.js possui um modo interativo de console, denominado REPL(read-eval-print loop) que pode ser utilizado para experimentação rápida de código.
Funcionamento do REPL:
- Read: Faz a leitura do código input
- Eval: Valida o código
- Print: Printa o resultado do código
- Loop: Aguarda um novo input do usuário.
Para entrar no modo REPL, utilizar o comando `node` no terminal

## 2. Crie um novo projeto Node.js e trabalhe com dependências
### Introdução
#### Objetivos de aprendizagem:
- Inicializar projetos Node.js
- Entender de que consiste o arquivo package.json e aprender a utilizá-lo em sua vantagem
- Adicionar pacotes e remover pacotes do seu projeto node
- Administrar as dependências e atualizá-las de forma previsível

### Configure o package.json
O arquivo package.json contém metadados do seu projeto Node, também administrando suas dependências e etc. 

#### Inicializar um package.json:
- Para inicializar, é utilizado o comando `init`

#### Conteúdos do package.json:
- Meta-informações: São metadados sobre o projeto, como nome, descrição, autor, palavras-chave e etc.
- Dependências: Dependências do projeto, podendo ser `dependencies` ou `devDependencies`
- Scripts: Scripts próprios do projeto.

#### Scripts para administrar o projeto:
`start`: Invoca o comando `node` juntamente do arquivo javascript que for especificado.
`build`: Descreve como fazer a build do projeto
`test`: Executa testes para o projeto.
`lint`: Invoca um linter como o ESLint. Um linter encontra inconsistências de código.

#### Exemplo prático de definição de scripts:
```
"scripts" : {
  "start" : "node ./dist/index.js", 
  "test": "jest", 
  "build": "tsc", 
  "lint": "eslint" 
}
```
### Exercício - Configure o package.json
Realizado e demonstrado em código, seguindo o que foi aprendido

### Adicionar pacotes no seu projeto Node.js
O node possui bibliotecas padrão para fazer o tratamento de dados, porém, existe uma grande quantidade de bibliotecas de terceiros, que podem ser instaladas em um projeto utilizando o npm (node package manager). Essas bibliotecas são chamadas de dependências quando estão instaladas em um projeto.

#### Como determinar se você precisa de uma dependência
- Você precisa concluir uma tarefa ou parte de uma aplicação que possui muitos casos de uso e não deve possuir erros sob qualquer hipótese (como segurança)
- Poupar tempo
- Manutenibilidade

#### Como validar um pacote
Antes de instalar uma dependência, é necessário observar alguns fatores e outras dependências das quais esse pacote utiliza.
- Observar o tamanho do pacote, em caso de limitações de banda ou hardware
- A licensa de alguns pacotes pode apresentar impecílios caso o seu projeto seja comercializado
- Observar se o pacote possui manutenção ativa dos seus contribuíntes

#### Instalação de pacotes 
A instalação é feita utilizando a ferramenta de terminal `npm`. O comando de instalação padrão é `npm install <nome-pacote>`

#### Encontrar um pacote
Pacotes podem ser encontrados em diferentes lugares, tais como:
- Registros globais como o npm registry
- Repositórios do GitHub por exemplo
- Arquivos locais
- Diretórios

### Comandos NPM
Para listar todos os comandos npm, utilizar `npm --help`

#### Dependências de produção vs dependências de desenvolvimento
- Produção: São dependências que devem estar inclusas no projeto durante a fase de produção. No arquivo package.json, essas dependências ficam numa seção chamada `dependencies` 
- Desenvolvimento: São dependências que são necessárias somente para o desenvolvimento da aplicação, como bibliotecas de teste e etc. No arquivo package.json, essas dependências ficam numa seção chamada `devDependencies`. 
 
Durante a instalação dos pacotes, denotar no terminal com `-- production` instalará as dependências na seção de produção.

#### Como instalar um pacote:
Utilizando o comando `npm install <nome-pacote>` instala uma dependência normal. Para adicionar a dependência como dependência de desenvolvimento, adicionar a flag `--save-dev`.
Para instalar um pacote globalmente, utilizar a flag `-g` junto do comando `npm install`

#### Após a instalação:
Os pacotes instalados estarão referenciados no package.json, porém na pasta node_modules, não será instalado somente o pacote, mas também todas as outras dependências que esse pacote instalado utiliza.

#### Excluir dependências:
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

#### Versionamento semântico:
É um padrão de indústria que os desenvolvedores utilizam para indicar a versão e o tipo de atualização de um pacote. O número de versão é dividido em três seções:
- Versão principal: É o número mais a esquerda. Por exemplo, o número 1 em 1.0.0. Uma mudança nesse número significa que você deve esperar mudanças que podem quebrar seu código.
- Versão secundária: É o número do meio. Por exemplo, o número 2 em 1.2.0. Uma mudança nesse número significa que foram adicionadas novas funcionalidades, então seu código deve continuar funcionando.
- Versão de correção: É o número mais a direita. Por exemplo, o número 3 em 1.2.3. Uma mudança nesse número significa que foi feita uma mudança que corrigiu algo em algum código que deveria estar funcionando, então costuma ser seguro aceitar esse tipo de atualização.

#### Atualizar um pacote com o NPM: 
O comando utilizado para atualizar pacotes é `npm update <nome-pacote>@<argumento-opcional-com-numero-da-versao>`

A atualização depende de duas condições:
- Se o argumento de versão é especificado como parte do comando de atualização
- O que está definido no package.json: Caso esteja definida alguma regra para como a dependência deva ser atualizada. Ex: `"<nome-dependência>" : "1.1.x"`. O npm respeita o padrão imposto pela regra e tenta atualizar a dependência de acordo.

#### Abordagem de atualização:
Para atualizar uma dependência, pensar sempre nos riscos:
- Versão principal: Ao aceitar essa att, aceitar o fato de talvez ter que refatorar código.
- Versão secundária: Aceitar novas funcionalidades, desde que não quebre nada.
- Versão de correção: Aceitar apenas correções de bug.

#### Configurar o package.json para atualizações: 
Antes de atualizar dependências, é boa prática configurar o package.json para que o comportamento do mesmo seja previsível ao utilizar o comando de atualização. O Node possui um conjunto de símbolos para a definição do comportamento das atualizações de pacotes.
Adicionar prefixos junto da dependência no package.json é o processo utilizado.

Padrões para configurar versões principais/secundárias/corretivas:

|**Padrão**|**Nível de atualização**|
|---|---|
|x.0.0 ou \*|Atualizar para a maior versão principal|
|1.x.1 ou \^|Atualizar para somente a versão secundária|
|1.1.x ou \~|Atualizar para a última versão de correção|

Você pode usar o padrão "~1.0.0" para atualizar somente a versão de correção.

#### package-lock.json
O package-lock.json é um arquivo complementar ao package.json, o qual é gerado quando você faz algo que modifica a pasta node_modules, ou seja, não é criado ao utilizar o `npm init`. Esse arquivo é gerado na instalação de um pacote, por exemplo.
O package-lock.json é um arquivo que deve estar no repositório do seu projeto, visto que é um arquivo que mantém controle das versões das dependências que foram instaladas. O package-lock.json guarda os logs de versão das dependências, ou seja, se você usou a regra 1.x, o arquivo manterá controle sobre qual versão exata foi instalada.

#### Encontrar e atualizar pacotes desatualizados
O comando `npm outdated` lista pacotes desatualizados.
Saída comum do comando:
|**Package**|**Current**|**Wanted**|**Latest**|**Location**|**Depended by**|
|---|---|---|---|---|---|
|lodash|1.0.0|1.0.0|4.17.19|lock-test|main-code-file|
|node-fetch|1.2.0|1.2.0|2.6.0|lock-test|function-code-file|

Colunas: 
- Package: Nome do pacote
- Current: Versão atual do pacote
- Wanted: A última versão compatível com o definido no package.json
- Latest: A última versão disponível do pacote
- Location: Onde está o pacote
- Depended by: O pacote que possui a dependência
Após verificar quais arquivos estão desatualizados, é recomendado utilizar o `npm update <nome-arquivo>`. Utilizar somente `npm update` sem o nome do arquivo culminará na tentativa de atualização de todas as dependências definidas no package.json

#### Administrar problemas de segurança
AO atualizar ou instalar dependências, você receberá um log que te mostrará qual versão foi instalada e se existem vulnerabilidades encontradas. O log classifica as vulnerabilidades em nivél de risco baixo, médio ou alto. Vulnerabilidades nível alto requerem ser atualizadas. O comando `npm audit` é utilizado para listar as vulnerabilidades.
O comando `npm audit fix` tenta corrigir o problema atualizando o pacote para uma versão secundária em que a vulnerabilidade não exista mais. Se isso não for o suficiente, utilizar `npm audit fix --force` atualizará o pacote para uma versão principal em que o problema esteja corrigido.

### Exercício - Administrar problemas de segurança
Exercício demonstrado em código, no qual consistiu em instalar os pacotes definidos no package.json, resolver problemas de segurança das dependências, verificar dependências desatualizadas, atualizar as dependências de acordo com as regras de versionamento semântico, e após isso atualizar os pacotes para a última versão disponível, além das regras de versionamento definidas no package.json


## 3. Depurar aplicativos Node.js interativamente com depuradores internos e do Visual Studio Code
### Introdução
#### Objetivos de aprendizagem:
- Usar o depurador do Visual Studio Code com um programa Node.js.
- Criar pontos de interrupção e executar o código passo a passo para encontrar problemas
- Inspecionar o estado do programa em qualquer etapa de execução
- Retroceder a pilha de chamada de eventos para encontrar a origem de uma exceção

### O que é um depurador (debugger)
É uma ferramenta usada para monitorar e controlar o fluxo de execução do seu programa com uma abordagem analítica, tendo como objetivo encontrar a origem de bugs na sua aplicação. Existem tanto depuradores que funcionam direto no terminal, quanto depuradores com uma ionterface gráfica de usuário (GUI).

#### Porque utilizar um depurador?
Desenvolver um software sem um depurador, significa que muito provavelmente você está adivinhando o que acontece no seu programa, diferentemente de com um depurador, em que você é capaz de observar o que acontece de fato.
Cada depurador possui suas funcionalidades. Existem duas principais:
- Controlar a execução do programa: Você pode pausar a execução do software, e executar passo a passo podendo observar o código executado.
- Observar o estado do programa: Você pode ver o valor das variáveis, funções e etc.

### Depurar com o depurador interno do Node.js
A depuração segue um passo a passo:
- Identifique o bug no código
- Encontre onde o bug está localizado no código
- Analizar porque o bug ocorre
- Corrija o bug
- Tenha certeza de que a correção funciona

#### Pontos de interrupção
São pontos definidos pelo programador, que interrompem a execução do programa na porção de código em que o desenvolvedor suspeita que haja bugs.
No JavaScript é possível utilizar a declaração universal `debugger` para depurar o código. 

#### Modo de inspeção do Node.js
Visto que o depurador possui acesso completo à execução do programa, isso poderia ser utilizado maliciosamente. Por esta razão, o Node não permite depurar um código sendo executado. Para depurar, é necessário ativar o modo inspeção com a opção `--inspect`, que por padrão estará no host 127.0.0.1 na porta 9229. Utilizar `--inspect=<HOST>:<PORT>` para definir porta e hospedagem.
** Importante não vincular o depurador à um IP público ou a 0.0.0.0, para evitar que um invasor possa causar danos.**
O comando `--inspect-brk` pode ser usado, funcionando como o inspect, porém parando o seu código antes do começo.

#### Erro de tempo limite do node inspect
Se `node inspect` ou `node --inspect` retornar um erro de tempo limite, você pode tentar instalar o modo inspeção globalmente no s eu sistema para resolver o problema.

#### Depurador interno
O node inspect é um depurador de linha de comando que vem atrelado ao Node.js. Utilizar `node inspect <seu-script.js>` executará o código em modo inspeção.
Após isso, existe uma série de comandos node inspect que podem ser utilizados para controle do programa:
- `cont` ou `c`: Continua a execução até o próximo ponto de interrupção ou o fim do código.
- `next` ou `n`: Executa a próxima linha de código.
- `step` ou `s`: É o mesmo que `next`, porém se a próxima linha for uma chamada de função, o depurador vai para a primeira linha de código da função chamada.
- `out` ou `o`: Se o contexto da execução atual está dentro de uma função, executar o código restante da função e voltar para onde a função havia sido chamada.
- `restart` ou `r`: Reinicia o programa e pausa a execução antes do começo do código.

Para definir pontos de interrupção:
- `setBreakpoint()` ou `sb()`: Adicionar ponto de interrupção na linha atual.
- `setBreakpoint(N)` ou `sb(<N>)`: Adiciona ponto de interrupção na linha N.
- `clearBreakpoint('seu-script.js', <N>)` ou `cb('seu-script.js', <N>)`: Remover ponto no arquivo `seu-script.js` na linha N.

Para receber informações sobre o ponto de execução:
- `list(<N>)`: listar código com N linhas antes e após o ponto de execução atual.
- `exec<EXPR>`: Validar uma expressão de acordo com o contexto atual, podendo ser possível obter o valor de variáveis.
Usar `help` mostra a lista de comandos, e `.exit` ou CTRL+D podem ser usados pra sair do depurador.

### Exercício: Usar o depurador interno do Node.js
Exercício realizado na plataforma Microsoft Learn com terminal integrado Azure Cloud. O exercício consistiu em criar um arquivo .js com uma sequência de fibbonacci que apresenta um bug, utilizar o node inspect, utilizar o comando `s` para entrar na função fibbonacci defeituosa, observar o valor do parâmetro passado para a função através do comando `exec`, entrar no loop for e colocar um ponto de interrupção, verificar o valor do contador do loop for através do `exec` e repetir o processo até o fim do loop for para descobrir onde está o bug. A análise através do depurador ajudou a identificar um erro na definição do loop for, em que na definição de quantas vezes o loop deveria rodar, havia o sinal `<` ao invés de `<=`, fazendo com que o loop rodasse uma vez a menos do que deveria.

### Depurar com o Visual Studio Code
O VS Code possui um depurador interno com interface gráfica de usuário.

#### Configurar o Visual Studio Code para depuração do node.js
O depurador interno do VS Code pode ser acessado na guia lateral **Executar**.
Formas de ativar o depurador em um projeto Node:
- Com um arquivo `.js` aberto, selecionar **Executar e Depurar**, e após isso, selecionar **Node.js**.
- Usar o terminal de depuração. Nesse modo, executar apenas `node seu-script.js` ativará o depurador, sem necessidade de usar o comando `--inspect`.
- Criar um arquivo **launch.json**

#### Adicionar pontos de interrupção
Próximo à linha de código que você deseja adicionar um ponto de interrupção, clickar na margem à esquerda. Um círculo vermelho aparecerá quando o ponto de interrupção estiver adicionado. Para removê-lo, basta clickar nele. É também possível adicionar um ponto de interrupção condicional ao clickar com o botão direito, no qual deve ser imposta uma condição para interromper a execução do código, ou seja, é um ponto que só se ativa quando a condição é valida.

#### Visão geral do depurador do VS Code
![image](https://user-images.githubusercontent.com/67758151/227700438-bb95b973-bcd5-4b2d-b77d-a4f992e4d6dc.png)

1. Controles de inicialização do depurador
2. Estado das variáveis
3. Estado das variáveis inspecionadas
4. Pilha de chamadas atual
5. Arquivos de script carregados
6. Pilha de chamadas
7. Controles de execução
8. Etapa da execução atual
9. Console de depuração

#### Controles de inicialização do depurador
![image](https://user-images.githubusercontent.com/67758151/227700583-9e487701-60a8-44a9-a10e-14344504ca32.png)

1. Iniciar depuração
2. Selecionar configuração de inicialização
3. Editar arquivo `launch.json`
4. Abrir console de depuração e alternar visibilidade entre painés de variáveis, inspeção, pilha de chamadas e pontos de interrupção

#### Visualizar e editar estado das variáveis
É possível usar o painel de variáveis para ter acesso ao estado das mesmas.
O painel as organiza por escopo:
- Variáveis locais (acessíveis no escopo de código atual)
- Variáveis globais (acessíveis de qualquer lugar no código)
- Variáveis de clausura

#### Painel de inspeção de variáveis
O painel de inspeção pode ser usado para escolher uma variável ou expressão a ser observada durante a execução do código.

#### Painel de pilha de chamadas
A pilha de chamadas mantém registro das funções chamadas na execução do código, sendo útil para encontrar a fonte de uma exceção. O painel de pilha de chamadas facilita a visualização desses logs.

#### Painel de visualização de arquivos de script carregados
É o painel que mostra os scripts que foram carregados.

#### Painel de pontos de interrupção
Nesse painel você pode observar e ativar ou desativar os pontos de interrupção do código.

#### Controle da execução
![image](https://user-images.githubusercontent.com/67758151/227702498-2da2c85c-52f0-432d-ad0d-f0dad5ff0cee.png)

Da esquerda pra a direita:
- Continuar ou pausar
- Contornar: executa a próxima instrução de código
- Intervir: funciona como o contornar, porém se a próxima instrução for uma chamada de função, o depurador vai para a primeira instrução dentro da função chamada
- Sair: Caso dentro de uma função, executa o resto da função e volta para a instrução após a chamada da função.
- Reiniciar
- Parar execução e sair

#### Usar o console de depuração
O console de depuração pode ser mostrado com **CTRL+Shift+Y** para visualizar os registros da aplicação. É possível inserir expressões e variáveis para saber seus respectivos valores.

#### Adicionar logpoints
É possível adicionar vários `console.log` em pontos do código para a companhar a execução. Clickar com o botão direito na barra a esquerda do código permite adicionar um logpoint.

### Exercício: depurar com o Visual Studio Code
O exercício consistiu em criar um arquivo de código que define a taxa de câmbio entre três moedas, configurar um arquivo launch.json e rodar o programa para verificar erros. Na verificação inicial são encontrados dois bugs: 
- O valor exibido possui mais que dois dígitos após a casa decimal
- O código falhou apresentando exceção de retorno de valor `undefined` e não exibiu o valor de **JPY**
  Para analisar o primeiro bug, foi definido um ponto de interrupção na linha 39, e também foi observado o painel de inspeção de variáveis. Após o passo a passo da execução, foi visto que a variável `convertedValue` estava retornando um valor correto, porém ainda não tratado e exibindo mais que dois dígitos após a casa decimal. Foi visto que o código estava printando `convertedValue` ao invés de `displayValue`, o  qual já estava tratado para exibir somente dois dígitos após a casa decimal. Apenas mudar a variável printada resolveu o problema.
  Para analisar o segundo erro, foi utilizada a opção **exceção não capturada** no painel de pontos de interrupção. O painel mostrou que havia um retorno `undefined` para a variável `value`, o que não era desejado. Reiniciando a pilha de chamadas foi possível observar que a variável `convertedValue` retornou `undefined`. Após isso, foi definido um ponto de interrupção condicional, em que o código devia parar quando a variável `convertedValue` retornasse `undefined`. Notou-se que essa variável recebia seu valor através da função `convertToCurrency`. Com o mouse sobre a variável `rates`, foi observado a falta de uma taxa de conversão entre **EUR** e **JPY**. Para corrigir o problema, a variável `rates foi posta sob o painel de inspeção de variáveis para verificar a falta de taxa de conversão até se chegar na chamada da função `setExchangeRate`. A fonte do problema era a taxa de conversão feita somente entre `sourceCurrency`e `targetCurrency`. A resolução do erro se deu através da definição de uma variável que calcula a taxa de câmbio de quaisquer moedas diferentes de `sourceCurrency` e `targetCurrency`.


## 4. Work with files and directories in a Node.js app
## 5. Build a web API with Node.js and Express
## 6. Introduction to route management in Node.js with Javascript 
