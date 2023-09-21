import type { Meta, StoryObj } from '@storybook/angular';
import { HelloWorldComponent } from './hello-world.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HelloWorldComponent> = {
  component: HelloWorldComponent,
  title: 'HelloWorldComponent',
};
export default meta;
type Story = StoryObj<HelloWorldComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/hello-world works!/gi)).toBeTruthy();
  },
};
