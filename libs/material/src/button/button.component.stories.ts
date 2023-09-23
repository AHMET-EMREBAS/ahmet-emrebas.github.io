import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    uuid: '1',
    label: 'home',
    type: 'button',
    variant: 'basic',
    color: 'primary',
  },
};

export const Heading: Story = {
  args: {
    uuid:'1',
    label: 'Button',
    type: 'button',
    variant: 'raised',
    color: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByText(/Button/gi);
    expect(buttonElement).toBeTruthy();
    userEvent.hover(buttonElement);
    userEvent.click(buttonElement);
  },
};
