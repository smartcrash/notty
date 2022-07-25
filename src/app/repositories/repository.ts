import { Model, Collection, Q } from "@nozbe/watermelondb";
import { Observable } from "rxjs";
import database from "src/database";
import { TableName } from "src/model/schema";
import Repository from "../interfaces/repository.interface";

export abstract class BaseRepository<T extends Model> implements Repository<T> {
  public readonly collection: Collection<T>

  constructor(tableName: TableName) {
    this.collection = database.get<T>(tableName)
  }

  async create(entity: Partial<T>): Promise<T> {
    return await this.collection.database.write(async () => {
      const created = await this.collection.create(record => {
        Object
          .entries(entity)
          .forEach(([key, value]) => (record as any)[key] = value)
      })

      return created
    })
  }

  async update(id: string, partialEntity: Partial<T>): Promise<boolean> {
    return await this.collection.database.write(async () => {
      const entity = await this.collection.find(id)

      await entity.update(record =>
        Object
          .entries(partialEntity)
          .forEach(([key, value]) => (record as any)[key] = value)
      )

      return true
    })
  }

  async delete(id: string): Promise<boolean> {
    return await this.collection.database.write(async () => {
      const entity = await this.collection.find(id)

      await entity.markAsDeleted() // syncable

      return true
    })
  }

  find(partialEntity: Partial<T>, sort: Record<string, 'desc' | 'asc'> = {}): Promise<T[]> {
    const conditions = Object
      .entries(partialEntity)
      .map(([key, value]) => Q.where(key, value))

    const orders = Object
      .entries(sort)
      .map(([key, value]) => Q.sortBy(key, Q[value === 'desc' ? Q.desc : Q.asc]))

    return this.collection.query(...[...conditions, ...orders]).fetch()
  }

  async findById(id: string): Promise<T | undefined> {
    try {
      return this.collection.find(id)
    } catch (_) {
      return undefined
    }
  }
}
