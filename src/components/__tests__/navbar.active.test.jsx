import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from "../Navbar";

it('marca Inicio como activo en la ruta "/"', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Navbar/>
    </MemoryRouter>
  )
  const inicio = screen.getByText(/inicio/i)
  // NavLink suele poner aria-current="page" en el activo
  expect(inicio).toHaveAttribute('aria-current', 'page')
})
