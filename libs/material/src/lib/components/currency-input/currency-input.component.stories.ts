import type { Meta, StoryObj } from '@storybook/angular';
import { CurrencyInputComponent } from './currency-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CurrencyInputComponent> = {
  component: CurrencyInputComponent,
  title: 'CurrencyInputComponent',
};
export default meta;
type Story = StoryObj<CurrencyInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/currency-input works!/gi)).toBeTruthy();
  },
};
