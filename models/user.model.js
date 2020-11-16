const mongoose = require('mongoose')

const errors = require('../errors')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Informe o E-mail.'],
        unique: true,
        validate: {
            validator: (v) => {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} não é um email válido!`
        }
    },
    name: {
        type: String,
        required: [true, 'Informe o Nome.']
    },
    lastname: {
        type: String,
        required: [true, 'Informe o Sobrenome.']
    },
    password: String,
    passwordConfig: {
        type: String,
        required: true,
        select: false
    }
}, { versionKey: false })

UserSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(errors.BadRequest('Erro ao Salvar o Usuário.', 'E-mail Já Cadastrado.'));
    } else {
        next();
    }
})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel