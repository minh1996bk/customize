var bcrypt = require('bcrypt');

module.exports = {
    tableName: 'users',
    modelName: 'User',
    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },
        email: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        age: {
            type: 'number'
        },
        createdAt: {
            type: 'string',
            columnType: 'datetime',
            columnName: 'created_at',
            autoCreatedAt: true
        },
        updatedAt: {
            type: 'string',
            columnType: 'datetime',
            columnName: 'updated_at'
        }
    },
    seedData: 
    {
        email: "minh1996bk@gmail.com",
        password: "husterk59",
        name: "Nguyen Dinh Minh",
        age: "22"
    },
    beforeCreate: function(data, next) {
        let salt = bcrypt.genSaltSync(10);
        data.password = bcrypt.hashSync(data.password, salt);
        data.createdAt = new Date().toLocaleString();
        return next();
    },
    beforeUpdate: function(data, next) {
        let salt = bcrypt.genSaltSync(10);
        data.newPassword = bcrypt.hashSync(data.password, salt);
        return next();
    }
    

}