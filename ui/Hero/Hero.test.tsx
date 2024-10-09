import { render } from '@testing-library/react'
import Hero from './Hero'

describe('Hero Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero />)
    expect(container).toMatchSnapshot()
  })
})
