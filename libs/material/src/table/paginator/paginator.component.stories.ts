import type { Meta, StoryObj } from '@storybook/angular';
import { PaginatorComponent } from './paginator.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PaginatorComponent> = {
  component: PaginatorComponent,
  title: 'PaginatorComponent',
};
export default meta;
type Story = StoryObj<PaginatorComponent>;

export const Primary: Story = {
  args: {
    pageLengthOptions: [10, 20, 30],
    itemCount: 100,
  },
};

export const Heading: Story = {
  args: {
    pageLengthOptions: [10, 20, 30],
    itemCount: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Showing 10 of 100 items/gi)).toBeTruthy();
  },
};
