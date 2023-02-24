/*eslint-disable */

import AllAction from '../store/action-creators/index';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllAction, dispatch);
};
