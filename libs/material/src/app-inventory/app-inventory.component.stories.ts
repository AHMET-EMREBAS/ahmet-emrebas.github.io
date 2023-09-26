import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AppInventoryComponent } from './app-inventory.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<AppInventoryComponent> = {
  component: AppInventoryComponent,
  title: 'AppInventoryComponent',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppInventoryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/app-inventory works!/gi)).toBeTruthy();
  },
};
