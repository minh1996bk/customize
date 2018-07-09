module.exports = {
    tableName: 'users',

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
    }
}