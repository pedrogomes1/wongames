import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  floatImage?: string
  alignmentFloatImage?: 'left' | 'right'
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  floatImage,
  alignmentFloatImage = 'left',
  backgroundImage,
  buttonLabel,
  buttonLink
}: HighlightProps) => {
  return (
    <S.Wrapper
      backgroundImage={backgroundImage}
      alignmentFloatImage={alignmentFloatImage}
    >
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
