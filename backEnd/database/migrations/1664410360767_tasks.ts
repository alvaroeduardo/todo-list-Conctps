import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'tasks'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            
            table.increments('id').unique()
            table.string('title').notNullable()
            table.json('tags')
            table.boolean('status').notNullable() // 0 -> false | 1 -> true
            table.date('date').notNullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
