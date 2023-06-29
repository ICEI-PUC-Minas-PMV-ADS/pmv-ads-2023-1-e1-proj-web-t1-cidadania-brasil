# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades
do sistema. O respectivo endereço (URL) e outras orientações de acesso são são
apresentadas na sequência.

## Página de Cadastro do Usuário (RF-001)

A página de cadastro do usuário apresenta a funcionalidade do usuário comum ou gestor criar uma conta na aplicação. Os usuários cadastrados são armazenados no LocalStorage com estruturas de dados baseadas em JSON. Um exemplo da tela é apresentada na Figura X.

| ![Figura X - Página de Cadastro do Usuário](./img/tela-cadastrar.png 'Figura X')
|:--:|
| _Figura X - Página de Cadastro do Usuário - RF-001_ |

<ins>**Requisitos atendidos**</ins>

- RF-001

<ins>**Artefatos da funcionalidade**</ins>

- index.html
- script.js
- codigosAcessoGestor.js
- styles.css
- global.css
- edificios.jpg

<ins>**Estrutura de Dados**</ins>

```
[
  {
    "id": 0,
    "nome": "Rodrigo",
    "sobrenome": "Oliveira",
    "profissao": "Engenheiro Civil",
    "cidade": "Belo Horizonte",
    "bairro": "Horto",
    "email": "rodrigo@gmail.com",
    "senha": "teste112233",
    "tipo_usuario": "comum"
  }
]
```

<ins>**Instruções de acesso**</ins>

