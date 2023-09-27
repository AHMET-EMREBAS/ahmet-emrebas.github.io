import type { Meta, StoryObj } from '@storybook/angular';
import { ArrayInputComponent } from './array-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ArrayInputComponent> = {
  component: ArrayInputComponent,
  title: 'Input Array',
};
export default meta;
type Story = StoryObj<ArrayInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/array-input works!/gi)).toBeTruthy();
  },
};
