import type { Meta, StoryObj } from '@storybook/angular';
import { ListItemComponent } from './list-item.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ListItemComponent> = {
  component: ListItemComponent,
  title: 'ListItemComponent',
};
export default meta;
type Story = StoryObj<ListItemComponent>;

export const Primary: Story = {
  args: {
    label: '',
    color: 'primary',
    icon: 'info',
  },
};

export const Heading: Story = {
  args: {
    label: '',
    color: 'primary',
    icon: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/list-item works!/gi)).toBeTruthy();
  },
};
