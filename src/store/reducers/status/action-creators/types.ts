export interface StatusState {
  all: boolean
  active: boolean
  completed: boolean
}

export enum StatusActionsEnum {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export interface SetStatus {
  type: string
}

export type StatusAction = SetStatus
