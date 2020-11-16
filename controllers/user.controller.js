const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');

const mailerService = require('../services/mailer.service');
const UserModel = require('../models/user.model')
const TaskModel = require('../models/task.model');
const errors = require('../errors');

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (user && bcryptjs.compareSync(password, user.password)) {
            const userToken = {
                _id: user._id,
                email: user.email
            }
            const token = jwt.sign(userToken, process.env.JWT_KEY, {});
            res.status(200).json({ token })
        } else {
            errors.NotFound('Erro ao Logar', 'E-mail ou Senha Não Encontrados.')
        }
    } catch (error) {
        next(error)
    }
}

exports.register = async (req, res, next) => {
    try {
        const { email, name, lastname } = req.body
        const passwordConfig = uuidv4()
        const userModel = new UserModel({ email, name, lastname, password: '', passwordConfig })
        const user = await userModel.save()
        await mailerService.enviarEmailCodigoSenha(req.headers.host, email, passwordConfig)
        res.status(201).json(formatUser(user))
    } catch (error) {
        next(error)
    }
}

exports.password = async (req, res, next) => {
    try {
        const { password, passwordConfig } = req.body;
        if (!password) {
            errors.BadRequest('Informe a Senha.')
        }
        if (!passwordConfig) {
            errors.BadRequest('Código de Configuração de Senha Inválido.')
        }
        const hash = bcryptjs.hashSync(password, 10);
        const user = await UserModel.findOne({ passwordConfig })
        if (!user) {
            errors.BadRequest('Código de Configuração de Senha Inválido.')
        }
        await UserModel.updateOne({ passwordConfig }, { password: hash, passwordConfig: '' })
        const userToken = {
            _id: user._id,
            email: user.email
        }
        const token = jwt.sign(userToken, process.env.JWT_KEY, {});
        res.status(200).json({ token })
    } catch (error) {
        next(error)
    }
}

exports.recover = async (req, res, next) => {
    try {
        const { email } = req.body;
        if (!email) {
            errors.BadRequest('Bad Request', 'Informe o E-mail.')
        }
        const exists = await UserModel.exists({ email })
        if (!exists) {
            errors.NotFound('Not Found', 'E-mail Não Encontrado.')
        }
        const passwordConfig = uuidv4()
        await UserModel.updateOne({ email }, { passwordConfig })
        await mailerService.enviarEmailCodigoSenha(req.headers.host, email, passwordConfig)
        res.status(200).json({ message: 'E-mail de Recuperação de Senha Enviado com Sucesso.' })
    } catch (error) {
        next(error)
    }
}

exports.find = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.user._id)
        res.status(200).json(formatUser(user))
    } catch (error) {
        next(error)
    }
}

exports.update = async (req, res, next) => {
    try {
        const { name, lastname, password } = req.body
        let updateQuery = {}
        if (name) {
            updateQuery.name = name
        }
        if (lastname) {
            updateQuery.lastname = lastname
        }
        if (password) {
            const hash = bcryptjs.hashSync(password, 10);
            updateQuery.password = hash
        }
        const user = await UserModel.findByIdAndUpdate(req.user._id, { $set: updateQuery }, { new: true })
        res.status(200).json(formatUser(user))
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        await UserModel.deleteOne({ _id: req.user._id })
        await TaskModel.deleteMany({ user: req.user._id })
        res.status(200).json()
    } catch (error) {
        next(error)
    }
}

const formatUser = (user) => {
    return {
        _id: user._id,
        email: user.email,
        name: user.name,
        lastname: user.lastname
    }
}