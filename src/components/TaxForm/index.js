import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormFields, submitTaxForm } from "../../redux/actions/taxes";
import { InputFields } from "./InputFields";
import { isValidData } from "./TaxForm.utils";
import {
  FormTitle,
  FormWrapper,
  InputWrapper,
  StyledForm,
  SubmitButton,
} from "./TaxForm.styles";
import { ButtonGoTo } from "../../share/components/ButtonGoTo";

export const TaxForm = () => {
  const navigate = useNavigate();
  let { id: taxId, year } = useParams();
  const dispatch = useDispatch();

  const { taxFormFields, loading, error } = useSelector((state) => ({
    taxFormFields: state.taxFormFields,
    loading: state.loading,
    error: state.error,
  }));

  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    age: "",
  });

  useEffect(() => {
    dispatch(fetchFormFields(taxId));
  }, [dispatch, taxId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitTaxForm(taxId, year, formValues));
    setFormValues({});
    navigate("/");
  };

  return (
    <>
      <ButtonGoTo />
      <FormWrapper>
        <FormTitle>Add Submission</FormTitle>
        <StyledForm onSubmit={handleSubmit}>
          {taxFormFields?.map((field) => (
            <InputWrapper key={`field-${field.id}`}>
              <InputFields
                values={formValues}
                field={field}
                onChange={handleInputChange}
              />
            </InputWrapper>
          ))}
          <SubmitButton
            type="submit"
            value="Submit"
            disabled={isValidData(formValues) ? false : true}
          />
        </StyledForm>
      </FormWrapper>
    </>
  );
};
