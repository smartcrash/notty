export default interface Repository<T> {
  create(entity: Partial<T>): Promise<T>

  update(id: string, partialEntity: Partial<T>): Promise<boolean>

  delete(id: string): Promise<boolean>

  find(conditions: Partial<T>): Promise<T[]>

  findById(id: string): Promise<T | undefined>
}
