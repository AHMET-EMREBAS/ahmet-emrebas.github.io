import type { Meta, StoryObj } from '@storybook/angular';
import { MultipleSelectInputComponent } from './multiple-select-input.component';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MultipleSelectInputComponent> = {
  component: MultipleSelectInputComponent,
  title: 'Input Multi Select',
};
export default meta;
type Story = StoryObj<MultipleSelectInputComponent>;

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
      { icon: 'computer', value: 'PC' },
      { icon: 'bed', value: 'Furniture' },
      { icon: 'water', value: 'Food' },
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
      { icon: 'computer', value: 'PC' },
      { icon: 'bed', value: 'Furniture' },
      { icon: 'water', value: 'Food' },
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
