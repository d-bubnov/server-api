/**
 * HTTP response status codes indicate whether a specific HTTP request has been successfully completed.
 * Responses are grouped in five classes:
 *  1. Informational responses (100–199)
 *  2. Successful responses (200–299)
 *  3. Redirects (300–399)
 *  4. Client errors (400–499)
 *  5. Server errors (500–599)
 */
export const HttpStatus = Object.freeze({
  /**
   * This interim response indicates that everything so far is OK and that the client should
   * continue the request, or ignore the response if the request is already finished.
   */
  Continue: {
    code: 100,
    text: 'Continue',
  },
  /**
   * This code is sent in response to an Upgrade request header from the client,
   * and indicates the protocol the server is switching to.
   */
  SwitchingProtocol: {
    code: 101,
    text: 'Switching Protocol',
  },
  /**
   * This status code is primarily intended to be used with the Link header,
   * letting the user agent start preloading resources while the server prepares a response.
   */
  EarlyHints: {
    code: 103,
    text: 'Early Hints',
  },
  /**
   * The request has succeeded. The meaning of the success depends on the HTTP method.
   */
  OK: {
    code: 200,
    text: 'OK',
  },
  /**
   * The request has succeeded and a new resource has been created as a result.
   * This is typically the response sent after POST requests, or some PUT requests.
   */
  Created: {
    code: 201,
    text: 'Created',
  },
  /**
   * The request has been received but not yet acted upon. It is noncommittal,
   * since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.
   * It is intended for cases where another process or server handles the request, or for batch processing.
   */
  Accepted: {
    code: 202,
    text: 'Accepted',
  },
  /**
   * This response code means the returned meta-information is not exactly the same as is available from the origin server,
   * but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource.
   * Except for that specific case, the "200 OK" response is preferred to this status.
   */
  NonAuthoritativeInformation: {
    code: 203,
    text: 'Non Authoritative Information',
  },
  /**
   * There is no content to send for this request, but the headers may be useful.
   * The user-agent may update its cached headers for this resource with the new ones.
   */
  NoContent: {
    code: 204,
    text: 'No Content',
  },
  /**
   * Tells the user-agent to reset the document which sent this request.
   */
  ResetContent: {
    code: 205,
    text: 'Reset Content',
  },
  /**
   * This response code is used when the Range header is sent from the client to request only part of a resource.
   */
  PartialContent: {
    code: 206,
    text: 'Partial Content',
  },
  /**
   * The request has more than one possible response. The user-agent or user should choose one of them.
   */
  MultipleChoices: {
    code: 300,
    text: 'Multiple Choices',
  },
  /**
   * The URL of the requested resource has been changed permanently. The new URL is given in the response.
   */
  MovedPermanently: {
    code: 301,
    text: 'Moved Permanently',
  },
  /**
   * This response code means that the URI of requested resource has been changed temporarily.
   * Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
   */
  Found: {
    code: 302,
    text: 'Found',
  },
  /**
   * The server sent this response to direct the client to get the requested resource at another URI with a GET request.
   */
  SeeOther: {
    code: 303,
    text: 'See Other',
  },
  /**
   * This is used for caching purposes. It tells the client that the response has not been modified,
   * so the client can continue to use the same cached version of the response.
   */
  NotModified: {
    code: 304,
    text: 'Not Modified',
  },
  /**
   * The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request.
   * This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used:
   * If a POST was used in the first request, a POST must be used in the second request.
   */
  TemporaryRedirect: {
    code: 307,
    text: 'Temporary Redirect',
  },
  /**
   * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header.
   * This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that
   * the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
   */
  PermanentRedirect: {
    code: 308,
    text: 'Permanent Redirect',
  },
  /**
   * The server could not understand the request due to invalid syntax.
   */
  BadRequest: {
    code: 400,
    text: 'Bad Request',
  },
  /**
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
   * That is, the client must authenticate itself to get the requested response.
   */
  Unauthorized: {
    code: 401,
    text: 'Unauthorized',
  },
  /**
   * This response code is reserved for future use.
   * The initial aim for creating this code was using it for digital payment systems,
   * however this status code is used very rarely and no standard convention exists.
   */
  PaymentRequired: {
    code: 402,
    text: 'Payment Required',
  },
  /**
   * The client does not have access rights to the content; that is,
   * it is unauthorized, so the server is refusing to give the requested resource.
   * Unlike 401, the client's identity is known to the server.
   */
  Forbidden: {
    code: 403,
    text: 'Forbidden',
  },
  /**
   * The server can not find requested resource. In the browser, this means the URL is not recognized.
   * In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
   */
  NotFound: {
    code: 404,
    text: 'Not Found',
  },
  /**
   * The request method is known by the server but has been disabled and cannot be used.
   */
  MethodNotAllowed: {
    code: 405,
    text: 'Method Not Allowed',
  },
  /**
   * This response is sent when the web server, after performing server-driven content negotiation,
   * doesn't find any content that conforms to the criteria given by the user agent.
   */
  NotAcceptable: {
    code: 406,
    text: 'Not Acceptable',
  },
  /**
   * This is similar to 401 but authentication is needed to be done by a proxy.
   */
  ProxyAuthenticationRequired: {
    code: 407,
    text: 'Proxy Authentication Required',
  },
  /**
   * This response is sent on an idle connection by some servers, even without any previous request by the client.
   * It means that the server would like to shut down this unused connection.
   */
  RequestTimeout: {
    code: 408,
    text: 'Request Timeout',
  },
  /**
   * This response is sent when a request conflicts with the current state of the server.
   */
  Conflict: {
    code: 409,
    text: 'Conflict',
  },
  /**
   * This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
   */
  Gone: {
    code: 410,
    text: 'Gone',
  },
  /**
   * Server rejected the request because the Content-Length header field is not defined and the server requires it.
   */
  LengthRequired: {
    code: 411,
    text: 'Length Required',
  },
  /**
   * The client has indicated preconditions in its headers which the server does not meet.
   */
  PreconditionFailed: {
    code: 412,
    text: 'Precondition Failed',
  },
  /**
   * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
   */
  RequestEntityTooLarge: {
    code: 413,
    text: 'Request Entity Too Large',
  },
  /**
   * The URI requested by the client is longer than the server is willing to interpret.
   */
  RequestUriTooLong: {
    code: 414,
    text: 'Request URI Too Long',
  },
  /**
   * The media format of the requested data is not supported by the server, so the server is rejecting the request.
   */
  UnsupportedMediaType: {
    code: 415,
    text: 'Unsupported Media Type',
  },
  /**
   * The range specified by the Range header field in the request can't be fulfilled;
   * it's possible that the range is outside the size of the target URI's data.
   */
  RequestedRangeNotSatisfiable: {
    code: 416,
    text: 'Requested Range Not Satisfiable',
  },
  /**
   * This response code means the expectation indicated by the Expect request header field can't be met by the server.
   */
  ExpectationFailed: {
    code: 417,
    text: 'Expectation Failed',
  },
  /**
   * The server refuses the attempt to brew coffee with a teapot.
   */
  IAmATeapot: {
    code: 418,
    text: 'I am a Teapot',
  },
  /**
   * The request was well-formed but was unable to be followed due to semantic errors.
   */
  UnprocessableEntity: {
    code: 422,
    text: 'Unprocessable Entity',
  },
  /**
   * Indicates that the server is unwilling to risk processing a request that might be replayed.
   */
  TooEarly: {
    code: 425,
    text: 'Too Early',
  },
  /**
   * The server refuses to perform the request using the current protocol
   * but might be willing to do so after the client upgrades to a different protocol.
   */
  UpgradeRequired: {
    code: 426,
    text: 'Upgrade Required',
  },
  /**
   * The origin server requires the request to be conditional.
   */
  PreconditionRequired: {
    code: 428,
    text: 'Precondition Required',
  },
  /**
   * The user has sent too many requests in a given amount of time ("rate limiting").
   */
  TooManyRequests: {
    code: 429,
    text: 'Too Many Requests',
  },
  /**
   * The server is unwilling to process the request because its header fields are too large.
   * The request may be resubmitted after reducing the size of the request header fields.
   */
  RequestHeaderFieldsTooLarge: {
    code: 431,
    text: 'Request Header Fields Too Large',
  },
  /**
   * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
   */
  UnavailableForLegalReasons: {
    code: 451,
    text: 'Unavailable For Legal Reasons',
  },
  /**
   * The server has encountered a situation it doesn't know how to handle.
   */
  InternalServerError: {
    code: 500,
    text: 'Internal Server Error',
  },
  /**
   * The request method is not supported by the server and cannot be handled.
   */
  NotImplemented: {
    code: 501,
    text: 'Not Implemented',
  },
  /**
   * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
   */
  BadGateway: {
    code: 502,
    text: 'Bad Gateway',
  },
  /**
   * The server is not ready to handle the request.
   * Common causes are a server that is down for maintenance or that is overloaded.
   */
  ServiceUnavailable: {
    code: 503,
    text: 'Service Unavailable',
  },
  /**
   * This error response is given when the server is acting as a gateway and cannot get a response in time.
   */
  GatewayTimeout: {
    code: 504,
    text: 'Gateway Timeout',
  },
  /**
   * The HTTP version used in the request is not supported by the server.
   */
  HttpVersionNotSupported: {
    code: 505,
    text: 'HTTP Version Not Supported',
  },
  /**
   * The server has an internal configuration error.
   */
  VariantAlsoNegotiates: {
    code: 506,
    text: 'Variant Also Negotiates',
  },
  /**
   * The method could not be performed on the resource because
   * the server is unable to store the representation needed to successfully complete the request.
   */
  InsufficientStorage: {
    code: 507,
    text: 'Insufficient Storage',
  },
  /**
   * The server detected an infinite loop while processing the request.
   */
  LoopDetected: {
    code: 508,
    text: 'Loop Detected',
  },
  /**
   * The 511 status code indicates that the client needs to authenticate to gain network access.
   */
  NetworkAuthenticationRequired: {
    code: 511,
    text: 'Network Authentication Required',
  },
});
