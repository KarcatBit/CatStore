import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Offers from "../../pages/Offers";
import { products } from "../../data/products";

it('muestra productos con badge o mensaje de sin ofertas', () => {
  render(<MemoryRouter><Offers/></MemoryRouter>)

  const offers = products.filter(p => !!p.badge)
  if (offers.length === 0) {
    expect(screen.getByText(/no hay ofertas/i)).toBeInTheDocument()
  } else {
    // busca por el título del primero con badge
    expect(screen.getByText(new RegExp(offers[0].title, 'i'))).toBeInTheDocument()
  }
})
