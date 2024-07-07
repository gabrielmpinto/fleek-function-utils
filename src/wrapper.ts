import { wrapLogger as wrapLogger, LoggerOptions } from './logger';
import { HttpRequest, HttpResponse } from 'fleek';

export type WrapperOptions = {
  log?: LoggerOptions;
};

export const wrapper = async (
  fn: (request: HttpRequest) => Promise<HttpResponse>,
  request: HttpRequest,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  opts?: WrapperOptions,
) => {
  const debug = request?.query?.debug ?? false;
  const { logs } = wrapLogger();

  try {
    const response = await fn(request);

    return debug
      ? {
          body: {
            success: true,
            result: response,
            logs,
          },
        }
      : response;
  } catch (error: unknown) {
    let errorMsg;
    if (error instanceof Error && error.message) {
      errorMsg = {
        message: error.message,
        name: error.name,
        cause: error.cause,
        stack: error.stack,
      };
    } else {
      errorMsg = error;
    }

    return debug
      ? {
          body: {
            success: false,
            error: errorMsg,
            logs,
          },
        }
      : error;
  }
};
