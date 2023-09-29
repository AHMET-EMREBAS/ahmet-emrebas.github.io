import type { Meta, StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'Input DatePicker',
};
export default meta;
type Story = StoryObj<DatePickerComponent>;

export const Primary: Story = {
  args: {
    value: '',
    name: 'name',
    autocomplete: 'off',
    color: 'warn',
    label: 'Date of birth',
    icon: 'info',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/date-input works!/gi)).toBeTruthy();
  },
};
