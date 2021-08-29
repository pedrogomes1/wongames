import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      type: 'select',
      options: ['primary', 'secondary']
    },
    size: {
      type: 'select',
      options: ['normal', 'small']
    }
  }
} as Meta
export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '500px',
      height: '250px',
      backgroundColor: '#d6d6d6',
      position: 'relative'
    }}
  >
    <Ribbon {...args} />
  </div>
)

Default.args = {
  children: 'Buy now'
}
