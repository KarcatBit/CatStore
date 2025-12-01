import { render, screen } from '@testing-library/react'
import AppRouter from '../../router/AppRouter';

it('renderiza Navbar y Footer en la app', () => {
  render(<AppRouter/>)
  // Navbar: busca un enlace que sabemos que existe
  expect(screen.getByText(/Inicio/i)).toBeInTheDocument()
  // Footer: busca el copyright
  const year = new Date().getFullYear()
  expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
})
