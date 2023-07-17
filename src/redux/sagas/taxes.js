import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  setTaxes,
  isLoading,
  setError,
  setTaxFormFields,
  addSubmission,
  FETCH_TAXES,
  FETCH_TAX_FORM_FIELDS,
  SUBMIT_TAX_FORM,
} from "../actions/taxes";

export function* fetchTaxesSaga() {
  try {
    yield put(isLoading(true));
    const response = yield call(axios.get, `${BACKEND_URL}/taxes`);

    yield put(setTaxes(response.data));

    yield put(isLoading(false));
  } catch (error) {
    yield put(setError(error.message));
    yield put(isLoading(false));
  }
}

function* fetchTaxFormSaga(action) {
  const taxId = action.payload;

  try {
    yield put(isLoading(true));

    const response = yield call(
      axios.get,
      `${BACKEND_URL}/taxes/${taxId}/form`
    );
    yield put(setTaxFormFields(response.data.inputFields));

    yield put(isLoading(false));
  } catch (error) {
    yield put(setError(error.message));
    yield put(isLoading(false));
  }
}

function* submitTaxFormSaga(action) {
  const { taxId, year, formValues } = action.payload;

  try {
    const response = yield call(
      axios.get,
      `${BACKEND_URL}/taxes/${taxId}/form`
    );
    const formData = response.data;
    const { inputFields } = formData;
    yield call(axios.post, `${BACKEND_URL}/taxes/${taxId}/form`, {
      inputFields,
      formValues,
    });

    yield put(addSubmission(taxId, { ...formValues, year }));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_TAXES, fetchTaxesSaga);
  yield takeEvery(FETCH_TAX_FORM_FIELDS, fetchTaxFormSaga);
  yield takeEvery(SUBMIT_TAX_FORM, submitTaxFormSaga);
}

export default rootSaga;
