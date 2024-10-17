const { assert } = require("chai")
const { ct002 } = require("../../../data/users/users.data")
const { postUsers } = require("../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service")

/**
 * [CT-002] - Validação de usuário existente no serverrest API
 */
it('[CT-002] - Validação de usuário existente no serverrest API', async () => {
    const response = await postUsers(ct002.request, 400)
    assert.equal(response.message, ct002.expect.message, 'A mensagem é diferente do esperado.')
})