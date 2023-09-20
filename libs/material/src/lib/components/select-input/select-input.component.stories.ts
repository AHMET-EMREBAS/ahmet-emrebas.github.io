import type { Meta, StoryObj } from '@storybook/angular';
import { SelectInputComponent } from './select-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SelectInputComponent> = {
  component: SelectInputComponent,
  title: 'SelectInputComponent',
};
export default meta;
type Story = StoryObj<SelectInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/select-input works!/gi)).toBeTruthy();
  },
};
