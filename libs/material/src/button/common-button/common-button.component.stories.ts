import type { Meta, StoryObj } from '@storybook/angular';
import { CommonButtonComponent } from './common-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CommonButtonComponent> = {
  component: CommonButtonComponent,
  title: 'CommonButtonComponent',
};
export default meta;
type Story = StoryObj<CommonButtonComponent>;

export const Primary: Story = {
  args: {
    tooltip: '',
    color: 'primary',
    variant: 'basic',
    size: 'regular',
  },
};

export const Heading: Story = {
  args: {
    tooltip: '',
    color: 'primary',
    variant: 'basic',
    size: 'regular',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/common-button works!/gi)).toBeTruthy();
  },
};
