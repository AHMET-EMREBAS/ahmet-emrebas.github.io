import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button Regular',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'basic',
    color: 'primary',
  },
};

export const Heading: Story = {
  args: {
    label: 'Raised Button',
    variant: 'raised',
    color: 'secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Raised Button/gi)).toBeTruthy();
  },
};
