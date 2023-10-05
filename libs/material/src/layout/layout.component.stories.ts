import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { LayoutComponent } from './layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<LayoutComponent> = {
  component: LayoutComponent,
  title: 'A Layout',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<LayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/layout works!/gi)).toBeTruthy();
  },
};
