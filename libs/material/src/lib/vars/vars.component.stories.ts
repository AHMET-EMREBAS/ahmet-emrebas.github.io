import type { Meta, StoryObj } from '@storybook/angular';
import { VarsComponent } from './vars.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<VarsComponent> = {
  component: VarsComponent,
  title: 'VarsComponent',
};
export default meta;
type Story = StoryObj<VarsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/vars works!/gi)).toBeTruthy();
  },
};
