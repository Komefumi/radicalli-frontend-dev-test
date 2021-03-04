const TODO = 'ToDo';
const ONGOING = 'Ongoing';
const STALLED = 'Stalled';
const DONE = 'Done';

const ADD_TODO = 'ADD_TODO';
const SET_EDITING = 'SET_EDITING';
const CONFIRM_EDIT = 'CONFIRM_EDIT';
const RESET_EDITING = 'RESET_EDITING';

const ROUTE_HOME = '/';
const ROUTE_CHANGE_CONFIRM = '/confirm-change';

const statuses = [TODO, ONGOING, STALLED, DONE];

const statusOptions = statuses.reduce(
  (options, current) => [...options, { key: current, text: current }],
  []
);

export {
  statuses,
  statusOptions,
  ADD_TODO,
  SET_EDITING,
  CONFIRM_EDIT,
  RESET_EDITING,
  ROUTE_HOME,
  ROUTE_CHANGE_CONFIRM,
};
