import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchInputComponent } from './switch-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SwitchInputComponent> = {
  component: SwitchInputComponent,
  title: 'SwitchInputComponent',
};
export default meta;
type Story = StoryObj<SwitchInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/switch-input works!/gi)).toBeTruthy();
  },
};
