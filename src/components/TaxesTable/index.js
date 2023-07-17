import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaxes } from "../../redux/actions/taxes";
import { Table } from "../../share/components/Table";

const columnsTitleHeader = ["Id", "Name", "Year", "Actions"];
const filterKeyColumnsBody = ["id", "name", "year"];

const TaxesTable = () => {
  const dispatch = useDispatch();

  const { taxes, loading, error } = useSelector((state) => ({
    taxes: state.taxes,
    loading: state.loading,
    error: state.error,
  }));

  useEffect(() => {
    dispatch(fetchTaxes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Table
      title={"Active Taxes"}
      data={taxes}
      columnsTitleHeader={columnsTitleHeader}
      filterKeyColumnsBody={filterKeyColumnsBody}
      locationPath={"/taxes/"}
    />
  );
};

export default TaxesTable;
