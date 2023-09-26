import type { Meta, StoryObj } from '@storybook/angular';
import { NumberInputComponent } from './number-input.component';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NumberInputComponent> = {
  component: NumberInputComponent,
  title: 'Input Number',
};
export default meta;
type Story = StoryObj<NumberInputComponent>;

export const Primary: Story = {
  args: {
    name: 'name',
    color: 'accent',
    label: 'Input Label',
    variant: 'basic',
    icon: '123',
  },
};

export const Heading: Story = {
  args: {
    name: 'name',
    autocomplete: 'off',
    color: 'primary',
    label: 'Age',
    variant: 'basic',
    icon: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByLabelText(/Age/gi);
    expect(inputElement).toBeTruthy();
    userEvent.type(inputElement, '12345');
  },
};
