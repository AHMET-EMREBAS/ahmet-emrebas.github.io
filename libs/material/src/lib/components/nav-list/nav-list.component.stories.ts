import type { Meta, StoryObj } from '@storybook/angular';
import { NavListComponent } from './nav-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavListComponent> = {
  component: NavListComponent,
  title: 'NavListComponent',
};
export default meta;
type Story = StoryObj<NavListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/nav-list works!/gi)).toBeTruthy();
  },
};
