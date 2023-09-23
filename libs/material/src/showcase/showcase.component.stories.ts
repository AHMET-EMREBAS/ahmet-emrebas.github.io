import type { Meta, StoryObj } from '@storybook/angular';
import { ShowcaseComponent } from './showcase.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ShowcaseComponent> = {
  component: ShowcaseComponent,
  title: 'ShowcaseComponent',
};
export default meta;
type Story = StoryObj<ShowcaseComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/showcase works!/gi)).toBeTruthy();
  },
};
