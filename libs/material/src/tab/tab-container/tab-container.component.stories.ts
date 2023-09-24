import type { Meta, StoryObj } from '@storybook/angular';
import { TabContainerComponent } from './tab-container.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TabContainerComponent> = {
  component: TabContainerComponent,
  title: 'TabContainerComponent',
};
export default meta;
type Story = StoryObj<TabContainerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tab-container works!/gi)).toBeTruthy();
  },
};
