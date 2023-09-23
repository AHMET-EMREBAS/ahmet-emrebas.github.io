import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AlertComponent> = {
  component: AlertComponent,
  title: 'AlertComponent',
};
export default meta;
type Story = StoryObj<AlertComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/alert works!/gi)).toBeTruthy();
  },
};
