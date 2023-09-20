import { MenuItem } from '../../api';

export const MenuSample: MenuItem = {
  uname: 'main',
  label: 'Menu',
  color: 'primary',
  icon: 'menu_book',
  direction: 'bottom',
  children: [
    {
      uname: 'item 1',
      label: 'item 1',
      color: 'primary',
      icon: 'info',
    },

    {
      uname: 'item 2',
      label: 'item 2',
      color: 'accent',
      icon: 'pin_drop',
      direction: 'right',
      children: [
        { uname: 'item 3', label: 'item 3', color: 'primary' },

        {
          uname: 'item 4',
          label: 'item 4',
          color: 'accent',
          icon: 'pin_drop',
          direction: 'right',
          children: [
            {
              uname: 'item 5',
              label: 'item 5',
              color: 'accent',
              icon: 'info',
              direction: 'top',
              children: [
                {
                  uname: 'item 8',
                  label: 'item 8',
                  color: 'accent',
                  icon: 'warning',
                  direction: 'top',
                  children: [
                    {
                      uname: 'item 9',
                      label: 'item 9',
                      color: 'accent',
                      icon: '10k',
                      direction: 'left',
                      children: [
                        {
                          uname: 'item 10',
                          label: 'item 10',
                          color: 'primary',
                          icon: '30fps_select',
                        },
                        {
                          uname: 'item 10',
                          label: 'item 10',
                          color: 'primary',
                          icon: '30fps_select',
                        },
                      ],
                    },
                    {
                      uname: 'item 10',
                      label: 'item 10',
                      color: 'primary',
                      icon: '10k',
                    },
                  ],
                },
              ],
            },
            {
              uname: 'item 6',
              label: 'item 6',
              color: 'primary',
              icon: 'info',
            },
          ],
        },
        { uname: 'item 7', label: 'item 7', color: 'warn', icon: 'warning' },
      ],
    },
  ],
};
