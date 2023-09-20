import type { Meta, StoryObj } from '@storybook/angular';
import { MenuComponent } from './menu.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MenuSample } from './menu-sample';
const meta: Meta<MenuComponent> = {
  component: MenuComponent,
  title: 'MenuComponent',
};
export default meta;
type Story = StoryObj<MenuComponent>;

export const Primary: Story = {
  args: {
    data: MenuSample,
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/menu works!/gi)).toBeTruthy();
  },
};
