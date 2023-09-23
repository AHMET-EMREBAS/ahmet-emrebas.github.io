import type { Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StepperComponent> = {
  component: StepperComponent,
  title: 'StepperComponent',
};
export default meta;
type Story = StoryObj<StepperComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/stepper works!/gi)).toBeTruthy();
  },
};
