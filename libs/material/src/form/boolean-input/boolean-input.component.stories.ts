import type { Meta, StoryObj } from '@storybook/angular';
import { BooleanInputComponent } from './boolean-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BooleanInputComponent> = {
  component: BooleanInputComponent,
  title: 'BooleanInputComponent',
};
export default meta;
type Story = StoryObj<BooleanInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/boolean-input works!/gi)).toBeTruthy();
  },
};
