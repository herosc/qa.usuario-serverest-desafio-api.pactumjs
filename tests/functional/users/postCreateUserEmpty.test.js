const { postUsers } = require('../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service')
const { ct003 } = require('../../../data/users/users.data')
const { assert } = require('chai')
/**
 * [CT-003] - Validação de usuário sem informar os dados do body no serverrest API
 */
it('[CT-003] - Validação de usuário sem informar os dados do body no serverrest API', async () => {
    const response = await postUsers(ct003.request, 400)
    assert.deepEqual(response, ct003.expect, 'O valor é diferente do esperado.')

    /**
    fez requisição e ela te retornou um json => 
    {
        nome: 'nome não pode ficar em branco',
        email: 'email não pode ficar em branco',
        password: 'password não pode ficar em branco'
    }
     */
})