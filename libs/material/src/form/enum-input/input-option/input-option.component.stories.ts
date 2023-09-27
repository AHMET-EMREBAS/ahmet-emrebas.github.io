import type { Meta, StoryObj } from '@storybook/angular';
import { InputOptionComponent } from './input-option.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputOptionComponent> = {
  component: InputOptionComponent,
  title: 'InputOptionComponent',
};
export default meta;
type Story = StoryObj<InputOptionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-option works!/gi)).toBeTruthy();
  },
};
