import { ITask } from '../../../models/ITask'

export interface TodoState {
  tasks: ITask[]
  id: number[]
}

export enum TodoActionsEnum {
  CREATE_TODO = 'CREATE_TODO',
  LOAD_ALL_TODOS = 'LOAD_ALL_TODOS',
  LOAD_ALL_IDS = 'LOAD_ALL_IDS',
  TOGGLE_TODO = 'TOGGLE_TODO',
  DELETE_TODOS = 'DELETE_TODOS',
}

export interface SetTodoAction {
  type: TodoActionsEnum.CREATE_TODO
  payload: {
    content: ITask
    id: number
  }
}

export interface SetLoadAllTodosAction {
  type: TodoActionsEnum.LOAD_ALL_TODOS
  payload: ITask[]
}

export interface SetLoadAllIdsAction {
  type: TodoActionsEnum.LOAD_ALL_IDS
  payload: number[]
}

export interface SetToggleTodoAction {
  type: TodoActionsEnum.TOGGLE_TODO
  payload: ITask[]
}

export interface SetDeleteTodosAction {
  type: TodoActionsEnum.DELETE_TODOS
  payload: {
    todos: ITask[]
    id: number[]
  }
}

export type TodoAction =
  | SetTodoAction
  | SetLoadAllTodosAction
  | SetToggleTodoAction
  | SetLoadAllIdsAction
  | SetDeleteTodosAction
