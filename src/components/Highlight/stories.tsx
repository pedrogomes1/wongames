import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/images/red-dead-img.jpg',
    floatImage: '/images/red-dead-float.png',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  },
  argTypes: {
    alignmentFloatImage: {
      type: 'select',
      options: ['left', 'right']
    }
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/images/red-dead-float.png'
}
