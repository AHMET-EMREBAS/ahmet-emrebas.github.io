import type { Meta, StoryObj } from '@storybook/angular';
import { SimpleSelectComponent } from './simple-select.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SimpleSelectComponent> = {
  component: SimpleSelectComponent,
  title: 'Input Simple Select',
};
export default meta;
type Story = StoryObj<SimpleSelectComponent>;

export const Primary: Story = {
  args: {
    value: '',
    icon: 'pages',
    name: 'page length',
    label: 'page length',

    options: [
      { value: '1' },
      { value: '2' },
      { value: '3' },
      { value: '4' },
      { value: '5' },
      { value: '6' },
      { value: '7' },
    ],
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/simple-select works!/gi)).toBeTruthy();
  },
};
