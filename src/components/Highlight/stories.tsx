import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'
import items from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...items },
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
