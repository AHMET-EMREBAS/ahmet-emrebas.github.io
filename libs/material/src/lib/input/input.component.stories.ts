import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'InputComponent',
  tags:['autodocs']
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input works!/gi)).toBeTruthy();
  },
};
