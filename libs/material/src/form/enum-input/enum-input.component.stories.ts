import type { Meta, StoryObj } from '@storybook/angular';
import { EnumInputComponent } from './enum-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EnumInputComponent> = {
  component: EnumInputComponent,
  title: 'EnumInputComponent',
};
export default meta;
type Story = StoryObj<EnumInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/enum-input works!/gi)).toBeTruthy();
  },
};
