import type { Meta, StoryObj } from '@storybook/angular';
import { NavListComponent } from './nav-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { NavListItemComponent } from './nav-list-item/nav-list-item.component';

const meta: Meta<NavListComponent> = {
  component: NavListComponent,
  title: 'NavListComponent',
};
export default meta;
type Story = StoryObj<NavListComponent>;

export const Primary: Story = {
  args: {
    color: 'primary',
    icon: 'info',

    children: [
      {
        label: 'First Item',
        icon: 'info',
        color: 'warn',
      } as NavListItemComponent,
      {
        label: 'Secondar Item',
        icon: 'apps',
        color: 'red',
      } as NavListItemComponent,
      {
        label: 'Third Item',
        icon: 'key',
        color: 'secondary',
      } as NavListItemComponent,
    ] as any,
  },
};

export const Heading: Story = {
  args: {
    color: 'primary',
    icon: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/nav-list works!/gi)).toBeTruthy();
  },
};
