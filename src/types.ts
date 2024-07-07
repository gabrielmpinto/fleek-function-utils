/** HTTP request methods.
 * @category Fleek Node API
 */
export type HttpRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD';

/** HTTP request object.
 * @property {HttpMethod} method - HTTP Request method.
 * @property {string} path - Request path. If empty, defaults to `/`.
 * @property {Object.<string, any>} [headers] - List of headers. All entries attempt to be pre-parsed as json/javascript values, otherwise provided as strings.
 * @property {Object.<string, any>} [query] - List of query parameters. All entries attempt to be pre-parsed as json/javascript values, otherwise provided as strings.
 * @property {any} [body] - Request body. Attempts to be pre-parsed as a json/javascript value, otherwise provided as a string.
 * @category Fleek Node API
 */
export type HttpRequest = {
  method: HttpRequestMethod;
  path: string;
  headers?: Record<string, string>;
  query?: Record<string, unknown>;
  body?: unknown;
};

/** Valid header formats for an HTTP response.
 * @category Fleek Node API
 */
export type HttpResponseHeaders =
  | Record<string, string>
  | Record<string, string[]>
  | [string, string][]
  | [string, string[]][];

/** HTTP Response object. When returned from a function that's requested over http, it will be used to
 * modify the http response. Otherwise, for non-http requests, the raw json object will be sent.
 * @property {Number} status - Status code to use. Must be an unsigned integer that fits inside a u16.
 * @property {Headers} headers - Array or map of header key values
 * @property {any} body - Body to send to client
 * @category Fleek Node API
 */
export type HttpResponse = {
  status: number;
  headers: HttpResponseHeaders;
  body: unknown;
};
