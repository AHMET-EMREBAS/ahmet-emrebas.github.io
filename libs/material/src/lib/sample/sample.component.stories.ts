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
  argTypes: {
    sampleInput: {
      description: 'Sample input',
      type: 'string',
      defaultValue: 'Sample input',
    },
  },
};

export const Heading: Story = {
  args: {
    sampleInput: 'Sample input',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Sample input/gi)).toBeTruthy();
  },
};
