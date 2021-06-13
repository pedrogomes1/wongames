import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading have a color white', () => {
    renderWithTheme(<Heading color="white">title</Heading>)

    expect(screen.getAllByTitle('title')).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
