import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AppAuthComponent } from './app-auth.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<AppAuthComponent> = {
  component: AppAuthComponent,
  title: 'App Auth',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppAuthComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/app-auth works!/gi)).toBeTruthy();
  },
};
