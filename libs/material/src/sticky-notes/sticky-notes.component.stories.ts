import type { Meta, StoryObj } from '@storybook/angular';
import { StickyNotesComponent } from './sticky-notes.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StickyNotesComponent> = {
  component: StickyNotesComponent,
  title: 'StickyNotesComponent',
};
export default meta;
type Story = StoryObj<StickyNotesComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sticky-notes works!/gi)).toBeTruthy();
  },
};
