import React, { useState, useEffect, useRef } from 'react';
import {
  TextField,
  DatePicker,
  Dropdown,
  PrimaryButton,
} from '@fluentui/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { statuses, statusOptions } from '../constants';

const TodoFormContainer = styled.div`
  display: flex;
  width: 100%;

  ${(props) =>
    props.readOnly
      ? `
    & input, & .ms-Dropdown-title {
      background-color: #fefefe;
      color: #121212;
      // border: 1px solid rgb(243, 242, 241);
    }

    & .ms-Dropdown-title, & .ms-Dropdown-title:hover {
      border: 1px solid rgb(243, 242, 241);
    }
  `
      : ''}
`;

const TitleField = styled(TextField)`
  flex: 1 0 10%;
`;

const DescriptionField = styled(TextField)`
  flex: 1 0 10%;
`;

const DueDateField = styled(DatePicker)`
  flex: 1 0 10%;
`;

const StatusDropdown = styled(Dropdown)`
  flex: 1 0 10%;
`;

const FormButton = styled(PrimaryButton)`
  flex: 1 0 7%;
`;

const TodoForm = ({
  id,
  title,
  description,
  submitText,
  dueDate,
  status,
  isNew,
  readOnly,
  onSubmission,
}) => {
  const isInitialMount = useRef(true);

  const [titleR, setTitle] = useState(title);
  const [descriptionR, setDescription] = useState(description);
  const [dueDateR, setDueDate] = useState(dueDate);
  const [statusR, setStatus] = useState(status);
  const [isValid, setIsValid] = useState(false);

  const useSetter = (setter) => (e) => {
    setter(e.target.value);
  };

  const onSelectDate = (newDate) => {
    setDueDate(newDate);
  };

  const payloadData = {
    id: id,
    title: titleR,
    description: descriptionR,
    dueDate: dueDateR,
    status: statusR,
  };

  useEffect(() => {
    if (readOnly) return;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    let emptyExists = [titleR, descriptionR].some(
      (current) => !current || current.length === 0
    );
    emptyExists = emptyExists || !dueDateR;
    emptyExists = emptyExists || !statusR;
    if (emptyExists) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    return () => {};
  }, [titleR, descriptionR, dueDateR, statusR, readOnly]);

  return (
    <TodoFormContainer className='todo_app_todo_form' readOnly={readOnly}>
      <TitleField
        placeholder='Title'
        value={titleR}
        onChange={useSetter(setTitle)}
        readOnly={readOnly}
        disabled={readOnly}
      />
      <DescriptionField
        placeholder='Description'
        value={descriptionR}
        onChange={useSetter(setDescription)}
        readOnly={readOnly}
        disabled={readOnly}
      />
      <DueDateField
        placeholder='Due Date'
        value={dueDateR}
        onSelectDate={onSelectDate}
        readOnly={readOnly}
        disabled={readOnly}
      />
      <StatusDropdown
        placeholder='Status'
        defaultSelectedKey={status}
        options={statusOptions}
        onChange={(e, item) => {
          setStatus(item.key);
        }}
        disabled={readOnly}
      />
      <FormButton
        text={submitText || (isNew ? 'Create' : 'Save')}
        disabled={!readOnly && !isValid}
        onClick={() => {
          onSubmission(payloadData);
        }}
      />
    </TodoFormContainer>
  );
};

const stringType = PropTypes.string;

TodoForm.propTypes = {
  title: stringType,
  description: stringType,
  submitText: stringType,
  dueDate: PropTypes.instanceOf(Date),
  status: PropTypes.oneOf(statuses),
  isNew: PropTypes.bool,
  readOnly: PropTypes.bool,
  onSubmission: PropTypes.func,
};

export default TodoForm;
