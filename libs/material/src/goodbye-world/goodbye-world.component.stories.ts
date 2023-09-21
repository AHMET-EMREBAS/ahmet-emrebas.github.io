import type { Meta, StoryObj } from '@storybook/angular';
import { GoodbyeWorldComponent } from './goodbye-world.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<GoodbyeWorldComponent> = {
  component: GoodbyeWorldComponent,
  title: 'GoodbyeWorldComponent',
};
export default meta;
type Story = StoryObj<GoodbyeWorldComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/goodbye-world works!/gi)).toBeTruthy();
  },
};
