import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import * as S from './styles'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.png',
  buttonLabel: 'Buy now',
  buttonLink: '/testlink'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    const srcImage = '/float-image.png'
    renderWithTheme(<Highlight {...props} floatImage={srcImage} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      srcImage
    )
  })

  it('should render align left float image by default', () => {
    const srcImage = '/float-image.png'
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage={srcImage} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left right image', () => {
    const srcImage = '/float-image.png'
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage={srcImage} alignmentFloatImage="right" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })
})
