import type { Meta, StoryObj } from '@storybook/angular';
import { AppInventoryComponent } from './app-inventory.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AppInventoryComponent> = {
  component: AppInventoryComponent,
  title: 'AppInventoryComponent',
};
export default meta;
type Story = StoryObj<AppInventoryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/app-inventory works!/gi)).toBeTruthy();
  },
};
