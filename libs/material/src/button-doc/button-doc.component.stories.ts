import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonDocComponent } from './button-doc.component';

import { userEvent, within, waitFor } from '@storybook/testing-library';
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

export const Heading: Story = {
  args: {
    label: 'Label',
    clickCounter: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = () => canvas.getByText(/Label/gi);

    expect(button()).toBeTruthy();

    userEvent.click(button());
    userEvent.click(button());
    userEvent.click(button(), { delay: 1000 });

    setTimeout(() => {
      const updatedElm = canvas.getByText('Label 3');
      expect(updatedElm).toBeTruthy();
    }, 3000);
  },
};
