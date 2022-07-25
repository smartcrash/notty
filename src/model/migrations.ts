import { createTable, schemaMigrations, addColumns } from '@nozbe/watermelondb/Schema/migrations'
import { TableName } from './schema'

export default schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        createTable({
          name: TableName.NOTES,
          columns: [
            { name: 'title', type: 'string' },
            { name: 'content', type: 'string' },
            { name: 'created_at', type: 'number' },
            { name: 'updated_at', type: 'number' },
          ]
        }),
      ],
    },
    {
      toVersion: 3,
      steps: [
        addColumns({
          table: TableName.NOTES,
          columns: [{ name: 'color', type: 'string', isOptional: true }]
        }),
      ],
    },
  ],
})
