const { spec } = require('pactum')
/**
 * [CT-003] - Validação de usuário sem informar os dados do body no serverrest API
 */
it('[CT-003] - Validação de usuário sem informar os dados do body no serverrest API', async () => {
    await spec()
        .post('https://serverest.dev/usuarios')
        .withBody({
            nome: '',
            email: '',
            password: '',
            administrador: 'true'
        })
        .expectStatus(400)
        .expectBodyContains('nome não pode ficar em branco')
        .expectBodyContains('email não pode ficar em branco')
        .expectBodyContains('password não pode ficar em branco')
})