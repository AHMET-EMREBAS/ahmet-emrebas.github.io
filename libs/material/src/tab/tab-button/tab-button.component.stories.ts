import type { Meta, StoryObj } from '@storybook/angular';
import { TabButtonComponent } from './tab-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TabButtonComponent> = {
  component: TabButtonComponent,
  title: 'TabButtonComponent',
};
export default meta;
type Story = StoryObj<TabButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'tab',
    borderPosition: 'bottom',
  },
};

export const Heading: Story = {
  args: {
    variant: 'tab',
    borderPosition: 'bottom',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tab-button works!/gi)).toBeTruthy();
  },
};
