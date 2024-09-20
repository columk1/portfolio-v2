import Hero from './Hero'
import { render } from '@testing-library/react'

describe('Hero Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero />)
    expect(container).toMatchSnapshot()
  })
})
