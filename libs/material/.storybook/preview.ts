import { Preview } from '@storybook/angular';
// import { setCompodocJson } from '@storybook/addon-docs/angular';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
};

export default preview;
