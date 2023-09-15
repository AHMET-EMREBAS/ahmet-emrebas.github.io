import type { Meta, StoryObj } from '@storybook/angular';

import { SampleButtonsComponent } from './sample-button.component';

const meta: Meta<SampleButtonsComponent> = {
  component: SampleButtonsComponent,
  title: 'SampleButtonsComponent',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<SampleButtonsComponent>;

export const Primary: Story = {};
