import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TextInputComponent> = {
  component: TextInputComponent,
  title: 'TextInputComponent',
};
export default meta;
type Story = StoryObj<TextInputComponent>;

export const Primary: Story = {
  args: {
    value: '',
    id: '',
    name: '',
    type: 'text',
    autocomplete: 'off',
    color: 'primary',
    label: 'Input Label',
    variant: 'basic',
    icon: 'info',
  },
};

export const Heading: Story = {
  args: {
    value: '',
    id: '',
    name: '',
    type: 'text',
    autocomplete: 'off',
    color: 'primary',
    label: 'Input Label',
    variant: 'basic',
    icon: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/text-input works!/gi)).toBeTruthy();
  },
};
