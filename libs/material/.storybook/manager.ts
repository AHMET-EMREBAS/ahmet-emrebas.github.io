// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import mainTheme from './main-theme';

addons.setConfig({
  enableShortcuts: false,
  theme: mainTheme,
});
