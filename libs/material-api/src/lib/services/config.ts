import {
  ConfigManager as Manager,
  Config as BaseConfig,
} from '@techbir/common';

export const ConfigManager = new Manager();
export const Config = new BaseConfig('Material', ConfigManager);
