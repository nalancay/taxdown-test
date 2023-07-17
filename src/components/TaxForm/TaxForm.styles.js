import styled from "styled-components";

export const FormWrapper = styled.div`
  text-align: center;
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: capitalize;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const SubmitButton = styled.input`
  width: 218px;
  padding: 10px 20px;
  background-color: #52be80;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
