import type { Meta, StoryObj } from '@storybook/angular';
import { CommonComponent } from './_-common.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CommonComponent> = {
  component: CommonComponent,
  title: 'CommonComponent',
};
export default meta;
type Story = StoryObj<CommonComponent>;

export const Primary: Story = {
  args: {
    uname: '',
    color: 'primary',
    tooltip: '',
    tooltipPosition: 'bottom',
  },
};

export const Heading: Story = {
  args: {
    uname: '',
    color: 'primary',
    tooltip: '',
    tooltipPosition: 'bottom',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/_-common works!/gi)).toBeTruthy();
  },
};
