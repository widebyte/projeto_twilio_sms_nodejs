const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 3000;

const userDatabase = [];

// Criar usuários no endpoint
app.post('/users', (req, res) => {
  const { email, password, phone } = req.body;
  const user = {
    email,
    password,
    phone
  };

  userDatabase.push(user);

  const welcomeMessage = 'Bem vindo ao Projeto Aquisição Teste! Seu código de verificação é 54875';

  sendSms(user.phone, welcomeMessage);

  res.status(201).send({
    message: 'Conta criada com sucesso, agora check o seu telefone para ativar sua conta!',
    data: user
  })
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;