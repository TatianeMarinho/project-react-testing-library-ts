import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente<About.tsx />', () => {
  test('Teste se a página contém um título h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    // buscar elementos:
    const title = screen.getByRole('heading', { name: /about pokédex/i });
    // aferir:
    expect(title).toBeInTheDocument();
  });
});
