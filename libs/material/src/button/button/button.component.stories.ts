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
    tooltip: 'Tooltip',
    tooltipPosition: 'bottom',
  },
};

export const Heading: Story = {
  args: {
    label: 'Button',
    variant: 'raised',
    color: 'secondary',
    tooltip: 'Tooltip',
    tooltipPosition: 'bottom',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};
