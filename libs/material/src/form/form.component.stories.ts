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
        type: 'text',
        name: 'username',
        color: 'primary',
        autocomplete: 'email',
        label: 'Username',
        icon: 'email',
      },
      {
        type: 'password',
        name: 'password',
        color: 'primary',
        autocomplete: 'current-password',
        label: 'Password',
        icon: 'email',
      },
    ] as InputComponent[],
  } as any,
};

export const Primary: Story = {
  args: {
    children: [
      {
        type: 'text',
        name: 'firstName',
        color: 'primary',
        autocomplete: 'given-name',
        label: 'First Name',
        icon: 'person',
      },
    ] as InputComponent[],
  } as any,
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/form works!/gi)).toBeTruthy();
  },
};
