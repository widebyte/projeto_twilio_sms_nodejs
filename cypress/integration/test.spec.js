/// <reference types="cypress" />

describe('Projeto Twilio API SMS - Enviar SMS', () => {
    var user = {
        "email": "aquisicaoteste@teste.com",
        "password": "passwordPass123",
        "phone": "seu numero de celular"
    }
    it('teste de retorno do json', () => {
        cy.request('POST', '/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Conta criada com sucesso, agora check o seu telefone para ativar sua conta!')
        })      
    });
})