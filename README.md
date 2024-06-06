# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

- Neste projeto, foi escrito testes para uma aplicação React que já está criada e configurada utilizando [`Jest`](https://jestjs.io/) e a biblioteca [`React Testing Library`](https://testing-library.com/).
 
  - A aplicação contém uma implementação completa de todos os requisitos da Pokédex, escrito pelo Trybe. Meu trabalho foi, para cada requisito listado, escrever testes que garantam sua corretude.

</details>

<details>
  <summary><strong>Habilidades</strong></summary><br />

  * Utilizar os seletores (queries) da React-Testing-Library em testes automatizados.

  * Simular eventos com a React-Testing-Library em testes automatizados.

  * Testar fluxos lógicos assíncronos com a React-Testing-Library.

  * Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.

  * Testar inputs.
</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** para garantir que os testes não davam falso positivos. 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

# Requisitos Obrigatórios

## 1. Teste o componente `<App.tsx />`

  > Caminho do componente: `src/App.tsx`

- <details><summary>Teste se o topo da aplicação contém um conjunto fixo de links de navegação:</summary>

  - O primeiro link deve ter o texto `Home`.

  - O segundo link deve ter o texto `About`.

  - O terceiro link deve ter o texto `Favorite Pokémon`.
</details>

- Teste se a aplicação é redirecionada para a página inicial, na URL `/`, ao clicar no link `Home` da barra de navegação.

- Teste se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação.

- Teste se a aplicação é redirecionada para a página de `Pokémon Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémon` da barra de navegação.

- Teste se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o arquivo-teste `App.test.tsx` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `link` com o texto `Home`
    * É exibido na tela um `link` com o texto `About`
    * É exibido na tela um `link` com o texto `Favorite Pokémon`
</details>

---

## 2. Teste o componente `<About.tsx />.`

  > Caminho do componente: `src/pages/About.tsx`

  - Teste se a página contém as informações sobre a Pokédex.

  - Teste se a página contém um heading `h2` com o texto `About Pokédex`.

  - Teste se a página contém dois parágrafos com texto sobre a Pokédex.

  - Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o arquivo-teste `About.test.tsx` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `h2` com texto `About Pokédex`
    * O atributo `src` da imagem é `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`
  </details>

---

## 3. Teste o componente `<FavoritePokemon.tsx />`

  > Caminho do componente: `src/pages/FavoritePokemon.tsx`

  - Ao favoritar a partir da página de detalhes, teste se:
    - É exibida na tela a mensagem `No favorite pokemon found` caso a pessoa não tenha Pokémon favorito.
    - Apenas são exibidos os Pokémon favoritados.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o arquivo-teste `FavoritePokemon.test.tsx` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela a mensagem `No favorite pokemon found`
    * São exibidos na tela apenas os Pokémon favoritados
  </details>

---

## 4. Teste o componente `<NotFound.tsx />`

  > Caminho do componente: `src/pages/NotFound.tsx`

  - Teste se a página contém um heading `h2` com o texto `Page requested not found`.

  - Teste se a página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o arquivo-teste `NotFound.test.tsx` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `h2` com o texto `Page requested not found`
    * Existe uma imagem com o `src` `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`
  </details>

---

## 5. Teste o componente `<Pokedex.tsx />`

  > Caminho do componente: `src/pages/Pokedex.tsx`

  - Teste se a página contém um heading `h2` com o texto `Encountered Pokémon`.

  - <details><summary>Teste se é exibido o próximo Pokémon da lista quando o botão <code>Próximo Pokémon</code> é clicado:</summary>

    - O botão deve conter o texto `Próximo Pokémon`.

    - Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão.

    - O primeiro Pokémon da lista deve ser mostrado ao clicar no botão se estiver no último Pokémon da lista.
  </details>

  - Teste se é mostrado apenas um Pokémon por vez.

  - <details><summary>Teste se a Pokédex tem os botões de filtro:</summary>

    - Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição.
      - _obs.: Os botões devem ser capturados pelo `data-testid=pokemon-type-button`_. 

    - Após a seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo.

    - O texto do botão deve corresponder ao `nome do tipo`, ex.: `Psychic`.

    - O botão `All` precisa estar **sempre** visível.
  </details>

  - <details><summary>Teste se a Pokédex contém um botão para resetar o filtro:</summary>

    - O texto do botão deve ser `All`.

    - A Pokedéx deverá mostrar os Pokémon normalmente (sem filtros) quando o botão `All` for clicado.

    - Ao carregar a página, o filtro selecionado deverá ser `All`.
  </detail>

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o arquivo-teste `Pokedex.test.tsx` contempla 100% dos casos de uso criados pelo Stryker:
    * Os botões de filtragem por tipo têm o nome correto
    * Os botões de filtragem por tipo têm o `data-testid=pokemon-type-button`, exceto o botão `All`
    * É possível clicar no botão de filtragem `All`
  </details>

---

## 6. Teste o componente `<Pokemon.tsx />`

  > Caminho do componente: `src/components/Pokemon.tsx`

  - <details><summary>Teste se é renderizado um card com as informações de determinado Pokémon:</summary>

    - O nome correto do Pokémon deve ser mostrado na tela.

    - O tipo correto do Pokémon deve ser mostrado na tela.

    - O peso médio do Pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`, em que `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do Pokémon e sua unidade de medida.

    - A imagem do Pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, em que `<name>` é o nome do Pokémon.
  </details>

  - Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes desse Pokémon. O link deve ter a URL `/pokemon/<id>`, em que `<id>` é o id do Pokémon exibido.

  - Teste se, ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.
  
  - Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, em que `<id>` é o id do Pokémon cujos detalhes se deseja ver.

  - <details><summary>Teste se existe um ícone de estrela nos Pokémon favoritados:</summary>

    - O ícone deve ser uma imagem com o atributo `src` que contém o caminho `/star-icon.svg`.

    - A imagem deve ter o atributo `alt` igual a `<Pokemon> is marked as favorite`, em que `<Pokemon>` é o nome do Pokémon exibido.
  </details>

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o arquivo-teste `Pokemon.test.tsx` contempla 100% dos casos de uso criados pelo Stryker:
    * A imagem do Pokémon tem o `src` correto
    * A imagem do Pokémon tem o `alt` `<name> sprite`
    * A imagem de favorito :star: tem o `src` `/star-icon.svg`
    * A imagem de favorito :star: tem o `alt` `<name> is marked as favorite`
    * É exibido na tela um texto com o tipo do Pokémon
    * É exibido na tela um `link` com o `href` `/pokemon/<id>`
  </details>

---

## 7. Teste o componente `<PokemonDetails.tsx />`

  > Caminho do componente: `src/pages/PokemonDetails.tsx`

  - <details><summary>Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela:</summary>

    - A página deve conter um texto `<name> Details`, em que `<name>` é o nome do Pokémon.

    - **Não** deve existir o link de navegação para os detalhes do Pokémon selecionado.

    - A seção de detalhes deve conter um heading `h2` com o texto `Summary`.

    - A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado.
      - _obs.: é possível utilizar regex para capturar o parágrafo_.
  </details>

  - <details><summary>Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:</summary>

    - Na seção de detalhes, deverá haver um heading `h2` com o texto `Game Locations of <name>`; em que `<name>` é o nome do Pokémon exibido.

    - Todas as localizações do Pokémon devem ser mostradas na seção de detalhes.

    - Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização.

    - A imagem da localização deve ter um atributo `src` com a URL da localização.

    - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, em que `<name>` é o nome do Pokémon.
  </details>

  - <details><summary>Teste se o usuário pode favoritar um Pokémon por meio da página de detalhes:</summary>

    - A página deve exibir um `checkbox` que permite favoritar o Pokémon.

    - Cliques alternados no `checkbox` devem adicionar e remover, respectivamente, o Pokémon da lista de favoritos.

    - O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`.
  </details>
  
  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Se o arquivo-teste `PokemonDetails.test.tsx` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `h2` com o texto `<name> Details`
    * É exibido na tela um `h2` com o texto `Summary`
    * É exibido na tela um texto contendo `<summary>`
    * É exibido na tela um `h2` com o texto `Game Locations of <name>`
    * São exibidas na tela imagens de localização com o `src` correto
    * É exibido na tela uma `label` com o texto `Pokémon favoritado?`
  </details>

---

# Requisitos não avaliativos

O que há a seguir não são requisitos bônus, mas sim ideias para você se aprofundar mais no projeto e **aprender mais!** Que tal trabalhar neles? Comece com algo bem direto:

  <details>
  <summary><strong>A cobertura de testes deve ser 100%</strong></summary>

  - Para ver a cobertura de testes, execute no terminal o comando `npm run test-coverage`.
  </details>

Além disso, a Pokédex é uma aplicação estática, com dados pré-definidos. Utilizando a [PokéAPI](https://pokeapi.co/), é possível deixá-la mais dinâmica e realista.

Implemente os requisitos propostos a seguir e escreva testes para eles. Tente manter sempre a cobertura de testes em 100%, garantindo assim que não há código ou fluxos lógicos não testados. Para um desafio adicional, tente utilizar TDD – escreva os testes à medida que for implementando os requisitos.

  - <details><summary>Adicione uma rota para exibir uma lista de localizações</summary>

    - A URL da rota deve ser `/locations`.

    - A página deve exibir uma lista com as localizações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2#locations-section) como utilizar a PokéAPI para buscar uma lista de localizações.
  </details>

  - <details><summary>Adicione à barra de navegação um link para a lista de localizações</summary>

    - O link deve conter o texto `Locations`.

    - Ao clicar no link, a página com a lista de localizações deve ser exibida.
  </details>

  - <details><summary>Adicione botões de paginação na lista de localizações</summary>

    Por padrão, os _endpoints_ da PokéAPI retornam no máximo 20 resultados. Utilizando os parâmetros `limit` e `offset`, você pode especificar qual página deseja buscar e qual seu tamanho. Veja [aqui](https://pokeapi.co/docs/v2#resource-lists-section) como utilizar esses parâmetros.

    - Adicione dois botões "Anterior" e "Próxima", que permitam navegar entre as página da lista de localizações.

    - Na primeira página, o botão "Anterior" deve ser desabilitado. Do mesmo modo, ao alcançar a última página, o botão "Próximo" deve ser desabilitado.
  </details>

  - <details><summary>Adiciona uma rota para exibir uma lista de gerações</summary>

    - A URL da rota deve ser `/generations`.

    - A página deve exibir uma lista com as gerações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2#generations) como utilizar a PokéAPI para buscar uma lista de gerações.
  </details>

  - <details><summary>Adicione à barra de navegação um link para a lista de gerações</summary>

    - O link deve conter o texto `Generations`.

    - Ao clicar no link, a página com a lista de gerações deve ser exibida.
  </details>

  - <details><summary>Adicione uma rota para exibir informações sobre uma geração</summary>

    - A URL da rota deve ser `/generations/<id>`, em que `<id>` é o id da geração exibida.

    - A página deve exibir, após buscar na PokéAPI, o nome da geração e uma lista com os nomes dos Pokémon introduzidos nessa geração.
  </details>

  - <details><summary>Adicione a cada geração na lista de gerações um link para a página de detalhes dessa geração</summary>

    - Ao clicar no link, a página com informações sobre a geração clicada deve ser exibida.
  </details>

---

<br>

*Exercicíos criado pela [Trybe](htpps:www.betrybe.com/).

<br>
