const jwt = require('jsonwebtoken')

const errors = require('../errors')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = {
            _id: decoded._id,
            email: decoded.email
        };
        next();
    } catch (error) {
        errors.Unauthorized('Você Não Está Autenticado.', 'Erro ao Decodificar Token de Acesso.')
    }
}