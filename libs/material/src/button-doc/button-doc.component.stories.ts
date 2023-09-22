import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonDocComponent } from './button-doc.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonDocComponent> = {
  component: ButtonDocComponent,
  title: 'ButtonDocComponent',
};
export default meta;
type Story = StoryObj<ButtonDocComponent>;

export const Primary: Story = {
  args: {},
};
