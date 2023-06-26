import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente <App.tsx />', () => {
  test('O topo da aplicação contém um conjunto fixo de links de navegação(Home, About, Favorite Pokémon)', () => {
    renderWithRouter(<App />);
    // buscar os elementos:
    const linkHome = screen.getByRole('link', { name: /home/i });
    const linkAbout = screen.getByRole('link', { name: /about/i });
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    // aferir
    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });

  test('A aplicação é redirecionada para a página inicial, na URL /, ao clicar no link Home da barra de navegação.', async () => {
    renderWithRouter(<App />);
    // buscar os elementos:
    const linkHome = screen.getByRole('link', { name: /home/i });
    // agir
    await userEvent.click(linkHome);
    // aferir
    const tituloHome = screen.getByRole('heading', { name: /pokédex/i });
    expect(tituloHome).toBeInTheDocument();
  });

  test('A aplicação é redirecionada para a página de About, ao clicar no link About da barra de navegação.', async () => {
    renderWithRouter(<App />);
    // buscar os elementos:
    const linkAbout = screen.getByRole('link', { name: /about/i });
    // agir
    await userEvent.click(linkAbout);
    // aferir
    const tituloAbout = screen.getByRole('heading', { name: /about pokédex/i });
    expect(tituloAbout).toBeInTheDocument();
  });

  test('A aplicação é redirecionada para a página de Pokémon Favoritados ao clicar no link Favorite Pokémon da barra de navegação.', async () => {
    renderWithRouter(<App />);
    // buscar os elementos:
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    // agir
    await userEvent.click(linkFavorite);
    // aferir
    const tituloFavorite = screen.getByRole('heading', { name: /favorite pokémon/i });
    expect(tituloFavorite).toBeInTheDocument();
  });

  test('A aplicação é redirecionada para a página Not Foundao entrar em uma URL desconhecida.', () => {
    renderWithRouter(<App />, { route: '/pirei' });
    // buscar os elementos:
    const pageNoteFound = screen.getByRole('heading', { name: /page requested not found/i });
    // aferir
    expect(pageNoteFound).toBeInTheDocument();
  });
});
