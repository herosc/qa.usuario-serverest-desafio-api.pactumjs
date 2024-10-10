const { spec } = require('pactum')
const { faker } = require('@faker-js/faker');
const Joi = require('joi');
const { schema201PostUsers } = require('../../schemas/users.schema');

/**
 * [CT-004] - Validar o schema 201 do método post do endpoint /usuarios
 */
it('[CT-004] - Validar o schema 201 do método post do endpoint /usuarios', async () => {
    const response = await spec()
        .post('https://serverest.dev/usuarios')
        .withBody({
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            password: `${faker.number.int()}`,
            administrador: 'true'
        })
        .expectStatus(201)

    Joi.assert(response.json, schema201PostUsers)
})