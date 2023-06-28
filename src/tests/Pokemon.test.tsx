import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Teste o componente<Pokemon.tsx />', () => {
  test('É renderizado um cartão com as informações de determinado Pokémon', () => {
    const { name, image } = pokemonList[0];
    renderWithRouter(<App />);
    // buscar elementos:
    const namePage = screen.getByTestId('pokemon-name');
    const typePage = screen.getByTestId('pokemon-type');
    const WeightPage = screen.getByText(/average weight: 6\.0 kg/i);
    const imgPage = screen.getByRole('img', { name: /pikachu sprite/i });
    // aferir:
    expect(namePage).toHaveTextContent(/^Pikachu$/);
    expect(typePage).toHaveTextContent(/^Electric$/);
    expect(WeightPage).toBeInTheDocument();
    expect(imgPage).toHaveProperty('src', image);
    expect(imgPage).toHaveProperty('alt', `${name} sprite`);
  });

  test('Ao clicar no link de navegação entra na pagina de detalhes do pokemon', async () => {
    const { id } = pokemonList[0];
    renderWithRouter(<App />);
    // buscar elementos:
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    // agir
    await userEvent.click(moreDetails);
    // aferir:
    const title = screen.getByRole('heading', { name: /pikachu details/i });
    expect(title).toBeInTheDocument();

    // testa o link:
    const rotePage = window.location.pathname;
    expect(rotePage).toBe(`/pokemon/${id}`);
  });

  test('O link da url é o id do pokemon', async () => {
    const { id, name } = pokemonList[0];
    renderWithRouter(<App />, { route: `/pokemon/${id}` });
    // buscar elementos:
    const btnFavorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    // agir
    await userEvent.click(btnFavorite);
    // buscar elementos:
    const iconPageFavorite = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    // aferir:
    expect(iconPageFavorite).toHaveAttribute('src', '/star-icon.svg');
    expect(iconPageFavorite).toHaveAttribute('alt', `${name} is marked as favorite`);
  });
});
