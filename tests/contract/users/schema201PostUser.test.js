const Joi = require('joi');
const { schema201PostUsers } = require('../../../schemas/users/users.schema');
const { postUsers } = require('../../../qa.core-serverrest-api.pactumjs/src/services/users/postUsers.service');
const { ct004 } = require('../../../data/users/users.data');

/**
 * [CT-004] - Validar o schema 201 do método post do endpoint /usuarios
 */
it('[CT-004] - Validar o schema 201 do método post do endpoint /usuarios', async () => {
    const response = await postUsers(ct004.request, 201)
    Joi.assert(response, schema201PostUsers)
})