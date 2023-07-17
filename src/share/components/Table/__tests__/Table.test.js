import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "..";
import { generateTaxes } from "../../../../test/factories/taxes";

describe("Table tests", () => {
  const TestComponent = ({
    title,
    data,
    columnsTitleHeader,
    filterKeyColumnsBody,
    locationPath,
  }) => (
    <Table
      title={title}
      data={data}
      columnsTitleHeader={columnsTitleHeader}
      filterKeyColumnsBody={filterKeyColumnsBody}
      locationPath={locationPath}
    />
  );

  test("Should show title, column names and data in the table", () => {
    const title = "Active Taxes";
    const taxes = generateTaxes();
    const columnsTitleHeader = ["Id", "Name", "Year", "Actions"];
    const filterKeyColumnsBody = ["id", "name", "year"];
    render(
      <TestComponent
        title={title}
        data={taxes}
        columnsTitleHeader={columnsTitleHeader}
        filterKeyColumnsBody={filterKeyColumnsBody}
      />
    );

    expect(screen.getByText("Active Taxes")).toBeInTheDocument();
    columnsTitleHeader.forEach((columnTitle) => screen.getByText(columnTitle));
    taxes.forEach((taxe) => screen.getByText(taxe.name));
  });
});
