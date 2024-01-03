# Projeto Vue 2 Netflix Clone

Este é um projeto Vue 2 que simula um "clone" da Netflix. Ele inclui funcionalidades de autenticação de usuários, cadastro, listagem de filmes e séries, além da capacidade de favoritar filmes para visualização posterior. Abaixo estão as instruções para configurar e executar o projeto.

# Requisitos

- Node.js (versão >= 14.0)
- npm (gerenciador de pacotes Node.js)

# Configuração do Projeto

1. Clone o repositório para o seu ambiente local:

bash
git clone https://github.com/Leandro-Oliveira-2/Flicks-Crud.git

2. Navegue até o diretório do projeto:
- cd nome-do-repositorio

3. Instale as dependências:
- npm install

# Executando o Projeto
- Para iniciar o projeto, utilize o comando: 
   npm run serve 

O aplicativo será iniciado e estará acessível em http://localhost:8080.

# Como montar e rodar a imagem docker

## Comando para montar a imagem docker: 
- docker build -t sflix-crud .

## Comando para rodar a imagem docker:
-docker run -p 8080:8080 sflix-crud

# Funcionalidades

## Autenticação de Usuário
A aplicação permite que os usuários façam login utilizando um formulário tradicional (email e senha) ou utilizando a - autenticação do Google.

## Cadastro de Usuário
Há a opção de cadastrar novos usuários. Os dados necessários incluem nome, email e senha.

## Listagem de Filmes e Séries
A página inicial exibe uma variedade de filmes e séries disponíveis na plataforma, proporcionando uma experiência semelhante à interface da Netflix.

## Favoritar Filmes
Os usuários autenticados têm a opção de favoritar filmes. Cada filme exibe um botão de "Adicionar aos Favoritos" que permite aos usuários criar uma lista personalizada.

## Lista de Filmes Favoritos
Os usuários podem acessar uma seção dedicada para visualizar todos os filmes que eles favoritaram. Isso facilita a organização e acesso rápido aos conteúdos preferidos.

# Tecnologias Utilizadas
-FireBase 
-Authentication (para autenticação de usuários)
-FireStore (para armazenamento de dados)
-Vue 2 (framework para o fr ontend)
-Bootstrap (framework de CSS para o frontend)

# Melhorias Futuras
- Considere a possibilidade de implementar recursos adicionais, como recomendações personalizadas, histórico de visualização, perfis de usuário e melhorias na interface do usuário.
- Considere a possibilidade de implementar testes automatizados para garantir a qualidade do código e a estabilidade do aplicativo.
- Considero a possibilidade de criar uma tela de adm para ter um maior controle de usuário e filmes.
