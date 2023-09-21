import type { Meta, StoryObj } from '@storybook/angular';
import { SizingComponent } from './sizing.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SizingComponent> = {
  component: SizingComponent,
  title: 'SizingComponent',
};
export default meta;
type Story = StoryObj<SizingComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sizing works!/gi)).toBeTruthy();
  },
};
