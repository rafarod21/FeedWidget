<p align="center">
  <br>
  <Img src="https://github.com/rafarod21/FeedWidget/blob/main/git-assets/logo.svg" width=700/>
  
  <h3 align="center"> Conte-nos sobre o que achou do site :computer: </h3>
  
  <p align="center">
    <img src="https://img.shields.io/static/v1?label=Status&message=Conclu%C3%ADdo&color=brightgreen&style=flat&labelColor=3E3E3E">
    <img src="https://img.shields.io/static/v1?message=NLW%2F8-Return&label=Rocketseat&color=996DFF&style=flat&labelColor=8257E5">
  </p>
</p>


## Tópicos :scroll:

:small_blue_diamond: [Detalhes do projeto](#detalhes-do-projeto-memo)

:small_blue_diamond: [Funcionalidades](#funcionalidades-stars)

:small_blue_diamond: [Layout](#layout-milky_way)

:small_blue_diamond: [Backend](#backend-card_file_box)

:small_blue_diamond: [Veja você mesmo](#veja-você-mesmo-arrow_forward)

:small_blue_diamond: [Tecnologias](#tecnologias-books)

:small_blue_diamond: [Desenvolvedores/Contribuintes](#desenvolvedorescontribuintes-octocat)

## Detalhes do projeto :memo:

<p align="justify">
Este é um projeto desenvolvido na Next Level Week #8 Return(NLW Return), evento organizado pela Rocketseat :rocket:.
Tal projeto é composto por backend, frontend web e frontend mobile.
Seu objetivo é enviar feedbacks sobre problemas, ideias ou qualquer outro assunto sobre o site. <br> <br>
É uma aplicação relativamente simples, mas o foco nesse evento foi apredender vários conceitos de programação e arquitetura de projetos para fazer uma aplicação que, embora simples, seja o mais profissional possível. <br> <br>
Essa aplicação possui navegação pelo teclado (acessibilidade), responsividade, testes unitários e aplicação dos princípios de SOLID no backend.
</p>

## Funcionalidades :stars:

✔️ Envio de feedback

✔️ Tirar screenshot da tela

✔️ Envio do feedback para o e-mail do dono do site (no momento interceptado pelo Mailtrap)

## Layout :milky_way:

<h3 align="center">
  💻 Desktop 💻
</h3>
<p align="center">
  <Img src="https://github.com/rafarod21/FeedWidget/blob/main/git-assets/FeedWidget-web1.jpeg" width=400>
  <Img src="https://github.com/rafarod21/FeedWidget/blob/main/git-assets/FeedWidget-web2.jpeg" width=400>
  <Img src="https://github.com/rafarod21/FeedWidget/blob/main/git-assets/FeedWidget-web3.jpeg" width=400>
  <Img src="https://github.com/rafarod21/FeedWidget/blob/main/git-assets/FeedWidget-web4.jpeg" width=400>
</p>
  
<h3 align="center">
  :iphone: Mobile :iphone:
</h3>
<p align="center">
  <Img src="https://github.com/rafarod21/FeedWidget/blob/main/git-assets/FeedWidget-mobile1.jpeg" width=auto height=400>
  <Img src="https://github.com/rafarod21/FeedWidget/blob/main/git-assets/FeedWidget-mobile2.jpeg" width=auto height=400>
</p>

## Backend :card_file_box:

Para o backend foi utilizado Node.js e o SQLite como banco de dados em desenvolvimento e o PostgreSQL em produção. Foi utilizado o Prisma para conexão com o banco.

## Veja você mesmo :arrow_forward:
    
#### :small_blue_diamond: Deploy Vercel: [FeedWidget](https://feed-widget-nine.vercel.app)

#### :small_blue_diamond: Na própria máquina - Passo-a-passo
    
##### Passo 1: Clonando o repositório
```bash
git clone https://github.com/rafarod21/FeedWidget.git
```
    
##### Passo 2: Acessando a pasta do backend do projeto
```bash
cd FeedWidget/server
```
    
##### Passo 3: Instalando as dependências do backend com npm ou Yarn
```bash
# Utilizando npm
npm install

# Utilizando Yarn
yarn
```

##### Passo 4: Configurando o banco de dados local

- Crie um arquivo ".env" na raiz do projeto, copie o conteúdo a seguir e cole-o dentro desse arquivo
```bash
DATABASE_URL="file:./dev.db"
```
- Dentro da pasta prisma:
    - Delete a pasta "migrations"
    - Delete arquivo "dev.db"
    - Dentro do arquivo "schema.prisma", altere o valor da variável "provider" dentro de "datasource db" para "sqlite"
    
##### Passo 5: Executando as migrations do prisma
```bash
# Utilizando npm
npx prisma migrate dev

# Utilizando Yarn
yarn prisma migrate dev
```
- Quando aparecer a pergunta "Enter a name for the new migration: »" digite:
```bash
create_feedbacks
```
    
##### Passo 6: Executando o backend do projeto com npm ou Yarn
```bash
# Utilizando npm
npm run dev

# Utilizando Yarn
yarn dev
```
    
##### Passo 7: EM OUTRO TERMINAL, acesse a pasta do frontend do projeto
```bash
cd FeedWidget/web
```
    
##### Passo 8: Instalando as dependências do frontend com npm ou Yarn
```bash
# Utilizando npm
npm install

# Utilizando Yarn
yarn
```

##### Passo 9: Executando o frontend do projeto com npm ou Yarn
```bash
# Utilizando npm
npm run dev

# Utilizando Yarn
yarn dev
  
# O projeto deverá ser iniciado na porta 3000
```

##### Passo 10: Vizualizando o projeto
Acesse: http://localhost:3000
    
## Tecnologias :books:

  - [ReactJS](https://pt-br.reactjs.org)
  - [React Native](https://reactnative.dev)
  - [Node.js](https://nodejs.org)
  - [Typescript](https://www.typescriptlang.org)
  - [Prisma](https://www.prisma.io)
  - [Vite](https://vitejs.dev)
  - [Jest](https://jestjs.io/pt-BR)
  - [Tailwind CSS](https://tailwindcss.com)
    
## Desenvolvedores/Contribuintes :octocat:

<img src="https://avatars0.githubusercontent.com/u/39251153?s=460&u=b18964e9a5e2c3c1ef9bc74ae8c35b11095c841b&v=4" width=115><br>
<a aria-label="LinkedIn - Rafael Rodrigues" href="https://www.linkedin.com/in/rafael-montrezol-942a60170">
    <img src="https://img.shields.io/static/v1?logo=linkedin&label=LinkedIn&message=Rafael%20Rodrigues&color=00A0DC&style=flat&labelColor=0077B5"> 
</a>
<a aria-label="GitHub - Rafael Rodrigues" href="https://github.com/rafarod21">
    <img alt="GitHub - Rafael Rodrigues" src="https://img.shields.io/static/v1?logo=github&label=GitHub&message=Rafael%20Rodrigues&color=2FBB4F&style=flat&labelColor=211F1F"></img>
</a>
