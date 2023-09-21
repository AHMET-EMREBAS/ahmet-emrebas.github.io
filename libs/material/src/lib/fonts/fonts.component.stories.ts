import type { Meta, StoryObj } from '@storybook/angular';
import { FontsComponent } from './fonts.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FontsComponent> = {
  component: FontsComponent,
  title: 'FontsComponent',
};

export default meta;

type Story = StoryObj<FontsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/fonts works!/gi)).toBeTruthy();
  },
};
