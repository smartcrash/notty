import { appSchema, tableSchema } from '@nozbe/watermelondb'

export enum TableName {
  NOTES = 'notes',
}

export default appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: TableName.NOTES,
      columns: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
  ]
})
