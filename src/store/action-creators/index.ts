/*eslint-disable */

import * as mainFilterCreators from './mainFilter';
import * as UserActionCreators from './ticket';
import * as sideFilterCreator from './sideFilter';
import * as showMoreTickets from './totalPage';

const AllAction = {
  ...UserActionCreators,
  ...mainFilterCreators,
  ...sideFilterCreator,
  ...showMoreTickets,
};
export default AllAction;
