import type { Meta, StoryObj } from '@storybook/angular';
import { MenuComponent } from './menu.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MenuComponent> = {
  component: MenuComponent,
  title: 'MenuComponent',
};
export default meta;
type Story = StoryObj<MenuComponent>;

export const Primary: Story = {
  args: {
    label: 'Triger 1',
    color: 'primary',
    position: 'bottom',

    children: [
      {
        type: 'button',
        label: 'Label 1',
        variant: 'basic',
      } as Partial<MenuComponent>,
      {
        type: 'button',
        label: 'Triger 2',
        variant: 'basic',
        color: 'accent',
        position: 'right',

        children: [
          { type: 'button', label: 'Label 2', variant: 'flat' },
          {
            type: 'button',
            label: 'Triger 3',
            variant: 'basic',
            color: 'secondary',
            position: 'right',
            showAs: 'row',
            children: [
              { type: 'button', label: 'Label 5', variant: 'flat' },
              { type: 'button', label: 'Label 6', variant: 'flat' },
              {
                type: 'button',
                label: 'Triger 4',
                variant: 'basic',
                color: 'warn',
                position: 'top',
                children: [
                  {
                    type: 'icon-button',
                    icon: 'home',
                    variant: 'raised',
                    tooltip: 'Go to home page',
                    tooltipPosition: 'top',
                  },
                  {
                    type: 'icon-button',
                    icon: 'info',
                    variant: 'raised',
                    tooltip: 'Go to about page',
                    tooltipPosition: 'top',
                  },
                  {
                    type: 'icon-button',
                    icon: 'apps',
                    variant: 'raised',
                    tooltip: 'Show services',
                    tooltipPosition: 'top',
                    position: 'bottom',
                    showAs: 'column',
                    color: 'primary',
                    children: [
                      {
                        type: 'icon-button',
                        icon: 'inventory',
                        color: 'primary',
                        variant: 'raised',
                      } as Partial<MenuComponent>,
                      {
                        type: 'icon-button',
                        icon: 'house',
                        color: 'primary',
                        variant: 'raised',
                      } as Partial<MenuComponent>,
                      {
                        type: 'icon-button',
                        icon: 'dashboard',
                        color: 'primary',
                        variant: 'raised',
                      } as Partial<MenuComponent>,
                      {
                        type: 'icon-button',
                        icon: 'store',
                        color: 'primary',
                        variant: 'raised',
                      } as Partial<MenuComponent>,
                    ],
                  },
                ],
              },
            ],
          },
          { type: 'button', label: 'Label 4', variant: 'flat' },
        ],
      },
    ] as unknown as Partial<MenuComponent>[],
  },
};

export const Heading: Story = {
  args: { label: 'Triger 1' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Triger 1/gi)).toBeTruthy();
  },
};
