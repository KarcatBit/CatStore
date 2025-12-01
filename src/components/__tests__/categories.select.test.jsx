import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Categories from "../../pages/Categories";  
import { categories } from "../../data/products";

it('el select de categorías contiene Todas + todas las opciones', () => {
  render(<MemoryRouter><Categories/></MemoryRouter>)
  const options = screen.getAllByRole('option')
  // Debe incluir "Todas" + cada categoría del array
  expect(options.length).toBe(categories.length + 1)
})
