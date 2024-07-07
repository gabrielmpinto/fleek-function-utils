export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export type LoggerOptions = {
  level?: 'debug' | 'info' | 'warn' | 'error';
};

const format = (level: LogLevel, ...args: unknown[]) => {
  return {
    timestamp: new Date().toISOString(),
    level,
    message: args,
  };
};

export const wrapLogger = (): { logs: unknown[] } => {
  const chunks: unknown[] = [];

  console.log = (...args) => chunks.push(format('info', args));
  console.debug = (...args) => chunks.push(format('debug', args));
  console.info = (...args) => chunks.push(format('info', args));
  console.warn = (...args) => chunks.push(format('warn', args));
  console.error = (...args) => chunks.push(format('error', args));

  return { logs: chunks };
};
