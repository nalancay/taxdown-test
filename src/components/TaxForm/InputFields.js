import { StyledInput, StyledLabel } from "./TaxForm.styles";

export const InputFields = ({ field, onChange }) => {
  const { id, label, placeholder, type, maxLength } = field;

  return (
    <>
      <StyledLabel htmlFor={id}>{`${label}: `}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />
    </>
  );
};
