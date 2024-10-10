const { spec } = require('pactum')
/**
 * [CT-002] - Validação de usuário existente no serverrest API
 */
it('[CT-002] - Validação de usuário existente no serverrest API', async () => {
    await spec()
        .post('https://serverest.dev/usuarios')
        .withBody({
            nome: 'Jonatas Faria',
            email: 'jf.faria@test.com',
            password: '123456789',
            administrador: 'true'
        })
        .expectStatus(400)
        .expectBodyContains('Este email já está sendo usado')
})