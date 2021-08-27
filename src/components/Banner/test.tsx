import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Banner
        img={'https://source.unsplash.com/user/willianjusten/1042x580'}
        title={'Defy death'}
        subtitle={'<p>Play the new <strong>CrashLands</strong> season</p>'}
        buttonLabel={'Buy now'}
        buttonLink={'/games/defy-death'}
      />
    )

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i }) //Não precisar ser todo o texto, só um pedaço
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
