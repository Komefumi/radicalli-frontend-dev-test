import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PageContainer from '../components/PageContainer';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import TodoForm from '../components/TodoForm';
import { ROUTE_CHANGE_CONFIRM, SET_EDITING } from '../constants';

const CreationSection = ({ addTodoUsingData }) => {
  return (
    <SectionContainer>
      <SectionTitle>Create Todo</SectionTitle>
      <TodoForm isNew onSubmission={addTodoUsingData} />
    </SectionContainer>
  );
};

const ListSection = ({ todos, setForEditConfirm }) => {
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

function TodoListing({ todos, editing, setForEditConfirm, addTodoUsingData }) {
  const history = useHistory();
  useEffect(() => {
    if (editing !== null) {
      history.push(ROUTE_CHANGE_CONFIRM);
    }
    return () => {};
  }, [editing, history]);
  return (
    <PageContainer>
      <CreationSection addTodoUsingData={addTodoUsingData} />
      <ListSection todos={todos} setForEditConfirm={setForEditConfirm} />
    </PageContainer>
  );
}

const TodoListingConnected = connect(
  (state) => {
    const {
      todoState: { todos, editing },
    } = state;
    return {
      todos: todos,
      editing: editing,
    };
  },
  (dispatch) => {
    return {
      setForEditConfirm: (payload) => {
        console.log({ payload });
        dispatch({ type: SET_EDITING, payload });
      },
      addTodoUsingData: (payload) => {
        dispatch({
          type: SET_EDITING,
          payload: { ...payload, id: nanoid(), new: true },
        });
      },
    };
  }
)(TodoListing);

export default TodoListingConnected;
