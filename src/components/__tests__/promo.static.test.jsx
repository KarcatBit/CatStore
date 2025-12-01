import { render } from '@testing-library/react'
import Promo from "../Promo";

it('muestra exactamente dos cajas promo', () => {
  const { container } = render(<Promo/>)
  const boxes = container.querySelectorAll('.promo-box')
  expect(boxes.length).toBe(2)
})
