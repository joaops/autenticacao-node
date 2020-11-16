exports.BadRequest = (title = 'Bad Request', message = 'Bad Request') => {
    const error = new Error(message);
    error.statusCode = 400;
    error.title = title;
    throw error;
};

exports.PaymentRequired = (title = 'Payment Required', message = 'Payment Required') => {
    const error = new Error(message);
    error.statusCode = 402;
    error.title = title;
    throw error;
};

exports.Unauthorized = (title = 'Unauthorized Request', message = 'Unauthorized Request') => {
    const error = new Error(message);
    error.statusCode = 401;
    error.title = title;
    throw error;
};

exports.Forbidden = (title = 'Forbidden', message = 'Forbidden') => {
    const error = new Error(message);
    error.statusCode = 403;
    error.title = title;
    throw error;
};

exports.NotFound = (title = 'Not Found', message = 'Not Found') => {
    const error = new Error(message);
    error.statusCode = 404;
    error.title = title;
    throw error;
};

exports.MethodNotAllowed = (title = 'Method Not Allowed', message = 'Method Not Allowed') => {
    const error = new Error(message);
    error.statusCode = 405;
    error.title = title;
    throw error;
};

exports.NotAcceptable = (title = 'Not Acceptable', message = 'Not Acceptable') => {
    const error = new Error(message);
    error.statusCode = 406;
    error.title = title;
    throw error;
};

exports.ProxyAuthenticationRequired = (title = 'Proxy Authentication Required', message = 'Proxy Authentication Required') => {
    const error = new Error(message);
    error.statusCode = 407;
    error.title = title;
    throw error;
};

exports.RequestTimeout = (title = 'Request Timeout', message = 'Request Timeout') => {
    const error = new Error(message);
    error.statusCode = 408;
    error.title = title;
    throw error;
};

exports.Conflict = (title = 'Conflict', message = 'Conflict') => {
    const error = new Error(message);
    error.statusCode = 409;
    error.title = title;
    throw error;
};

exports.Gone = (title = 'Gone', message = 'Gone') => {
    const error = new Error(message);
    error.statusCode = 410;
    error.title = title;
    throw error;
};

exports.UnprocessableEntity = (title = 'Unprocessable Entity', message = 'Unprocessable Entity') => {
    const error = new Error(message);
    error.statusCode = 422;
    error.title = title;
    throw error;
};

exports.FailedDependency = (title = 'Failed Dependency', message = 'Failed Dependency') => {
    const error = new Error(message);
    error.statusCode = 424;
    error.title = title;
    throw error;
};

exports.InternalServerError = (title = 'Internal Server Error', message = 'Internal Server Error') => {
    const error = new Error(message);
    error.statusCode = 500;
    error.title = title;
    throw error;
};

exports.NotImplemented = (title = 'Not Implemented', message = 'Not Implemented') => {
    const error = new Error(message);
    error.statusCode = 501;
    error.title = title;
    throw error;
};

exports.BadGateway = (title = 'Bad Gateway', message = 'Bad Gateway') => {
    const error = new Error(message);
    error.statusCode = 502;
    error.title = title;
    throw error;
};

exports.ServiceUnavailable = (title = 'Service Unavailable', message = 'Service Unavailable') => {
    const error = new Error(message);
    error.statusCode = 503;
    error.title = title;
    throw error;
};

exports.GatewayTimeout = (title = 'Gateway Timeout', message = 'Gateway Timeout') => {
    const error = new Error(message);
    error.statusCode = 504;
    error.title = title;
    throw error;
};

exports.HttpVersionNotSupported = (title = 'Http Version Not Supported', message = 'Http Version Not Supported') => {
    const error = new Error(message);
    error.statusCode = 505;
    error.title = title;
    throw error;
};

exports.NetworkAuthenticationRequired = (title = 'Network Authentication Required', message = 'Network Authentication Required') => {
    const error = new Error(message);
    error.statusCode = 511;
    error.title = title;
    throw error;
};