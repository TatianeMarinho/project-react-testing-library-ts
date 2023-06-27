import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.tsx />', () => {
  test('A página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<App />, { route: '/digimon' });
    // buscar elementos:
    const title = screen.getByRole('heading', { name: /page requested not found/i, level: 2 });
    // aferir:
    expect(title).toBeInTheDocument();
  });

  test('Existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<App />, { route: '/digimon' });
    // buscar elementos:
    const image = screen.getByRole('img', { name: /pikachu crying because the page requested was not found/i });
    // aferir:
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
