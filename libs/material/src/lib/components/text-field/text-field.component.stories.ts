import type { Meta, StoryObj } from '@storybook/angular';
import { TextFieldComponent } from './text-field.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TextFieldComponent> = {
  component: TextFieldComponent,
  title: 'TextFieldComponent',
};
export default meta;
type Story = StoryObj<TextFieldComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-field works!/gi)).toBeTruthy();
  },
};
