const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let title = err.title || 'ERRO';
    let message = err.message;
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = '';
        for (erro in err.errors) {
            message += err.errors[erro].message + ' ';
        }
        message = message.trim();
    }
    res.status(statusCode).send({ statusCode, title, message });
};

module.exports = errorHandler;