import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from "../Hero";            

it('renderiza el botón Ver ofertas', () => {
  render(<MemoryRouter><Hero/></MemoryRouter>)
  expect(screen.getByRole('link', { name: /ver ofertas/i })).toBeInTheDocument()
})
