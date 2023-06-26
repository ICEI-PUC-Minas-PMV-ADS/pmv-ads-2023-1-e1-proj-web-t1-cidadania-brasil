# Especificações do Projeto

A definição do problema e os aspectos mais importantes a serem abordados neste projeto foram estabelecidos com a colaboração dos usuários por meio de um trabalho realizado pela equipe. Esse processo incluiu a observação de locais afetados por problemas relacionados à má gestão pública e entrevistas realizadas com os residentes para coletar informações relevantes. Os detalhes levantados nesse processo foram organizados na forma de personas e histórias de usuários.

## Personas

As personas a seguir apresentadas foram levantadas durante o processo de entrevista e coleta de informações. 

1. Rodrigo Oliveira Garcia
    * Idade: 45.
    * Ocupação: Engenheiro Civil Formado pela UFMG em 2005, atualmente roda de Uber para garantir seu sustento e de sua família.
    * Localização: Horto, Belo Horizonte – MG.
    * Aplicativos: Facebook, Uber e Reddit.
    * Motivações: Melhor estrutura do bairro e maior qualidade de vida.
    * Frustrações: Falta de placas de sinalização e ruas com buracos e sem asfalto.
    * Hobbies: Jogador de Poker e amante de livros de romance.

2. Maria das Graças 
    * Idade: 55.
    * Ocupação: Vendedora de tortas e doces para festas.
    * Localização: Jardim Vitória, Belo Horizonte - MG.
    * Aplicativos: Instagram, Facebook e IFood.
    * Motivações: Infraestrutura de maior qualidade no bairro.
    * Frustrações: Falta de coleta de lixo regular e baixa segurança.
    * Hobbies: Cozinhar e costurar.

3. Márcio Valadares Silveira
    * Idade: 38
    * Ocupação: Formado em Direito pela USP, atua como gestor público a mais de 15 anos na Secretaria Municipal de Gestão Compartilhada, atuando em várias regiões da grande BH.
    * Localização: Savassi, Belo Horizonte.
    * Aplicativos: Facebook, Instagram, LinkedIn e Telegram.
    * Motivações: Atender da melhor forma as reclamações da população.
    * Frustrações: Baixo salário.
    * Hobbies: Jogos Eletrônicos, filmes e séries.

## Histórias de Usuários

Foram registradas as seguintes histórias de usuário após compreender o cotidiano das personas identificadas para o projeto.

| Eu como [PERSONA]...     | ... quero/desejo [O QUE]...                                        | ... para [POR QUE ] ..                                                                              |
| ------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Rodrigo/Maria das Graças | me cadastrar no sistema                                            | ter um perfil na aplicação                                                                          |
| Rodrigo/Maria das Graças | realizar o login no sistema com minha conta de usuário             | visualizar as informações de meu perfil                                                             |
| Rodrigo/Maria das Graças | realizar reclamações dentro do sistema                             | melhorar a infraestrutura de minha cidade/bairro                                                    |
| Rodrigo/Maria das Graças | filtrar as reclamações do sistema de acordo com meus critérios     | visualizar as reclamações que mais me interessam                                                    |
| Rodrigo/Maria das Graças | adicionar comentários a uma publicação                             | expressar minha opinião e participar do debate                                                      |
| Rodrigo/Maria das Graças | curtir uma reclamação  | dar visibilidade à relevância dessa reclamação                                                      |
| Rodrigo/Maria das Graças | visualizar o histórico de comentários e curtidas de uma reclamação | ter maior visibilidade do que foi discutido e apreciado durante o debate da reclamação              |
| Rodrigo/Maria das Graças | compartilhar uma reclamação em redes sociais                       | compartilhar com minha rede de amigos e ampliar a discussão sobre o tema                            |
| Rodrigo/Maria das Graças | visualizar informações quanto os setores reclamados                | ter noção de saber como anda as reclamações e resoluçào de acordo com cada setor                    |
| Márcio Valadares         | devo ser capaz de responder à uma reclamação                       | dar uma resolução à reclamação ao usuário que a cadastrou                                           |
| Rodrigo/Maria das Graças | avaliar minha experiência com o setor reclamado                    | dar visibilidade aos outros usuários do sistema o quanto satisfeito estou com a solução apresentada |

## Requisitos

O plano do projeto é estabelecido por meio dos requisitos funcionais, que especificam as diferentes formas de interação dos usuários, além dos requisitos não funcionais, que descrevem os aspectos gerais que o sistema deverá apresentar. A seguir, são apresentados os requisitos que compõem essas categorias.

### Requisitos Funcionais

Segue abaixo a tabela que lista os requisitos do projeto, identificando a ordem de prioridade em que devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve oferecer ao usuário a funcionalidade de se cadastrar | ALTA |
|RF-002| O site deve oferecer ao usuário a funcionalidade de realizar login | ALTA |
|RF-003| O site deve apresentar a funcionalidade de "reclamar" | ALTA |
|RF-004| O site deve oferecer ao usuário a opção de “curtir” uma reclamação | MÉDIA |
|RF-005| O site deve oferecer ao usuário a opção de criar comentários em reclamações | ALTA |
|RF-006| O site deve exibir, em cada reclamação, a quantidade de curtidas e comentários recebidos. | ALTA |
|RF-007| O site deve fornecer uma lista de comentários feitos por outros usuários para cada reclamação | ALTA |
|RF-008| O site deve permitir que o setor reclamado possa postar uma réplica em relação a reclamação | ALTA |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na internet | Alta |
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  Alta |
|RNF-003| O site deve ter um bom nível de contraste entre os elementos da tela em conformidade | Média |
|RNF-004| O site deve ser compatível com os principais navegadores do mercado | Alta |

## Restrições

As questões que limitam a execução deste projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deve ser entregue ao final do semestre letivo não podendo extrapolar |
|RE-02| O aplicativo deverá se restringir às tecnologias básicas de Web Front-end |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho |