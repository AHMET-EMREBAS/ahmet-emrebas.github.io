import { Logger } from './logger';
describe('Logger', () => {
  it('should log', () => {
    const logger = new Logger();
    logger.setContext('Contex');

    expect(logger).toBeTruthy();
    logger.info('Info log');
    logger.debug('Debug log');
    logger.warn('Warn log');
    logger.error('Error log');
  });
});
