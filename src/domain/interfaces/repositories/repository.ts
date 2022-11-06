export interface RepositoryPort<T> {
  getById: (id: string) => Promise<T>;
  getAll: () => Promise<Array<T>>;
  update: (entity: T) => Promise<void>;
  delete: (id: string) => Promise<void>;
  save: (entity: T) => Promise<void>;
}
