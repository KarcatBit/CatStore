import { render, screen, fireEvent } from '@testing-library/react'
import Contact from '../../pages/Contact'   

it('muestra mensajes de error con campos inválidos', async () => {
  render(<Contact />)

  // obtiene controles asociados por label (ya agregaste htmlFor + id)
  const nombre  = screen.getByLabelText(/Nombre/i)
  const email   = screen.getByLabelText(/Email/i)
  const mensaje = screen.getByLabelText(/Mensaje/i)

  // dispara blur en cada campo para marcar touched y mostrar errores
  fireEvent.blur(nombre)
  fireEvent.blur(email)
  fireEvent.blur(mensaje)

  // espera a que aparezcan los mensajes
  expect(await screen.findByText(/Mínimo 3 caracteres/i)).toBeInTheDocument()
  expect(await screen.findByText(/Email inválido/i)).toBeInTheDocument()
  expect(await screen.findByText(/Mínimo 10 caracteres/i)).toBeInTheDocument()
})
