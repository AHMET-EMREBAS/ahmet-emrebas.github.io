import type { Meta, StoryObj } from '@storybook/angular';
import { SampleComponent } from './sample.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SampleComponent> = {
  component: SampleComponent,
  title: 'SampleComponent',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<SampleComponent>;

export const Primary: Story = {
  args: {

    sampleInput: 'Sample Input'
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sample works!/gi)).toBeTruthy();
  },
};
