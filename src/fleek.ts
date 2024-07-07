/**
  * Fleek namespace for interacting with the core node.
  * @category Fleek Node API
  */
declare module 'fleek' {
  /** Fetch some blake3 content, ensuring it's in the blockstore.
    * @param {Uint8Array} hash - Blake3 hash of content to fetch
    * @returns {Promise<bool>} True if the fetch was successful
    * @category Fleek Node API
    */
  function fetchBlake3(hash: Uint8Array): Promise<boolean>;

  /** Load a content handle to some blake3 content in the blockstore.
    * @param {Uint8Array} hash - Blake3 hash of the content
    * @returns {Promise<ContentHandle>}
    * @category Fleek Node API
    */
  function loadContent(hash: Uint8Array): Promise<ContentHandle>;

  /** Query application for a client's FLK balance.
    * @param {Uint8Array} account - The balance to check
    * @returns {Promise<BigInt>} BigInt of the balance
    * @category Fleek Node API
    */
  function queryClientFlkBalance(account: Uint8Array): Promise<bigint>;

  /** Query application for a client's bandwidth balance.
    * @param {Uint8Array} account - The balance to check
    * @returns {Promise<BigInt>} BigInt of the balance
    * @category Fleek Node API
    */
  function queryClientBandwidthBalance(
    account: Uint8Array,
  ): Promise<bigint>;

  /** Handle to blockstore content.
    * Holds the proof for the content and traverses it, to read each inner block from the blockstore.
    * @property {Uint8Array} proof - Raw blake3 proof of the content
    * @property {number} length - Number of blocks in the content
    * @category Fleek Node API
    */
  class ContentHandle {
    constructor(proof: Uint8Array);
    proof: Uint8Array;
    length: number;
    /**
      * Read a given block index from the blockstore
      * @param {number} idx - Index of block to read
      * @returns {Promise<Uint8Array>}
      * @category Fleek Node API
      */
    readBlock(idx: number): Promise<Uint8Array>;
  }

  /** HTTP request methods.
    * @category Fleek Node API
    */
  type HttpRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD";

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
}