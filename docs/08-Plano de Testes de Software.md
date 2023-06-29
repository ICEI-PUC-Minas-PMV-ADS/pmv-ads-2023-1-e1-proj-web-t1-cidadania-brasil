# Plano de Testes de Software

<!-- CT - 001 -->

| **Caso de Teste** 	| **CT-001 – Cadastro de usuário** 	|
|:---:	|:---:	|
| **Requisitos associados:** | RF-001: O site deve oferecer ao usuário a funcionalidade de se cadastrar. |
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga se cadastrar. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Visualizar a página de cadastro;<br>4. Preencher o formulário;<br> 5. Enviar o formulário. 	|
| **Critérios de Êxito** 	| O usuário deve ser redirecionado para a página de login. |

<!-- CT - 002 -->

| **Caso de Teste** 	| **CT-002 – Login de usuário** 	|
|:---:	|:---:	|
| **Requisitos associados:** | RF-002: O site deve oferecer ao usuário a funcionalidade de realizar login. |
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga realizar login. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Visualizar a página de login;<br>4. Preencher o formulário;<br> 5. Enviar o formulário. 	|
| **Critérios de Êxito** 	| O usuário deve ser redirecionado para a página feed de reclamações. |

<!-- CT - 003 -->

| **Caso de Teste** 	| **CT-003 – Cadastrar uma reclamação** 	|
|:---:	|:---:	|
| **Requisitos associados:** | RF-003: O site deve apresentar a funcionalidade de "reclamar". |
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga criar uma reclamação. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Se cadastrar;<br>4. Realizar Login;<br> 5. Acessar e visualizar a página de criar uma reclamação;<br> 5. Criar uma reclamação. 	|
| **Critérios de Êxito** 	| O usuário deve ser redirecionado para a página feed de reclamações. |

<!-- CT - 004 -->

| **Caso de Teste** 	| **CT-004 – Curtir uma reclamação** 	|
|:---:	|:---:	|
| **Requisitos associados:** | RF-004: O site deve oferecer ao usuário a opção de “curtir” uma reclamação. |
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga curtir reclamações. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Se cadastrar;<br>4. Realizar Login;<br> 5. Acessar e visualizar a página feed de reclamações;<br> 5. Curtir uma reclamação. 	|
| **Critérios de Êxito** 	| O usuário deve notar alterações de estilo e número de curtidas na respectiva reclamação. |

<!-- CT - 005 -->

| **Caso de Teste** 	| **CT-005 – Comentar em uma reclamação** 	|
|:---:	|:---:	|
| **Requisitos associados:** | RF-005: O site deve oferecer ao usuário a opção de criar comentários em reclamações. |
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga criar comentários em reclamações. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Se cadastrar;<br>4. Realizar Login;<br> 5. Acessar e visualizar a página feed de reclamações;<br> 5. Comentar em uma reclamação. 	|
| **Critérios de Êxito** 	| O usuário deve visualizar alterações de estilo, número de comentários e visualizar seu comentário na respectiva reclamação. |

<!-- CT - 006 -->

| **Caso de Teste** 	| **CT-006 – Visualizar detalhes de uma reclamação** 	|
|:---:	|:---:	|
| **Requisitos associados:** | RF-006: O site deve exibir, em cada reclamação, a quantidade de curtidas e comentários recebidos. |
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga visualizar a quantidade de curtidas e comentários. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Se cadastrar;<br>4. Realizar Login;<br> 5. Acessar e visualizar a página feed de reclamações;<br> 5. Visualizar as reclamações. |
| **Critérios de Êxito** 	| O usuário deve visualizar a quantidade de curtidas e comentários. |

<!-- CT - 007 -->

| **Caso de Teste** 	| **CT-007 – Visualizar comentários de uma reclamação** 	|
|:---:	|:---:	|
| **Requisitos associados:** | RF-007: O site deve fornecer uma lista de comentários feitos por outros usuários para cada reclamação. |
| **Objetivo do Teste** 	| Verificar se o sistema permite que o usuário consiga visualizar a listagem de comentários das reclamações. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Se cadastrar;<br>4. Realizar Login;<br> 5. Acessar e visualizar a página feed de reclamações;<br> 5. Expandir a lista de comentários. |
| **Critérios de Êxito** 	| O usuário deve conseguir visualizar a listagem de comentários. |

<!-- CT - 008 -->

| **Caso de Teste** 	| **CT-008 – Réplica do setor responsável pela reclamação** |
|:---:	|:---:	|
| **Requisitos associados:** | RF-008: O site deve permitir que o setor reclamado possa postar uma réplica em relação a reclamação. |
| **Objetivo do Teste** | Verificar se o sistema permite que o usuário gestor faça uma réplica em uma reclamação na seção de comentários. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Se cadastrar;<br>4. Realizar Login;<br> 5. Acessar e visualizar a página feed de reclamações;<br> 5. Criar um comentário. |
| **Critérios de Êxito** 	| O usuário gestor deve ser capaz de visualizar sua réplica na seção de comentários, destacada por diferenças de estilo em relação aos comentários dos demais usuários. |

<!-- CT - 009 -->

| **Caso de Teste** 	| **CT-009 – Recuperação de Senha** |
|:---:	|:---:	|
| **Requisitos associados:** | RF-009: O site deve permitir que o usuário altere sua senha caso a tenha esquecido. |
| **Objetivo do Teste** | Verificar se o sistema permite que o usuário consiga recuperar sua senha. |
| **Passos** 	| 1. Acessar o navegador; <br>2. Informar o endereço do site;<br>3. Clicar em "Esqueceu sua senha?";<br>4. Preencher o formulário e enviar;
| **Critérios de Êxito** 	| O usuário deve visualizar uma mensagem indicando que a senha foi alterada. |