import styled from 'styled-components';

const SectionContainer = styled.section`
  text-align: left;
  padding: 3em;
`;

const SectionContainerUsable = ({ children }) => {
  return (
    <SectionContainer className='todo_app_section_container'>
      {children}
    </SectionContainer>
  );
};

export default SectionContainerUsable;
