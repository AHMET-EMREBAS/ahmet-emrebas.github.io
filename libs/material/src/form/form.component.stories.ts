import type { Meta, StoryObj } from '@storybook/angular';
import { FormComponent } from './form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { InputComponent } from './input/input.component';
import { QueryList } from '@angular/core';

const meta: Meta<FormComponent> = {
  component: FormComponent,
  title: 'FormComponent',
};
export default meta;
type Story = StoryObj<FormComponent>;

export const LoginForm: Story = {
  args: {
    children: [
      {
        inputs() {
          return {
            label: 'Username',
            type: 'text',
            name: 'username',
            icon: 'person',
          };
        },
      },
      {
        inputs() {
          return {
            label: 'Password',
            type: 'password',
            name: 'password',
            icon: 'password',
          };
        },
      },
    ],
  } as any,
};

export const Primary: Story = {
  args: {
    children: [
      {
        inputs() {
          return {
            label: 'Username',
            type: 'text',
            name: 'username',
            icon: 'person',
          };
        },
      },
    ],
  } as any,
};

export const Heading: Story = {
  args: {
    children: [
      {
        inputs() {
          return {
            label: 'Username',
            type: 'text',
            name: 'username',
            icon: 'person',
          };
        },
      },
    ],
  } as any,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/form works!/gi)).toBeTruthy();
  },
};
