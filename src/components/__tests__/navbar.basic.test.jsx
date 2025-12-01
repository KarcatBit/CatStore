import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from "../Navbar";

describe('Navbar', () => {
  it('muestra enlaces principales', () => {
    render(<MemoryRouter><Navbar/></MemoryRouter>)
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument()
    expect(screen.getByText(/Categorias/i)).toBeInTheDocument()
    expect(screen.getByText(/Ofertas/i)).toBeInTheDocument()
    expect(screen.getByText(/Contacto/i)).toBeInTheDocument()
  })
})
