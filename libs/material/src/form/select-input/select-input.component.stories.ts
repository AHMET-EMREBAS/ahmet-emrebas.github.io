import type { Meta, StoryObj } from '@storybook/angular';
import { SelectInputComponent } from './select-input.component';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SelectInputComponent> = {
  component: SelectInputComponent,
  title: 'Input Select',
};
export default meta;
type Story = StoryObj<SelectInputComponent>;

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
    color: 'primary',
    label: 'category',
    variant: 'basic',
    icon: 'category',
    options: [
      { icon: 'info', value: 'A 1' },
      { icon: 'info', value: 'B 1' },
      { icon: 'info', value: 'C 1' },
      { icon: 'info', value: 'D 1' },
      { icon: 'info', value: 'E 1' },
      { icon: 'info', value: 'F 1' },
      { icon: 'info', value: 'G 1' },
      { icon: 'info', value: 'H 1' },
      {
        icon: 'info',
        value: 'Very long option. Very long option . Very long option',
      },
      { icon: 'info', value: 'I 1' },
      { icon: 'info', value: 'J 1' },
      { icon: 'info', value: 'K 1 ' },
      { icon: 'info', value: 'K 1' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText(/Category/gi)).toBeTruthy();
    const elem = canvas.getByLabelText(/Category/gi);
    userEvent.click(elem);

    const option1 = canvas.getByTestId('B 1');

    userEvent.click(option1, { delay: 200 });

    // userEvent.selectOptions(elem, 'Option 1');
  },
};
