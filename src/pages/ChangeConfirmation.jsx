import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';

import PageContainer from '../components/PageContainer';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import TodoForm from '../components/TodoForm';

import { useGetTodoState } from '../hooks';
import { CONFIRM_EDIT, RESET_EDITING, ROUTE_HOME } from '../constants';

const ButtonContainer = styled.section`
  margin-top: 2em;
  display: block;
`;

const LoadingSection = styled.section`
  font-size: 2em;
  width: 100%;
`;

function ChangeConfirmation() {
  const history = useHistory();
  const { editing } = useGetTodoState();
  const dispatch = useDispatch();

  const confirmEdit = () => {
    dispatch({ type: CONFIRM_EDIT });
  };

  const resetEditing = () => {
    dispatch({ type: RESET_EDITING });
  };

  useEffect(() => {
    if (editing === null) {
      history.replace(ROUTE_HOME);
    }

    return () => {};
  }, [editing, history]);

  const signalEditingEnd = () => {
    resetEditing();
  };

  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>Confirm Edit</SectionTitle>

        {editing ? (
          <TodoForm {...editing} readOnly onSubmission={confirmEdit} />
        ) : (
          <LoadingSection>Loading...</LoadingSection>
        )}

        <ButtonContainer>
          <PrimaryButton
            disabled={!editing}
            text='Return'
            onClick={signalEditingEnd}
          />
        </ButtonContainer>
      </SectionContainer>
    </PageContainer>
  );
}

export default ChangeConfirmation;
