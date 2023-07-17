import React from "react";
import {
  CapitalizedTitle,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHeader,
  StyledTableRow,
  StylesLink,
  TableWrapper,
} from "./Table.styles";

const TableHeader = ({ titleHeader }) => (
  <StyledTableHeader>
    <StyledTableRow>
      {titleHeader.map((columnTitle, index) => (
        <StyledTableCell key={`columnHeader-${index}`}>
          {columnTitle}
        </StyledTableCell>
      ))}
    </StyledTableRow>
  </StyledTableHeader>
);

const TableBodyRows = ({ data, filterKeyColumnsBody, locationPath }) => {
  const filteredColumnsBody = data.map((column) => {
    const valueField = filterKeyColumnsBody.map(
      (keyColumn) => column[keyColumn]
    );
    return valueField;
  });

  return (
    <StyledTableBody>
      {filteredColumnsBody.map((filteredValue, index) => {
        const idField = filteredValue[0];
        const yearField = filteredValue[2];

        return (
          <StyledTableRow key={`columnsBody-${index}`}>
            {filteredValue.map((singleValue, index) => (
              <StyledTableCell key={`singleValue-${index}`}>
                {singleValue}
              </StyledTableCell>
            ))}
            {locationPath && (
              <StyledTableCell>
                <StylesLink to={`/taxes/${idField}/${yearField}`}>
                  Add Submission
                </StylesLink>
              </StyledTableCell>
            )}
          </StyledTableRow>
        );
      })}
    </StyledTableBody>
  );
};

export const Table = ({
  title,
  data,
  columnsTitleHeader,
  filterKeyColumnsBody,
  locationPath,
}) => {
  return (
    <>
      {title && <CapitalizedTitle>{title}</CapitalizedTitle>}
      <TableWrapper>
        <StyledTable>
          <TableHeader titleHeader={columnsTitleHeader} />
          <TableBodyRows
            data={data}
            filterKeyColumnsBody={filterKeyColumnsBody}
            locationPath={locationPath}
          />
        </StyledTable>
      </TableWrapper>
    </>
  );
};
