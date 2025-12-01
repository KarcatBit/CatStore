import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from "../Hero";              // ✅  (subes un nivel y tomas Hero.jsx)


it('el CTA apunta a /ofertas', () => {
  render(<MemoryRouter><Hero/></MemoryRouter>)
  const cta = screen.getByRole('link', { name: /ver ofertas/i })
  expect(cta.getAttribute('href')).toMatch(/\/ofertas$/)
})
