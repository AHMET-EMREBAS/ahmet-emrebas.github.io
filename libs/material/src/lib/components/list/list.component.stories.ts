import type { Meta, StoryObj } from '@storybook/angular';
import { ListComponent } from './list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ListComponent> = {
  component: ListComponent,
  title: 'ListComponent',
};
export default meta;
type Story = StoryObj<ListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/list works!/gi)).toBeTruthy();
  },
};
