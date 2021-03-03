import faker from 'faker';
import { statuses } from '../constants';

const pickStatus = () => statuses[Math.round(Math.random() * 10) % 4];

const MockTodos = () => {
  const builtTodos = Array(10)
    .fill(10)
    .map(() => ({
      title: faker.vehicle.manufacturer(),
      description: faker.lorem.sentence(),
      dueDate: faker.date.past(),
      status: pickStatus(),
    }));
  console.log({ builtTodos });
  return builtTodos;
};

export { MockTodos };
