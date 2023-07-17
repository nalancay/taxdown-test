import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../../redux/actions/taxes";
import {
  Container,
  FormContainer,
  InputWrapper,
  StyledInput,
  StyledLabel,
  StyledMessageEmpty,
  Title,
} from "./TaxesSubmissions.styles";
import { Table } from "../../share/components/Table";
import { ButtonGoTo } from "../../share/components/ButtonGoTo";

const columnsTitleHeader = ["Id Tax", "Name", "Surname", "Age", "Year"];
const filterKeyColumnsBody = ["taxId", "name", "surname", "age", "year"];

const TaxesSubmissions = () => {
  const dispatch = useDispatch();
  const { taxSubmissions, filters } = useSelector((state) => state);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateFilters({ [name]: value }));
  };

  const filteredTaxSubmissions = Object.entries(taxSubmissions)
    .flatMap(([taxId, submissions]) =>
      submissions.map((submission) => ({
        taxId,
        ...submission,
      }))
    )
    .filter((submission) => {
      const { name, surname, age, year } = filters;
      return (
        (!name || submission.name.toLowerCase().includes(name.toLowerCase())) &&
        (!surname ||
          submission.surname.toLowerCase().includes(surname.toLowerCase())) &&
        (!age || submission.age === age) &&
        (!year || submission.year === year)
      );
    });

  return (
    <Container>
      <ButtonGoTo />
      <Title>Filters</Title>
      <FormContainer>
        <InputWrapper>
          <StyledLabel htmlFor="year">
            <strong>Year</strong>
          </StyledLabel>
          <StyledInput
            type="number"
            id="year"
            name="year"
            value={filters.year}
            onChange={handleFilterChange}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="name">
            <strong>Name</strong>
          </StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="surname">
            <strong>Surname</strong>
          </StyledLabel>
          <StyledInput
            type="text"
            id="surname"
            name="surname"
            value={filters.surname}
            onChange={handleFilterChange}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="age">
            <strong>Age</strong>
          </StyledLabel>
          <StyledInput
            type="number"
            id="age"
            name="age"
            value={filters.age}
            onChange={handleFilterChange}
          />
        </InputWrapper>
      </FormContainer>
      {filteredTaxSubmissions.length === 0 && (
        <StyledMessageEmpty>No data to display</StyledMessageEmpty>
      )}
      {filteredTaxSubmissions.length > 0 && (
        <Table
          title={"Taxes Submissions"}
          data={filteredTaxSubmissions}
          columnsTitleHeader={columnsTitleHeader}
          filterKeyColumnsBody={filterKeyColumnsBody}
        />
      )}
    </Container>
  );
};

export default TaxesSubmissions;
