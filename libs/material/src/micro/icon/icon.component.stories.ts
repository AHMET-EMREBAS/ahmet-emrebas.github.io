import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<IconComponent> = {
  component: IconComponent,
  title: 'IconComponent',
};
export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  args: {
    fill: '',
  },
};

export const Heading: Story = {
  args: {
    fill: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/icon works!/gi)).toBeTruthy();
  },
};
