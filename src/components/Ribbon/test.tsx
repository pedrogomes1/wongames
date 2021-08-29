import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument() //paara testar se funciona, importa o debug e container antes do renderWith e adiciona embaixo: debug(container)
  })

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon color="primary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#F231a5'
    })
  })

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    renderWithTheme(
      <Ribbon color="secondary" size="small">
        Best Seller
      </Ribbon>
    )

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
