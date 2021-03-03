import React, { useState } from 'react';
import {
  TextField,
  PrimaryButton,
  DatePicker,
  Dropdown,
} from '@fluentui/react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageContainer from '../components/PageContainer';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';

import { MockTodos } from '../mock_data/todos';
import { statuses, statusOptions } from '../constants';

const TodoFormContainer = styled.div`
  display: flex;
`;

const TodoForm = ({
  title,
  description,
  dueDate,
  status,
  isNew,
  justConfirming,
}) => {
  const [titleR, setTitle] = useState(title);
  const [descriptionR, setDescription] = useState(description);
  const [dueDateR, setDueDate] = useState(dueDate);
  const [statusR, setStatus] = useState(status);

  const useSetter = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <TodoFormContainer>
      <TextField
        placeholder='Title'
        value={titleR}
        onChange={useSetter(setTitle)}
        contentEditable={!justConfirming}
      />
      <TextField
        placeholder='Description'
        value={descriptionR}
        onChange={useSetter(setDescription)}
        contentEditable={!justConfirming}
      />
      <DatePicker
        placeholder='Due Date'
        value={dueDateR}
        onChange={useSetter(setDueDate)}
        contentEditable={!justConfirming}
      />
      {/* <TextField
        placeholder='Status'
        value={statusR}
        onChange={useSetter(setStatus)}
      /> */}
      <Dropdown
        placeholder='Status'
        defaultValue={statusR}
        options={statusOptions}
        onChange={useSetter(setStatus)}
        contentEditable={!justConfirming}
      />
      {!justConfirming && <PrimaryButton text={isNew ? 'Create' : 'Save'} />}
    </TodoFormContainer>
  );
};

const stringType = PropTypes.string;

TodoForm.propTypes = {
  title: stringType,
  description: stringType,
  dueDate: PropTypes.instanceOf(Date),
  status: PropTypes.oneOf(statuses),
  isNew: PropTypes.bool,
};

const CreationSection = () => (
  <SectionContainer>
    <SectionTitle>Create Todo</SectionTitle>
    <TodoForm isNew />
  </SectionContainer>
);

const ListSection = ({ todos }) => {
  console.log(todos);

  return (
    <SectionContainer>
      <SectionTitle>Todos Created</SectionTitle>
      {todos.map((current) => (
        <TodoForm {...current} />
      ))}
    </SectionContainer>
  );
};

function TodoListing() {
  const [mockTodos] = useState(MockTodos());
  console.log(mockTodos);

  return (
    <PageContainer>
      <CreationSection />
      <ListSection todos={mockTodos} />
    </PageContainer>
  );
}

export default TodoListing;
