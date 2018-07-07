module.exports = {
    tableName: 'users',

    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
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
        },
        updatedAt: {
            type: 'string',
            columnType: 'datetime',
            columnName: 'updated_at'
        }
    }
}