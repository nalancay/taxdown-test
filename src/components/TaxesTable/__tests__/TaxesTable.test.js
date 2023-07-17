import React from "react";
import axios from "axios";
import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../../redux/reducers/taxes";
import TaxesTable from "../";
import { generateTaxes } from "../../../test/factories/taxes";
import { fetchTaxes } from "../../../redux/actions/taxes";
import { fetchTaxesSaga } from "../../../redux/sagas/taxes";

jest.mock("axios");

describe("TaxesTable tests", () => {
  const sagaMiddleware = createSagaMiddleware();

  const TestComponent = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    store.dispatch(fetchTaxes());
    return (
      <Provider store={store}>
        <TaxesTable />
      </Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show title, column names and api call for get request", async () => {
    const dataTaxes = generateTaxes();
    axios.get.mockResolvedValue({
      data: dataTaxes,
      status: 200,
      statusText: "OK",
    });

    render(<TestComponent />);
    expect(screen.getByText("Active Taxes")).toBeInTheDocument();
    expect(screen.getByText("Id")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Year")).toBeInTheDocument();

    const sagaTester = expectSaga(fetchTaxesSaga).provide([
      [call(axios.get, `http://localhost:3001/taxes`), { data: dataTaxes }],
    ]);
    await sagaTester.run();
  });
});
