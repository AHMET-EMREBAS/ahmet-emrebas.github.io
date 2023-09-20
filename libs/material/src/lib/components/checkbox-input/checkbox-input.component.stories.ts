import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxInputComponent } from './checkbox-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CheckboxInputComponent> = {
  component: CheckboxInputComponent,
  title: 'CheckboxInputComponent',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<CheckboxInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {
    uname:'Do you feel good today?'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Do you feel good today?/gi)).toBeTruthy();
  },
};
