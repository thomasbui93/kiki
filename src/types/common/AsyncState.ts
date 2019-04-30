export type AsyncState<T> = {
  loading: boolean,
  error: boolean,
  items: T[]
}