1. Acesse a seguinte URL: [Cidadania Brasil](https://cidadania-brasil.vercel.app/);
2. Clique em "Cadastre-se".

## Página de Login (RF-002)

A página de Login apresenta a funcionalidade do usuário comum ou gestor acessar sua conta. Os dados do usuário logado são armazenados no LocalStorage com estruturas de dados baseadas em JSON. Um exemplo da tela é apresentada na Figura X.

| ![Figura X - Página de Login](./img/tela-login.png 'Figura X')
|:--:|
| _Figura X - Página de Login - RF-002_ |

<ins>**Requisitos atendidos**</ins>

- RF-002

<ins>**Artefatos da funcionalidade**</ins>

- index.html
- script.js
- styles.css
- global.css
- grupo-de-pessoas.jpg

<ins>**Estrutura de Dados**</ins>

```
{
  "id": 0,
  "nome": "Rodrigo",
  "sobrenome": "Oliveira",
  "profissao": "Engenheiro Civil",
  "cidade": "Belo Horizonte",
  "bairro": "Horto",
  "email": "rodrigo@gmail.com",
  "senha": "teste112233",
  "tipo_usuario": "comum"
}
```

<ins>**Instruções de acesso**</ins>

- Acesse a seguinte URL: [Cidadania Brasil](https://cidadania-brasil.vercel.app/).

## Página de Recuperação da Senha (RF-009)

A página de recuperação da senha apresenta a funcionalidade do usuário comum ou gestor alterar sua senha. Os dados editados do usuário são armazenados no LocalStorage com estruturas de dados baseadas em JSON. Um exemplo da tela é apresentada na Figura X.

| ![Figura X - Página de Recuperação da Senha](./img/tela-recuperar-senha.png 'Figura X')
|:--:|
| _Figura X - Página de Recuperação da Senha - RF-009_ |

<ins>**Requisitos atendidos**</ins>

- RF-009

<ins>**Artefatos da funcionalidade**</ins>

- index.html
- script.js
- styles.css
- global.css

<ins>**Estrutura de Dados**</ins>

```
[
  {
    "id": 0,
    "nome": "Rodrigo",
    "sobrenome": "Oliveira",
    "profissao": "Engenheiro Civil",
    "cidade": "Belo Horizonte",
    "bairro": "Horto",
    "email": "rodrigo@gmail.com",
    "senha": "teste112233",
    "tipo_usuario": "comum"
  }
]
```

<ins>**Instruções de acesso**</ins>

1. Acesse a seguinte URL: [Cidadania Brasil](https://cidadania-brasil.vercel.app/);
2. Clique em "Esqueceu sua senha?".

## Página para Criar uma reclamação (RF-003)

A página para criar uma reclamação apresenta a funcionalidade do usuário criar sua reclamação. As reclamações são armazenadas no LocalStorage com estruturas de dados baseadas em JSON. Um exemplo da tela é apresentada na Figura X.

| ![Figura X - Página para Criar uma reclamação](./img/tela-login.png 'Figura X')
|:--:|
| _Figura X - Página para Criar uma reclamação - RF-003_ |

<ins>**Requisitos atendidos**</ins>

- RF-003

<ins>**Artefatos da funcionalidade**</ins>

- index.html
- script.js
- styles.css
- global.css
- buscarUsuarioLogado.js
- criarIniciaisNomeUsuario.js
- menu.js

<ins>**Estrutura de Dados**</ins>

```
[
  {
    "id": 0,
    "categoria": "Segurança",
    "bairro": "Horto",
    "imagem": "data:base64...",
    "data": "2023-06-29T13:26:42.726Z",
    "texto_reclamacao": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "curtidas": [],
    "comentarios": [],
    "usuario": {
      "id": 0,
      "nome": "Rodrigo",
      "sobrenome": "Oliveira",
      "profissao": "Engenheiro Civil",
      "cidade": "Belo Horizonte",
      "bairro": "Horto",
      "tipo_usuario": "comum"
    }
  }
]
```

<ins>**Instruções de acesso**</ins>

1. Acesse a seguinte URL: [Cidadania Brasil](https://cidadania-brasil.vercel.app/);
2. Crie uma conta;
3. Faça Login;
4. Registre sua reclamação.

## Página Feed de Reclamações (RF-004, RF-005, RF-006, RF-007 e RF-008)

A página feed de reclamações exibe todas as reclamações criadas pelos usuários. Os usuários têm a opção de curtir e comentar uma reclamação. Além disso, os usuários gestores têm a capacidade de criar réplicas por meio da seção de comentários. As reclamações juntamente com comentários e curtidas são armazenadas no LocalStorage com estruturas de dados baseadas em JSON. Um exemplo da tela é apresentada na Figura X.

| ![Figura X - Página Feed de Reclamações](./img/tela-feed-reclamacoes.png 'Figura X')
|:--:|
| _Figura X - Página Feed de Reclamações - RF-004, RF-005, RF-006, RF-007 e RF-008_ |

<ins>**Requisitos atendidos**</ins>

- RF-004
- RF-005
- RF-006
- RF-007
- RF-008

<ins>**Artefatos da funcionalidade**</ins>

- index.html
- script.js
- styles.css
- global.css
- buscarUsuarioLogado.js
- criarIniciaisNomeUsuario.js
- menu.js

<ins>**Estrutura de Dados**</ins>

```
[
  {
    "id": 0,
    "categoria": "Segurança",
    "bairro": "Horto",
    "imagem": "data:base64...",
    "data": "2023-06-29T13:26:42.726Z",
    "texto_reclamacao": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "curtidas": [0, 1, 2],
    "comentarios": [
      {
        "id": 0,
        "id_reclamacao": 0,
        "texto_comentario": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "usuario": {
          "id": 0,
          "nome": "Rodrigo",
          "sobrenome": "Oliveira",
          "profissao": "Engenheiro Civil",
          "cidade": "Belo Horizonte",
          "bairro": "Horto",
          "tipo_usuario": "comum"
        }
      }
    ],
    "usuario": {
      "id": 0,
      "nome": "Rodrigo",
      "sobrenome": "Oliveira",
      "profissao": "Engenheiro Civil",
      "cidade": "Belo Horizonte",
      "bairro": "Horto",
      "tipo_usuario": "comum"
    }
  }
]
```

<ins>**Instruções de acesso**</ins>

1. Acesse a seguinte URL: [Cidadania Brasil](https://cidadania-brasil.vercel.app/);
2. Crie uma conta;
3. Faça Login;
