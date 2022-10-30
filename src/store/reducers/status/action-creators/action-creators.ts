import { SetStatus } from './types'

export const StatusActionCreators = {
  setStatusTodos: (status: string): SetStatus => ({
    type: status,
  }),
}
