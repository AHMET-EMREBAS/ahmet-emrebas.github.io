import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TableComponent> = {
  component: TableComponent,
  title: 'TableComponent',
};
export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/table works!/gi)).toBeTruthy();
  },
};
