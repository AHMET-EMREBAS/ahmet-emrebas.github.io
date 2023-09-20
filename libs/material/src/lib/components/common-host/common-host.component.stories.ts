import type { Meta, StoryObj } from '@storybook/angular';
import { CommonHostComponent } from './common-host.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CommonHostComponent> = {
  component: CommonHostComponent,
  title: 'CommonHostComponent',
};
export default meta;
type Story = StoryObj<CommonHostComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/common-host works!/gi)).toBeTruthy();
  },
};
