import { Model } from '@nozbe/watermelondb'
import { date, field, readonly } from '@nozbe/watermelondb/decorators'
import { TableName } from './schema'

export default class Note extends Model {
  static override table = TableName.NOTES

  @field('title') title!: string
  @field('content') content!: string
  @readonly() @date('created_at') createdAt!: Date
  @readonly() @date('updated_at') updatedAt!: Date
}
