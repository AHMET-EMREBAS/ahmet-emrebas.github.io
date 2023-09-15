import type { Meta, StoryObj } from '@storybook/angular';
import { SampleButtonsComponent } from './sample-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SampleButtonsComponent> = {
  component: SampleButtonsComponent,
  title: 'SampleButtonsComponent',
};
export default meta;
type Story = StoryObj<SampleButtonsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sample-button works!/gi)).toBeTruthy();
  },
};
