# Clean Architecture
# Sumário
- [Introdução](#introdução)
- [Sobre Clean Architecture](#sobre-clean-architecture)
    - [Descrição](#descrição)
    - [Benefícios](#benefícios)
- [Estrutura de Pastas](#estrutura-de-pastas)
    - Introdução.
    - Frontend
    - Backend

# Introdução
Bem-vindo ao repositório sobre Clean Architecture! Este é um guia que explora os princípios e conceitos fundamentais por trás da Clean Architecture e como aplicá-la no desenvolvimento de software. Se você está buscando criar aplicações robustas, escaláveis e de fácil manutenção, a Clean Architecture pode ser a solução que você procura.

Neste guia, discutiremos os benefícios da Clean Architecture, sua estrutura de camadas e como cada camada se relaciona com as responsabilidades do sistema. Além disso, exploraremos exemplos práticos e sugestões para organizar seu código utilizando essa arquitetura.

Se você é um desenvolvedor que deseja melhorar a estrutura e a qualidade do seu código, ou um líder técnico que busca orientações para criar uma base sólida para projetos de software, este repositório fornecerá informações valiosas para ajudá-lo a atingir seus objetivos.

Vamos começar explorando os principais benefícios da Clean Architecture e por que você deve considerá-la como uma opção para seus projetos.

# Sobre Clean Architecture
## Descrição
A Clean Architecture é um padrão de arquitetura de software que consiste em uma divisão clara em camadas, enfatizando a dependência unidirecional entre elas. Isso significa que as camadas internas não conhecem as camadas externas, promovendo um acoplamento fraco. Esse acoplamento fraco permite que as camadas internas sejam testadas e modificadas independentemente, sem afetar as camadas externas.

## Sobre as Camadas
- Domínio (ou core): Essa camada contém as entidades de negócio e as regras de negócio centrais do sistema. Ela encapsula a lógica de domínio, como validações, cálculos e comportamentos essenciais para o funcionamento do negócio. Essa camada é a mais interna e não depende das outras camadas. No sistema, por exemplo, `podem ser as carateristicas da entidade`. Imaginando a entidade 'usuário' definimos que ela tem um código, o nome e uma idade e essa definição faz com que obrigatoriamente todo usuário possua essas caracteristicas.

- UseCase (ou aplicação): Ela orquestra a lógica de negócio utilizando as entidades e serviços do domínio. Os casos de uso representam as ações específicas que o sistema pode realizar em resposta às interações do usuário ou a eventos externos. Se na camada anterior definimos as caracteristicas do usuário, `aqui podemos definir o que ele faz ou pode ser feito com ele`. Aqui definimos a regra, por exemplo, de edição de usuário ditando a regra que para editar, precisa-se de um id, por exemplo.


- Infraestrutura: 


- Interface do usuário:


## Benefícios

* Separação de responsabilidades em camadas: domínio, casos de uso, interface e infraestrutura. Essa separação promove uma clara divisão das regras de negócio do sistema, facilitando a compreensão e o gerenciamento dessas regras. Isso resulta em um código mais legível, modular e reutilizável, onde as regras de negócio são isoladas e podem ser modificadas sem afetar outras partes do sistema.

* Melhoria na testabilidade: A arquitetura limpa facilita a criação de testes devido à separação clara das regras de negócio e lógica do domínio das camadas externas.

* Simplificação da evolução e manutenção: A divisão em camadas da Clean Architecture permite que as mudanças e manutenções sejam feitas de forma mais simples e segura, pois cada camada pode ser modificada independentemente das outras.

* Flexibilidade e escalabilidade: A independência de tecnologias e a clara separação de responsabilidades permitem que o sistema seja flexível e escalável, adaptando-se facilmente a novas necessidades e recursos.

Essas características tornam a Clean Architecture uma escolha sólida para projetos, fornecendo uma estrutura bem definida que promove a qualidade do código, a facilidade de manutenção e a evolução contínua do sistema.

# Estrutura de Pastas
## Introdução
A estrutura de pastas nesse projeto seguirá um modelo parecido a divisão de camadas na clean architecture. Isso poderá ajudar a fixação de para que serve e como funciona cada camada.

##  Frontend
* Domain (models): Dentro da pasta domain, você pode criar arquivos com funções TypeScript que lidam com a validação de campos obrigatórios, tipos de dados e outras regras de negócio. Essas funções podem receber dados de entrada e aplicar as validações necessárias, retornando os resultados ou lançando exceções em caso de falha.
    * UseCases: Como no backend, os UseCases são os responsáveis pelas regras do negócio. Armazena as funções que ditam como cada função da aplicação deve funcionar.
    * Repositories: No contexto frontend, os repositórios são responsáveis pela comunicação com o backend, trazendo e enviando dados.


* views (User Interface): Essa pasta representa a camada de interface do usuário. Ela contém componentes reutilizáveis, páginas da aplicação e arquivos de estilos globais. Aqui é onde a interação direta com o usuário ocorre.
    * Pages: Armazena o esqueleto HTML das paginas. 
    * Components: 
    * Styles: Armazena os estilos do esqueleto HTML.
    * Assets: Armazena imagens, icones e outros utilitários.

## Backend 
* Entities: Representando a camada de domínio
    
* Use Cases (Aplication): Representa a camada de useCase (ou aplicação)

* Repositories (Infraestructure): é usada para armazenar as implementações concretas dos repositórios. Os repositórios são responsáveis por lidar com a persistência de dados, seja por meio de um banco de dados, um sistema de arquivos ou outro mecanismo de armazenamento.
`Seguindo a analogia anterior, seria o "o como faz"`.
* Providers (Infraestructure):  Essa camada lida com os detalhes técnicos e a implementação da infraestrutura do sistema. Ela pode incluir o acesso a bancos de dados, serviços externos, frameworks, bibliotecas e outros recursos de infraestrutura.
`Seguindo a analogia anterior, seria o "o que usa pra fazer"`.
* Testes: Não está entre as camadas da clean architecture, mas é importate para antecipação de erros.