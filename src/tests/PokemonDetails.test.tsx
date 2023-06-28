import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import pokemonList from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <PokemonDetails />', () => {
  test('as informações detalhadas do Pokemon selecionado são mostradas', async () => {
    renderWithRouter(<App />);
    const { name } = pokemonList[0];

    // buscar
    const btnDetails = screen.getByRole('link', { name: /more details/i });
    // agir
    await userEvent.click(btnDetails);
    // buscar
    const title = screen.getByRole('heading', { name: `${name} Details` });
    const summmary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    const summaryText = screen.getByText(/electricity/i, { selector: 'p' });
    // aferir
    expect(title).toBeInTheDocument();
    expect(summmary).toBeInTheDocument();
    expect(summaryText).toBeVisible();
    expect(btnDetails).not.toBeVisible();
  });
  test('existe uma seção com mapas contendo localizações do pokemon', async () => {
    renderWithRouter(<App />);
    const { name, foundAt } = pokemonList[0];

    // buscar
    const btnDetails = screen.getByRole('link', { name: /more details/i });
    // agir
    await userEvent.click(btnDetails);
    // buscar
    const details = screen.getByRole('heading', { name: /game locations of pikachu/i, level: 2 });
    const detailOne = screen.getByText(/kanto power plant/i);
    const detailTwo = screen.getByText(/kanto viridian forest/i);
    const imgList = screen.getAllByAltText(`${name} location`);
    // aferir
    expect(imgList[0]).toHaveProperty('src', foundAt[0].map);
    expect(imgList[1]).toHaveProperty('src', foundAt[1].map);
    expect(details).toBeInTheDocument();
    expect(detailOne).toBeInTheDocument();
    expect(detailTwo).toBeInTheDocument();
  });

  test('O usuario pode favoritar um pokemon por meio da pagina de detalhes', async () => {
    renderWithRouter(<App />);
    // buscar
    const btnDetails = screen.getByRole('link', { name: /more details/i });
    // agir
    await userEvent.click(btnDetails);
    // buscar
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    // aferir
    expect(checkbox).toBeInTheDocument();
    // agir
    await userEvent.click(checkbox);
    // buscar
    const favoriteList = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    const label = screen.getByText(/pokémon favoritado\?/i);
    // aferir
    expect(favoriteList).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
