import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <FavoritePokemon.tsx />', () => {
  test('A mensagem No favorite pokemon found caso a pessoa não tenha Pokémon favorito', async () => {
    renderWithRouter(<App />, { route: '/pokemon/25' });
    // buscar elementos:
    const favorite = screen.getByRole('link', { name: /favorite pokémon/i });
    // interagir:
    await userEvent.click(favorite);
    // buscar elementos:
    const favoriteNot = screen.getByText(/no favorite pokémon found/i);
    // aferir:
    expect(favoriteNot).toBeInTheDocument();
  });

  test('Apenas são exibidos os Pokémon favoritados', async () => {
    renderWithRouter(<App />, { route: 'pokemon/143' });
    // buscar elementos:
    const pokemon = screen.getByRole('heading', { name: /snorlax details/i });
    // aferir
    expect(pokemon).toBeInTheDocument();

    // buscar elementos:
    const buttonFavorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    // interagir:
    await userEvent.click(buttonFavorite);
    // aferir:
    expect(buttonFavorite).toBeChecked();

    // buscar elementos:
    const favorite = screen.getByRole('link', { name: /favorite pokémon/i });
    // interagir:
    await userEvent.click(favorite);
    // buscar elementos:
    const titleFavorite = screen.getByRole('heading', { name: /favorite pokémon/i });
    // aferir:
    expect(titleFavorite).toBeInTheDocument();

    // buscar elementos:
    const pokemonFavorite = screen.getByRole('img', { name: /snorlax is marked as favorite/i });
    // aferir:
    expect(pokemonFavorite).toBeInTheDocument();
  });
});
