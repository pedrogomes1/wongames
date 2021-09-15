import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population zero',
  developer: 'Rockstar',
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wish list/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      color: theme.colors.white
    })
    expect(screen.getByText(props.price)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 200,00" {...props} />)

    expect(screen.getByText('R$ 200,00')).not.toHaveStyle({
      textDecoration: 'line-through',
      backgroundColor: theme.colors.secondary
    })

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through',
      color: theme.colors.gray
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard favorite {...props} />)

    expect(screen.getByLabelText(/remove to wish list/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard favorite {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
