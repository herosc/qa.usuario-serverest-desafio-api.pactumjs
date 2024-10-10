const { spec } = require('pactum')
const { faker } = require('@faker-js/faker');
/**
 * CT 001 - Criação de usuário no serverrest API
 */
it('[CT-001] - Criação de usuário no serverrest API', async () => {
    await spec()
        .post('https://serverest.dev/usuarios')
        .withBody({
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            password: `${faker.number.int()}`,
            administrador: 'true'
        })
        .expectStatus(201)
        .expectBodyContains('Cadastro realizado com sucesso')
})