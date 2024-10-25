
const { ct001 } = require('../../../data/users/users.data');
const { assert } = require('chai');
const { postUsers } = require('../../../qa.core-serverest-desafio-api.pactumjs/src/services/users/postUsers.service');
/**
 * CT 001 - Criação de usuário no serverrest API
 */
it('[CT-001] - Criação de usuário no serverrest API', async () => {
    const usersResponse = await postUsers(ct001.request, 201)
    assert.equal(usersResponse.message,
        ct001.expect.message,
        'O usuário não foi cadastrado.')
})