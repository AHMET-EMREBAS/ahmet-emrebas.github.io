import type { Meta, StoryObj } from '@storybook/angular';
import { NumberInputComponent } from './number-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NumberInputComponent> = {
  component: NumberInputComponent,
  title: 'NumberInputComponent',
};
export default meta;
type Story = StoryObj<NumberInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/number-input works!/gi)).toBeTruthy();
  },
};
