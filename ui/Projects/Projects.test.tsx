import { render } from '@testing-library/react'
import projects from '../../lib/data/projects'
import Projects from './Projects'

describe('Projects Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Projects projects={projects} />)
    expect(container).toMatchSnapshot()
  })
})
