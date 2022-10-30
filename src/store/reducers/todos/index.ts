import { TodoAction, TodoActionsEnum, TodoState } from './types'

const initialState: TodoState = {
  tasks: [],
  id: [],
}

export const todosReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionsEnum.CREATE_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.content],
        id: [...state.id, action.payload.id],
      }
    case TodoActionsEnum.LOAD_ALL_TODOS:
      return {
        ...state,
        tasks: action.payload,
      }
    case TodoActionsEnum.TOGGLE_TODO:
      return {
        ...state,
        tasks: action.payload,
      }
    case TodoActionsEnum.LOAD_ALL_IDS:
      return {
        ...state,
        id: action.payload,
      }
    case TodoActionsEnum.DELETE_TODOS:
      return {
        ...state,
        tasks: action.payload.todos,
        id: action.payload.id,
      }
    default:
      return state
  }
}
