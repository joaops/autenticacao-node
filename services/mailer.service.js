const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.enviarEmailCodigoSenha = (host, email, passwordConfig) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Definição da Senha de Usuário https://' + host,
        text: 'Clique no Link para definir uma senha de usuário: https://' + host + '/password/' + passwordConfig
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(new Error('Serviço de e-mail indisponível no momento.'));
            } else {
                resolve(info);
            }
        });
    });
};