import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PageContainer from '../components/PageContainer';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import TodoForm from '../components/TodoForm';
import { ROUTE_CHANGE_CONFIRM, SET_EDITING } from '../constants';
import { useGetTodoState } from '../hooks';

const CreationSection = () => {
  const dispatch = useDispatch();
  const addTodoUsingData = (payload) => {
    dispatch({
      type: SET_EDITING,
      payload: { ...payload, id: nanoid(), new: true },
    });
  };

  return (
    <SectionContainer>
      <SectionTitle>Create Todo</SectionTitle>
      <TodoForm isNew onSubmission={addTodoUsingData} />
    </SectionContainer>
  );
};

const ListSection = () => {
  const { todos } = useGetTodoState();
  const dispatch = useDispatch();

  const setForEditConfirm = (payload) => {
    dispatch({ type: SET_EDITING, payload });
  };

  return (
    <SectionContainer>
      <SectionTitle>Todos Created</SectionTitle>
      {todos.map((current) => (
        <TodoForm
          key={current.id}
          {...current}
          onSubmission={setForEditConfirm}
        />
      ))}
    </SectionContainer>
  );
};

function TodoListing() {
  const { editing } = useGetTodoState();
  const history = useHistory();

  useEffect(() => {
    if (editing !== null) {
      history.push(ROUTE_CHANGE_CONFIRM);
    }
    return () => {};
  }, [editing, history]);

  return (
    <PageContainer>
      <CreationSection />
      <ListSection />
    </PageContainer>
  );
}

export default TodoListing;
