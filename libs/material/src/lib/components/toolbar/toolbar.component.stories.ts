import type { Meta, StoryObj } from '@storybook/angular';
import { ToolbarComponent } from './toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToolbarComponent> = {
  component: ToolbarComponent,
  title: 'ToolbarComponent',
};
export default meta;
type Story = StoryObj<ToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toolbar works!/gi)).toBeTruthy();
  },
};
