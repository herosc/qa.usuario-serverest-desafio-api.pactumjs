const { assert } = require('chai');
const { deleteUsers } = require('../../../qa.core-serverest-desafio-api.pactumjs/src/services/users/deleteUsers.service');
const { postUsers } = require('../../../qa.core-serverest-desafio-api.pactumjs/src/services/users/postUsers.service');

let usersResponse

before ('Criar usuário que será deletado', async () => {
    usersResponse = await postUsers(ct005.request, 201)
})

it ('[CT-005] - Deletar usuário no serverest API', async () => {
    const usersResponseDelete = await deleteUsers(usersResponse._id, 200)    
    assert.equal(usersResponseDelete.message,
        'Registro excluído com sucesso')    

})