import type { Meta, StoryObj } from '@storybook/angular';
import { ShowcaseComponent } from './showcase.component';

const meta: Meta<ShowcaseComponent> = {
  component: ShowcaseComponent,
  title: '🤔',
};
export default meta;
type Story = StoryObj<ShowcaseComponent>;

export const Primary: Story = {
  args: {},
};
