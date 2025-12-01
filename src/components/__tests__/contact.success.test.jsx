// src/components/__tests__/contact.success.test.jsx
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import Contact from '../../pages/Contact'

it('muestra la alerta de éxito y luego se oculta', async () => {
  render(<Contact />)

  fireEvent.change(screen.getByLabelText(/Nombre/i),  { target: { value: 'Juan' } })
  fireEvent.change(screen.getByLabelText(/Email/i),   { target: { value: 'juan@mail.com' } })
  fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Mensaje válido de más de diez caracteres' } })

  fireEvent.click(screen.getByRole('button', { name: /enviar/i }))

  // aparece inmediatamente
  expect(screen.getByText(/mensaje enviado/i)).toBeInTheDocument()

  // se oculta luego del setTimeout(2500)
  await waitForElementToBeRemoved(() => screen.queryByText(/mensaje enviado/i), {
    timeout: 5000, // margen cómodo
  })
})
