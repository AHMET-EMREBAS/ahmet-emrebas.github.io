import type { Meta, StoryObj } from '@storybook/angular';
import { TabComponent } from './tab.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TabComponent> = {
  component: TabComponent,
  title: 'TabComponent',
};
export default meta;
type Story = StoryObj<TabComponent>;

export const Primary: Story = {
  args: {
    label: '',
    active: false,
  },
};

export const Heading: Story = {
  args: {
    label: '',
    active: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tab works!/gi)).toBeTruthy();
  },
};
