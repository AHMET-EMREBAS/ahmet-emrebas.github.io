import type { Meta, StoryObj } from '@storybook/angular';
import { EnumInputComponent } from './enum-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EnumInputComponent> = {
  component: EnumInputComponent,
  title: 'Input Enum',
};
export default meta;
type Story = StoryObj<EnumInputComponent>;

export const Primary: Story = {
  args: {
    value: '',
    name: 'category',
    autocomplete: 'off',
    color: 'primary',
    label: 'category',
    variant: 'basic',
    icon: 'category',
    options: [
      { icon: 'info', value: 'Option 1' },
      { icon: 'info', value: 'Option 2' },
      { icon: 'info', value: 'Option 3' },
    ],
  },
};

export const Heading: Story = {
  args: {
    value: '',
    name: 'category',
    autocomplete: 'off',
    color: 'accent',
    label: 'Category',
    variant: 'basic',
    icon: 'category',
    options: [
      { icon: 'info', value: 'Option 1' },
      { icon: 'info', value: 'Option 2' },
      { icon: 'info', value: 'Option 3' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText(/Category/gi)).toBeTruthy();
  },
};
