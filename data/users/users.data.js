const { faker } = require("@faker-js/faker");

const ct001 = {
    expect: {
        message: 'Cadastro realizado com sucesso'
    },
    request: {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: `${faker.number.int()}`,
        administrador: 'true'
    }
}

const ct002 = {
    request: {
        nome: 'Jonatas Faria',
        email: 'jf.faria@test.com',
        password: '123456789',
        administrador: 'true'
    },
    expect: {
        message: 'Este email já está sendo usado'
    }
}

const ct003 = {
    request: {
        nome: '',
        email: '',
        password: '',
        administrador: 'true'
    },
    expect: {
        nome: 'nome não pode ficar em branco',
        email: 'email não pode ficar em branco',
        password: 'password não pode ficar em branco'
    }
}

const ct004 = {
    request: {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: `${faker.number.int()}`,
        administrador: 'true'
    }
}

module.exports = {
    ct001,
    ct002,
    ct003,
    ct004
}