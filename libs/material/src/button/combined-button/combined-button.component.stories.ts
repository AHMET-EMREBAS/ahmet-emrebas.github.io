import type { Meta, StoryObj } from '@storybook/angular';
import { CombinedButtonComponent } from './combined-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CombinedButtonComponent> = {
  component: CombinedButtonComponent,
  title: 'Button Combined',
};
export default meta;
type Story = StoryObj<CombinedButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Combined',
    variant: 'basic',
    icon: 'info',
    color: 'primary',
  },
};

export const Heading: Story = {
  args: {
    label: 'Combined Button',
    variant: 'basic',
    icon: 'info',
    color: 'accent',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Combined Button/gi)).toBeTruthy();
  },
};
