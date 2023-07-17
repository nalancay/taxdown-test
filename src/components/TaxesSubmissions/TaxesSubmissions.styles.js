import styled from "styled-components";

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  margin: 1.5rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left-start;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const StyledMessageEmpty = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
`;
