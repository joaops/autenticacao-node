const redirectHttps = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] == 'http') { // Se o protocolo informado nos headers é HTTP
        res.redirect(`https://${req.headers.host}${req.url}`); // Redireciona para HTTPS
    } else { // Se a requisição já é HTTPS
        next(); // Não precisa redirecionar
    }
};

module.exports = redirectHttps;