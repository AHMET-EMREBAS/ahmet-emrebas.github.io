import { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import * as docJson from '../documentation.json';

setCompodocJson(docJson);

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
