import type { Meta, StoryObj } from '@storybook/angular';
import { PlaygroundComponent } from './playground.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PlaygroundComponent> = {
  component: PlaygroundComponent,
  title: 'PlaygroundComponent',
};
export default meta;
type Story = StoryObj<PlaygroundComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/playground works!/gi)).toBeTruthy();
  },
};
