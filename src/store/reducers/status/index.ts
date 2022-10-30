import {
  StatusAction,
  StatusActionsEnum,
  StatusState,
} from './action-creators/types'

const initialState: StatusState = {
  all: false,
  active: true,
  completed: false,
}

export const statusReducer = (
  state = initialState,
  action: StatusAction
): StatusState => {
  switch (action.type) {
    case StatusActionsEnum.ALL:
      return {
        all: true,
        active: false,
        completed: false,
      }
    case StatusActionsEnum.ACTIVE:
      return {
        all: false,
        active: true,
        completed: false,
      }
    case StatusActionsEnum.COMPLETED:
      return {
        all: false,
        active: false,
        completed: true,
      }
    default:
      return state
  }
}
