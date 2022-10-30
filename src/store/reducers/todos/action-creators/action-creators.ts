import { ITask } from '../../../../models/ITask'
import {
  SetDeleteTodosAction,
  SetLoadAllIdsAction,
  SetLoadAllTodosAction,
  SetTodoAction,
  SetToggleTodoAction,
  TodoActionsEnum,
} from '../types'

export const TodosActionCreators = {
  addTodo: (todo: ITask, id: number): SetTodoAction => ({
    type: TodoActionsEnum.CREATE_TODO,
    payload: {
      content: todo,
      id,
    },
  }),
  loadAllTodos: (todos: ITask[]): SetLoadAllTodosAction => ({
    type: TodoActionsEnum.LOAD_ALL_TODOS,
    payload: todos,
  }),
  loadAllIds: (ids: number[]): SetLoadAllIdsAction => ({
    type: TodoActionsEnum.LOAD_ALL_IDS,
    payload: ids,
  }),
  toggleTodo: (todos: ITask[]): SetToggleTodoAction => ({
    type: TodoActionsEnum.TOGGLE_TODO,
    payload: todos,
  }),
  deleteCompletedTodos: (
    todos: ITask[],
    id: number[]
  ): SetDeleteTodosAction => ({
    type: TodoActionsEnum.DELETE_TODOS,
    payload: {
      todos,
      id,
    },
  }),
}
