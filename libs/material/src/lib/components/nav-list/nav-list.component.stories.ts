import type { Meta, StoryObj } from '@storybook/angular';
import { NavListComponent } from './nav-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { NavListSample } from './nav-list-sample';
const meta: Meta<NavListComponent> = {
  component: NavListComponent,
  title: 'NavListComponent',
};
export default meta;
type Story = StoryObj<NavListComponent>;

export const Primary: Story = {
  args: {
    data: NavListSample,
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/nav-list works!/gi)).toBeTruthy();
  },
};
