import type { Meta, StoryObj } from '@storybook/angular';
import { CommonInputComponent } from './common-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CommonInputComponent> = {
  component: CommonInputComponent,
  title: 'CommonInputComponent',
};
export default meta;
type Story = StoryObj<CommonInputComponent>;

export const Primary: Story = {
  args: {
    name: '',
    label: '',
    error: '',
  },
};

export const Heading: Story = {
  args: {
    name: '',
    label: '',
    error: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/common-input works!/gi)).toBeTruthy();
  },
};
