const TODO = 'ToDo';
const ONGOING = 'Ongoing';
const STALLED = 'Stalled';
const DONE = 'Done';

const statuses = [TODO, ONGOING, STALLED, DONE];

const statusOptions = statuses.reduce(
  (options, current) => [...options, { key: current, text: current }],
  []
);

export { statuses, statusOptions };
