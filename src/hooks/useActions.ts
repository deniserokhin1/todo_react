import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '../store'
import { StatusActionCreators } from '../store/reducers/status/action-creators/action-creators'
import { TodosActionCreators } from '../store/reducers/todos/action-creators/action-creators'

const ActionCreators = {
  ...StatusActionCreators,
  ...TodosActionCreators,
}

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()
  return bindActionCreators(ActionCreators, dispatch)
}
