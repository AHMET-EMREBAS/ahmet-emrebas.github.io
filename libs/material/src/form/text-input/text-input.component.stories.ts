import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { useArgs } from '@storybook/manager-api';

const meta: Meta<TextInputComponent> = {
  component: TextInputComponent,
  title: 'Input Text',
};
export default meta;
type Story = StoryObj<TextInputComponent>;

export const Primary: Story = {
  args: {
    value: '',
    name: 'name',
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
    name: 'name',
    autocomplete: 'off',
    color: 'primary',
    label: 'Name',
    variant: 'basic',
    icon: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByLabelText(/Name/gi);

    expect(inputElement).toBeTruthy();

    userEvent.type(inputElement, 'How you doing');
    expect(canvas.getByText(/info/gi)).toBeTruthy();
  },
};
