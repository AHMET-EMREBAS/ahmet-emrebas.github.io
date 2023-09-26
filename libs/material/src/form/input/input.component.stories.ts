import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Input',
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    name: '',
    value: '',
    type: 'text',
    autocomplete: 'on',
    color: 'primary',
    label: 'Input Label',
    variant: 'basic',
    icon: 'info',
  },
};

export const Heading: Story = {
  args: {
    name: '',
    value: '',
    type: 'text',
    autocomplete: 'on',
    color: 'primary',
    label: 'Input Label',
    variant: 'basic',
    icon: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input works!/gi)).toBeTruthy();
  },
};
