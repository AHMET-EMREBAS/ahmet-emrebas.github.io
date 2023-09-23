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
    label: 'home',
    buttonType: 'button',
    buttonStyleType: 'basic',
    color: 'primary',
  },
};

export const Heading: Story = {
  args: {
    label: 'Button',
    buttonType: 'button',
    buttonStyleType: 'raised',
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
