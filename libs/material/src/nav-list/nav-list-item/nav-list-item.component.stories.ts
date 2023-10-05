import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NavListItemComponent } from './nav-list-item.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { RouterModule } from '@angular/router';

const meta: Meta<NavListItemComponent> = {
  component: NavListItemComponent,
  title: 'NavListItemComponent',
  decorators: [
    moduleMetadata({
      imports: [RouterModule.forChild([])],
    }),
  ],
};
export default meta;
type Story = StoryObj<NavListItemComponent>;

export const Primary: Story = {
  args: {
    label: '',
    icon: 'info',
  },
};

export const Heading: Story = {
  args: {
    label: '',
    icon: 'info',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/nav-list-item works!/gi)).toBeTruthy();
  },
};
