export type Replace<T, D> = Omit<T, keyof D> & D
