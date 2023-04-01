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

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

O plano do projeto é estabelecido por meio dos requisitos funcionais, que especificam as diferentes formas de interação dos usuários, além dos requisitos não funcionais, que descrevem os aspectos gerais que o sistema deverá apresentar. A seguir, são apresentados os requisitos que compõem essas categorias.

### Requisitos Funcionais

Segue abaixo a tabela que lista os requisitos do projeto, identificando a ordem de prioridade em que devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve oferecer ao usuário a funcionalidade de se cadastrar | ALTA |
|RF-002| O site deve oferecer ao usuário a funcionalidade de realizar login | ALTA |
|RF-003| O site deve apresentar em sua página inicial as funcionalidades de “reclamar” e “histórico do setor reclamado” | ALTA |
|RF-004| O site deve oferecer ao usuário a opção de “curtir” ou “não curtir” uma reclamação | MÉDIA |
|RF-005| O site deve oferecer ao usuário a opção de criar comentários em reclamações | ALTA |
|RF-006| O site deve apresentar, no histórico da reclamação, a quantidade de curtidas, imagens e comentários dos demais usuários | MÉDIA |
|RF-007| O site deve oferecer um menu adicional que permita ao usuário verificar a reputação de determinado setor com base na resolução de reclamações | MÉDIA |
|RF-008| O site deve permitir que o setor reclamado possa postar uma réplica em relação a reclamação | ALTA |
|RF-009| O site deve permitir que o responsável pela reclamação possa postar a tréplica confirmando a solução, ou não, do problema | ALTA |
|RF-010| O site deve permitir o compartilhamento de reclamações postadas em plataformas de redes sociais | BAIXA |
|RF-011| O site deve permitir seguir a reclamação de interesse a fim de acompanhar as atualizações | BAIXA |
|RF-012| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um texto específico que será informado na caixa de pesquisa | BAIXA |
|RF-013| O site deve oferecer um ranking dos setores com melhor índice de solução | BAIXA |
|RF-014| O site deve permitir que o usuário dê uma nota para sua experiência com o site | BAIXA |

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
|RE-02| O aplicativo deverá ser restringir às tecnologias básicas de Web Front-end |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho |