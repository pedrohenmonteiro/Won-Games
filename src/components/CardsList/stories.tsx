import { Story, Meta } from '@storybook/react/types-6-0'
import CardsList from '.'
import mockCards from '../PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: mockCards
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
