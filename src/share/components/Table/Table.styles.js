import { Link } from "react-router-dom";
import styled from "styled-components";

export const CapitalizedTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
`;

export const StyledTableHeader = styled.thead`
  background-color: #f2f2f2;
  font-weight: bold;
`;

export const StyledTableBody = styled.tbody`
  text-align: left-start;
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const StyledTableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

export const StylesLink = styled(Link)`
  color: #52be80;
  text-decoration: none;
  &:hover {
    color: #054721;
  }
`;
