import type { Meta, StoryObj } from '@storybook/angular';
import { MenuComponent } from './menu.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MenuComponent> = {
  component: MenuComponent,
  title: 'MenuComponent',
};
export default meta;
type Story = StoryObj<MenuComponent>;

export const Primary: Story = {
  args: {
    label: 'Triger 1',
    color: 'primary',
    openDirection: 'bottom',
    children: [
      { label: 'Label 1', icon: 'info' },
      { label: 'Label 2', icon: 'info' },
      { label: 'Label 3', icon: 'info' },
      { label: 'Label 4', icon: 'info' },
    ],
  },
};

export const Heading: Story = {
  args: { label: 'Triger 1' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Triger 1/gi)).toBeTruthy();
  },
};
