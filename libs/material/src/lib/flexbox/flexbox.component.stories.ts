import type { Meta, StoryObj } from '@storybook/angular';
import { FlexboxComponent } from './flexbox.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FlexboxComponent> = {
  component: FlexboxComponent,
  title: 'FlexboxComponent',
};
export default meta;
type Story = StoryObj<FlexboxComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/flexbox works!/gi)).toBeTruthy();
  },
};
