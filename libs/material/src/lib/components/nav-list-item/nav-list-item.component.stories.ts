import type { Meta, StoryObj } from '@storybook/angular';
import { NavListItemComponent } from './nav-list-item.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavListItemComponent> = {
  component: NavListItemComponent,
  title: 'NavListItemComponent',
};
export default meta;
type Story = StoryObj<NavListItemComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/nav-list-item works!/gi)).toBeTruthy();
  },
};
