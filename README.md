# Autenticação Node

Exemplo de back-end com autenticação e controle de usuário. O Site foi desenvolvido usando Node.js, Express.js, MongoDB e Nodemailer.

## Utilitários
* Visual Studio Code - Editor de Texto.
* Nodemon - Monitora alterações no código reiniciando automaticamente o servidor. Permite configurar variáveis no ambiente de desenvolvimento.
* ModClean - Localizar e Exclui arquivos e diretórios desnecessários da pasta node_modules.

## Instalação e Execução
```bash
npm i && modclean -r && npm run dev
```

## Variáveis de Ambiente
<table>
    <tr>
        <th>Variável</th>
        <th>Ambiente de Desenvolvimento</th>
        <th>Ambiente de Produção</th>
    </tr>
    <tr>
        <td>PORT</td>
        <td>3000</td>
        <td>3000</td>
    </tr>
    <tr>
        <td>DB_URI</td>
        <td>mongodb://localhost:27017/scanpon</td>
        <td>mongodb://usuario:senha@mongo_auth:27017/auth</td>
    </tr>
    <tr>
        <td>EMAIL_SMTP</td>
        <td>smtp.ethereal.email</td>
        <td>smtp.umbler.com</td>
    </tr>
    <tr>
        <td>EMAIL_PORT</td>
        <td>587</td>
        <td>587</td>
    </tr>
    <tr>
        <td>EMAIL_USER</td>
        <td>lessie.stiedemann@ethereal.email</td>
        <td>noreply@joaops.com.br</td>
    </tr>
    <tr>
        <td>EMAIL_PASS</td>
        <td>FPmDjJckeSznctDtfA</td>
        <td>Senha do Email</td>
    </tr>
    <tr>
        <td>JWT_KEY</td>
        <td colspan="2">cbf522979323ae6ab1afb451ac8b34da21ba1930f34c246b91d84b449d19bd03</td>
    </tr>
</table>