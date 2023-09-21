import type { Meta, StoryObj } from '@storybook/angular';
import { ColorComponent } from './color.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ColorComponent> = {
  component: ColorComponent,
  title: 'ColorComponent',
};
export default meta;
type Story = StoryObj<ColorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/color works!/gi)).toBeTruthy();
  },
};
