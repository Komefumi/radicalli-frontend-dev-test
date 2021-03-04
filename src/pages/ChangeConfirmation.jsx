import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';

import PageContainer from '../components/PageContainer';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import TodoForm from '../components/TodoForm';
import { CONFIRM_EDIT, RESET_EDITING } from '../constants';

const ButtonContainer = styled.section`
  margin-top: 2em;
  display: block;
`;

function ChangeConfirmation({ editing, confirmEdit, resetEditing }) {
  const history = useHistory();
  useEffect(() => {
    if (editing === null) {
      history.goBack();
    }

    return () => {};
  }, [editing, history]);

  const signalEditingEnd = () => {
    resetEditing();
  };

  return (
    editing && (
      <PageContainer>
        <SectionContainer>
          <SectionTitle>Confirm Edit</SectionTitle>

          <TodoForm {...editing} readOnly onSubmission={confirmEdit} />

          <ButtonContainer>
            <PrimaryButton text='Return' onClick={signalEditingEnd} />
          </ButtonContainer>
        </SectionContainer>
      </PageContainer>
    )
  );
}

const ChangeConfirmationConnected = connect(
  (state) => {
    const {
      todoState: { editing },
    } = state;
    return {
      editing: editing,
    };
  },
  (dispatch) => {
    return {
      confirmEdit: () => {
        dispatch({ type: CONFIRM_EDIT });
      },
      resetEditing: () => {
        dispatch({ type: RESET_EDITING });
      },
    };
  }
)(ChangeConfirmation);

export default ChangeConfirmationConnected;
