# Projeto SMS Twilio com NodeJS e Express

Projeto voltado para o entendimento do processo de envio do sms através do Twilio com base na API em NodeJS utilizando o Express. Além disso, dentro do projeto encontra-se também a parte de validação do envio deste sms para através do método POST com o Cypress.

## O que é o Twilio?
O [Twilio](https://twilio.com/) é uma plataforma de comunicação que permite que desenvolvedores em seus projetos consigam envolver os seus clientes em todos os canais: SMS, vídeo, voz, e-mail, Facebook, Messenger, Push Notification e WhatsApp. O seu principal **objetivo** é ajudar as empresas a criarem os seus serviços de comunicação para integrar com os seus Sites, APP, CRM, Sistemas WEB e outros projetos.

## O que é NodeJS?
[NodeJS](https://nodejs.org) é um JavaScript de código aberto - *ambiente de tempo de execução no V8 do Chrome* que permite sem esforço **desenvolver aplicativos da web rápidos e escaláveis**. O NodeJS utiliza um modelo de E/S não bloqueado e orientado por eventos que o torna leve, eficiente e excelente para aplicativos em tempo real com muitos dados que são executados em compartilhados dispositivos.

## O que é o ExpressJS?
É um framework rápido e um dos mais utilizados juntamente com o NodeJS, tornando assim a facilidade em desenvolver aplicações de Back-End e até conjuntos 
com sistemas de templates, aplicações full-stack.

Framework desenvolvido em JavaScript, tem sido utilizado por diversas empresas ao redor do mundo, dentre elas a Fox Sports, PayPal, IBM, Uber e dentre outras [de acordo com um artigo da TreinaWeb](https://www.treinaweb.com.br/blog/o-que-e-o-express-js).

## Características do Express.js
Dentre suas principais características, podemos citar algumas como:

* Possibilita o tratamento de exceções dentro da aplicação;
* Possui um sistema de rotas bem completo para ajudar no desenvolvimento do Back-End;
* Nos ajuda a gerenciar de diferentes formas requisições HTTP com os seus mais diversos verbos;
* Permite a integração de vários sistemas de templates que facilitam a criação de páginas web para suas aplicações;
* Sua arquitetura foi montada para ajudar na criação rápida de aplicações utilizando um conjunto pequeno de arquivos e pastas;

### Execução do Projeto:
Para executar o projeto abra o terminal e execute o seguinte comando para rodar a API:
```
node index.js
```

### Executar os testes do Cypress:
```
npm test
```
**OBS: Com o comando acima, o Cypress irá executar a validação do POST através do terminal...**
