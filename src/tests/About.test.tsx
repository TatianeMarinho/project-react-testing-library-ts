import { screen } from '@testing-library/react';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente<About.tsx />', () => {
  test('A página contém um título h2 com o texto About Pokédex', () => {
    renderWithRouter(<App />, { route: '/about' });
    // buscar elementos:
    const title = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
    /*  const titleHTwo = screen.getByRole('heading', { level: 2 }); */
    // aferir:
    expect(title).toBeInTheDocument();
  });

  test('A página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<App />, { route: '/about' });
    // buscar elementos:
    const paragraphOn = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    const paragraphTwo = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
    // aferir:
    expect(paragraphOn).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
  });

  test('A página contém uma imagem de Pokédex.', () => {
    renderWithRouter(<App />, { route: '/about' });
    // buscar elementos:
    const image = screen.getByRole('img', { name: /pokédex/i });
    // aferir:
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
