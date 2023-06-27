import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Teste o componente<Pokemon.tsx />', () => {
  const { name, type, averageWeight, image, id } = pokemonList[1];

  test('É renderizado um cartão com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);
    // buscar elementos:
    const namePage = screen.getByText(/pikachu/i);
    const typePage = screen.getByTestId('pokemon-type');
    const WeightPage = screen.getByText(/average weight: 6\.0 kg/i);
    const imgPage = screen.getByRole('img', { name: /pikachu sprite/i });
    // aferir:
    expect(namePage).toBe(name);
    expect(typePage).toBe(type);
    expect(WeightPage)
      .toBe(`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`);
    expect(imgPage).toHaveProperty('src', image);
    expect(imgPage).toHaveProperty('alt', `${name} sprite`);
  });

  test('O card do pokemon contém link de navegação para exibir detalhes desse pokemon', () => {
    renderWithRouter(<App />);
    // buscar elementos:
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    // aferir:
    expect(moreDetails).toHaveAttribute('href', `/pokemon/${id}`);
  });

  test('Ao clicar no link de navegação entra na pagina de detalhes do pokemon; O link da url é o id do pokemon', async () => {
    renderWithRouter(<App />);
    // buscar elementos:
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    // agir
    await userEvent.click(moreDetails);
    // aferir:
    const title = screen.getByRole('heading', { name: `/${name} details/i` });
    expect(title).toBeInTheDocument();

    // testa o link:
    const rotePage = window.location.pathname;
    expect(rotePage).toBe(`/pokemon/${id}`);
  });

  test('O link da url é o id do pokemon', async () => {
    renderWithRouter(<App />, { route: `/pokemon/${id}` });
    // buscar elementos:
    const iconPageFavorite = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    const btnFavorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    // agir
    await userEvent.click(btnFavorite);
    // aferir:
    expect(iconPageFavorite).toHaveAttribute('src', '/star-icon.svg');
    expect(iconPageFavorite).toHaveAttribute('alt', `${name} is marked as favorite`);
  });
});
