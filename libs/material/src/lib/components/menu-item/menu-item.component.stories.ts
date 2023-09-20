import type { Meta, StoryObj } from '@storybook/angular';
import { MenuItemComponent } from './menu-item.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MenuItemComponent> = {
  component: MenuItemComponent,
  title: 'MenuItemComponent',
};
export default meta;
type Story = StoryObj<MenuItemComponent>;

export const Primary: Story = {
  args: {
    uname: 'menu',
    icon: 'info',
    color: 'primary',
    label: 'Menu item',
    tooltip: 'Tooltip',
    tooltipPosition: 'bottom',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/menu-item works!/gi)).toBeTruthy();
  },
};
