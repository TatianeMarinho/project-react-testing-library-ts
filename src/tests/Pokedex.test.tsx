import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente<Pokedex.tsx />', () => {
  test('A página contém um titulo h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    // buscar elementos:
    const title = screen.getByRole('heading', { name: /encountered pokémon/i, level: 2 });
    // aferir:
    expect(title).toBeInTheDocument();
  });
  test('É exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
    renderWithRouter(<App />);
    // buscar elementos:
    const btnProximoPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    // aferir:
    expect(btnProximoPokemon).toBeInTheDocument();
    // agir
    await userEvent.click(btnProximoPokemon);
    // buscar elementos:
    const pokemon = screen.getAllByTestId('pokemon-name');
    // aferir
    expect(pokemon).toHaveLength(1);
    // aferição do ultimo pokemon para o primeiro
    await userEvent.click(btnProximoPokemon);
    expect(screen.getByRole('img', { name: /caterpie sprite/i })).toBeInTheDocument();
    await userEvent.click(btnProximoPokemon);
    expect(screen.getByRole('img', { name: /ekans sprite/i })).toBeInTheDocument();
    await userEvent.click(btnProximoPokemon);
    expect(screen.getByRole('img', { name: /alakazam sprite/i })).toBeInTheDocument();
    await userEvent.click(btnProximoPokemon);
    expect(screen.getByRole('img', { name: /mew sprite/i })).toBeInTheDocument();
    await userEvent.click(btnProximoPokemon);
    expect(screen.getByRole('img', { name: /rapidash sprite/i })).toBeInTheDocument();
    await userEvent.click(btnProximoPokemon);
    expect(screen.getByRole('img', { name: /snorlax sprite/i })).toBeInTheDocument();
    await userEvent.click(btnProximoPokemon);
    expect(screen.getByRole('img', { name: /dragonair sprite/i })).toBeInTheDocument();
    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
    await userEvent.click(btnProximoPokemon);
    expect(screen.getByRole('img', { name: /pikachu sprite/i })).toBeInTheDocument();
    await userEvent.click(btnAll);
    expect(screen.getByRole('img', { name: /pikachu sprite/i })).toBeInTheDocument();
  });

  test('É mostrado um pokemon por vez', () => {
    renderWithRouter(<App />);
    // buscar elementos:
    const pokemon = screen.getAllByTestId('pokemon-name');
    // aferir
    expect(pokemon).toHaveLength(1);
  });

  test('O pokédex tem os botões de filtro', async () => {
    const pokemonurl = 'https://archives.bulbagarden.net/media/upload/0/0a/Spr_5b_004.png';
    renderWithRouter(<App />);
    // buscar elementos:
    const listBtnType = screen.getAllByTestId('pokemon-type-button');
    // aferir
    expect(listBtnType).toHaveLength(7);
    // testando se só aparece os pokemons do tipo do botao:
    await userEvent.click(listBtnType[2]);
    const imgPoke = screen.getByRole('img', { name: /caterpie sprite/i });
    expect(imgPoke).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/8/83/Spr_5b_010.png');

    const btnfilterFire = screen.getByRole('button', { name: /fire/i });
    await userEvent.click(btnfilterFire);
    const imgPoke2 = screen.getByRole('img', { name: /charmander sprite/i });
    expect(imgPoke2).toHaveProperty('src', pokemonurl);
    /* const btnProximo = screen.getByRole('button', { name: /próximo pokémon/i });
    await userEvent.click(btnProximo);
    const imgPoke3 = screen.getByRole('img', { name: /rapidash sprite/i });
    expect(imgPoke3).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/5/58/Spr_5b_078.png'); */

    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
    await userEvent.click(btnAll);
    expect(screen.getByRole('img', { name: /pikachu sprite/i })).toBeInTheDocument();
  });
});
