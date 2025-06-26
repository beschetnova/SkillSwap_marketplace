/* import { Dropdown } from './dropdown';
import { DropdownUI } from '../ui/dropdown/dropdown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown trigger={<button>Показать дропдаун ▼</button>}>
      <div
        style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: 8,
          backgroundColor: 'red'
        }}
      >
        <DropdownUI>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            <li style={{ cursor: 'pointer' }}>Опция 1</li>
            <li style={{ cursor: 'pointer' }}>Опция 2</li>
            <li style={{ cursor: 'pointer' }}>Опция 3</li>
          </ul>
        </DropdownUI>
      </div>
    </Dropdown>
  )
};
 */